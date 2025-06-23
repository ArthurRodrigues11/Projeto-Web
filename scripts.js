document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById('formEncomenda');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const produto = document.getElementById('produto').value;
      const quantidade = document.getElementById('quantidade').value;
      const dataEntrega = document.getElementById('data_entrega').value;
      const horaEntrega = document.getElementById('hora_entrega').value;
      const observacoes = document.getElementById('observacoes').value;

      const mensagem =
        "✅ Encomenda feita com sucesso!\n\n" +
        "👤 Nome: " + nome + "\n" +
        "📧 E-mail: " + email + "\n" +
        "📞 Telefone: " + telefone + "\n" +
        "📦 Produto: " + produto + "\n" +
        "🔢 Quantidade: " + quantidade + "\n" +
        "📅 Data de Entrega: " + dataEntrega + "\n" +
        "🕒 Hora de Entrega: " + horaEntrega + "\n" +
        "📝 Observações: " + (observacoes || "Nenhuma");

      alert(mensagem);
    });
  }

  const tabela = document.querySelector("table tbody");
  if (tabela) {
    fetch("tabela.json")
      .then(response => {
        if (!response.ok) throw new Error("Erro ao carregar JSON");
        return response.json();
      })
      .then(dados => {
        dados.forEach(item => {
          const linha = document.createElement("tr");
          linha.innerHTML = `
            <td>${item.produto}</td>
            <td>${item.calorias}</td>
            <td>${item.carboidratos}</td>
            <td>${item.proteinas}</td>
            <td>${item.gorduras}</td>
            <td>${item.fibras}</td>
            <td>${item.sodio}</td>
          `;
          tabela.appendChild(linha);
        });
      })
      .catch(erro => {
        console.error("Erro ao carregar tabela JSON:", erro);
        tabela.innerHTML = `<tr><td colspan="7">Erro ao carregar dados da tabela.</td></tr>`;
      });
  }

});

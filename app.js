
const produtos = [
  { id: 1, nome: "Alfabeto Sensorial", preco: 49.90 },
  { id: 2, nome: "Jogo da Memória Inclusivo", preco: 29.90 },
  { id: 3, nome: "Cartazes de Emoções", preco: 39.90 }
];

let carrinho = [];

const produtosDiv = document.getElementById("produtos");

produtos.forEach(p => {
  const item = document.createElement("div");
  item.className = "bg-white p-4 rounded shadow";
  item.innerHTML = `
    <h2 class="text-xl font-semibold">${p.nome}</h2>
    <p class="text-green-600 font-bold">R$ ${p.preco.toFixed(2)}</p>
    <button class="mt-2 bg-blue-500 text-white p-2 rounded" onclick="adicionar(${p.id})">Adicionar</button>
  `;
  produtosDiv.appendChild(item);
});

function adicionar(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  alert(`${produto.nome} adicionado ao carrinho.`);
}

function enviarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  const lista = carrinho.map(p => `🔸 ${p.nome} - R$ ${p.preco.toFixed(2)}`).join('\n');
  const total = carrinho.reduce((soma, p) => soma + p.preco, 0).toFixed(2);
  const mensagem = encodeURIComponent(`Olá! Gostaria de fazer o seguinte pedido:\n\n${lista}\n\n💰 Total: R$ ${total}`);
  const numero = "5599999999999"; // Substitua pelo número do WhatsApp

  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

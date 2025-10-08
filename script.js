// ===================== DADOS DOS PRODUTOS =====================
const produtos = [
  {
    nome: "Apple iPhone 16 (128 GB) - Preto - Distribuidor Autorizado",
    precoAntigo: 7799,
    precoAtual: 4404.33,
    desconto: "43% OFF",
    parcelas: "21x R$ 233,03 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_928475-MLA78901058072_092024-F.webp",
    link: "https://mercadolivre.com/sec/1YrAHb8",
    estoque: 52,
    estoqueTotal: 60
  },
  {
    nome: "Samsung Galaxy A05s 128 GB Dual SIM Tela Infinita 6,7\" Cor Prata 6 GB RAM",
    precoAntigo: 1099,
    precoAtual: 629.10,
    desconto: "42% OFF",
    parcelas: "18x R$ 38,83 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_803399-MLA76762678802_062024-F.webp",
    link: "https://mercadolivre.com/sec/12qtdJ1",
    estoque: 48,
    estoqueTotal: 60
  },
  {
    nome: "Xiaomi Poco X7 Pro 5G 512GB Verde 12GB RAM 50MPX",
    precoAntigo: 3097,
    precoAtual: 2395,
    desconto: "23% OFF",
    parcelas: "21x R$ 114,05 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
    link: "https://mercadolivre.com/sec/1WZnS5g",
    estoque: 44,
    estoqueTotal: 60
  }
];

// ===================== FUNÇÃO DE RENDERIZAÇÃO =====================
const container = document.getElementById("listaProdutos");
const banner = document.getElementById("bannerOfertas");

function renderizarProdutos(lista) {
  container.innerHTML = "";
  banner.innerHTML = "";

  lista.forEach((p) => {
    let corEstoque = "text-green-600";
    let textoEstoque = `${p.estoque} unidades disponíveis`;
    let estiloFundo = "";

    if (p.estoque < 25) {
      corEstoque = "text-white font-bold animate-pulse";
      textoEstoque = `🔥 Restam apenas ${p.estoque} unidades!`;
      estiloFundo = "bg-gradient-to-r from-red-600 to-red-500 text-white px-1 py-0.5 rounded-md mt-1 shadow-md";
    } else if (p.estoque < 50) {
      corEstoque = "text-black font-semibold";
      textoEstoque = `⚠️ Apenas ${p.estoque} unidades em estoque`;
      estiloFundo = "bg-gradient-to-r from-yellow-300 to-yellow-400 text-black px-1 py-0.5 rounded-md mt-1 shadow-sm";
    } else {
      corEstoque = "text-green-600 font-semibold";
      textoEstoque = `${p.estoque} unidades disponíveis`;
      estiloFundo = "bg-gradient-to-r from-green-200 to-green-300 text-green-800 px-1 py-0.5 rounded-md mt-1";
    }

    // CARD PRINCIPAL
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer flex-shrink-0 w-36 sm:w-40 flex flex-col items-center p-2 relative snap-start";
    card.innerHTML = `
      <div class="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-md">Frete Grátis</div>
      <img src="${p.imagem}" alt="${p.nome}" class="w-full h-28 object-cover rounded-md mb-1">
      <h2 class="text-[11px] font-semibold text-center line-clamp-2 h-8">${p.nome}</h2>
      <p class="line-through text-black font-semibold text-[11px]">R$ ${p.precoAntigo.toFixed(2)}</p>
      <p class="text-green-700 font-bold text-sm">R$ ${p.precoAtual.toFixed(2)}</p>
      <span class="text-[10px] text-green-600 font-medium">${p.desconto}</span>
      <p class="text-[10px] text-center mt-1 ${estiloFundo} ${corEstoque}">${textoEstoque}</p>
    `;
    card.addEventListener("click", () => abrirModal(p, textoEstoque, estiloFundo, corEstoque));
    container.appendChild(card);

    // CARD DO BANNER (reaproveitado)
    const destaque = card.cloneNode(true);
    destaque.classList.add("w-40", "h-40");
    banner.appendChild(destaque);
  });
}

// ===================== FILTROS =====================
function aplicarFiltros() {
  const termo = document.getElementById("buscaInput").value.toLowerCase();
  const marca = document.getElementById("filtroMarca").value;
  const faixa = document.getElementById("filtroPreco").value;

  const filtrados = produtos.filter((p) => {
    const nomeOk = p.nome.toLowerCase().includes(termo);
    const marcaOk = marca ? p.nome.toLowerCase().includes(marca.toLowerCase()) : true;
    let precoOk = true;

    if (faixa === "1") precoOk = p.precoAtual <= 2000;
    else if (faixa === "2") precoOk = p.precoAtual > 2000 && p.precoAtual <= 4000;
    else if (faixa === "3") precoOk = p.precoAtual > 4000;

    return nomeOk && marcaOk && precoOk;
  });

  renderizarProdutos(filtrados);
}

document.getElementById("buscaInput").addEventListener("input", aplicarFiltros);
document.getElementById("filtroMarca").addEventListener("change", aplicarFiltros);
document.getElementById("filtroPreco").addEventListener("change", aplicarFiltros);

// ===================== MODAL =====================
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalBox = document.getElementById("modalBox");

function abrirModal(produto, textoEstoque, estiloFundo, corEstoque) {
  document.getElementById("modalImage").src = produto.imagem;
  document.getElementById("modalTitle").textContent = produto.nome;
  document.getElementById("modalOldPrice").textContent = `R$ ${produto.precoAntigo.toFixed(2)}`;
  document.getElementById("modalDiscount").textContent = produto.desconto;
  document.getElementById("modalPrice").textContent = `R$ ${produto.precoAtual.toFixed(2)}`;
  document.getElementById("modalParcelas").textContent = produto.parcelas;
  document.getElementById("modalLink").href = produto.link;

  let estoqueModal = document.getElementById("estoqueModal");
  if (!estoqueModal) {
    estoqueModal = document.createElement("div");
    estoqueModal.id = "estoqueModal";
    modalBox.querySelector("div.flex-col").appendChild(estoqueModal);
  }

  estoqueModal.innerHTML = `<p class="text-sm ${estiloFundo} ${corEstoque}">${textoEstoque}</p>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);
}

closeModal.addEventListener("click", fecharModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});

function fecharModal() {
  modalBox.classList.add("scale-95", "opacity-0");
  modalBox.classList.remove("scale-100", "opacity-100");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 200);
}

// ===================== CONTADOR REGRESSIVO =====================
function iniciarContador() {
  let tempoRestante = 3 * 60 * 60; // 3 horas
  const contador = document.getElementById("contador");

  setInterval(() => {
    const horas = String(Math.floor(tempoRestante / 3600)).padStart(2, "0");
    const minutos = String(Math.floor((tempoRestante % 3600) / 60)).padStart(2, "0");
    const segundos = String(tempoRestante % 60).padStart(2, "0");
    contador.textContent = `${horas}:${minutos}:${segundos}`;
    if (tempoRestante > 0) tempoRestante--;
    else tempoRestante = 3 * 60 * 60; // reinicia
  }, 1000);
}

// ===================== ANIMAÇÃO BANNER =====================
function animarBanner() {
  const lista = document.getElementById("bannerOfertas");
  let scrollPos = 0;
  setInterval(() => {
    scrollPos += 1;
    if (scrollPos >= lista.scrollWidth - lista.clientWidth) scrollPos = 0;
    lista.scrollLeft = scrollPos;
  }, 30);
}

// ===================== INICIALIZAÇÃO =====================
renderizarProdutos(produtos);
iniciarContador();
animarBanner();

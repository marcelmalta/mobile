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
  },
  {
    nome: "Samsung Tab A9 64GB 4GB RAM Enterprise Edition Tela 8.7” X115 4G Grafite",
    precoAntigo: 1334.67,
    precoAtual: 726.75,
    desconto: "45% OFF",
    parcelas: "18x R$ 47,50 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_677431-MLU77323209031_062024-F.webp",
    link: "https://mercadolivre.com/sec/2b4C3vU",
    estoque: 46,
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
    // Define selo de estoque visual no topo da imagem
    let seloEstoque = "";
    if (p.estoque < 25) {
      seloEstoque = `<div class='absolute top-1 right-1 bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded-md animate-pulse'>🔥 Restam ${p.estoque}</div>`;
    } else if (p.estoque < 50) {
      seloEstoque = `<div class='absolute top-1 right-1 bg-yellow-400 text-black text-[9px] px-1.5 py-0.5 rounded-md'>⚠️ ${p.estoque} unid</div>`;
    } else {
      seloEstoque = `<div class='absolute top-1 right-1 bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-md'>${p.estoque} unid</div>`;
    }

    // CARD PRINCIPAL (menor e otimizado para mobile)
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 relative snap-start";
    card.innerHTML = `
      <div class="absolute top-1 left-1 bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-md">Frete Grátis</div>
      ${seloEstoque}
      <img src="${p.imagem}" alt="${p.nome}" class="w-full h-24 object-cover rounded-md mb-1">
      <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8">${p.nome}</h2>
      <p class="line-through text-black font-semibold text-[10px]">R$ ${p.precoAntigo.toFixed(2)}</p>
      <p class="text-green-700 font-bold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
      <span class="text-[9px] text-green-600 font-medium">${p.desconto}</span>
    `;
    card.addEventListener("click", () => abrirModal(p));
    container.appendChild(card);

    // CARD DO BANNER (versão reduzida)
    const destaque = card.cloneNode(true);
    destaque.classList.add("w-28");
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

function abrirModal(produto) {
  document.getElementById("modalImage").src = produto.imagem;
  document.getElementById("modalTitle").textContent = produto.nome;
  document.getElementById("modalOldPrice").textContent = `R$ ${produto.precoAntigo.toFixed(2)}`;
  document.getElementById("modalDiscount").textContent = produto.desconto;
  document.getElementById("modalPrice").textContent = `R$ ${produto.precoAtual.toFixed(2)}`;
  document.getElementById("modalParcelas").textContent = produto.parcelas;
  document.getElementById("modalLink").href = produto.link;

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

  if (!contador) return; // proteção caso elemento não exista

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
  if (!lista) return;
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

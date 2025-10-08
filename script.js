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
}
,
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
}
,
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
,
  {
    nome: "Motorola Moto G84 256GB",
    precoAntigo: 2499,
    precoAtual: 1699,
    desconto: "32% OFF",
    parcelas: "10x R$ 169,90 sem juros",
    imagem: "img/motoG84.jpg",
    link: "https://www.mercadolivre.com.br/",
    estoque: 47,
    estoqueTotal: 60
  },
  {
    nome: "iPhone 15 (128 GB)",
    precoAntigo: 6999,
    precoAtual: 4999,
    desconto: "29% OFF",
    parcelas: "12x R$ 416,58 sem juros",
    imagem: "img/iphone15.jpg",
    link: "https://www.mercadolivre.com.br/",
    estoque: 15,
    estoqueTotal: 60
  },
  {
    nome: "Realme 12 Pro+ 5G",
    precoAntigo: 2699,
    precoAtual: 1899,
    desconto: "30% OFF",
    parcelas: "10x R$ 189,90 sem juros",
    imagem: "img/realme12.jpg",
    link: "https://www.mercadolivre.com.br/",
    estoque: 55,
    estoqueTotal: 60
  },
  {
    nome: "Samsung Galaxy A35 128GB",
    precoAntigo: 2199,
    precoAtual: 1499,
    desconto: "32% OFF",
    parcelas: "10x R$ 149,90 sem juros",
    imagem: "img/galaxyA35.jpg",
    link: "https://www.mercadolivre.com.br/",
    estoque: 29,
    estoqueTotal: 60
  },
  {
    nome: "POCO X6 Pro 5G",
    precoAntigo: 2599,
    precoAtual: 1799,
    desconto: "31% OFF",
    parcelas: "10x R$ 179,90 sem juros",
    imagem: "img/pocoX6.jpg",
    link: "https://www.mercadolivre.com.br/",
    estoque: 9,
    estoqueTotal: 60
  }
];

// ===================== FUNÇÕES DE RENDERIZAÇÃO =====================
const container = document.querySelector("main");

function renderizarProdutos(lista) {
  container.innerHTML = "";

  lista.forEach((p) => {
    const percentual = (p.estoque / p.estoqueTotal) * 100;

    let corEstoque = "text-green-600";
    let textoEstoque = `${p.estoque} unidades disponíveis`;
    let estiloFundo = "";
    let corBarra = "bg-green-500";

    // Define cores conforme o estoque
    if (p.estoque < 25) {
      corEstoque = "text-white font-bold animate-pulse";
      textoEstoque = `🔥 Restam apenas ${p.estoque} unidades!`;
      estiloFundo = "bg-gradient-to-r from-red-600 to-red-500 text-white px-2 py-1 rounded-md mt-1 shadow-md";
      corBarra = "bg-red-600";
    } else if (p.estoque < 50) {
      corEstoque = "text-black font-semibold";
      textoEstoque = `⚠️ Apenas ${p.estoque} unidades em estoque`;
      estiloFundo = "bg-gradient-to-r from-yellow-300 to-yellow-400 text-black px-2 py-1 rounded-md mt-1 shadow-sm";
      corBarra = "bg-yellow-400";
    } else {
      corEstoque = "text-green-600 font-semibold";
      textoEstoque = `${p.estoque} unidades disponíveis`;
      estiloFundo = "bg-gradient-to-r from-green-200 to-green-300 text-green-800 px-2 py-1 rounded-md mt-1";
      corBarra = "bg-green-500";
    }

    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer flex flex-col items-center p-3 relative";
    card.innerHTML = `
      <div class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">Frete Grátis</div>
      <img src="${p.imagem}" alt="${p.nome}" class="w-full rounded-lg mb-2">
      <h2 class="text-sm font-semibold text-center">${p.nome}</h2>
      <p class="text-gray-500 line-through text-xs">R$ ${p.precoAntigo.toFixed(2)}</p>
      <p class="text-green-700 font-bold text-lg">R$ ${p.precoAtual.toFixed(2)}</p>
      <span class="text-xs text-green-600 font-medium">${p.desconto}</span>
      <p class="text-[12px] ${estiloFundo} ${corEstoque}">${textoEstoque}</p>

      <!-- Barra de progresso -->
      <div class="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <div class="${corBarra} h-2 rounded-full transition-all duration-700" style="width: ${percentual}%;"></div>
      </div>
    `;

    card.addEventListener("click", () =>
      abrirModal(p, textoEstoque, estiloFundo, corEstoque, percentual, corBarra)
    );
    container.appendChild(card);
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

function abrirModal(produto, textoEstoque, estiloFundo, corEstoque, percentual, corBarra) {
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

  estoqueModal.innerHTML = `
    <p class="text-sm ${estiloFundo} ${corEstoque}">${textoEstoque}</p>
    <div class="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
      <div class="${corBarra} h-2 rounded-full transition-all duration-700" style="width: ${percentual}%;"></div>
    </div>
  `;

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

// ===================== INICIALIZAÇÃO =====================
renderizarProdutos(produtos);

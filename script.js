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
  },
  {
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
},
{
  nome: "Samsung Galaxy A15 4G 128GB 4GB RAM - Azul-escuro",
  precoAntigo: 1299.00,
  precoAtual: 809.10,
  desconto: "37% OFF",
  parcelas: "18x R$ 49,94 sem juros",
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_729306-MLA85311252159_052025-R.webp",
  link: "https://mercadolivre.com/sec/1woJsmB",
  estoque: 50,
  estoqueTotal: 60
}
];

// ===================== FUNÇÃO DE RENDERIZAÇÃO =====================
const container = document.getElementById("listaProdutos");
const banner = document.getElementById("bannerOfertas");

function renderizarProdutos(lista) {
  container.innerHTML = "";
  banner.innerHTML = "";

  lista.forEach((p, index) => {
    // === SELOS (estoque) ===
    let seloEstoque = "";
    if (p.estoque < 25) {
      seloEstoque = `<div class='bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded-md animate-pulse'>🔥 Restam ${p.estoque}</div>`;
    } else if (p.estoque < 50) {
      seloEstoque = `<div class='bg-yellow-400 text-black text-[9px] px-1.5 py-0.5 rounded-md'>⚠️ ${p.estoque} unid</div>`;
    } else {
      seloEstoque = `<div class='bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-md'>${p.estoque} unid</div>`;
    }

    // === CARD PRINCIPAL (com hover reveal) ===
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 relative snap-start group overflow-hidden";

    card.innerHTML = `
      <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-20 overflow-hidden mb-1 relative">
        <img src="${p.imagem}" alt="${p.nome}" 
             class="max-h-20 object-contain rounded-md transition-transform duration-300 group-hover:scale-110">
        <div class="absolute top-0 left-0 right-0 p-1 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-md">Frete Grátis</div>
          ${seloEstoque}
        </div>
      </div>
      <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8">${p.nome}</h2>
      <p class="line-through text-black font-semibold text-[10px]">R$ ${p.precoAntigo.toFixed(2)}</p>
      <p class="text-green-700 font-bold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
      <span class="text-[9px] text-green-600 font-medium">${p.desconto}</span>
    `;

    card.addEventListener("click", () => abrirModal(p));
    container.appendChild(card);

    // === CARD DO BANNER (agora também clicável e com neon) ===
    const destaque = card.cloneNode(true);
    destaque.classList.add(
      "w-28",
      "relative",
      "animate-[pulse_2s_infinite]",
      "hover:scale-[1.05]",
      "transition-transform"
    );

    // Adiciona brilho neon alternado
    const img = destaque.querySelector("img");
    const neonColor = index % 2 === 0 ? "shadow-[0_0_12px_#22d3ee]" : "shadow-[0_0_12px_#22c55e]";
    img.classList.add(neonColor, "rounded-md");

    // Corrige overlay para também aparecer no hover do banner
    const overlay = destaque.querySelector("div.absolute");
    overlay.classList.add("opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300");

    // Torna clicável
    destaque.addEventListener("click", () => abrirModal(p));

    banner.appendChild(destaque);
  });
}

// ===================== FILTROS =====================
function aplicarFiltros() {
  const termo = document.getElementById("buscaInput").value.toLowerCase();
  const marca = document.getElementById("filtroMarca").value;
  const faixa = document.getElementById("filtroPreco").value;
  const estado = document.getElementById("filtroEstado").value;
  const cidade = document.getElementById("filtroCidade").value;

  const filtrados = produtos.filter((p) => {
    const nomeOk = p.nome.toLowerCase().includes(termo);
    const marcaOk = marca ? p.nome.toLowerCase().includes(marca.toLowerCase()) : true;

    let precoOk = true;
    if (faixa === "1") precoOk = p.precoAtual <= 2000;
    else if (faixa === "2") precoOk = p.precoAtual > 2000 && p.precoAtual <= 4000;
    else if (faixa === "3") precoOk = p.precoAtual > 4000;

    const estadoOk = estado ? p.estado === estado : true;
    const cidadeOk = cidade ? p.cidade === cidade : true;

    return nomeOk && marcaOk && precoOk && estadoOk && cidadeOk;
  });

  renderizarProdutos(filtrados);
  atualizarTituloLocalizacao(estado, cidade);
}

// ===================== GERAR FILTROS DE LOCALIZAÇÃO =====================
function gerarFiltrosDeLocalizacao() {
  const filtroEstado = document.getElementById("filtroEstado");
  const filtroCidade = document.getElementById("filtroCidade");

  // limpar selects
  filtroEstado.innerHTML = '<option value="">Todos os estados</option>';
  filtroCidade.innerHTML = '<option value="">Todas as cidades</option>';

  // gerar lista única de estados dos produtos
  const estadosUnicos = [...new Set(produtos.map((p) => p.estado).filter(Boolean))].sort();

  // preencher estados
  estadosUnicos.forEach((estado) => {
    const opt = document.createElement("option");
    opt.value = estado;
    opt.textContent = estado;
    filtroEstado.appendChild(opt);
  });

  // quando mudar estado → gerar cidades
  filtroEstado.addEventListener("change", () => {
    const estadoSel = filtroEstado.value;
    filtroCidade.innerHTML = '<option value="">Todas as cidades</option>';

    if (estadoSel) {
      const cidades = [
        ...new Set(
          produtos
            .filter((p) => p.estado === estadoSel)
            .map((p) => p.cidade)
            .filter(Boolean)
        ),
      ].sort();

      cidades.forEach((cidade) => {
        const opt = document.createElement("option");
        opt.value = cidade;
        opt.textContent = cidade;
        filtroCidade.appendChild(opt);
      });
    }

    aplicarFiltros();
  });
}

// ===================== TÍTULO DINÂMICO =====================
function atualizarTituloLocalizacao(estado, cidade) {
  const barraTitulo = document.querySelector(
    ".bg-gradient-to-r.from-emerald-600.to-emerald-400"
  );

  if (!barraTitulo) return;

  if (estado && cidade) {
    barraTitulo.textContent = `📍 Anúncios em ${estado} – ${cidade}`;
  } else if (estado) {
    barraTitulo.textContent = `📍 Anúncios em ${estado}`;
  } else {
    barraTitulo.textContent = "📍 Anúncios da sua cidade";
  }
}

// ===================== EVENTOS =====================
document.getElementById("buscaInput").addEventListener("input", aplicarFiltros);
document.getElementById("filtroMarca").addEventListener("change", aplicarFiltros);
document.getElementById("filtroPreco").addEventListener("change", aplicarFiltros);
document.getElementById("filtroCidade").addEventListener("change", aplicarFiltros);

// ===================== INICIALIZAÇÃO =====================
window.addEventListener("DOMContentLoaded", () => {
  gerarFiltrosDeLocalizacao();
  atualizarTituloLocalizacao(); // inicia com título padrão
});


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

  if (!contador) return;

  setInterval(() => {
    const horas = String(Math.floor(tempoRestante / 3600)).padStart(2, "0");
    const minutos = String(Math.floor((tempoRestante % 3600) / 60)).padStart(2, "0");
    const segundos = String(tempoRestante % 60).padStart(2, "0");
    contador.textContent = `${horas}:${minutos}:${segundos}`;
    if (tempoRestante > 0) tempoRestante--;
    else tempoRestante = 3 * 60 * 60;
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

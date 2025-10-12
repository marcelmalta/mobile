// ===================== DADOS DOS PRODUTOS =====================
const produtos = [
  // -------- MERCADO LIVRE --------
  {
    nome: "Apple iPhone 16 (128 GB) - Preto - Distribuidor Autorizado",
    precoAntigo: 7799,
    precoAtual: 4404.33,
    desconto: "43% OFF",
    parcelas: "21x R$ 233,03 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_928475-MLA78901058072_092024-F.webp",
    link: "https://mercadolivre.com/sec/1YrAHb8",
    tipo: "mercadolivre",
    estoque: 52,
  },
  {
    nome: "Samsung Galaxy A05s 128 GB Dual SIM Tela Infinita 6,7\" Cor Prata 6 GB RAM",
    precoAntigo: 1099,
    precoAtual: 629.1,
    desconto: "42% OFF",
    parcelas: "18x R$ 38,83 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_803399-MLA76762678802_062024-F.webp",
    link: "https://mercadolivre.com/sec/12qtdJ1",
    tipo: "mercadolivre",
    estoque: 48,
  },
  {
    nome: "Xiaomi Poco X7 Pro 5G 512GB Verde 12GB RAM 50MPX",
    precoAntigo: 3097,
    precoAtual: 2395,
    desconto: "23% OFF",
    parcelas: "21x R$ 114,05 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
    link: "https://mercadolivre.com/sec/1WZnS5g",
    tipo: "mercadolivre",
    estoque: 44,
  },

  // -------- USUÁRIOS --------
  {
    nome: "iPhone 13 128GB - usado, com nota fiscal",
    precoAtual: 2950,
    imagem: "https://img.olx.com.br/images/59/593530097787261.webp",
    tipo: "usuario",
    estado: "AL",
    cidade: "Maceió",
    condicao: "Usado",
    notaFiscal: "Sim",
    entrega: "Retirada e envio por correio",
    pagamento: ["Pix", "Dinheiro"],
    descricao: "Aparelho em ótimo estado, sem riscos. Bateria 90%. Acompanha nota e caixa original.",
    contato: "5582981234567",
  },
  {
    nome: "Samsung A54 5G 256GB - novo lacrado",
    precoAtual: 2100,
    imagem: "https://img.olx.com.br/images/30/304592818915746.webp",
    tipo: "usuario",
    estado: "PE",
    cidade: "Recife",
    condicao: "Novo",
    notaFiscal: "Sim",
    entrega: "Retirada em mãos ou envio",
    pagamento: ["Pix", "Cartão", "Dinheiro"],
    descricao: "Novo, lacrado, comprado na Samsung Store. Garantia de 12 meses.",
    contato: "5581998765432",
  },
];

// ===================== HELPERS & ELEMENTOS =====================
const container = document.getElementById("listaProdutos");
const banner = document.getElementById("bannerOfertas");
const btnBuscaFlutuante = document.getElementById("btnBuscaFlutuante");

// Pequeno helper para inserir depois de um nó
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// ===================== RENDER MERCADO LIVRE =====================
function renderizarMercadoLivre(lista) {
  if (!banner) return;
  banner.innerHTML = "";

  lista
    .filter((p) => p.tipo === "mercadolivre")
    .forEach((p) => {
      const destaque = document.createElement("div");
      destaque.className =
        "bg-white rounded-lg border border-black shadow-md flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 relative snap-start group overflow-hidden cursor-pointer transition-transform duration-300";

      destaque.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-20 overflow-hidden mb-1 relative">
          <img src="${p.imagem}" alt="${p.nome}" class="max-h-20 object-contain rounded-md transition-transform duration-300">
          <div class="absolute top-0 left-0 bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-br-md shadow-sm">Frete Grátis</div>
        </div>
        <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8">${p.nome}</h2>
        <p class="line-through text-black font-semibold text-[10px]">${p.precoAntigo ? `R$ ${p.precoAntigo.toFixed(2)}` : ""}</p>
        <p class="text-green-700 font-bold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[9px] text-green-600 font-medium">${p.desconto || ""}</span>
      `;

      destaque.addEventListener("mouseenter", () => (destaque.style.transform = "scale(1.05)"));
      destaque.addEventListener("mouseleave", () => (destaque.style.transform = "scale(1)"));
      destaque.addEventListener("click", () => abrirModal(p));

      banner.appendChild(destaque);
    });
}

// ===================== RENDER USUÁRIOS =====================
function renderizarProdutosUsuarios(lista) {
  if (!container) return;
  container.innerHTML = "";

  lista
    .filter((p) => p.tipo === "usuario")
    .forEach((p) => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-md border border-black shadow-md hover:shadow-lg transition cursor-pointer flex-shrink-0 w-[22%] sm:w-28 flex flex-col items-center p-[1px] relative snap-start overflow-hidden glow-user";

      const nomeLimpo = p.nome.replace(/-.*$/g, "").trim();
      const selo =
        p.condicao === "Novo" ? "bg-green-500 text-white" : "bg-yellow-400 text-black";

      card.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-12 overflow-hidden mb-[1px] relative">
          <img src="${p.imagem}" alt="${nomeLimpo}" class="max-h-12 object-contain rounded-md transition-transform duration-300">
          <div class="absolute top-0 left-0 ${selo} text-[6.5px] px-[2px] py-[1px] rounded-br-md">${p.condicao || ""}</div>
        </div>
        <h2 class="text-[8.5px] font-semibold text-center leading-tight text-gray-800 h-[25px]">${nomeLimpo}</h2>
        <p class="text-green-700 font-extrabold text-[10px] mt-0">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[9px] font-bold text-emerald-700 mt-0.5">${p.cidade || ""}</span>
      `;

      card.addEventListener("click", () => abrirUserModal(p));
      container.appendChild(card);
    });
}

// ===================== MODAL MERCADO LIVRE =====================
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalBox = document.getElementById("modalBox");

function abrirModal(produto) {
  if (!modal || !modalBox) return;
  const img = document.getElementById("modalImage");
  const title = document.getElementById("modalTitle");
  const oldPrice = document.getElementById("modalOldPrice");
  const discount = document.getElementById("modalDiscount");
  const price = document.getElementById("modalPrice");
  const parcelas = document.getElementById("modalParcelas");
  const link = document.getElementById("modalLink");

  if (img) img.src = produto.imagem;
  if (title) title.textContent = produto.nome;
  if (oldPrice) oldPrice.textContent = produto.precoAntigo ? `R$ ${produto.precoAntigo.toFixed(2)}` : "";
  if (discount) discount.textContent = produto.desconto || "";
  if (price) price.textContent = `R$ ${produto.precoAtual.toFixed(2)}`;
  if (parcelas) parcelas.textContent = produto.parcelas || "";
  if (link) link.href = produto.link || "#";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);
}

function fecharModal() {
  if (!modal || !modalBox) return;
  modalBox.classList.add("scale-95", "opacity-0");
  modalBox.classList.remove("scale-100", "opacity-100");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 200);
}
closeModal?.addEventListener("click", fecharModal);
modal?.addEventListener("click", (e) => e.target === modal && fecharModal());

// ===================== MODAL USUÁRIO (WhatsApp) =====================
function abrirUserModal(p) {
  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3";
  overlay.innerHTML = `
    <div class="bg-white rounded-2xl w-full max-w-md p-5 relative shadow-2xl overflow-y-auto max-h-[90vh]">
      <button class="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold">✖</button>
      <div class="flex flex-col items-center gap-3">
        <img src="${p.imagem}" class="w-40 h-40 object-contain rounded-lg shadow-md border" alt="${p.nome}">
        <h2 class="text-lg font-bold text-center">${p.nome}</h2>
        <p class="text-green-700 font-extrabold text-2xl">R$ ${p.precoAtual.toFixed(2)}</p>
        <div class="flex flex-wrap justify-center gap-2 mt-2">
          <span class="text-[12px] bg-gray-100 px-2 py-1 rounded-md">📍 ${p.cidade || ""} - ${p.estado || ""}</span>
          <span class="text-[12px] bg-emerald-100 px-2 py-1 rounded-md">${p.condicao || ""}</span>
        </div>
        <div class="w-full mt-3 text-sm text-gray-700 space-y-1">
          ${p.entrega ? `<p><strong>📦 Entrega:</strong> ${p.entrega}</p>` : ""}
          ${p.pagamento ? `<p><strong>💳 Pagamento:</strong> ${Array.isArray(p.pagamento) ? p.pagamento.join(", ") : p.pagamento}</p>` : ""}
        </div>
        ${p.descricao ? `<div class="mt-3 text-gray-600 text-[14px] bg-gray-50 border rounded-md p-3 w-full"><strong>📝 Descrição:</strong><br>${p.descricao}</div>` : ""}
        <a href="https://wa.me/${p.contato || ""}" target="_blank"
          class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-full shadow-md flex items-center gap-2">
          💬 Falar com o vendedor no WhatsApp
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector("button").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", (e) => e.target === overlay && overlay.remove());
}

// ===================== BARRA DE FILTROS (INJETADA) =====================
function criarBarraFiltros() {
  try {
    const bannerSection = banner?.parentElement; // a <section> com overflow-x
    if (!bannerSection) return;

    // Evita duplicar se já existe
    if (document.getElementById("barraFiltros")) return;

    const barra = document.createElement("div");
    barra.id = "barraFiltros";
    barra.className = "hidden bg-white border border-gray-200 rounded-md mx-2 mt-2 p-2 flex flex-wrap items-center justify-center gap-2 shadow-md max-w-6xl mx-auto";

    barra.innerHTML = `
      <input id="buscaInput" type="text" placeholder="Buscar modelo ou marca..." 
        class="border rounded-md px-2 py-1 text-sm w-[150px] focus:ring-1 focus:ring-emerald-400 outline-none" />
      <select id="filtroMarca" class="border rounded-md px-2 py-1 text-sm bg-gray-50">
        <option value="">Marca</option><option>Apple</option><option>Samsung</option><option>Xiaomi</option><option>Motorola</option><option>Realme</option><option>POCO</option>
      </select>
      <select id="filtroEstado" class="border rounded-md px-2 py-1 text-sm bg-gray-50">
        <option value="">Estado</option>
      </select>
      <select id="filtroPreco" class="border rounded-md px-2 py-1 text-sm bg-gray-50">
        <option value="">Preço</option><option value="1">Até R$ 2000</option><option value="2">R$ 2000–R$ 4000</option><option value="3">+ R$ 4000</option>
      </select>
      <button id="btnLimpar" class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md px-2 py-1 text-xs font-semibold text-gray-700 transition">✖ Limpar</button>
    `;

    insertAfter(barra, bannerSection); // coloca a barra logo após a seção do banner

    // Preenche UFs dinamicamente a partir dos anúncios de usuários
    const ufSet = Array.from(new Set(produtos.filter(p => p.tipo === "usuario" && p.estado).map(p => p.estado)));
    const ufSel = barra.querySelector("#filtroEstado");
    ufSet.forEach(uf => {
      const opt = document.createElement("option");
      opt.value = uf;
      opt.textContent = uf;
      ufSel.appendChild(opt);
    });

    // Liga o botão flutuante preto para abrir/fechar a barra
    if (btnBuscaFlutuante) {
      btnBuscaFlutuante.addEventListener("click", () => {
        barra.classList.toggle("hidden");
      });
    }

    // Liga os filtros
    const buscaInput = barra.querySelector("#buscaInput");
    const filtroMarca = barra.querySelector("#filtroMarca");
    const filtroEstado = barra.querySelector("#filtroEstado");
    const filtroPreco = barra.querySelector("#filtroPreco");
    const btnLimpar = barra.querySelector("#btnLimpar");

    function aplicarFiltros() {
      const busca = (buscaInput.value || "").toLowerCase();
      const marca = filtroMarca.value;
      const estado = filtroEstado.value;
      const preco = filtroPreco.value;

      const filtrados = produtos.filter(p => {
        // Texto/Marca
        if (busca && !p.nome.toLowerCase().includes(busca)) return false;
        if (marca && !p.nome.toLowerCase().includes(marca.toLowerCase())) return false;
        // UF (só faz sentido para tipo usuario)
        if (estado && p.tipo === "usuario" && p.estado !== estado) return false;
        // Preço
        if (preco === "1" && p.precoAtual > 2000) return false;
        if (preco === "2" && (p.precoAtual < 2000 || p.precoAtual > 4000)) return false;
        if (preco === "3" && p.precoAtual < 4000) return false;
        return true;
      });

      renderizarMercadoLivre(filtrados);
      renderizarProdutosUsuarios(filtrados);
    }

    [buscaInput, filtroMarca, filtroEstado, filtroPreco].forEach(el => {
      el.addEventListener("input", aplicarFiltros);
    });

    btnLimpar.addEventListener("click", () => {
      buscaInput.value = "";
      filtroMarca.value = "";
      filtroEstado.value = "";
      filtroPreco.value = "";
      aplicarFiltros();
    });

  } catch (e) {
    console.error("Erro ao criar barra de filtros:", e);
  }
}

// ===================== ANIMAÇÃO DO CARROSSEL MERCADO LIVRE =====================
let _bannerLoopStarted = false;
function animarBanner() {
  if (_bannerLoopStarted) return;
  const inner = document.getElementById("bannerOfertas");
  const scroller = inner?.parentElement;
  if (!scroller || inner.scrollWidth <= scroller.clientWidth) return;

  let pos = 0, dir = 1, running = true;
  const pause = () => (running = false);
  const resume = () => (running = true);
  scroller.addEventListener("pointerenter", pause);
  scroller.addEventListener("pointerleave", resume);

  function tick() {
    if (running) {
      pos += 0.6 * dir;
      scroller.scrollLeft = pos;
      const max = inner.scrollWidth - scroller.clientWidth;
      if (pos >= max - 1) dir = -1;
      else if (pos <= 0) dir = 1;
    }
    requestAnimationFrame(tick);
  }
  _bannerLoopStarted = true;
  requestAnimationFrame(tick);
}

// ===================== INICIALIZAÇÃO =====================
window.addEventListener("DOMContentLoaded", () => {
  // Render inicial
  renderizarMercadoLivre(produtos);
  renderizarProdutosUsuarios(produtos);

  // Carrossel
  animarBanner();

  // Cria a barra de filtros compacta (sem alterar HTML)
  criarBarraFiltros();
});

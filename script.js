// ===================== DADOS DOS PRODUTOS =====================
const produtos = [
  // ======= MERCADO LIVRE =======
  {
    nome: "Apple iPhone 16 (128 GB) - Preto - Distribuidor Autorizado",
    precoAntigo: 7799,
    precoAtual: 4404.33,
    desconto: "43% OFF",
    parcelas: "21x R$ 233,03 sem juros",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_928475-MLA78901058072_092024-F.webp",
    link: "https://mercadolivre.com/sec/1YrAHb8",
    tipo: "mercadolivre",
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
  },

  // ======= USUÁRIOS =======
  {
    nome: "iPhone 13 128GB - usado, com nota fiscal",
    precoAtual: 2950,
    imagem: "https://img.olx.com.br/images/59/593530097787261.webp",
    tipo: "usuario",
    estado: "AL",
    cidade: "Maceió",
    condicao: "Usado",
    descricao: "Aparelho em ótimo estado, sem riscos. Bateria 90%.",
    contato: "5582981234567",
    dataPublicacao: "2025-10-09",
  },
  {
    nome: "Samsung A54 5G 256GB - novo lacrado",
    precoAtual: 2100,
    imagem: "https://img.olx.com.br/images/30/304592818915746.webp",
    tipo: "usuario",
    estado: "PE",
    cidade: "Recife",
    condicao: "Novo",
    descricao: "Novo, lacrado, comprado na Samsung Store.",
    contato: "5581998765432",
    dataPublicacao: "2025-10-10",
  },
];

// ===================== ELEMENTOS =====================
const container = document.getElementById("listaProdutos");
const banner = document.getElementById("bannerOfertas");
const btnBusca = document.getElementById("btnBuscaFlutuante");

// ===================== RENDER MERCADO LIVRE =====================
function renderizarMercadoLivre(lista) {
  banner.innerHTML = "";
  lista
    .filter((p) => p.tipo === "mercadolivre")
    .forEach((p) => {
      const destaque = document.createElement("div");
      destaque.className =
        "bg-white rounded-lg border border-black shadow-md flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 relative snap-start group overflow-hidden cursor-pointer transition-transform duration-300 card-mercadolivre";

      destaque.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-20 overflow-hidden mb-1 relative">
          <img src="${p.imagem}" alt="${p.nome}" class="max-h-20 object-contain rounded-md transition-transform duration-300 group-hover:scale-105">
          <div class="absolute top-0 left-0 bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-br-md shadow-sm">Frete Grátis</div>
        </div>
        <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8 text-gray-800">${p.nome}</h2>
        <p class="line-through text-gray-500 text-[9px]">R$ ${p.precoAntigo?.toFixed(2) || ""}</p>
        <p class="text-green-700 font-extrabold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[9px] text-green-600 font-medium">${p.desconto}</span>
      `;

      destaque.addEventListener("click", () => abrirModal(p));
      banner.appendChild(destaque);
    });
}

// ===================== RENDER USUÁRIOS =====================
function renderizarProdutosUsuarios(lista) {
  container.innerHTML = "";
  lista
    .filter((p) => p.tipo === "usuario")
    .forEach((p) => {
      const div = document.createElement("div");
      div.className =
        "relative bg-gray-100 rounded-md border border-black shadow-md cursor-pointer flex-shrink-0 w-[22%] sm:w-28 h-32 overflow-hidden card-usuario transition-all duration-300";

      const seloCor =
        p.condicao === "Novo" ? "bg-green-500" : "bg-yellow-400";

      div.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}" 
             class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
        
        <!-- Selo Condição -->
        <div class="absolute top-0 left-0 ${seloCor} text-black font-semibold text-[9px] px-2 py-[1px] rounded-br-md shadow-md">
          ${p.condicao}
        </div>

        <!-- Faixa inferior com dados -->
        <div class="absolute bottom-0 left-0 w-full bg-black/70 text-white px-1 py-[2px] text-[9px] flex flex-col leading-tight">
          <span class="font-bold text-yellow-300">R$ ${p.precoAtual.toFixed(2)}</span>
          <span class="truncate">${p.cidade || ""}</span>
        </div>
      `;

      div.addEventListener("click", () => abrirUserModal(p));
      container.appendChild(div);
    });
}

// ===================== MODAL MERCADO LIVRE =====================
function abrirModal(p) {
  const modal = document.getElementById("productModal");
  const modalBox = document.getElementById("modalBox");
  document.getElementById("modalImage").src = p.imagem;
  document.getElementById("modalTitle").textContent = p.nome;
  document.getElementById("modalOldPrice").textContent = `R$ ${p.precoAntigo.toFixed(2)}`;
  document.getElementById("modalPrice").textContent = `R$ ${p.precoAtual.toFixed(2)}`;
  document.getElementById("modalLink").href = p.link;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);
}

document.getElementById("closeModal").addEventListener("click", () => {
  const modal = document.getElementById("productModal");
  const modalBox = document.getElementById("modalBox");
  modalBox.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 200);
});

// ===================== MODAL USUÁRIO (NOVO PADRÃO VISUAL) =====================
function abrirUserModal(p) {
  const modal = document.getElementById("userModal");
  const modalBox = document.getElementById("userModalBox");

  document.getElementById("userModalImage").src = p.imagem;
  document.getElementById("userModalTitle").textContent = p.nome;
  document.getElementById("userModalCond").textContent = p.condicao || "—";
  document.getElementById("userModalCond").className =
    "px-2 py-1 rounded-md text-xs font-semibold " +
    (p.condicao === "Novo"
      ? "bg-green-100 text-green-800 border border-green-300"
      : "bg-yellow-100 text-yellow-800 border border-yellow-300");
  document.getElementById("userModalLocation").textContent = `${p.cidade || ""} - ${p.estado || ""}`;
  document.getElementById("userModalDate").textContent = calcularDiasPublicacao(p.dataPublicacao);
  document.getElementById("userModalPrice").textContent = `R$ ${p.precoAtual.toFixed(2)}`;
  document.getElementById("userModalDesc").textContent = p.descricao || "—";

  const whatsapp = `https://wa.me/${p.contato}?text=Olá! Tenho interesse no seu anúncio: ${encodeURIComponent(p.nome)}.`;
  document.getElementById("userModalWhats").href = whatsapp;

  document.getElementById("userModalCopy").onclick = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 Link do anúncio copiado!");
  };

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);

  document.getElementById("closeUserModal").onclick = () => fecharUserModal();
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharUserModal();
  });
}

function fecharUserModal() {
  const modal = document.getElementById("userModal");
  const modalBox = document.getElementById("userModalBox");
  modalBox.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 200);
}

function calcularDiasPublicacao(data) {
  if (!data) return "Publicado recentemente";
  const dataPub = new Date(data);
  const diff = Math.floor((Date.now() - dataPub.getTime()) / (1000 * 60 * 60 * 24));
  if (diff <= 0) return "Publicado hoje";
  if (diff === 1) return "Publicado há 1 dia";
  return `Publicado há ${diff} dias`;
}

// ===================== COMPARTILHAR OFERTA =====================
document.addEventListener("click", (e) => {
  if (e.target.id === "btnCompartilhar") {
    const link = document.getElementById("modalLink").href;
    const titulo = document.getElementById("modalTitle").textContent;
    if (navigator.share) {
      navigator.share({
        title: "Oferta no Mercado Livre",
        text: `Confira este produto: ${titulo}`,
        url: link,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(link);
      alert("🔗 Link copiado para a área de transferência!");
    }
  }
});

// ===================== FILTROS FUNCIONAIS =====================
function aplicarFiltros() {
  const busca = (document.getElementById("buscaInput")?.value || "").toLowerCase();
  const marca = (document.getElementById("filtroMarca")?.value || "").toLowerCase();
  const estado = document.getElementById("filtroEstado")?.value || "";
  const preco = document.getElementById("filtroPreco")?.value || "";

  const filtrados = produtos.filter(p => {
    if (busca && !p.nome.toLowerCase().includes(busca)) return false;
    if (marca && !p.nome.toLowerCase().includes(marca)) return false;
    if (estado && p.tipo === "usuario" && p.estado !== estado) return false;
    if (preco === "1" && p.precoAtual > 2000) return false;
    if (preco === "2" && (p.precoAtual < 2000 || p.precoAtual > 4000)) return false;
    if (preco === "3" && p.precoAtual < 4000) return false;
    return true;
  });

  renderizarMercadoLivre(filtrados);
  renderizarProdutosUsuarios(filtrados);
}

// ===================== BOTÃO 🔍 SCROLL ATÉ O TOPO =====================
btnBusca.addEventListener("click", () => {
  const barra = document.getElementById("barraFiltros");
  if (!barra) return;
  barra.classList.toggle("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===================== CRIAR BARRA DE FILTROS =====================
function criarBarraFiltros() {
  const main = document.querySelector("main");
  const barra = document.createElement("div");
  barra.id = "barraFiltros";
  barra.className =
    "hidden bg-black text-white border border-yellow-400 rounded-lg mt-2 p-2 shadow-md flex flex-wrap items-center justify-center gap-2 max-w-6xl mx-auto";
  barra.innerHTML = `
    <input id="buscaInput" type="text" placeholder="Buscar modelo ou marca..."
      class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm w-[150px]" />
    <select id="filtroMarca" class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm">
      <option value="">Marca</option><option>Apple</option><option>Samsung</option><option>Xiaomi</option><option>Motorola</option><option>Realme</option><option>POCO</option>
    </select>
    <select id="filtroEstado" class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm">
      <option value="">Estado</option><option>AL</option><option>PE</option>
    </select>
    <select id="filtroPreco" class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm">
      <option value="">Preço</option><option value="1">Até R$ 2000</option><option value="2">R$ 2000–R$ 4000</option><option value="3">+ R$ 4000</option>
    </select>
  `;
  main.parentNode.insertBefore(barra, main);

  ["buscaInput", "filtroMarca", "filtroEstado", "filtroPreco"].forEach(id => {
    const el = document.getElementById(id);
    ["input", "change"].forEach(evt => el.addEventListener(evt, aplicarFiltros));
  });
}

// ===================== INIT =====================
window.addEventListener("DOMContentLoaded", () => {
  renderizarMercadoLivre(produtos);
  renderizarProdutosUsuarios(produtos);
  criarBarraFiltros();
});

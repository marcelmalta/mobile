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

// ===================== ELEMENTOS =====================
const container = document.getElementById("listaProdutos");
const banner = document.getElementById("bannerOfertas");

// ===================== RENDER MERCADO LIVRE =====================
function renderizarMercadoLivre(lista) {
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
        <p class="line-through text-black font-semibold text-[10px]">R$ ${p.precoAntigo?.toFixed(2) || ""}</p>
        <p class="text-green-700 font-bold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[9px] text-green-600 font-medium">${p.desconto}</span>
      `;

      destaque.style.boxShadow = "0 0 10px rgba(250, 204, 21, 0.7)";
      destaque.style.animation = "mlPulse 2.8s infinite ease-in-out";

      destaque.addEventListener("mouseenter", () => {
        destaque.style.transform = "scale(1.05)";
        destaque.style.boxShadow = "0 0 18px rgba(250, 204, 21, 0.9)";
      });
      destaque.addEventListener("mouseleave", () => {
        destaque.style.transform = "scale(1)";
        destaque.style.boxShadow = "0 0 10px rgba(250, 204, 21, 0.7)";
      });

      destaque.addEventListener("click", () => abrirModal(p));
      banner.appendChild(destaque);
    });

  if (!document.getElementById("mlPulseKeyframes")) {
    const style = document.createElement("style");
    style.id = "mlPulseKeyframes";
    style.textContent = `
      @keyframes mlPulse {
        0%, 100% { box-shadow: 0 0 8px rgba(250, 204, 21, 0.6); }
        50% { box-shadow: 0 0 16px rgba(250, 204, 21, 1); }
      }
    `;
    document.head.appendChild(style);
  }
}

// ===================== RENDER USUÁRIOS =====================
function renderizarProdutosUsuarios(lista) {
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
          <img src="${p.imagem}" alt="${nomeLimpo}" class="max-h-12 object-contain rounded-md transition-transform duration-300 group-hover:scale-105">
          <div class="absolute top-0 left-0 ${selo} text-[6.5px] px-[2px] py-[1px] rounded-br-md">${p.condicao}</div>
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
  document.getElementById("modalImage").src = produto.imagem;
  document.getElementById("modalTitle").textContent = produto.nome;
  document.getElementById("modalOldPrice").textContent = produto.precoAntigo
    ? `R$ ${produto.precoAntigo.toFixed(2)}`
    : "";
  document.getElementById("modalDiscount").textContent = produto.desconto;
  document.getElementById("modalPrice").textContent = `R$ ${produto.precoAtual.toFixed(2)}`;
  document.getElementById("modalParcelas").textContent = produto.parcelas || "";
  document.getElementById("modalLink").href = produto.link || "#";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);
}

closeModal?.addEventListener("click", fecharModal);
modal?.addEventListener("click", (e) => e.target === modal && fecharModal());

function fecharModal() {
  modalBox.classList.add("scale-95", "opacity-0");
  modalBox.classList.remove("scale-100", "opacity-100");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 200);
}

// ===================== MODAL USUÁRIO =====================
function abrirUserModal(p) {
  const modalHTML = document.createElement("div");
  modalHTML.className =
    "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-3";
  modalHTML.innerHTML = `
    <div class="bg-white rounded-2xl w-full max-w-md p-5 relative shadow-2xl overflow-y-auto max-h-[90vh]">
      <button class="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold">✖</button>
      <div class="flex flex-col items-center gap-3">
        <img src="${p.imagem}" class="w-40 h-40 object-contain rounded-lg shadow-md border" alt="${p.nome}">
        <h2 class="text-lg font-bold text-center">${p.nome}</h2>
        <p class="text-green-700 font-extrabold text-2xl">R$ ${p.precoAtual.toFixed(2)}</p>
        <div class="flex flex-wrap justify-center gap-2 mt-2">
          <span class="text-[12px] bg-gray-100 px-2 py-1 rounded-md">📍 ${p.cidade || ""} - ${p.estado || ""}</span>
          <span class="text-[12px] bg-emerald-100 px-2 py-1 rounded-md">${p.condicao}</span>
          <span class="text-[12px] bg-yellow-100 px-2 py-1 rounded-md">Nota fiscal: ${p.notaFiscal}</span>
        </div>
        <div class="w-full mt-3 text-sm text-gray-700 space-y-1">
          <p><strong>📦 Entrega:</strong> ${p.entrega}</p>
          <p><strong>💳 Pagamento:</strong> ${p.pagamento.join(", ")}</p>
        </div>
        <div class="mt-3 text-gray-600 text-[14px] bg-gray-50 border rounded-md p-3 w-full">
          <strong>📝 Descrição:</strong><br>${p.descricao}
        </div>
        <a href="https://wa.me/${p.contato}" target="_blank"
          class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-full shadow-md flex items-center gap-2">
          💬 Falar com o vendedor no WhatsApp
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(modalHTML);
  modalHTML.querySelector("button").addEventListener("click", () => modalHTML.remove());
  modalHTML.addEventListener("click", (e) => e.target === modalHTML && modalHTML.remove());
}

// ===================== BOTÃO FLUTUANTE PRETO (BUSCAR) =====================
const btnBusca = document.getElementById("btnBuscaFlutuante");
const modalBusca = document.getElementById("modalBusca");
const fecharBusca = document.getElementById("fecharBusca");

btnBusca.classList.add(
  "bg-black",
  "text-white",
  "bottom-20",
  "right-auto",
  "left-4",
  "font-bold",
  "px-5",
  "py-3",
  "rounded-full",
  "shadow-xl",
  "flex",
  "items-center",
  "gap-2"
);

btnBusca.addEventListener("click", () => {
  modalBusca.classList.remove("hidden");
  setTimeout(() => {
    modalBusca.classList.add("flex", "opacity-100");
    modalBusca.classList.remove("opacity-0");
  }, 50);
});

fecharBusca.addEventListener("click", () => {
  modalBusca.classList.remove("opacity-100");
  modalBusca.classList.add("opacity-0");
  setTimeout(() => modalBusca.classList.add("hidden"), 300);
});

// ===================== FILTROS =====================
function aplicarFiltros() {
  const termo = document.getElementById("buscaInput").value.toLowerCase();
  const uf = document.getElementById("filtroEstado").value;
  const cidade = document.getElementById("filtroCidade").value;
  const marca = document.getElementById("filtroMarca").value;
  const faixa = document.getElementById("filtroPreco").value;

  const filtrados = produtos.filter(p => {
    const nomeMatch = !termo || p.nome.toLowerCase().includes(termo);
    const estadoMatch = !uf || p.estado === uf;
    const cidadeMatch = !cidade || p.cidade === cidade;
    const marcaMatch = !marca || p.nome.toLowerCase().includes(marca.toLowerCase());

    let precoMatch = true;
    if (faixa === "1") precoMatch = p.precoAtual <= 2000;
    if (faixa === "2") precoMatch = p.precoAtual > 2000 && p.precoAtual <= 4000;
    if (faixa === "3") precoMatch = p.precoAtual > 4000;

    return nomeMatch && estadoMatch && cidadeMatch && marcaMatch && precoMatch;
  });

  renderizarMercadoLivre(filtrados);
  renderizarProdutosUsuarios(filtrados);

  modalBusca.classList.remove("opacity-100");
  modalBusca.classList.add("opacity-0");
  setTimeout(() => modalBusca.classList.add("hidden"), 300);
}

document.getElementById("btnAplicarFiltros").addEventListener("click", aplicarFiltros);

function preencherFiltros() {
  const estados = [...new Set(produtos.filter(p=>p.tipo==="usuario").map(p => p.estado))];
  const cidades = [...new Set(produtos.filter(p=>p.tipo==="usuario").map(p => p.cidade))];
  const filtroEstado = document.getElementById("filtroEstado");
  const filtroCidade = document.getElementById("filtroCidade");

  estados.forEach(uf => {
    const opt = document.createElement("option");
    opt.value = uf;
    opt.textContent = uf;
    filtroEstado.appendChild(opt);
  });

  filtroEstado.addEventListener("change", () => {
    filtroCidade.innerHTML = "<option value=''>Cidade</option>";
    produtos
      .filter(p => p.estado === filtroEstado.value)
      .forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.cidade;
        opt.textContent = p.cidade;
        filtroCidade.appendChild(opt);
      });
  });
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
  renderizarMercadoLivre(produtos);
  renderizarProdutosUsuarios(produtos);
  animarBanner();
  preencherFiltros();
});

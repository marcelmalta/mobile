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
    precoAtual: 629.10,
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
    precoAtual: 629.10,
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
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
  {
    nome: "iPhone 13 128GB - usado, com nota fiscal",
    precoAtual: 2950,
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
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
  {
    nome: "iPhone 13 128GB - usado, com nota fiscal",
    precoAtual: 2950,
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_823732-MLA81806997422_012025-F.webp",
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
    .forEach((p, index) => {
      const destaque = document.createElement("div");
      destaque.className =
        "bg-white rounded-lg shadow flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 relative snap-start group overflow-hidden cursor-pointer transition-transform hover:scale-105";

      // === SELOS ===
      let seloEstoque = "";
      if (p.estoque < 25) {
        seloEstoque = `<div class='bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded-md animate-pulse'>🔥 Restam ${p.estoque}</div>`;
      } else if (p.estoque < 50) {
        seloEstoque = `<div class='bg-yellow-400 text-black text-[9px] px-1.5 py-0.5 rounded-md'>⚠️ ${p.estoque} unid</div>`;
      } else {
        seloEstoque = `<div class='bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-md'>${p.estoque} unid</div>`;
      }

      destaque.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-20 overflow-hidden mb-1 relative">
          <img src="${p.imagem}" alt="${p.nome}" class="max-h-20 object-contain rounded-md transition-transform duration-300 group-hover:scale-110 shadow-[0_0_10px_#22c55e]">
          <div class="absolute top-0 left-0 right-0 p-1 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-md">Frete Grátis</div>
            ${seloEstoque}
          </div>
        </div>
        <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8">${p.nome}</h2>
        <p class="line-through text-black font-semibold text-[10px]">R$ ${p.precoAntigo?.toFixed(2) || ""}</p>
        <p class="text-green-700 font-bold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
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
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer flex-shrink-0 w-24 sm:w-28 flex flex-col items-center p-1 relative snap-start group overflow-hidden";

      const selo =
        p.condicao === "Novo"
          ? "bg-green-500 text-white"
          : "bg-yellow-400 text-black";

      card.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-16 overflow-hidden mb-1 relative">
          <img src="${p.imagem}" alt="${p.nome}" class="max-h-16 object-contain rounded-md transition-transform duration-300 group-hover:scale-110">
          <div class="absolute top-0 left-0 ${selo} text-[8px] px-1 py-0.5 rounded-br-md">${p.condicao}</div>
        </div>
        <h2 class="text-[9px] font-semibold text-center line-clamp-2 h-8">${p.nome}</h2>
        <p class="text-green-700 font-bold text-[11px]">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[8px] text-gray-500">${p.cidade || ""}</span>
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
  // Cria o modal dinamicamente
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
          <p><strong>🕒 Online há:</strong> ${Math.floor(Math.random() * 4) + 1} horas</p>
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

  // Fecha modal
  modalHTML.querySelector("button").addEventListener("click", () => modalHTML.remove());
  modalHTML.addEventListener("click", (e) => {
    if (e.target === modalHTML) modalHTML.remove();
  });
}

// ===================== FILTROS, CONTADOR, ANIMAÇÃO =====================
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

  renderizarMercadoLivre(filtrados);
  renderizarProdutosUsuarios(filtrados);
}

function iniciarContador() {
  let tempo = 3 * 60 * 60;
  const el = document.getElementById("contador");
  if (!el) return;
  setInterval(() => {
    const h = String(Math.floor(tempo / 3600)).padStart(2, "0");
    const m = String(Math.floor((tempo % 3600) / 60)).padStart(2, "0");
    const s = String(tempo % 60).padStart(2, "0");
    el.textContent = `${h}:${m}:${s}`;
    tempo = tempo > 0 ? tempo - 1 : 3 * 60 * 60;
  }, 1000);
}

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

// ===================== INIT =====================
window.addEventListener("DOMContentLoaded", () => {
  renderizarMercadoLivre(produtos);
  renderizarProdutosUsuarios(produtos);
  iniciarContador();
  animarBanner();
});

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
  {
    nome: "iPhone 13 128GB - usado, com nota fiscal",
    precoAtual: 2950,
    imagem: "https://img.olx.com.br/images/53/532591699253297.webp",
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
    imagem: "https://img.olx.com.br/images/90/905528093143612.webp",
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
    imagem: "https://img.olx.com.br/images/91/919584936361489.webp",
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
    imagem: "https://img.olx.com.br/images/38/388564338573980.webp",
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
    imagem: "https://img.olx.com.br/images/74/746587812535897.webp",
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
    imagem: "https://img.olx.com.br/images/50/506580574199923.webp",
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
    imagem: "https://img.olx.com.br/images/67/673559570274079.webp",
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
    imagem: "https://img.olx.com.br/images/38/387599579785456.webp",
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
  lista.filter(p => p.tipo === "mercadolivre").forEach(p => {
    const destaque = document.createElement("div");
    destaque.className =
      "bg-white rounded-lg shadow flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 relative snap-start group overflow-hidden cursor-pointer transition-transform hover:scale-105";
    destaque.innerHTML = `
      <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-20 overflow-hidden mb-1 relative">
        <img src="${p.imagem}" alt="${p.nome}" class="max-h-20 object-contain rounded-md transition-transform duration-300 group-hover:scale-110">
        <div class="absolute top-0 left-0 bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-br-md shadow-sm">
          Frete Grátis
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
    .filter(p => p.tipo === "usuario")
    .forEach(p => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer flex-shrink-0 w-[22%] sm:w-28 flex flex-col items-center p-[3px] relative snap-start group overflow-hidden";

      // Limpa o nome (remove informações após o hífen)
      const nomeLimpo = p.nome.replace(/-.*$/g, "").trim();

      const selo =
        p.condicao === "Novo"
          ? "bg-green-500 text-white"
          : "bg-yellow-400 text-black";

      card.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-12 overflow-hidden mb-0.5 relative">
          <img src="${p.imagem}" alt="${nomeLimpo}" 
               class="max-h-12 object-contain rounded-md transition-transform duration-300 group-hover:scale-105">
          <div class="absolute top-0 left-0 ${selo} text-[7px] px-1 py-0.5 rounded-br-md">${p.condicao}</div>
        </div>
        <h2 class="text-[8.5px] font-semibold text-center line-clamp-2 h-7 leading-tight text-gray-800 mt-[1px]">
          ${nomeLimpo}
        </h2>
        <p class="text-green-700 font-extrabold text-[10px] mt-[1px]">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[7.5px] font-bold text-gray-700 mt-[1px]">${p.cidade || ""}</span>
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
  modalHTML.querySelector("button").addEventListener("click", () => modalHTML.remove());
  modalHTML.addEventListener("click", (e) => e.target === modalHTML && modalHTML.remove());
}

// ===================== FILTROS E BUSCA (MODAL UNIFICADO) =====================
function aplicarFiltros() {
  const termo = document.getElementById("buscaInput")?.value.toLowerCase() || "";
  const marca = document.getElementById("filtroMarca")?.value || "";
  const faixa = document.getElementById("filtroPreco")?.value || "";
  const estado = document.getElementById("filtroEstado")?.value || "";
  const cidade = document.getElementById("filtroCidade")?.value || "";

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

  // destaca botão se filtros ativos
  const btn = document.getElementById("btnBuscaFlutuante");
  if (termo || marca || faixa || estado || cidade)
    btn.classList.add("from-yellow-400", "to-yellow-500", "text-black");
  else btn.classList.remove("from-yellow-400", "to-yellow-500", "text-black");
}

// ===================== MODAL DE BUSCA/FILTRO FLUTUANTE =====================
const btnBuscaFlutuante = document.getElementById("btnBuscaFlutuante");
const modalBusca = document.getElementById("modalBusca");
const fecharBusca = document.getElementById("fecharBusca");
const aplicar = document.getElementById("btnAplicarFiltros");

function abrirModalBusca() {
  modalBusca.classList.remove("hidden");
  setTimeout(() => {
    modalBusca.classList.add("flex", "opacity-100");
    modalBusca.classList.remove("opacity-0");
    const box = modalBusca.querySelector("div");
    box.classList.remove("scale-95");
    box.classList.add("scale-100");
  }, 10);
}

function fecharModalBusca() {
  const box = modalBusca.querySelector("div");
  box.classList.remove("scale-100");
  box.classList.add("scale-95");
  modalBusca.classList.remove("opacity-100");
  modalBusca.classList.add("opacity-0");
  setTimeout(() => {
    modalBusca.classList.add("hidden");
    modalBusca.classList.remove("flex");
  }, 200);
}

btnBuscaFlutuante.addEventListener("click", abrirModalBusca);
fecharBusca.addEventListener("click", fecharModalBusca);
modalBusca.addEventListener("click", (e) => { if (e.target === modalBusca) fecharModalBusca(); });
aplicar.addEventListener("click", () => { aplicarFiltros(); fecharModalBusca(); });

// ===================== INICIALIZAÇÃO =====================
window.addEventListener("DOMContentLoaded", () => {
  renderizarMercadoLivre(produtos);
  renderizarProdutosUsuarios(produtos);
});

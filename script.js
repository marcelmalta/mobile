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
  }
];

// ===================== ELEMENTOS BASE =====================
const container = document.getElementById("listaProdutos");
const banner = document.getElementById("bannerOfertas");
const btnBuscaFlutuante = document.getElementById("btnBuscaFlutuante");

// helper para inserir após um nó
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
        "bg-white rounded-md border border-black shadow-md hover:shadow-lg transition cursor-pointer flex-shrink-0 w-[45%] sm:w-28 flex flex-col items-center p-[1px] relative snap-start overflow-hidden glow-user";

      const nomeLimpo = p.nome.replace(/-.*$/g, "").trim();
      const selo = p.condicao === "Novo" ? "bg-green-500 text-white" : "bg-yellow-400 text-black";

      card.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-16 overflow-hidden mb-[1px] relative">
          <img src="${p.imagem}" alt="${nomeLimpo}" class="max-h-14 object-contain rounded-md transition-transform duration-300">
          <div class="absolute top-0 left-0 ${selo} text-[7px] px-[3px] py-[1px] rounded-br-md">${p.condicao || ""}</div>
        </div>
        <h2 class="text-[9px] font-semibold text-center leading-tight text-gray-800 h-[25px]">${nomeLimpo}</h2>
        <p class="text-green-700 font-extrabold text-[11px] mt-0">R$ ${p.precoAtual.toFixed(2)}</p>
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
  document.getElementById("modalImage").src = produto.imagem;
  document.getElementById("modalTitle").textContent = produto.nome;
  document.getElementById("modalOldPrice").textContent = produto.precoAntigo ? `R$ ${produto.precoAntigo.toFixed(2)}` : "";
  document.getElementById("modalDiscount").textContent = produto.desconto || "";
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

// ===================== MODAL USUÁRIO =====================
function abrirUserModal(p) {
  const overlay = document.createElement("div");
  overlay.className = "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3";
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
        ${p.entrega ? `<p class="text-sm text-gray-700"><strong>📦 Entrega:</strong> ${p.entrega}</p>` : ""}
        ${p.pagamento ? `<p class="text-sm text-gray-700"><strong>💳 Pagamento:</strong> ${Array.isArray(p.pagamento) ? p.pagamento.join(", ") : p.pagamento}</p>` : ""}
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

// ===================== CRIA/INJETA BARRA DE FILTROS (SEM MODAL) =====================
function criarBarraFiltros() {
  const bannerSection = banner?.parentElement; // a <section> do banner
  if (!bannerSection) return;

  // Evita duplicar
  if (document.getElementById("barraFiltrosWrap")) return;

  // âncora para scroll e container
  const wrap = document.createElement("div");
  wrap.id = "barraFiltrosWrap";
  wrap.className = "max-w-6xl mx-auto w-full px-2";

  // Barra com visual mais visível (preto/amarelo)
  wrap.innerHTML = `
    <div id="barraFiltros"
         class="bg-black/90 border border-yellow-400 rounded-lg mt-2 p-2 shadow-md flex flex-wrap items-center justify-center gap-2 text-white">
      <div class="w-full flex items-center gap-2 justify-center mb-1">
        <span class="text-[11px] font-semibold tracking-wide text-yellow-300">FILTRE OS RESULTADOS</span>
      </div>

      <input id="buscaInput" type="text" placeholder="Buscar modelo ou marca..."
        class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm w-[160px] focus:outline-none focus:ring-2 focus:ring-yellow-400" />

      <select id="filtroMarca"
        class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm">
        <option value="">Marca</option><option>Apple</option><option>Samsung</option><option>Xiaomi</option><option>Motorola</option><option>Realme</option><option>POCO</option>
      </select>

      <select id="filtroEstado"
        class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm">
        <option value="">Estado</option>
      </select>

      <select id="filtroPreco"
        class="bg-white text-gray-800 border border-yellow-300 rounded-md px-2 py-1 text-sm">
        <option value="">Preço</option><option value="1">Até R$ 2000</option><option value="2">R$ 2000–R$ 4000</option><option value="3">+ R$ 4000</option>
      </select>

      <button id="btnLimpar"
        class="bg-yellow-400 text-black font-semibold rounded-md px-2 py-1 text-xs hover:bg-yellow-300 transition">
        ✖ Limpar
      </button>
    </div>
  `;

  insertAfter(wrap, bannerSection);

  // Preenche UFs dinamicamente
  const ufSet = Array.from(new Set(produtos.filter(p => p.tipo === "usuario" && p.estado).map(p => p.estado)));
  const ufSel = wrap.querySelector("#filtroEstado");
  ufSet.forEach(uf => {
    const opt = document.createElement("option");
    opt.value = uf;
    opt.textContent = uf;
    ufSel.appendChild(opt);
  });

  // Liga eventos de filtro
  const buscaInput = wrap.querySelector("#buscaInput");
  const filtroMarca = wrap.querySelector("#filtroMarca");
  const filtroEstado = wrap.querySelector("#filtroEstado");
  const filtroPreco = wrap.querySelector("#filtroPreco");
  const btnLimpar = wrap.querySelector("#btnLimpar");

  function aplicarFiltros() {
    const busca = (buscaInput.value || "").toLowerCase();
    const marca = filtroMarca.value;
    const estado = filtroEstado.value;
    const preco = filtroPreco.value;

    const filtrados = produtos.filter(p => {
      if (busca && !p.nome.toLowerCase().includes(busca)) return false;
      if (marca && !p.nome.toLowerCase().includes(marca.toLowerCase())) return false;
      if (estado && p.tipo === "usuario" && p.estado !== estado) return false;
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
}

// ===================== BOTÃO 🔍: SCROLL ATÉ A BARRA + TOGGLE =====================
function ligarBotaoBusca() {
  const btn = btnBuscaFlutuante;
  if (!btn) return;

  btn.addEventListener("click", () => {
    const barra = document.getElementById("barraFiltros");
    const wrap = document.getElementById("barraFiltrosWrap");

    if (!barra || !wrap) return;

    // Se estiver oculto (display:none), mostra antes de medir posição
    const estavaOculta = window.getComputedStyle(barra).display === "none";
    if (estavaOculta) barra.style.display = "flex";

    // Calcula posição considerando header fixo (~72px)
    const headerOffset = 72;
    const top = wrap.getBoundingClientRect().top + window.scrollY - headerOffset;

    // Scroll suave até a barra
    window.scrollTo({ top, behavior: "smooth" });

    // Se já estava visível e clicou de novo — recolhe
    if (!estavaOculta) {
      // pequeno delay pra não brigar com o scroll se o usuário estiver muito acima
      setTimeout(() => { barra.style.display = "none"; }, 50);
    }
  });
}

// ===================== CARROSSEL ML =====================
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

// ===================== INIT =====================
window.addEventListener("DOMContentLoaded", () => {
  renderizarMercadoLivre(produtos);
  renderizarProdutosUsuarios(produtos);
  animarBanner();

  criarBarraFiltros();   // injeta barra compacta
  ligarBotaoBusca();     // scroll até a barra ao clicar no 🔍
});

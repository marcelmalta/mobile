// ===================== DADOS DOS PRODUTOS =====================
const produtos = [
  // ======= MERCADO LIVRE =======
  {
  nome: "Motorola Moto g05 128GB 12GB RAM",
  precoAntigo: 1138.56,
  precoAtual: 630.88,
  desconto: "50% OFF",
  parcelas: "9x R$ 70,10 sem juros",
  cor: "Violeta",
  memoriaRam: "12 GB",
  envio: "Frete grátis",
  detalhes: [
    "Tela de 6.7\" com Superbrilho",
    "Bateria de 5200mAh",
    "Câmera principal de 50MP com AI",
    "Reconhecimento facial e sensor de impressão digital"
  ],
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_704736-MLA81432018906_122024-F.webp",
  link: "https://mercadolivre.com/sec/2PJYkgE",
  "tipo": "mercadolivre"
},
  {
  nome: "Samsung Galaxy A05s 128 GB Dual SIM Tela Infinita 6,7\" Cor Prata 6 GB RAM",
  precoAntigo: 1099,
  precoAtual: 629.1,
  desconto: "43% OFF",
  parcelas: "18x R$ 34,94 sem juros",
  cor: "Prata",
  memoriaRam: "6 GB",
  envio: "Frete grátis com Mercado Envios FULL 🚚",
  detalhes: [
    "Tela de 6.7\" HD+",
    "Bateria de 5000mAh",
    "Câmera tripla de 50MP",
    "Sensor digital lateral",
    "Desbloqueado - Dual SIM",
    "Carregador de 7W incluso"
  ],
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_803399-MLA76762678802_062024-F.webp",
  link: "https://mercadolivre.com/sec/12qtdJ1",
  tipo: "mercadolivre"
},
  {
  nome: "Motorola Moto g05 128GB 12GB RAM",
  precoAntigo: 630.90,
  precoAtual: 567.79,
  desconto: "10% OFF",
  parcelas: "12x R$ 52,65 sem juros",
  cor: "Violeta",
  memoriaRam: "12 GB",
  envio: "Entrega grátis",
  detalhes: [
    "Tela de 6.7\" com Superbrilho",
    "Bateria de 5200mAh",
    "Câmera principal de 50MP com AI",
    "RAM Boost de 8GB"
  ],
  imagem: "https://m.media-amazon.com/images/I/61bnLWBf5WL._AC_SX679_.jpg",
  link: "https://amzn.to/471ZTvm",
  tipo: "amazon"
},
  {
  nome: "Samsung Galaxy A16 128GB 4GB RAM",
  precoAntigo: 1299.00,
  precoAtual: 759.00,
  desconto: "41% OFF",
  parcelas: "12x R$ 73,60 sem juros",
  cor: "Verde-claro",
  memoriaRam: "4 GB",
  envio: "Frete grátis com Mercado Envios FULL 🚚",
  detalhes: [
    "Tela de 6.7\" Super AMOLED",
    "Bateria de 5000mAh",
    "Câmera principal de 50MP",
    "Resistência IP54 a respingos",
    "Compatível com NFC"
  ],
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_622565-MLA80779729792_112024-F.webp",
  link: "https://mercadolivre.com/sec/2QNe3KH",
  tipo: "mercadolivre"
},
  {
  nome: "Samsung Galaxy A16 128GB 4GB RAM",
  precoAntigo: 839.00,
  precoAtual: 759.00,
  desconto: "10% OFF",
  parcelas: "12x R$ 73,60 sem juros",
  cor: "Verde-claro",
  memoriaRam: "4 GB",
  envio: "Entrega grátis",
  detalhes: [
    "Tela de 6.7\"",
    "Bateria de 5000mAh",
    "Câmera principal de 50MP",
    "Compatível com NFC"
  ],
  imagem: "https://m.media-amazon.com/images/I/51nm-h3wiUL._AC_SX679_.jpg",
  link: "https://amzn.to/3ITCTXv",
  tipo: "amazon"
},
  {
  nome: "Motorola Moto G15 256GB 12GB RAM",
  precoAntigo: 1345.84,
  precoAtual: 760.43,
  desconto: "43% OFF",
  parcelas: "12x R$ 70,41 sem juros",
  cor: "Grafite",
  memoriaRam: "12 GB",
  envio: "Frete grátis",
  detalhes: [
    "Tela FHD+ de 6.7\" com Superbrilho",
    "Bateria de 5200mAh",
    "Câmera de 50MP com Night Vision",
    "Compatível com NFC",
    "Resistente a salpicos e poeira"
  ],
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_634923-MLA81307878099_122024-F.webp",
  link: "https://mercadolivre.com/sec/2jMSnG4",
  tipo: "mercadolivre"
},
  {
  nome: "Xiaomi Poco X7 Pro 5G 256GB 8GB RAM",
  precoAntigo: 3599.00,
  precoAtual: 1890.00,
  desconto: "47% OFF",
  parcelas: "12x R$ 200,64 sem juros",
  cor: "Preto",
  memoriaRam: "8 GB",
  envio: "Frete grátis",
  detalhes: [
    "Tela AMOLED de 6\"",
    "Bateria de 6000mAh",
    "Câmera principal de 50MP",
    "Compatível com NFC",
    "Sensor de impressão digital"
  ],
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_662793-MLA81920022500_012025-F.webp",
  link: "https://mercadolivre.com/sec/2AXFY6f",
  tipo: "mercadolivre"
},
  {
  nome: "Samsung Galaxy S25 5G 256GB 12GB RAM",
  precoAntigo: 6499.00,
  precoAtual: 3863.01,
  desconto: "40% OFF",
  parcelas: "12x R$ 357,69 sem juros",
  cor: "Azul Marinho",
  memoriaRam: "12 GB",
  envio: "Frete grátis com Mercado Envios FULL 🚚",
  detalhes: [
    "Tela Dynamic AMOLED 2X de 6.8\"",
    "Bateria de 5000mAh",
    "Câmera Tripla com sensor principal de 200MP",
    "Compatível com S Pen",
    "Resistência a água e poeira (IP68)"
  ],
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_868507-MLA83150292219_032025-F.webp",
  link: "https://mercadolivre.com/sec/1HJALmk",
  tipo: "mercadolivre"
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
  {
    nome: "Apple iPhone 16 (128 GB) - Preto - Loja Oficial",
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
  {
    nome: "Apple iPhone 16 (128 GB) - Preto - Loja Oficial",
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
  {
    nome: "Apple iPhone 16 (128 GB) - Preto - Loja Oficial",
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
  // ======= MAGAZINE LUIZA =======
{
  nome: "Motorola Moto G05 128GB 4GB RAM",
  precoAntigo: 669.40,
  precoAtual: 569.00,
  desconto: "15% OFF",
  parcelas: "5x R$ 133,88 sem juros",
  cor: "Violeta",
  memoriaRam: "4 GB",
  envio: "Frete a consultar",
  detalhes: [
    "Tela de 6.7\"",
    "Bateria de 5200mAh",
    "Câmera principal de 50MP",
    "Processador Helio G81"
  ],
  imagem: "https://a-static.mlcdn.com.br/800x560/smartphone-motorola-moto-g05-4g-128gb-4gb-bateria-5-200-mah/gazinshop/14380/072f099c48c7805201403c7cfc64a02f.jpeg",
  link: "https://magazineluiza.onelink.me/589508454/bdp6piar",
  tipo: "magalu"
},
{
  tipo: "magalu",
  nome: "Smartphone Samsung Galaxy A06 128GB 4GB RAM 6,7'' Azul Escuro - Câm. Dupla + Selfie 8MP",
  precoAntigo: 899.00,
  precoAtual: 599.00,
  desconto: "33% OFF",
  parcelas: "10x R$ 66,56 sem juros",
  imagem: "https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-a06-128gb-4gb-ram-azul-escuro-67-cam-dupla-selfie-8mp/magazineluiza/238657700/fca7f701abc03293954ba82835473323.jpg",
  link: "https://magazineluiza.onelink.me/589508454/nax0x6sh",
  estoque: 30,
  estoqueTotal: 40
},
{
  nome: "Smart TV LG 50'' 4K UHD ThinQ AI HDR WebOS 24",
  precoAntigo: 2699,
  precoAtual: 1999,
  desconto: "26% OFF",
  parcelas: "10x R$ 199,90 sem juros",
  cor: "Preto",
  memoriaRam: "N/A",
  envio: "Entrega rápida pela Magalu 🚚",
  detalhes: [
    "Resolução 4K UHD (3840x2160)",
    "Processador α5 Gen6 AI",
    "Suporte HDR10 / HLG",
    "Comando de voz (Google Assistant e Alexa)",
    "WebOS 24 com Apps nativos"
  ],
  imagem: "https://a-static.mlcdn.com.br/800x560/smart-tv-lg-50-uhd-4k-50ur8750-thinq-ai-webos-24-hdr-wi-fi-bluetooth-3-hdmi-2-usb/magazineluiza/236478700/9a9f0dfdcb45e689c07b226dc4a33e1f.jpg",
  link: "https://www.magazineluiza.com.br/p/236478700/",
  tipo: "magalu"
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smart-tv-lg-50-4k-uhd-thinq-ai/magazineluiza/234513700/9e62e7d5cfb7a669c6c74b8ac9d5e332.jpg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smart-tv-lg-50-4k-uhd-thinq-ai/magazineluiza/234513700/9e62e7d5cfb7a669c6c74b8ac9d5e332.jpg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smart-tv-lg-50-4k-uhd-thinq-ai/magazineluiza/234513700/9e62e7d5cfb7a669c6c74b8ac9d5e332.jpg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x560/smartphone-xiaomi-poco-m7-pro-5g-nfc-256gb-16gb-ramboost-lancamento-2025-camera-dzopu-50mp-ois-fhd-plus-amoled-120hz-celular-premium-design-roso/mastercomerciodeprodutosltda/cel-unity-01/ce09e4620ac5f8881613584d7998aeda.jpeg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smart-tv-lg-50-4k-uhd-thinq-ai/magazineluiza/234513700/9e62e7d5cfb7a669c6c74b8ac9d5e332.jpg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smart-tv-lg-50-4k-uhd-thinq-ai/magazineluiza/234513700/9e62e7d5cfb7a669c6c74b8ac9d5e332.jpg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smart-tv-lg-50-4k-uhd-thinq-ai/magazineluiza/234513700/9e62e7d5cfb7a669c6c74b8ac9d5e332.jpg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
},
{
  nome: "Samsung Galaxy S23 FE 256GB 8GB RAM 5G - Verde",
  precoAntigo: 3999,
  precoAtual: 2999,
  desconto: "25% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s23-fe-256gb-8gb-ram/magazineluiza/1234567890/abcdef.jpg",
  link: "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s23-fe/p/1234567890",
  tipo: "magalu",
},
{
  nome: "Smart TV LG 50\" 4K UHD ThinQ AI com Alexa Integrada",
  precoAntigo: 2999,
  precoAtual: 2299,
  desconto: "23% OFF",
  imagem: "https://a-static.mlcdn.com.br/800x600/smart-tv-lg-50-4k-uhd-thinq-ai/magazineluiza/234513700/9e62e7d5cfb7a669c6c74b8ac9d5e332.jpg",
  link: "https://www.magazineluiza.com.br/smart-tv-lg-50-4k-uhd-thinq-ai/p/234513700",
  tipo: "magalu",
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

/* ✨ EFEITO DE BRILHO SUAVE NOS SELOS DAS LOJAS */
const estiloBrilho = document.createElement("style");
estiloBrilho.textContent = `
  @keyframes brilho-horizontal {
    0% { background-position: -120px 0; }
    100% { background-position: 120px 0; }
  }
  .selo-loja {
    background-image: linear-gradient(
      120deg,
      rgba(255,255,255,0.3) 0%,
      rgba(255,255,255,0.6) 20%,
      rgba(255,255,255,0.3) 40%
    );
    background-size: 200px 100%;
    animation: brilho-horizontal 3s linear infinite;
    background-blend-mode: overlay;
  }
`;
document.head.appendChild(estiloBrilho);



// ===================== RENDER MERCADO LIVRE + AMAZON =====================
function renderizarMercadoLivre(lista) {
  const banner = document.getElementById("bannerOfertas");
  if (!banner) return;
  banner.innerHTML = "";

  lista
    .filter(p => ["mercadolivre", "amazon"].includes(p.tipo))
    .forEach(p => {
      const isAmazon = p.tipo === "amazon";

      // Cores institucionais
      const corBorda = isAmazon ? "#232F3E" : "#FFF159";
      const bgGradient = isAmazon
        ? "bg-gradient-to-b from-[#232F3E] to-[#3A4553]"
        : "bg-gradient-to-b from-[#FFF159] to-[#FFFBEA]";
      const logoSrc = isAmazon
        ? "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        : "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.23.1/mercadolibre/logo__small.png";

      // Card principal
      const destaque = document.createElement("div");
      destaque.className = `
        relative rounded-lg flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 overflow-hidden 
        transition-transform duration-300 cursor-pointer hover:scale-105
      `;
      destaque.style.border = `2px solid ${corBorda}80`;
      destaque.style.boxShadow = `0 1px 4px rgba(0,0,0,0.1)`;

      // === Hover com brilho ===
      destaque.addEventListener("mouseenter", () => {
        destaque.style.boxShadow = `0 0 8px 2px ${corBorda}55`;
      });
      destaque.addEventListener("mouseleave", () => {
        destaque.style.boxShadow = `0 1px 4px rgba(0,0,0,0.1)`;
      });

      destaque.innerHTML = `
        <div class="flex flex-col items-center justify-center w-full mb-1 relative">
          <!-- Fundo com gradiente -->
          <div class="${bgGradient} rounded-md w-full h-20 overflow-hidden flex items-center justify-center">
            <img src="${p.imagem}" alt="${p.nome}" 
                 class="max-h-20 object-contain rounded-md transition-transform duration-300 hover:scale-105 drop-shadow-sm">
          </div>

          <!-- ✅ Selo -->
          <div class="mt-[3px] w-full flex items-center justify-center border border-gray-300 bg-white rounded-md shadow-sm py-[2px] h-[18px]">
            <img src="${logoSrc}" alt="${isAmazon ? "Amazon" : "Mercado Livre"}" class="h-3 sm:h-4">
          </div>
        </div>

        <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8 text-gray-800">
          ${p.nome}
        </h2>
        <p class="line-through text-gray-500 text-[9px]">
          ${p.precoAntigo ? `R$ ${p.precoAntigo.toFixed(2)}` : ""}
        </p>
        <p class="${isAmazon ? "text-amber-700" : "text-green-700"} font-extrabold text-[12px]">
          R$ ${p.precoAtual.toFixed(2)}
        </p>
        <span class="text-[9px] ${isAmazon ? "text-amber-600" : "text-green-600"} font-medium">
          ${p.desconto || ""}
        </span>
      `;

      // Eventos adicionais
      destaque.addEventListener("touchstart", () => {
        longPressTimer = setTimeout(() => mostrarTooltip(p, destaque, isAmazon ? "magalu" : "ml"), 400);
      }, { passive: true });
      destaque.addEventListener("touchend", () => {
        clearTimeout(longPressTimer);
        esconderTooltip();
      });
      destaque.addEventListener("click", () => abrirModalPorTipo(p));

      banner.appendChild(destaque);
    });
}


// ===================== RENDER MAGAZINE LUIZA + AMAZON =====================
function renderizarMagalu(lista) {
  const bannerMagalu = document.getElementById("bannerMagalu");
  if (!bannerMagalu) return;
  bannerMagalu.innerHTML = "";

  lista
    .filter(p => ["magalu", "amazon"].includes(p.tipo))
    .forEach(p => {
      const isAmazon = p.tipo === "amazon";

      // Cores institucionais
      const corBorda = isAmazon ? "#232F3E" : "#007BFF";
      const bgGradient = isAmazon
        ? "bg-gradient-to-b from-[#232F3E] to-[#3A4553]"
        : "bg-gradient-to-b from-[#007BFF] to-[#E3F2FF]";
      const logoHTML = isAmazon
        ? `<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" class="h-3 sm:h-4">`
        : `<span class="text-[9px] sm:text-[10px] font-bold tracking-wide magalu-gradient uppercase">MAGALU</span>`;

      // Card principal
      const card = document.createElement("div");
      card.className = `
        relative rounded-lg flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 overflow-hidden 
        transition-transform duration-300 cursor-pointer hover:scale-105
      `;
      card.style.border = `2px solid ${corBorda}80`;
      card.style.boxShadow = `0 1px 4px rgba(0,0,0,0.1)`;

      // === Hover com brilho ===
      card.addEventListener("mouseenter", () => {
        card.style.boxShadow = `0 0 8px 2px ${corBorda}55`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.boxShadow = `0 1px 4px rgba(0,0,0,0.1)`;
      });

      card.innerHTML = `
        <div class="flex flex-col items-center justify-center w-full mb-1 relative">
          <!-- Fundo com gradiente -->
          <div class="${bgGradient} rounded-md w-full h-20 overflow-hidden flex items-center justify-center">
            <img src="${p.imagem}" alt="${p.nome}" 
                 class="max-h-20 object-contain rounded-md transition-transform duration-300 hover:scale-105 drop-shadow-sm">
          </div>

          <!-- ✅ Selo -->
          <div class="mt-[3px] w-full flex items-center justify-center border border-gray-300 bg-white rounded-md shadow-sm py-[2px] h-[18px]">
            ${logoHTML}
          </div>
        </div>

        <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8 text-gray-800">${p.nome}</h2>
        <p class="line-through text-gray-500 text-[9px]">${p.precoAntigo ? `R$ ${p.precoAntigo.toFixed(2)}` : ""}</p>
        <p class="${isAmazon ? "text-amber-700" : "text-blue-700"} font-extrabold text-[12px]">
          R$ ${p.precoAtual.toFixed(2)}
        </p>
        <span class="text-[9px] ${isAmazon ? "text-amber-600" : "text-blue-600"} font-medium">
          ${p.desconto || ""}
        </span>
      `;

      card.addEventListener("touchstart", () => {
        longPressTimer = setTimeout(() => mostrarTooltip(p, card, isAmazon ? "magalu" : "magalu"), 400);
      }, { passive: true });
      card.addEventListener("touchend", () => {
        clearTimeout(longPressTimer);
        esconderTooltip();
      });
      card.addEventListener("click", () => abrirModalPorTipo(p));

      bannerMagalu.appendChild(card);
    });
}




// ===================== RENDERIZAR CARDS GERAIS (MESCLADO E COLORIDO) =====================
function renderizarCardsGerais(lista) {
  const container = document.getElementById("listaProdutos");
  if (!container) return;
  container.innerHTML = "";

  lista.forEach((p) => {
    const card = document.createElement("div");

    // === Cores por tipo ===
    let corBorda, brilhoHover, bgGradient, corTexto;
    switch (p.tipo) {
      case "mercadolivre":
        corBorda = "#FFF159"; brilhoHover = "#FFF15955";
        bgGradient = "linear-gradient(to bottom, #FFF159, #FFFBEA)";
        corTexto = "#137333";
        break;
      case "magalu":
        corBorda = "#007BFF"; brilhoHover = "#00C8FF55";
        bgGradient = "linear-gradient(to bottom, #007BFF, #E3F2FF)";
        corTexto = "#0052CC";
        break;
      case "amazon":
        corBorda = "#232F3E"; brilhoHover = "#232F3E66";
        bgGradient = "linear-gradient(to bottom, #232F3E, #3A4553)";
        corTexto = "#FF9900";
        break;
      default: // vendedor local
        corBorda = "#8B5CF6"; brilhoHover = "#8B5CF655";
        bgGradient = "linear-gradient(to bottom, #8B5CF6, #F3E8FF)";
        corTexto = "#6D28D9";
    }

    // === Estrutura do card ===
    card.className = `
  relative rounded-lg shadow-md flex flex-col items-center justify-start p-1
  w-[23.5%] sm:w-28 md:w-24 lg:w-[11%] overflow-hidden
  transition-transform duration-300 cursor-pointer hover:scale-105
`;
    card.style.border = `2px solid ${corBorda}80`;
    card.style.boxShadow = `0 1px 4px rgba(0,0,0,0.1)`;

    // Hover brilho
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = `0 0 8px 2px ${brilhoHover}`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = `0 1px 4px rgba(0,0,0,0.1)`;
    });

    // === Conteúdo ===
    const localTexto = p.tipo === "usuario" && p.cidade
      ? `${p.cidade}${p.estado ? `-${p.estado}` : ""}`
      : "LOCAL";

    card.innerHTML = `
      <div class="flex flex-col items-center justify-center w-full mb-1 relative">
        <div class="rounded-md w-full h-20 overflow-hidden flex items-center justify-center"
             style="background:${bgGradient}">
          <img src="${p.imagem}" alt="${p.nome}" 
               class="max-h-20 object-contain rounded-md transition-transform duration-300 hover:scale-105 drop-shadow-sm">
        </div>

        <!-- ✅ Selo com cidade e WhatsApp -->
        <div class="mt-[3px] w-full flex items-center justify-center gap-1 border border-gray-200 bg-white rounded-md shadow-sm py-[2px] h-[18px]">
          ${
            p.tipo === "mercadolivre"
              ? `<img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.23.1/mercadolibre/logo__small.png" class="h-3 sm:h-4">`
              : p.tipo === "magalu"
              ? `<span class="text-[9px] sm:text-[10px] font-bold tracking-wide magalu-gradient uppercase">MAGALU</span>`
              : p.tipo === "amazon"
              ? `<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" class="h-3 sm:h-4">`
              : `
                <div class="flex items-center gap-[3px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#10B981" viewBox="0 0 24 24" class="w-3.5 h-3.5">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.38 0 .03 5.35.03 12c0 2.11.55 4.17 1.59 6.02L0 24l6.18-1.59A11.97 11.97 0 0 0 12 24c6.62 0 12-5.35 12-12 0-3.19-1.25-6.19-3.48-8.52ZM12 22.08a10.02 10.02 0 0 1-5.12-1.41l-.36-.21-3.67.94.98-3.57-.23-.37A9.93 9.93 0 0 1 1.92 12C1.92 6.51 6.51 1.92 12 1.92S22.08 6.51 22.08 12 17.49 22.08 12 22.08Zm5.45-7.08c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15s-.78.98-.95 1.18-.35.22-.65.07a8.18 8.18 0 0 1-2.4-1.48 9.1 9.1 0 0 1-1.7-2.1c-.18-.3 0-.45.14-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.07-.8.38s-1.05 1.02-1.05 2.48 1.08 2.88 1.23 3.08c.15.2 2.13 3.25 5.16 4.56.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.08 1.78-.72 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.25-.2-.55-.35Z"/>
                  </svg>
                  <span class="text-[8.5px] sm:text-[9px] font-semibold text-purple-700">${localTexto}</span>
                </div>
              `
          }
        </div>
      </div>

      <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8 text-gray-800">${p.nome}</h2>
      <p class="line-through text-gray-500 text-[9px]">
        ${p.precoAntigo ? `R$ ${p.precoAntigo.toFixed(2)}` : ""}
      </p>
      <p class="font-extrabold text-[12px]" style="color:${corTexto}">
        R$ ${p.precoAtual.toFixed(2)}
      </p>
      <span class="text-[9px] font-medium" style="color:${corTexto}">
        ${p.desconto || ""}
      </span>
    `;

    // Clique → modal
    card.addEventListener("click", () => abrirModalPorTipo(p));

    container.appendChild(card);
  });
}






// ===================== ABRIR MODAL POR TIPO =====================
function abrirModalPorTipo(p) {
  // 🔹 Mercado Livre
  if (p.tipo === "mercadolivre") {
    abrirModal(p);
    return;
  }

  // 🔹 Magazine Luiza
  if (p.tipo === "magalu") {
    abrirMagaluModal(p);
    return;
  }

  // 🔹 Amazon (usa modal Magalu adaptado)
  if (p.tipo === "amazon") {
    const modal = document.getElementById("magaluModal");
    const box = document.getElementById("magaluModalBox");
    document.getElementById("magaluModalImage").src = p.imagem;
    document.getElementById("magaluModalTitle").textContent = p.nome;
    document.getElementById("magaluModalOldPrice").textContent =
      p.precoAntigo ? `R$ ${p.precoAntigo.toFixed(2)}` : "";
    document.getElementById("magaluModalPrice").textContent = `R$ ${p.precoAtual.toFixed(2)}`;
    document.getElementById("magaluModalDiscount").textContent = p.desconto || "";
    document.getElementById("magaluModalLink").href = p.link || "#";

    // 🔸 Ajuste visual Amazon
    const logoImg = box.querySelector('img[alt="Magazine Luiza"]');
    if (logoImg) {
      logoImg.src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg";
    }
    box.style.borderColor = "#ff9900";
    box.style.background = "linear-gradient(to bottom right,#fff,#fff6e6)";

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    setTimeout(() => {
      box.classList.remove("scale-95", "opacity-0");
      box.classList.add("scale-100", "opacity-100");
    }, 40);

    document.getElementById("closeMagaluModal").onclick = fecharMagaluModal;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) fecharMagaluModal();
    });
    return;
  }

  // 🔹 Vendedores locais (usuário)
  abrirUserModal(p);
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

// ===================== MODAL MAGAZINE LUIZA =====================
function abrirMagaluModal(p) {
  const modal = document.getElementById("magaluModal");
  const box = document.getElementById("magaluModalBox");

  document.getElementById("magaluModalImage").src = p.imagem;
  document.getElementById("magaluModalTitle").textContent = p.nome;
  document.getElementById("magaluModalOldPrice").textContent = `R$ ${p.precoAntigo.toFixed(2)}`;
  document.getElementById("magaluModalPrice").textContent = `R$ ${p.precoAtual.toFixed(2)}`;
  document.getElementById("magaluModalDiscount").textContent = p.desconto || "";
  document.getElementById("magaluModalLink").href = p.link;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  setTimeout(() => {
    box.classList.remove("scale-95", "opacity-0");
    box.classList.add("scale-100", "opacity-100");
  }, 50);

  document.getElementById("closeMagaluModal").onclick = fecharMagaluModal;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharMagaluModal();
  });
}

function fecharMagaluModal() {
  const modal = document.getElementById("magaluModal");
  const box = document.getElementById("magaluModalBox");
  box.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 200);
}

// Compartilhar link
document.addEventListener("click", (e) => {
  if (e.target.id === "btnCompartilharMagalu") {
    const link = document.getElementById("magaluModalLink").href;
    const titulo = document.getElementById("magaluModalTitle").textContent;
    if (navigator.share) {
      navigator.share({
        title: "Oferta no Magazine Luiza",
        text: `Confira este produto: ${titulo}`,
        url: link,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(link);
      alert("🔗 Link copiado para a área de transferência!");
    }
  }
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

// ========= TOOLTIP GLOBAL =========
let tooltipEl = null;
let longPressTimer = null;

function criarTooltip() {
  if (tooltipEl) return;
  tooltipEl = document.createElement("div");
  tooltipEl.id = "miniTooltip";
  tooltipEl.className =
    "fixed z-[9999] hidden max-w-[240px] rounded-lg border bg-white shadow-xl p-2 text-[11px] leading-tight";
  document.body.appendChild(tooltipEl);
}

function preencherTooltip(p, tema = "ml") {
  const corPreco = tema === "ml" ? "text-green-700" : "text-blue-700";
  const borda = tema === "ml" ? "border-yellow-300" : "border-blue-300";
  const corEntrega = tema === "ml" ? "text-yellow-600" : "text-blue-600";

  tooltipEl.classList.remove("border-yellow-300", "border-blue-300");
  tooltipEl.classList.add(borda);

  tooltipEl.innerHTML = `
    <p class="font-semibold text-gray-800 line-clamp-2">${p.nome}</p>
    <p class="${corPreco} font-bold mt-0.5">R$ ${p.precoAtual?.toFixed?.(2) ?? p.precoAtual}
      <span class="text-gray-500 font-normal">${p.desconto || ""}</span>
    </p>
    ${p.parcelas ? `<p class="text-gray-700">${p.parcelas}</p>` : ""}
    ${p.cor ? `<p class="text-gray-700"><b>Cor:</b> ${p.cor}</p>` : ""}
    ${p.memoriaRam ? `<p class="text-gray-700"><b>RAM:</b> ${p.memoriaRam}</p>` : ""}
    ${Array.isArray(p.detalhes) && p.detalhes.length
      ? `<ul class="list-disc list-inside text-gray-600 mt-1">${p.detalhes.map(d=>`<li>${d}</li>`).join("")}</ul>`
      : ""
    }

    <!-- Destaque da entrega -->
    <div class="mt-2 bg-gradient-to-r from-white to-${tema === "ml" ? "[#fff9d1]" : "blue-50"} border-l-4 ${borda} px-2 py-1 rounded-md">
      <p class="font-bold ${corEntrega} text-[10px] flex items-center gap-1">🚚 Entrega em até 2 dias!</p>
    </div>
  `;
}

function posicionarTooltip(pertoDoEl) {
  const r = pertoDoEl.getBoundingClientRect();
  const padding = 8;
  const top = window.scrollY + r.top - tooltipEl.offsetHeight - padding;
  const left = window.scrollX + r.left + (r.width/2) - (tooltipEl.offsetWidth/2);
  tooltipEl.style.top = Math.max(8, top) + "px";
  tooltipEl.style.left = Math.max(8, left) + "px";
}

function mostrarTooltip(p, cardEl, tema) {
  criarTooltip();
  preencherTooltip(p, tema);
  tooltipEl.classList.remove("hidden");
  // precisa medir depois de mostrar para posicionar certinho
  requestAnimationFrame(()=>posicionarTooltip(cardEl));
}

function esconderTooltip() {
  if (tooltipEl) tooltipEl.classList.add("hidden");
}

// ===================== ROLAGEM AUTOMÁTICA MERCADO LIVRE (CORRIGIDA) =====================
let mlRafId = null;
let mlPaused = false;

function iniciarRolagemAutomaticaML() {
  const faixa = document.getElementById("bannerOfertas");
  if (!faixa) return;

  // 🔹 O contêiner real com overflow-x-auto é o PAI da faixa
  const scroller = faixa.parentElement;
  if (!scroller) return;

  // Evita múltiplos loops
  if (mlRafId) cancelAnimationFrame(mlRafId);

  let direcao = 1;          // 1 = direita | -1 = esquerda
  const velocidade = 0.5;   // pixels por frame

  // Pausar quando o usuário interage
  const pause = () => (mlPaused = true);
  const resume = () => (mlPaused = false);
  scroller.addEventListener("mouseenter", pause);
  scroller.addEventListener("mouseleave", resume);
  scroller.addEventListener("touchstart", pause, { passive: true });
  scroller.addEventListener("touchend", resume, { passive: true });

  function loop() {
    if (!mlPaused) {
      scroller.scrollLeft += direcao * velocidade;

      // Inverter nas extremidades
      if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1) direcao = -1;
      else if (scroller.scrollLeft <= 0) direcao = 1;
    }
    mlRafId = requestAnimationFrame(loop);
  }

  loop();
}

// ===================== ROLAGEM AUTOMÁTICA MAGAZINE LUIZA =====================
let magaluRafId = null;
let magaluPaused = false;

function iniciarRolagemAutomaticaMagalu() {
  const faixa = document.getElementById("bannerMagalu");
  if (!faixa) return;

  // O contêiner real com overflow-x-auto é o PAI da faixa
  const scroller = faixa.parentElement;
  if (!scroller) return;

  if (magaluRafId) cancelAnimationFrame(magaluRafId);

  let direcao = 1;          // 1 = direita | -1 = esquerda
  const velocidade = 0.5;   // pixels por frame

  const pause = () => (magaluPaused = true);
  const resume = () => (magaluPaused = false);
  scroller.addEventListener("mouseenter", pause);
  scroller.addEventListener("mouseleave", resume);
  scroller.addEventListener("touchstart", pause, { passive: true });
  scroller.addEventListener("touchend", resume, { passive: true });

  function loop() {
    if (!magaluPaused) {
      scroller.scrollLeft += direcao * velocidade;

      if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1) direcao = -1;
      else if (scroller.scrollLeft <= 0) direcao = 1;
    }
    magaluRafId = requestAnimationFrame(loop);
  }

  loop();
}

// 🔹 Inicia após renderizar todos os cards
window.addEventListener("load", iniciarRolagemAutomaticaML);

// ===================== FILTROS FUNCIONAIS (INCLUINDO FILTRO DE ORIGEM) =====================
function aplicarFiltros() {
  const busca = (document.getElementById("buscaInput")?.value || "").toLowerCase();
  const marca = (document.getElementById("filtroMarca")?.value || "").toLowerCase();
  const estado = document.getElementById("filtroEstado")?.value || "";
  const preco = document.getElementById("filtroPreco")?.value || "";

  // 🔹 Captura as origens selecionadas (mercadolivre, magalu, amazon, usuario)
  const origensSelecionadas = Array.from(document.querySelectorAll(".origemCheck:checked"))
    .map(c => c.value);

  // 🔹 Aplica os filtros combinados
  const filtrados = produtos.filter(p => {
    // Origem (loja)
    if (origensSelecionadas.length && !origensSelecionadas.includes(p.tipo)) return false;

    // Busca por texto ou marca
    if (busca && !p.nome.toLowerCase().includes(busca)) return false;
    if (marca && !p.nome.toLowerCase().includes(marca)) return false;

    // Estado (somente vendedores locais)
    if (estado && p.tipo === "usuario" && p.estado !== estado) return false;

    // Faixas de preço
    if (preco === "0" && p.precoAtual > 500) return false;
    if (preco === "0b" && p.precoAtual > 1000) return false;
    if (preco === "1" && p.precoAtual > 2000) return false;
    if (preco === "2" && (p.precoAtual < 2000 || p.precoAtual > 4000)) return false;
    if (preco === "3" && p.precoAtual < 4000) return false;

    return true;
  });

  // 🔹 Ativa o modo-filtro visual (mantém banners recolhidos e cards subindo)
  ativarModoFiltro(true);

  // 🔹 Renderiza os produtos filtrados
  renderizarCardsGerais(filtrados);

  // 🔹 Se nenhum produto for encontrado, mostra aviso simples
  if (filtrados.length === 0) {
    const container = document.getElementById("listaProdutos");
    container.innerHTML = `
      <div class="text-center text-gray-600 bg-white rounded-md p-4 shadow-sm mt-4 border border-gray-200 w-full">
        <span class="block text-lg font-semibold">😕 Nenhum produto encontrado</span>
        <span class="text-sm text-gray-500">Tente alterar os filtros ou limpar a busca.</span>
      </div>
    `;
  }
}


// ===================== BOTÃO 🔍 SCROLL ATÉ O TOPO =====================
btnBusca.addEventListener("click", () => {
  const barra = document.getElementById("barraFiltros");
  if (!barra) return;
  barra.classList.toggle("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===================== CRIAR BARRA DE FILTROS (MOBILE: 4 BOTÕES + 3 SELECTS EM UMA LINHA CADA) =====================
function criarBarraFiltros() {
  const mlSection = document.querySelector(".ml-selo");
  const barra = document.createElement("div");
  barra.id = "barraFiltros";
  barra.className =
    "hidden text-white rounded-xl mt-2 p-3 shadow-md flex flex-col items-center justify-center gap-3 max-w-6xl mx-auto animate-fade-in";

  barra.innerHTML = `
    <!-- 🔍 BUSCA (Linha 1) -->
    <div class="w-full flex justify-center relative">
      <input id="buscaInput" type="text" placeholder="Buscar modelo ou marca..."
        class="w-full bg-gray-900/90 text-yellow-200 border border-yellow-400 rounded-full pl-9 pr-3 py-2 text-[14px]
        focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-300 placeholder-yellow-300/70 shadow-inner" />
      <svg class="absolute left-7 top-2.5 w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"
        d="M21 21l-5.2-5.2M11 18a7 7 0 100-14 7 7 0 000 14z" /></svg>
    </div>

    <!-- 🟨 MINI-FILTROS (Linha 3 no mobile — 3 colunas: Estado / Preço / Modelo) -->
    <div id="miniFiltrosArea" class="flex flex-wrap justify-center items-center gap-3 w-full mt-1 sm:flex sm:flex-wrap">
      <select id="filtroEstado" class="bg-black/70 text-yellow-300 border border-yellow-400/40 rounded-full px-4 py-2 text-sm font-semibold shadow hover:scale-105 transition w-full sm:w-auto">
        <option value="">Estado</option>
        <option>AL</option><option>PE</option><option>BA</option><option>SE</option><option>PB</option><option>CE</option>
      </select>

      <select id="filtroPreco" class="bg-black/70 text-yellow-300 border border-yellow-400/40 rounded-full px-4 py-2 text-sm font-semibold shadow hover:scale-105 transition w-full sm:w-auto">
        <option value="">Preço</option>
        <option value="0">Até R$ 500</option>
        <option value="0b">Até R$ 1000</option>
        <option value="1">Até R$ 2000</option>
        <option value="2">R$ 2000–R$ 4000</option>
        <option value="3">+ R$ 4000</option>
      </select>

      <!-- Mantive o id 'filtroMarca' para não quebrar sua função aplicarFiltros(); label exibido como "Modelo/Marca" -->
      <select id="filtroMarca" class="bg-black/70 text-yellow-300 border border-yellow-400/40 rounded-full px-4 py-2 text-sm font-semibold shadow hover:scale-105 transition w-full sm:w-auto">
        <option value="">Modelo/Marca</option>
        <option>Apple</option><option>Samsung</option><option>Xiaomi</option>
        <option>Motorola</option><option>Realme</option><option>POCO</option>
      </select>
    </div>

    <!-- 🏷️ FILTRO DE ORIGEM (Linha 2 no mobile — 4 colunas) -->
    <div id="filtroOrigem" class="flex flex-wrap gap-2 justify-center items-center text-xs font-semibold mt-2 w-full sm:flex sm:flex-wrap">
      <label for="origem-mercadolivre" class="flex items-center gap-2 cursor-pointer ativo bg-gradient-to-r from-yellow-400/20 to-yellow-400/5 px-3 py-2 rounded-full border border-yellow-400/40 hover:scale-105 transition w-full sm:w-auto justify-center">
        <input type="checkbox" id="origem-mercadolivre" class="origemCheck" value="mercadolivre" checked />
        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.23.1/mercadolibre/logo__small.png"
          class="logo-filtro ml-logo w-5 h-5" alt="Mercado Livre" />
        <span>Mercado Livre</span>
      </label>

      <label for="origem-magalu" class="flex items-center gap-2 cursor-pointer ativo bg-gradient-to-r from-blue-400/20 to-blue-400/5 px-3 py-2 rounded-full border border-blue-400/40 hover:scale-105 transition w-full sm:w-auto justify-center">
        <input type="checkbox" id="origem-magalu" class="origemCheck" value="magalu" checked />
        <img src="https://mvc.mlcdn.com.br/magazinevoce/img/common/influenciador-magalu-logo-blue.svg"
          class="logo-filtro magalu-logo w-5 h-5" alt="Magalu" />
        <span>Magalu</span>
      </label>

      <label for="origem-amazon" class="flex items-center gap-2 cursor-pointer ativo bg-gradient-to-r from-black/70 to-gray-900 px-3 py-2 rounded-full border border-gray-500/50 hover:scale-105 transition w-full sm:w-auto justify-center">
        <input type="checkbox" id="origem-amazon" class="origemCheck" value="amazon" checked />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          class="logo-filtro amazon-logo w-6 h-4" alt="Amazon" />
        <span>Amazon</span>
      </label>

      <label for="origem-usuario" class="flex items-center gap-2 cursor-pointer ativo bg-gradient-to-r from-green-400/20 to-green-400/5 px-3 py-2 rounded-full border border-green-400/40 hover:scale-105 transition w-full sm:w-auto justify-center">
        <input type="checkbox" id="origem-usuario" class="origemCheck" value="usuario" checked />
        <img src="https://cdn-icons-png.flaticon.com/512/681/681494.png"
          class="logo-filtro local-logo w-5 h-5" alt="Locais" />
        <span>Locais</span>
      </label>
    </div>
  `;

  // Inserção
  if (mlSection) {
  mlSection.insertAdjacentElement("afterend", barra);
} else {
  document.body.insertBefore(barra, document.body.firstChild);
}

// 🔹 Garante que o filtro inicie oculto
barra.classList.add("hidden");

// === EVENTOS DE FILTROS PRINCIPAIS ===
["buscaInput", "filtroMarca", "filtroEstado", "filtroPreco"].forEach((id) => {
  const el = barra.querySelector(`#${id}`);
  ["input", "change"].forEach((evt) => el.addEventListener(evt, aplicarFiltros));
});

// === CONTROLE VISUAL DOS BOTÕES DE ORIGEM ===
barra.querySelectorAll(".origemCheck").forEach((chk) => {
  const label = chk.closest("label");
  chk.checked = false;                // começa desmarcado
  label.classList.remove("ativo");    // remove cor ativa
  label.classList.add("inativo");     // aplica fundo branco

  chk.addEventListener("change", () => {
    const ativo = chk.checked;
    label.classList.toggle("ativo", ativo);
    label.classList.toggle("inativo", !ativo);
    aplicarFiltros();
  });
});
}

// ===================== ATIVAR / DESATIVAR MODO FILTRO =====================
function ativarModoFiltro(ativo) {
  const body = document.body;
  const btn = document.getElementById("btnBuscaFlutuante");
  const barra = document.getElementById("barraFiltros");

  // Elementos que somem no modo filtro
  const selo = document.querySelector("#seloConfianca, .selo-multimarcas, .selo-topo");
  const banners = ["bannerOfertas", "bannerMagalu"];
  const faixas = [
    "faixaOfertasVerificadas",  // 🔥 Ofertas Verificadas e Confiáveis
    "faixaTodosProdutos"        // 📦 Todos os Produtos Anunciados
  ];

  if (ativo) {
    // === MODO FILTRO ATIVADO ===
    body.classList.add("modo-filtro");
    if (btn) {
      btn.classList.add("ativo");
      btn.textContent = "⨯ Fechar Filtro";
    }

    // Esconde selo e banners
    if (selo) selo.classList.add("hidden");
    banners.forEach(id => document.getElementById(id)?.classList.add("hidden"));

    // Esconde também as faixas principais
    faixas.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hidden");
    });

    // Mostra barra
    if (barra) {
      barra.classList.remove("hidden");
      barra.style.opacity = "0";
      barra.style.transform = "translateY(-10px)";
      requestAnimationFrame(() => {
        barra.style.transition = "all 0.4s ease";
        barra.style.opacity = "1";
        barra.style.transform = "translateY(0)";
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

  } else {
    // === MODO FILTRO DESATIVADO ===
    body.classList.remove("modo-filtro");
    if (btn) {
      btn.classList.remove("ativo");
      btn.textContent = "🔍 Buscar / Filtrar";
    }

    // Reexibe selo, banners e faixas
    if (selo) selo.classList.remove("hidden");
    banners.forEach(id => document.getElementById(id)?.classList.remove("hidden"));
    faixas.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove("hidden");
    });

    // Esconde a barra
    if (barra) {
      barra.style.transition = "all 0.35s ease";
      barra.style.opacity = "0";
      barra.style.transform = "translateY(-10px)";
      setTimeout(() => barra.classList.add("hidden"), 350);
    }

    // Re-renderiza produtos
    if (typeof renderizarMercadoLivre === "function") renderizarMercadoLivre(produtos);
    if (typeof renderizarMagalu === "function") renderizarMagalu(produtos);
    if (typeof renderizarCardsGerais === "function") renderizarCardsGerais(produtos);
  }
}



// ===================== EVENTO DO BOTÃO 🔍 / ⨯ =====================
document.addEventListener("DOMContentLoaded", () => {
  const btnBusca = document.getElementById("btnBuscaFlutuante");
  const barra = document.getElementById("barraFiltros");
  let filtroAtivo = false;

  btnBusca.addEventListener("click", () => {
    filtroAtivo = !filtroAtivo;
    ativarModoFiltro(filtroAtivo);

    // Alternar exibição da barra de filtros
    if (barra) barra.classList.toggle("hidden");
  });
});

// ===================== INIT =====================
window.addEventListener("DOMContentLoaded", () => {
  renderizarMercadoLivre(produtos);
  renderizarMagalu(produtos);
  renderizarCardsGerais(produtos); // ✅ substitui renderizarProdutosUsuarios()
  criarBarraFiltros();
  iniciarRolagemAutomaticaML();
  iniciarRolagemAutomaticaMagalu();

  // ✅ Exibir contador inicial profissional
  const contador = document.getElementById("contadorResultados");
  if (contador) {
    const total = produtos.length;
    const ml = produtos.filter(p => p.tipo === "mercadolivre").length;
    const magalu = produtos.filter(p => p.tipo === "magalu").length;
    const amazon = produtos.filter(p => p.tipo === "amazon").length;
    const usuario = produtos.filter(p => p.tipo === "usuario").length;

    contador.innerHTML = `
      <span class="total">📱 ${total} produtos disponíveis</span>
      <span class="mercadolivre">ML: ${ml}</span>
      <span class="magalu">Magalu: ${magalu}</span>
      <span class="amazon">Amazon: ${amazon}</span>
      <span class="usuario">Vendedores Locais: ${usuario}</span>
    `;
  }
});



// ===================== DADOS DOS PRODUTOS =====================
const produtos = [
  // ======= MERCADO LIVRE =======
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
  cor: "Prata",
  memoriaRam: "6 GB",
  detalhes: [
    "Tela de 6.7”",
    "Bateria de 5000mAh",
    "Memória interna de 128GB",
    "Desbloqueado",
    "Sensor de impressão lateral"
  ],
  envio: "Frete grátis acima de R$19 / FULL",
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
  tipo: "mercadolivre",
  nome: "Samsung Galaxy A16 4G 256GB 8GB RAM - Câmera até 50MP, Tela 6.7'', NFC, IP54, Bateria 5000mAh - Preto",
  precoAntigo: 1855.72,
  precoAtual: 1061.10,
  desconto: "42% OFF",
  parcelas: "18x R$ 65,50 sem juros",
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_776838-MLA93117611065_092025-F.webp",
  link: "https://mercadolivre.com/sec/1P4j2tw",
  estoque: 50,
  estoqueTotal: 60
  },
  {
  tipo: "mercadolivre",
  nome: "Smartphone Motorola Moto G05 128GB 12GB (4GB RAM + 8GB Boost) Câmera 50MP AI Bateria 5200mAh Tela 6.7'' Superbrilho - Cinza",
  precoAntigo: 1138.56,
  precoAtual: 568.80,
  desconto: "50% OFF",
  parcelas: "12x R$ 52,67 sem juros",
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_802075-MLA91491750282_092025-F.webp",
  link: "https://mercadolivre.com/sec/2KosJYH",
  estoque: 50,
  estoqueTotal: 60
  },
  {
  tipo: "mercadolivre",
  nome: "Samsung Galaxy A06 Dual SIM 128GB 4GB RAM - Branco",
  precoAntigo: 899.00,
  precoAtual: 660.66,
  desconto: "26% OFF",
  parcelas: "11x R$ 60,08 sem juros",
  imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_679802-MLA79052664754_092024-F.webp",
  link: "https://mercadolivre.com/sec/1CrAqpc",
  estoque: 50,
  estoqueTotal: 60
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
  tipo: "magalu",
  nome: "Smartphone Xiaomi POCO X7 5G 512GB / 256GB NFC Tela AMOLED 120Hz Câmera Tripla 4K 50MP OIS - IP68 Design Premium",
  precoAntigo: 5398.00,
  precoAtual: 2307.55,
  desconto: "57% OFF",
  parcelas: "10x R$ 242,90 sem juros",
  imagem: "https://a-static.mlcdn.com.br/800x560/smartphone-xiaomi-poco-x7-5g-512gb-256gb-nfc-tela-amoled-120-hz-camera-tripla-4k-50mp-ois-desempenho-performance-e-design-premium-ip68/mastercomerciodeprodutosltda/celular-ateb-8/a98a962539fcba76919f204298328aa9.jpeg",
  link: "https://magazineluiza.onelink.me/589508454/qulmsdwz",
  estoque: 25,
  estoqueTotal: 30
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

// ===================== RENDER MERCADO LIVRE =====================
function renderizarMercadoLivre(lista) {
  banner.innerHTML = "";
  lista
    .filter((p) => p.tipo === "mercadolivre")
    .forEach((p) => {
      const destaque = document.createElement("div");
      destaque.className =
        "relative bg-white rounded-lg border border-black shadow-md flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 overflow-hidden transition-transform duration-300 card-mercadolivre cursor-pointer";

      destaque.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-md w-full h-20 overflow-hidden mb-1 relative">
          <img src="${p.imagem}" alt="${p.nome}"
               class="max-h-20 object-contain rounded-md transition-transform duration-300 hover:scale-105">
          <div class="absolute top-0 left-0 bg-[#fff159] px-1 py-0.5 rounded-br-md shadow-sm flex items-center justify-center">
            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.23.1/mercadolibre/logo__small.png"
                 alt="Mercado Livre" class="h-3 sm:h-4">
          </div>
        </div>
        <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8 text-gray-800">${p.nome}</h2>
        <p class="line-through text-gray-500 text-[9px]">${p.precoAntigo ? `R$ ${p.precoAntigo.toFixed(2)}` : ""}</p>
        <p class="text-green-700 font-extrabold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[9px] text-green-600 font-medium">${p.desconto || ""}</span>
      `;

      // — hover desktop
      destaque.addEventListener("mouseenter", () => mostrarTooltip(p, destaque, "ml"));
      destaque.addEventListener("mouseleave", esconderTooltip);

      // — long press mobile (~400ms)
      destaque.addEventListener("touchstart", () => {
        longPressTimer = setTimeout(()=>mostrarTooltip(p, destaque, "ml"), 400);
      }, {passive:true});
      destaque.addEventListener("touchend", () => {
        clearTimeout(longPressTimer);
        esconderTooltip();
      });

      // — clique abre o modal principal
      destaque.addEventListener("click", () => abrirModal(p));

      banner.appendChild(destaque);
    });
}



// ===================== RENDER MAGAZINE LUIZA =====================
function renderizarMagalu(lista) {
  const bannerMagalu = document.getElementById("bannerMagalu");
  if (!bannerMagalu) return;
  bannerMagalu.innerHTML = "";

  lista
    .filter((p) => p.tipo === "magalu")
    .forEach((p) => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-lg border border-blue-400 shadow-md flex-shrink-0 w-28 sm:w-36 flex flex-col items-center p-1 relative snap-start overflow-hidden cursor-pointer transition-transform duration-300";

      card.innerHTML = `
        <div class="flex items-center justify-center bg-blue-50 rounded-md w-full h-20 overflow-hidden mb-1 relative">
          <img src="${p.imagem}" alt="${p.nome}" class="max-h-20 object-contain rounded-md transition-transform duration-300 hover:scale-105">
          <div class="absolute top-0 left-0 bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-br-md shadow-sm">Magalu</div>
        </div>
        <h2 class="text-[10px] font-semibold text-center line-clamp-2 h-8 text-gray-800">${p.nome}</h2>
        <p class="line-through text-gray-500 text-[9px]">R$ ${p.precoAntigo?.toFixed(2) || ""}</p>
        <p class="text-blue-700 font-extrabold text-[12px]">R$ ${p.precoAtual.toFixed(2)}</p>
        <span class="text-[9px] text-blue-600 font-medium">${p.desconto}</span>
      `;

      card.addEventListener("click", () => abrirMagaluModal(p));
      bannerMagalu.appendChild(card);
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
  const linkCor = tema === "ml" ? "text-yellow-700" : "text-blue-700";

  tooltipEl.classList.remove("border-yellow-300","border-blue-300");
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
    ${p.link ? `<a class="block mt-1 underline ${linkCor}" target="_blank" href="${p.link}">ver produto</a>` : ""}
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
  renderizarMagalu(produtos);
  renderizarProdutosUsuarios(produtos);
  criarBarraFiltros();
  iniciarRolagemAutomaticaML();       // rolagem Mercado Livre
  iniciarRolagemAutomaticaMagalu();   // rolagem Magazine Luiza
});



/**
 * Catálogo Oficial La Table por Geraldina Ribeiro
 * Dados estruturados e limpos extraídos diretamente dos catálogos oficiais em PDF.
 */

export interface ProductPriceVariation {
  label: string;
  price: number;
  formattedPrice: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: 'cafe-da-manha' | 'boxes-presentes' | 'maternidade' | 'tabuas' | 'premium' | 'adicionais';
  shortDescription: string;
  description: string;
  items: string[];
  price: number;
  formattedPrice: string;
  priceVariations?: ProductPriceVariation[];
  dimensions?: string;
  serves?: string;
  packaging?: string;
  notes?: string[];
  image: string;
  catalogSource: string;
  featured?: boolean;
  orderUrl?: string;
}

export interface AddonItem {
  id: string;
  name: string;
  price: number | 'consultar';
  formattedPrice: string;
  category: string;
  description?: string;
}

export interface StoreInfo {
  name: string;
  brand: string;
  founder: string;
  tagline: string;
  bio: string;
  city: string;
  state: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram: string;
  instagramHandle: string;
  profileImage: string;
  standardPackagingNote: string;
}

export const STORE_INFO: StoreInfo = {
  name: "La Table",
  brand: "La Table",
  founder: "Geraldina Ribeiro",
  tagline: "Mais que presentes, são momentos especiais.",
  bio: "Aqui, cada cesta é preparada com carinho, pensando em mais do que um presente: transformamos encontros em experiência e refeição em memórias.",
  city: "Irecê",
  state: "BA",
  whatsapp: "5574999992045",
  whatsappDisplay: "(74) 99999-2045",
  instagram: "https://www.instagram.com/latable_irece",
  instagramHandle: "@latable_irece",
  profileImage: "/images/profile.jpeg",
  standardPackagingNote: "Todas as nossas cestas são embaladas com plástico filme e finalizadas com saco de celofane, laço de fita nobre e cartão personalizado com sua mensagem.",
};

export interface CatalogCategory {
  id: string;
  slug: 'todos' | 'cafe-da-manha' | 'boxes-presentes' | 'maternidade' | 'tabuas' | 'premium' | 'adicionais';
  name: string;
  subtitle: string;
  iconName?: string;
}

export const CATEGORIES: CatalogCategory[] = [
  {
    id: "todos",
    slug: "todos",
    name: "Todos os Itens",
    subtitle: "Navegue pelo cardápio completo de momentos especiais",
  },
  {
    id: "cafe-da-manha",
    slug: "cafe-da-manha",
    name: "Café da Manhã",
    subtitle: "Comece o dia com memórias inesquecíveis e afeto à mesa",
  },
  {
    id: "boxes-presentes",
    slug: "boxes-presentes",
    name: "Boxes & Presentes",
    subtitle: "Combinações com vinhos nobres, queijos finos e mimos especiais",
  },
  {
    id: "maternidade",
    slug: "maternidade",
    name: "Linha Maternidade",
    subtitle: "Delicadeza, orquídeas e carinho para a chegada do bebê",
  },
  {
    id: "tabuas",
    slug: "tabuas",
    name: "Tábuas & Gastronomia",
    subtitle: "Charcutaria refinada, queijos nobres e ilhas gastronômicas",
  },
  {
    id: "premium",
    slug: "premium",
    name: "Cestas Premium",
    subtitle: "Caixas cartonadas, acrílico cristal e maletas de pinus com couro",
  },
  {
    id: "adicionais",
    slug: "adicionais",
    name: "Mimos Agregáveis",
    subtitle: "Personalize sua cesta com bolos, balões, fotos e vinhos",
  },
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. Cestas de Café da Manhã & Família
  // ==========================================
  {
    id: "petit-coffee",
    name: "Petit Coffee",
    category: "Cestas de Café da Manhã",
    categorySlug: "cafe-da-manha",
    shortDescription: "Uma experiência especial e acolhedora para começar o dia.",
    description: "Cesta individual delicada com seleção de pães artesanais, drip coffee, queijos e frutas frescas selecionadas a dedo.",
    price: 155,
    formattedPrice: "R$ 155,00",
    dimensions: "20cm x 15cm (altura 5cm)",
    packaging: "Cesta artesanal com acabamento de laço e cartão",
    catalogSource: "CATALOGO  LA TABLE.pdf",
    image: "/images/products/petit-coffee.jpeg",
    featured: true,
    items: [
      "Croissant amanteigado",
      "Pães de queijo",
      "Mini bolinhos Madeleine",
      "Biscoitos folhados ou amanteigados",
      "Drip Coffee individual",
      "Mini sachê de manteiga",
      "Frutas frescas da estação",
      "Chocolate fino",
      "Queijo processado ou Minas Padrão",
      "Salame ou lombinho canadense",
      "Geleia artesanal",
      "Mix de nuts selecionados",
    ],
  },
  {
    id: "cesta-douce",
    name: "Cesta Douce",
    category: "Cestas de Café da Manhã",
    categorySlug: "cafe-da-manha",
    shortDescription: "Um presente pensado para encantar aos olhos e ao paladar.",
    description: "Equilíbrio perfeito entre doçura e sofisticação, incluindo suco integral, stroopwafel holandês e dois cafés individuais.",
    price: 220,
    formattedPrice: "R$ 220,00",
    dimensions: "20cm x 20cm (altura 7cm)",
    packaging: "Cesta quadrada artesanal com celofane, fita de cetim e cartão",
    catalogSource: "CATALOGO  LA TABLE.pdf",
    image: "/images/products/cesta-douce.png",
    featured: true,
    items: [
      "Croissant amanteigado",
      "Pães de queijo quentinhos",
      "Mini bolinhos Madeleine",
      "Biscoitos folhados ou amanteigados",
      "Mini sachê de manteiga",
      "Frutas frescas da estação",
      "Chocolate fino",
      "Queijo processado ou Minas Padrão",
      "Salame ou lombinho canadense",
      "Geleia artesanal",
      "Mix de nuts nobres",
      "Suco de fruta integral",
      "Sachê de chá especial",
      "Stroopwafel holandês tradicional",
      "2 Drip Coffee individuais",
    ],
  },
  {
    id: "cafe-bonjour",
    name: "Café Bonjour",
    category: "Cestas de Café da Manhã",
    categorySlug: "cafe-da-manha",
    shortDescription: "Para celebrar a dois ou presentear em datas memoráveis.",
    description: "Banquete matinal com quiche artesanal, mini bolo caseirinho recheado, pães especiais, frios nobres e waffles.",
    price: 290,
    formattedPrice: "R$ 290,00",
    dimensions: "32cm x 22cm (altura 5cm)",
    packaging: "Bandeja retangular nobre com laço requintado e tag afetiva",
    catalogSource: "CATALOGO  LA TABLE.pdf",
    image: "/images/products/cafe-bonjour.png",
    featured: true,
    items: [
      "Croissant crocante",
      "Pães de queijo",
      "Mini bolinhos Madeleine",
      "Biscoitos folhados ou amanteigados",
      "2 Drip Coffee",
      "Mini pãozinho australiano ou mini pão delícia",
      "Biscoitos de chocolate",
      "Waffle artesanal",
      "2 sachês de manteiga ou requeijão cremoso",
      "1 Quiche salgada artesanal",
      "Queijo Minas Padrão selecionado",
      "Salame ou lombinho canadense",
      "Frutas frescas da estação",
      "Frutas desidratadas",
      "Geleia artesanal e nuts",
      "2 sachês de chá importado",
      "Mini bolo caseirinho recheado",
      "Suco integral",
      "Chocolates finos",
    ],
  },
  {
    id: "grande-manha-em-familia",
    name: "Grande Manhã em Família",
    category: "Cestas de Café da Manhã",
    categorySlug: "cafe-da-manha",
    shortDescription: "Para reunir, celebrar e criar memórias inesquecíveis em família.",
    description: "A composição mais farta e luxuosa de café da manhã La Table, servindo a família com queijo Brie, presunto Parma, iogurtes com granola e quiches.",
    price: 390,
    formattedPrice: "R$ 390,00",
    dimensions: "35cm x 25cm (altura 5cm)",
    packaging: "Grande bandeja de apresentação com laço majestoso e cartão",
    catalogSource: "CATALOGO  LA TABLE.pdf",
    image: "/images/products/grande-manha-familia.jpeg",
    featured: true,
    items: [
      "2 sucos de 300ml (ou 1 de 500ml / chá Casa Madeira)",
      "2 Quiches salgadas individuais",
      "4 Croissants folhados amanteigados",
      "4 Drip Coffee especiais",
      "2 sachês de chá refinado",
      "Queijo tipo Brie e queijo Minas padrão",
      "Salame italiano e presunto cru tipo Parma",
      "Cream cheese e sachês de manteiga",
      "Mini pão australiano ou pão delícia",
      "Iogurtes artesanais no pote de vidro com granola crocante",
      "Stroopwafel holandês",
      "Mini bolo caseiro recheado",
      "Frutas frescas e frutas desidratadas (damasco e tâmaras)",
      "Lâminas de chocolate nobre com pistache",
      "Torradas finas e biscoitos folhados/amanteigados",
      "Geleia e potinho de doce de leite ou mel puro",
      "Mix generoso de nuts",
    ],
  },

  // ==========================================
  // 2. Boxes & Presentes Especiais
  // ==========================================
  {
    id: "wine-box",
    name: "Wine Box",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "Harmonização perfeita entre rótulo nobre, Brie e charcutaria.",
    description: "Sofisticada caixa cartonada dupla deslizante com gaveta de frios finos (Brie Île de France, Parmesão Faixa Azul) acompanhada de vinho selecionado.",
    price: 520,
    formattedPrice: "A partir de R$ 520,00",
    priceVariations: [
      { label: "Com vinho Freixenet Chianti (750ml)", price: 520, formattedPrice: "R$ 520,00" },
      { label: "Com vinho DV Catena Cabernet Malbec (750ml)", price: 550, formattedPrice: "R$ 550,00" },
    ],
    packaging: "Caixa cartonada premium dupla com gaveta, celofane e laço nobre",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/wine-box.png",
    featured: true,
    items: [
      "Garrafa de vinho refinado (Freixenet Chianti ou DV Catena)",
      "Queijo Brie Île de France",
      "Queijo Parmesão Faixa Azul",
      "Duas charcutarias nobres (Salame italiano e Copa)",
      "Mini pote de geleia francesa",
      "Pote de molho pesto artesanal",
      "Frasco de mel puro",
      "Frutas frescas (morangos, uvas, physalis) e desidratadas",
      "Torradas finas crocantes",
      "Mix de castanhas e nuts",
    ],
  },
  {
    id: "cesta-aconchego",
    name: "Cesta Aconchego",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "Carinho e aconchego com caneca Oxford, cappuccino Baggio e flores.",
    description: "Apresentada em moderna caixa aramada com alça de madeira pinus, pires em formato de coração, bolo em saco de linho e flor à sua escolha.",
    price: 295,
    formattedPrice: "A partir de R$ 295,00",
    priceVariations: [
      { label: "Com flor Kalanchoe", price: 295, formattedPrice: "R$ 295,00" },
      { label: "Com Orquídea nobre", price: 350, formattedPrice: "R$ 350,00" },
    ],
    dimensions: "24cm x 24cm",
    packaging: "Caixa aramada retangular contemporânea com alça em madeira pinus",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/cesta-aconchego.jpeg",
    featured: true,
    items: [
      "Suco Casa Madeira 500ml",
      "Caneca de porcelana nobre Oxford",
      "Pires de madeira em formato de coração",
      "Colherinha em metal dourado com formato de coração",
      "Cappuccino Baggio especial",
      "Bolo caseiro acondicionado em saquinhos de linho",
      "Chocolate Nugare zero açúcar",
      "Geleia importada e torradas finas",
      "Mix de nuts selecionados",
      "Vaso de flor à escolha (Kalanchoe ou Orquídea)",
    ],
  },
  {
    id: "box-celebrar",
    name: "Box Celebrar",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "Elegante box preta com visor transparente para brindar momentos únicos.",
    description: "Design moderno com acabamento preto fosco, visor transparente e itens gourmets embalados em saquinhos rústicos de linho puro.",
    price: 450,
    formattedPrice: "A partir de R$ 450,00",
    priceVariations: [
      { label: "Com vinho Freixenet Chianti (750ml)", price: 450, formattedPrice: "R$ 450,00" },
      { label: "Com vinho DV Catena (750ml)", price: 480, formattedPrice: "R$ 480,00" },
    ],
    packaging: "Caixa cartonada preta com visor frontal e fita acetinada",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/box-celebrar.png",
    featured: false,
    items: [
      "Vinho importado 750ml (Freixenet Chianti ou DV Catena)",
      "Queijo Parmesão Faixa Azul",
      "Mini geleia importada",
      "Torradas finas artesanais",
      "Frutas desidratadas em saquinho de linho puro",
      "Mix de nuts nobres em saquinho de linho puro",
    ],
  },
  {
    id: "box-floratta",
    name: "Box Floratta",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "Delicadeza e romantismo em box redonda com pães de queijo e flores.",
    description: "Composição feminina e graciosa com croissant, quitutes açucarados, requeijão cremoso e belíssima flor natural na box circular.",
    price: 290,
    formattedPrice: "A partir de R$ 290,00",
    priceVariations: [
      { label: "Com vaso de Kalanchoe", price: 290, formattedPrice: "R$ 290,00" },
      { label: "Com vaso de Orquídea", price: 350, formattedPrice: "R$ 350,00" },
    ],
    dimensions: "18cm de diâmetro",
    packaging: "Box cartonada cilíndrica com laço volumoso e arranjo floral",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/box-floratta.png",
    featured: false,
    items: [
      "Pães de queijo artesanais",
      "Croissant amanteigado crocante",
      "Torradas finas e mini requeijão cremoso",
      "Mini geleia importada",
      "Bolinhos Madeleine",
      "Biscoito decorativo artesanal",
      "Chocolates finos",
      "Frutas desidratadas e mix de nuts",
      "Vaso de flor à escolha (Kalanchoe ou Orquídea)",
    ],
  },
  {
    id: "cesta-bahia",
    name: "Cesta Bahia",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "Uma homenagem afetiva às tradições, sabores e fitas da Bahia.",
    description: "Uma verdadeira imersão nos sabores autênticos da terra: cocadinhas, beijus, doce de umbu e pães delícia em linho com fitas do Bonfim.",
    price: 280,
    formattedPrice: "R$ 280,00",
    packaging: "Caixa nobre de madeira pinus com alça e acabamento em couro, fitas da Bahia e laço",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/cesta-bahia.png",
    featured: true,
    items: [
      "Cocadinha tradicional da Bahia",
      "Cocada cremosa de maracujá",
      "Beijus crocantes artesanais",
      "Doce típico de umbu",
      "Pãezinhos delícia em sacos de linho",
      "Biscoitos finos artesanais",
      "Cappuccino Baggio",
      "Caneca em porcelana preta premium",
      "Pires de pinus em formato de coração",
      "Colherinha de metal com formato de coração",
      "Fitas do Senhor do Bonfim decorativas",
    ],
  },
  {
    id: "box-vinho-e-poesia",
    name: "Box Vinho e Poesia",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "A harmonia literária entre o DV Catena, queijo Brie e Ferrero Rocher.",
    description: "Sofisticação atemporal em caixa redonda com vinho de altitude DV Catena, queijo Brie macio, pote de vidro de nuts e bombons finos.",
    price: 350,
    formattedPrice: "R$ 350,00",
    dimensions: "20cm de diâmetro",
    packaging: "Caixa cartonada redonda elegante com laço de cetim",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/box-vinho-e-poesia.png",
    featured: false,
    items: [
      "Vinho DV Catena Cabernet Malbec 750ml",
      "Queijo tipo Brie Île de France",
      "Salaminho italiano fatiado",
      "Mix de nuts em pote de vidro reutilizável",
      "Mini geleia chocolate Nugare com recheio de ganache",
      "Geleia francesa de frutas nobres",
      "Bombons Ferrero Rocher",
    ],
  },
  {
    id: "le-porte-vin",
    name: "Le Porte-Vin",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "Bolsa térmica porta-vinhos em couro legítimo artesanal e forro nobre.",
    description: "Um presente de luxo duradouro e reutilizável: bag confeccionada em couro autêntico, forrada com tecido elegante e acompanhada de um rótulo especial.",
    price: 300,
    formattedPrice: "A partir de R$ 300,00",
    priceVariations: [
      { label: "Com vinho Freixenet Chianti (750ml)", price: 300, formattedPrice: "R$ 300,00" },
      { label: "Com vinho DV Catena (750ml)", price: 320, formattedPrice: "R$ 320,00" },
    ],
    packaging: "Bolsa estruturada em couro legítimo com forro em tecido e laço de fitas",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/le-porte-vin.png",
    featured: false,
    items: [
      "Bolsa porta-vinhos em couro legítimo trabalhado",
      "Forro interno exclusivo em tecido",
      "Vinho importado selecionado (Freixenet Chianti ou DV Catena)",
      "Tag e laço de fita para presente",
    ],
  },
  {
    id: "cesta-memorias",
    name: "Cesta Memórias",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "A experiência barista completa com mini moedor manual e café em grãos.",
    description: "Feita para criar rituais memoráveis: moa os grãos na hora, deguste um bolo caseiro com pão delícia, mel puro e admire a flor lírio do campo.",
    price: 380,
    formattedPrice: "R$ 380,00",
    packaging: "Caixa nobre de madeira pinus com acabamento em couro e laço de fitas",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/cesta-memorias.png",
    featured: true,
    items: [
      "Mini moedor de café manual com regulagem",
      "Pacote de café especial em grãos",
      "Caneca de cerâmica artesanal",
      "Pires em madeira pinus formato coração",
      "Pote de mel puro com colher especial em madeira",
      "Vaso de lírio do campo ou pinheirinho",
      "Suco integral 300ml",
      "Bolo caseiro fofinho",
      "Pães delícia da Bahia",
      "Quiche artesanal",
      "Pote de geleia de frutas",
    ],
  },
  {
    id: "caneca-doce-pausa",
    name: "Caneca Doce Pausa",
    category: "Boxes & Presentes",
    categorySlug: "boxes-presentes",
    shortDescription: "Um mimo gracioso e acessível para transformar o intervalo em celebração.",
    description: "Caneca de porcelana premium com pires em pinus coração, drip coffee, bolo de rolo artesanal e colherzinha de coração.",
    price: 95,
    formattedPrice: "R$ 95,00",
    packaging: "Montada diretamente na caneca de porcelana nobre com pires e laço",
    catalogSource: "Catalogo de cestas e Box presenteaveis .pdf",
    image: "/images/products/caneca-doce-pausa.jpeg",
    featured: false,
    items: [
      "Caneca de porcelana Oxford",
      "Pires de madeira pinus em formato de coração",
      "Colherinha de metal com ponta em formato de coração",
      "Drip Coffee individual gourmet",
      "Fatia de bolo de rolo tradicional",
      "Pão de queijo",
      "Bolinhos Madeleine",
      "Chocolate fino",
      "Bolacha fina crocante",
      "Frutas desidratadas e Physalis",
    ],
  },

  // ==========================================
  // 3. Linha Maternidade
  // ==========================================
  {
    id: "cesta-luz-de-chegada",
    name: "Cesta Luz de Chegada",
    category: "Linha Maternidade",
    categorySlug: "maternidade",
    shortDescription: "Acolhimento supremo para a chegada do bebê com orquídea e itens Granado.",
    description: "Uma das criações mais emocionantes da La Table, combinando o frescor da orquídea branca com sapatinhos feitos em crochê, naninha e linha Granado Bebê.",
    price: 350,
    formattedPrice: "R$ 350,00",
    packaging: "Cesta cartonada redonda bege suave com laço de cetim e tag personalizada",
    catalogSource: "Catalogo cestas maternidade.pdf",
    image: "/images/products/cesta-luz-de-chegada.png",
    featured: true,
    items: [
      "Uma orquídea branca nobre em flor",
      "Naninha pelúcia macia para o bebê",
      "Sapatinhos de crochê artesanais brancos",
      "Sabonete neutro Granado Bebê",
      "Talco Granado Bebê hipoalergênico",
      "Cesta cartonada redonda para guardar recordações",
    ],
  },
  {
    id: "cesta-ceu-de-amor",
    name: "Cesta Céu de Amor",
    category: "Linha Maternidade",
    categorySlug: "maternidade",
    shortDescription: "Cesta temática com balão personalizado e amigurumi astronauta.",
    description: "Presente lúdico e completo com quitutes de café da manhã para os pais recém-chegados da maternidade, acompanhado de amigurumi e balão com nome.",
    price: 280,
    formattedPrice: "R$ 280,00",
    packaging: "Caixa cartonada redonda listrada azul-bebê com balão metalizado e laço",
    catalogSource: "Catalogo cestas maternidade.pdf",
    image: "/images/products/cesta-ceu-de-amor.png",
    featured: true,
    items: [
      "Balão metalizado personalizado com nome do bebê",
      "Bonequinho de amigurumi artesanal (pequeno astronauta)",
      "Sapatinhos de bebê em crochê macio",
      "Sabonete Granado Bebê",
      "Suco Casa Madeira garrafinha",
      "Croissant amanteigado folhado",
      "Mini bolos Madeleine",
      "Torradas finas e biscoitos folhados",
      "Mini geleia importada",
    ],
  },
  {
    id: "cesta-flor-de-afeto",
    name: "Cesta Flor de Afeto",
    category: "Linha Maternidade",
    categorySlug: "maternidade",
    shortDescription: "Delicadeza floral em rosa com quitutes de café da manhã e mimos do bebê.",
    description: "Projetada com carinho para celebrar o nascimento de uma menina, contendo flores de Kalanchoe, ursinho de pelúcia, lacinhos de cabelo e pães delícia.",
    price: 280,
    formattedPrice: "R$ 280,00",
    packaging: "Caixa cartonada redonda rosa-bebê listrada com laço e cartão de carinho",
    catalogSource: "Catalogo cestas maternidade.pdf",
    image: "/images/products/cesta-flor-de-afeto.png",
    featured: false,
    items: [
      "Vaso de flor Kalanchoe rosa",
      "Naninha ursinho de pelúcia rosa",
      "Conjunto de lacinhos delicados para cabelo",
      "Talco Granado Bebê",
      "Suco Casa Madeira 250ml",
      "Pães delícia da Bahia",
      "Mini bolos Madeleine",
      "Croissant amanteigado",
      "Torradas finas e mini geleia importada",
      "Cartão 'Com carinho' com mensagem especial",
    ],
  },

  // ==========================================
  // 4. Tábuas de Frios & Gastronomia La Table
  // ==========================================
  {
    id: "petit-table",
    name: "Petit Table",
    category: "Tábuas & Gastronomia",
    categorySlug: "tabuas",
    shortDescription: "Entrada intimista e requintada para 3 a 4 pessoas.",
    description: "Harmonização de 3 tipos de queijos, 3 charcutarias, frutas e caponata sobre base de madeira laminada.",
    price: 280,
    formattedPrice: "R$ 280,00",
    serves: "Serve de 3 a 4 pessoas como entrada",
    dimensions: "Base de MDF laminado 30cm",
    packaging: "Base rígida laminada de 30cm, lacrada e com acabamento elegante",
    catalogSource: "Catalogo de tabuas La Table.pdf",
    image: "/images/products/petit-table.png",
    featured: false,
    items: [
      "3 tipos de queijos selecionados",
      "3 tipos de charcutarias nobres",
      "Frutas frescas da estação",
      "Frutas desidratadas selecionadas",
      "Geleia artesanal ou mel puro",
      "Caponata de berinjela ou patê da casa",
      "Mix crocante de castanhas",
      "Cesta de torradas",
    ],
  },
  {
    id: "elegance",
    name: "Tábua Élégance",
    category: "Tábuas & Gastronomia",
    categorySlug: "tabuas",
    shortDescription: "Equilíbrio gourmet e sofisticação para receber de 6 a 8 convidados.",
    description: "Composição harmônica e farta com 4 variedades de queijos e charcutarias, amêndoas defumadas, tomate confit e base de 35cm.",
    price: 400,
    formattedPrice: "R$ 400,00",
    serves: "Serve de 6 a 8 pessoas como entrada",
    dimensions: "Base de MDF laminado 35cm",
    packaging: "Base de MDF laminado nobre 35cm",
    catalogSource: "Catalogo de tabuas La Table.pdf",
    image: "/images/products/elegance.png",
    featured: true,
    items: [
      "4 variedades de queijos finos",
      "4 charcutarias selecionadas",
      "Frutas frescas da estação e frutas desidratadas",
      "Chocolate fino",
      "Geleia de frutas e mel",
      "Caponata de berinjela artesanal ou Tomate Confit",
      "Amêndoas defumadas",
      "Castanha do Pará e Nozes",
      "Acompanhamento de torradas",
    ],
  },
  {
    id: "essencia",
    name: "Tábua Essência",
    category: "Tábuas & Gastronomia",
    categorySlug: "tabuas",
    shortDescription: "Fartura gastronômica e presença imponente para 8 a 10 pessoas.",
    description: "Apresenta até 5 queijos e charcutarias nobres, castanhas nobres, chocolate, mel e antepastos em base de 35cm.",
    price: 480,
    formattedPrice: "R$ 480,00",
    serves: "Serve de 8 a 10 pessoas",
    dimensions: "Base de MDF laminado 35cm",
    packaging: "Base nobre de MDF laminado 35cm",
    catalogSource: "Catalogo de tabuas La Table.pdf",
    image: "/images/products/essencia.png",
    featured: false,
    items: [
      "4 a 5 tipos de queijos finos selecionados",
      "4 a 5 variedades de charcutarias artesanais",
      "Frutas da estação frescas e frutas desidratadas",
      "Chocolates finos",
      "Geleia e mel puro",
      "Caponata de berinjela ou Tomate Confit aromático",
      "Amêndoas defumadas crocantes",
      "Castanha do Pará e Nozes selecionadas",
      "Cesta de torradas",
    ],
  },
  {
    id: "tabua-metro",
    name: "Tábua Metro",
    category: "Tábuas & Gastronomia",
    categorySlug: "tabuas",
    shortDescription: "A consagrada tábua de 1 metro para eventos marcantes de até 20 pessoas.",
    description: "Uma verdadeira passarela gourmet com Grana Padano, Brie, Provolone, Gouda, Queijo Azul, Parmesão Faixa Azul, Presunto Parma, Copa e antepastos.",
    price: 900,
    formattedPrice: "R$ 900,00",
    serves: "Serve até 20 pessoas como entrada",
    dimensions: "Base de 1 metro linear x 35cm de largura em MDF laminado",
    packaging: "Base linear de 1 metro em MDF especial",
    notes: [
      "Geleias e antepastos são servidos em bowls ou ramequins de louça/vidro.",
      "Acompanha uma cesta farta com pães frescos, torradas artesanais, crostini e grissini.",
    ],
    catalogSource: "Catalogo de tabuas La Table.pdf",
    image: "/images/products/tabua-metro.jpeg",
    featured: true,
    items: [
      "Queijo tipo Grana",
      "Queijo tipo Brie Île de France",
      "Queijo Provolone curado",
      "Queijo tipo Gouda",
      "Queijo Azul (Gorgonzola)",
      "Queijo Parmesão Faixa Azul",
      "Salaminho Italiano",
      "Salaminho Hamburguês",
      "Copa Suína artesanal",
      "Presunto cru tipo Parma fatiado fininho",
      "Pepperoni",
      "Geleias e antepastos servidos em ramequins",
      "Cesta ampla com pães artesanais, torradas, crostinis e grissinis",
    ],
  },
  {
    id: "queijo-brie-folhado",
    name: "Queijo tipo Brie Folhado (1.1kg)",
    category: "Tábuas & Gastronomia",
    categorySlug: "tabuas",
    shortDescription: "Peça inteira de 1,1kg envolvida em massa folhada crocante dourada.",
    description: "O clássico mais elogiado para impressionar os convidados. Pode ser retirado assado ou levado ao forno por 15 min antes de servir com a calda.",
    price: 370,
    formattedPrice: "R$ 370,00",
    serves: "Aproximadamente 1.100 kg",
    packaging: "Embalagem apropriada para transporte com coberturas em potes de vidro",
    notes: [
      "Pode ser embalado para viagem já assado. Nesse caso as coberturas irão em potes de vidro.",
      "Modo de servir: Levar ao forno pré-aquecido a 180°C por cerca de 15 minutos. Retirar na hora de servir e regar com a geleia ou caramelo.",
    ],
    catalogSource: "Catalogo de tabuas La Table.pdf",
    image: "/images/products/queijo-brie-folhado.png",
    featured: true,
    items: [
      "Roda inteira de Queijo Brie (aprox. 1.100 kg)",
      "Massa folhada francesa dourada e crocante",
      "Opção de cobertura: Geleia de morango fresca artesanal",
      "Opção de cobertura: Caramelo de nuts à flor de sal",
      "Pote de vidro hermético para o transporte da calda",
    ],
  },
  {
    id: "gateau-de-camarao",
    name: "Gâteau de Camarão (2.5kg)",
    category: "Tábuas & Gastronomia",
    categorySlug: "tabuas",
    shortDescription: "Sofisticada terrine quente de 2,5kg de camarão grande com alho-poró.",
    description: "Prato nobre e generoso feito com filé de camarão selecionado tamanho grande, aveludado purê de aipim, queijo fundido e azeite extravirgem.",
    price: 800,
    formattedPrice: "R$ 800,00",
    serves: "Aproximadamente 2,5 kg",
    packaging: "Refratário próprio para apresentação de mesa e forno",
    catalogSource: "Catalogo de tabuas La Table.pdf",
    image: "/images/products/gateau-de-camarao.png",
    featured: false,
    items: [
      "Aproximadamente 2,5 kg de filé de camarão tamanho grande",
      "Alho-poró refogado no azeite extravirgem",
      "Purê aveludado de aipim com especiarias",
      "Queijo nobre gratinado",
      "Azeite de oliva extra virgem",
      "Gelatina culinária para estruturação perfeita",
    ],
  },
  {
    id: "ilhas-gastronomicas",
    name: "Ilhas Gastronômicas de Frios & Antepastos",
    category: "Tábuas & Gastronomia",
    categorySlug: "tabuas",
    shortDescription: "Experiência de Grazing Table completa e personalizada para o seu evento.",
    description: "Cenografia gastronômica montada no local do evento com cascatas de queijos nobres, charcutaria farta, terrines, quiches, pães rústicos e flores.",
    price: 0,
    formattedPrice: "Sob Consulta (Orçamento Prévio)",
    serves: "Montagem personalizada conforme o número de convidados",
    notes: [
      "Atendimento exclusivo mediante orçamento prévio e reserva de data com antecedência.",
      "Montagem cenográfica no espaço do seu evento em Irecê e região.",
    ],
    catalogSource: "Catalogo de tabuas La Table.pdf",
    image: "/images/products/ilhas-gastronomicas.png",
    featured: true,
    items: [
      "Seleção farta de Queijos nobres nacionais e importados",
      "Charcutarias finas artesanais",
      "Pães de fermentação natural, Focaccias, Crostini e Grissini",
      "Terrines artesanais e Quiches gourmet",
      "Caponatas de legumes e Tomate Confit",
      "Geleias autorais da chef",
      "Pasta de grão-de-bico (Húmus) e Coalhada seca tradicional",
      "Arranjos de frutas frescas da estação e frutas secas nobres",
    ],
  },

  // ==========================================
  // 5. Cestas Premium & Embalagens de Luxo
  // ==========================================
  {
    id: "cestas-premium-cartonadas",
    name: "Cestas Premium - Caixas Cartonadas",
    category: "Cestas Premium & Embalagens",
    categorySlug: "premium",
    shortDescription: "Acabamento rígido cartonado de alto padrão para quem exige distinção.",
    description: "Caixas rígidas de alta gramatura, texturizadas, com fita de gorgurão ou cetim duplo e personalização impecável.",
    price: 240,
    formattedPrice: "A partir de R$ 240,00",
    priceVariations: [
      { label: "Tamanho Pequena", price: 240, formattedPrice: "R$ 240,00" },
      { label: "Tamanho Média", price: 320, formattedPrice: "R$ 320,00" },
      { label: "Tamanho Grande", price: 420, formattedPrice: "R$ 420,00" },
    ],
    packaging: "Caixa cartonada de luxo com fechamento nobre e laço",
    catalogSource: "CATALOGO  LA TABLE.pdf",
    image: "/images/products/premium-cartonadas.png",
    featured: false,
    items: [
      "Caixa cartonada rígida de alto luxo",
      "Acabamento interno e externo refinado",
      "Laço duplo em fita acetinada",
      "Cartão com mensagem manuscrita ou impressa",
      "Itens de montagem e forração inclusos",
    ],
  },
  {
    id: "cestas-premium-acrilico",
    name: "Cestas Premium - Caixa em Acrílico Cristal",
    category: "Cestas Premium & Embalagens",
    categorySlug: "premium",
    shortDescription: "Aparência clean e moderna que destaca cada produto como numa vitrine.",
    description: "Caixa inteiramente em acrílico virgem translúcido de alta transparência, trazendo estética contemporânea e requinte aos presentes.",
    price: 420,
    formattedPrice: "R$ 420,00",
    priceVariations: [
      { label: "Tamanho Grande", price: 420, formattedPrice: "R$ 420,00" },
    ],
    packaging: "Caixa em acrílico cristal com tampa e fita comemorativa",
    catalogSource: "CATALOGO  LA TABLE.pdf",
    image: "/images/products/premium-acrilico.png",
    featured: false,
    items: [
      "Caixa em acrílico virgem cristal de alta espessura",
      "Tampa de encaixe perfeito",
      "Visão 360° dos produtos selecionados",
      "Laço especial e cartão personalizado",
    ],
  },
  {
    id: "cestas-premium-maletas",
    name: "Cestas Premium - Maletas de Pinus & Couro",
    category: "Cestas Premium & Embalagens",
    categorySlug: "premium",
    shortDescription: "A rusticidade acolhedora da madeira pinus com a nobreza do couro ecológico.",
    description: "Maleta artesanal com visor de acrílico cristal, alça e detalhes em couro ecológico costurado, perfeita para ser reaproveitada na decoração.",
    price: 320,
    formattedPrice: "A partir de R$ 320,00",
    priceVariations: [
      { label: "Tamanho Média", price: 320, formattedPrice: "R$ 320,00" },
      { label: "Tamanho Grande", price: 420, formattedPrice: "R$ 420,00" },
    ],
    packaging: "Maleta de madeira pinus com acabamento em couro ecológico e visor em acrílico",
    catalogSource: "CATALOGO  LA TABLE.pdf",
    image: "/images/products/premium-maletas.png",
    featured: false,
    items: [
      "Maleta em madeira nobre de pinus tratada",
      "Fechos e alças reforçadas em couro ecológico",
      "Visor frontal em acrílico translúcido",
      "Acabamento com laço e tag afetiva",
    ],
  },
];

// ==========================================
// 6. Produtos Agregáveis / Itens Adicionais
// ==========================================
export const ADDONS: AddonItem[] = [
  {
    id: "suco-300ml",
    name: "Suco Integral Extra (300ml)",
    price: 10,
    formattedPrice: "R$ 10,00",
    category: "Bebidas",
    description: "Suco 100% fruta natural sem adição de açúcares",
  },
  {
    id: "mini-naked-cake",
    name: "Mini Naked Cake Artesanal",
    price: 35,
    formattedPrice: "R$ 35,00",
    category: "Bolos & Doces",
    description: "Bolo rústico com camadas de recheio e finalização delicada",
  },
  {
    id: "bento-cake",
    name: "Bentô Cake com Frase Personalizada",
    price: 45,
    formattedPrice: "R$ 45,00",
    category: "Bolos & Doces",
    description: "Mini bolo temático na marmitinha com mensagem afetiva personalizada",
  },
  {
    id: "foto-polaroid",
    name: "Foto Tipo Polaroid com Legenda",
    price: 12,
    formattedPrice: "R$ 12,00",
    category: "Mimos & Afeto",
    description: "Impressão fotográfica com borda polaroid para eternizar uma lembrança",
  },
  {
    id: "caneca-personalizada",
    name: "Canecas de Porcelana / Cerâmica",
    price: 40,
    formattedPrice: "De R$ 40,00 a R$ 50,00",
    category: "Mimos & Afeto",
    description: "Modelos selecionados em porcelana Oxford ou cerâmica artesanal",
  },
  {
    id: "vinho-adicional",
    name: "Garrafa de Vinho / Espumante",
    price: "consultar",
    formattedPrice: "Consultar rótulos e valores",
    category: "Bebidas",
    description: "Rótulos tintos, brancos ou espumantes (ex: DV Catena, Freixenet)",
  },
  {
    id: "flores-adicionais",
    name: "Arranjo ou Vaso de Flores Naturais",
    price: "consultar",
    formattedPrice: "Consultar espécies e valores",
    category: "Flores",
    description: "Orquídeas, Kalanchoes, lírios do campo ou pinheirinhos",
  },
  {
    id: "balao-personalizado",
    name: "Balão Metalizado Personalizado",
    price: "consultar",
    formattedPrice: "Consultar modelos e valores",
    category: "Mimos & Afeto",
    description: "Balão com nome ou frase especial para complementar a entrega",
  },
];

/**
 * Gera o link do WhatsApp para pedido com texto amigável pré-preenchido
 */
export function getWhatsAppOrderLink(
  product?: Product,
  variation?: ProductPriceVariation
): string {
  const phone = STORE_INFO.whatsapp;
  let text = `Olá Geraldina! Vi o catálogo no link da bio da La Table e gostaria de fazer uma encomenda.`;

  if (product) {
    const varText = variation ? ` (${variation.label} - ${variation.formattedPrice})` : ` (${product.formattedPrice})`;
    text = `Olá Geraldina! Gostaria de encomendar o item *${product.name}*${varText}. Poderia me passar os detalhes de disponibilidade e entrega?`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Filtra produtos pela categoria selecionada
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  if (!categorySlug || categorySlug === "todos") {
    return PRODUCTS;
  }
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

/**
 * Retorna os produtos marcados como destaque
 */
export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

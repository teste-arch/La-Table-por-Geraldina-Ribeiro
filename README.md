# La Table por Geraldina Ribeiro - Catálogo & Link in Bio

Aplicação web interativa estilo *Link in Bio* / *Beacons* desenvolvida para a **La Table por Geraldina Ribeiro**, marca especializada em cestas afetivas de café da manhã, boxes de presentes sofisticados com vinhos, linha maternidade, tábuas de frios artesanais e ilhas gastronômicas (grazing table) em Irecê - BA e região.

---

## 🌟 Funcionalidades

- **Design Responsivo & Elegante:** Otimizado para abertura via mobile (link na bio do Instagram) e desktop, com paleta de cores nobre e acolhedora.
- **Cardápio Completo & Estruturado:** Dados extraídos com precisão dos 4 catálogos oficiais em PDF (`src/data/catalog.ts`).
- **Filtros por Categoria & Busca Instantânea:** Navegação por pílulas (Café da Manhã, Boxes & Presentes, Maternidade, Tábuas, Cestas Premium e Mimos).
- **Fotos Reais dos Produtos:** 26 imagens em alta resolução extraídas diretamente do material original.
- **Modal de Detalhes:** Visualização completa da composição dos itens, dimensões, rendimento e observações.
- **Seletor de Variações de Preço:** Permite escolher entre tipos de vinho (ex: Freixenet vs. DV Catena), vasos de flores (Kalanchoe vs. Orquídea) ou tamanhos de caixa.
- **Integração com WhatsApp:** Botões de pedido direto para o WhatsApp oficial com mensagem pré-formatada do produto e variação selecionados.
- **Seção de Mimos Agregáveis:** Bolos artesanais, fotos polaroid personalizadas, balões temáticos e adicionais.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js (App Router)** - Framework React moderno com server-side rendering
- **TypeScript** - Tipagem estrita para todos os dados do catálogo e componentes
- **Ant Design (`antd` + `@ant-design/icons`)** - Componentes de interface de alto padrão
- **Tailwind CSS** - Estilização utilitária e responsividade fluida
- **@ant-design/nextjs-registry** - Renderização de estilos SSR sem FOUC

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install
```

### Modo de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

```bash
npm run build
npm run start
```

---

## 📁 Estrutura do Projeto

```
├── Conteúdo inicial/          # Catálogos em PDF e materiais originais
├── public/
│   └── images/
│       ├── profile.jpeg       # Foto de perfil de Geraldina Ribeiro
│       └── products/          # 26 fotos de alta resolução dos produtos
├── src/
│   ├── app/
│   │   ├── globals.css        # Estilos globais e Tailwind
│   │   ├── layout.tsx         # Layout raiz com AntdRegistry e tema
│   │   └── page.tsx           # Página principal estilo Beacons/Linktree
│   └── data/
│       └── catalog.ts         # Tipagem e array estruturado do catálogo
└── package.json
```

---

## 📞 Contato & Encomendas

- **Instagram:** [@latable_irece](https://www.instagram.com/latable_irece)
- **WhatsApp:** +55 (74) 99999-2045
- **Localização:** Irecê - Bahia

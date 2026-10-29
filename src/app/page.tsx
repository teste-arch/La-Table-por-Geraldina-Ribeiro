"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Button,
  Input,
  Tag,
  Modal,
  Badge,
  Radio,
  message,
  Tooltip,
} from "antd";
import {
  WhatsAppOutlined,
  InstagramOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
  SearchOutlined,
  StarFilled,
  GiftOutlined,
  InfoCircleOutlined,
  CheckCircleFilled,
  CoffeeOutlined,
  HeartFilled,
} from "@ant-design/icons";
import {
  STORE_INFO,
  CATEGORIES,
  PRODUCTS,
  ADDONS,
  Product,
  ProductPriceVariation,
  getWhatsAppOrderLink,
} from "@/data/catalog";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariation, setSelectedVariation] =
    useState<ProductPriceVariation | null>(null);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory =
        selectedCategory === "todos" || p.categorySlug === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.shortDescription.toLowerCase().includes(q);
      const matchCategoryName = p.category.toLowerCase().includes(q);
      const matchItems = p.items.some((item) => item.toLowerCase().includes(q));

      return matchCategory && (matchName || matchDesc || matchCategoryName || matchItems);
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariation(
      product.priceVariations && product.priceVariations.length > 0
        ? product.priceVariations[0]
        : null
    );
  };

  const handleShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: STORE_INFO.brand,
          text: STORE_INFO.tagline,
          url: window.location.href,
        });
      } catch {
        // user cancelled or share failed
      }
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      message.success("Link do catálogo copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2523] selection:bg-[#EBDDC8] selection:text-[#2C2523]">
      {/* Background Subtle Gradient Accents */}
      <div className="fixed inset-0 pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#E8DACB] blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#F3E7D7] blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-[#EFE3D5] blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
        {/* =========================================================
            HEADER & PROFILE SECTION (Beacons.ai / Linktree Aesthetic)
           ========================================================= */}
        <header className="w-full flex flex-col items-center text-center mb-8">
          {/* Share Button top-right */}
          <div className="w-full flex justify-end mb-2">
            <Tooltip title="Compartilhar catálogo">
              <button
                onClick={handleShare}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 border border-[#E8DEC9] text-[#7A6A53] hover:text-[#2C2523] hover:bg-white transition-all shadow-xs cursor-pointer"
                aria-label="Compartilhar"
              >
                <ShareAltOutlined className="text-lg" />
              </button>
            </Tooltip>
          </div>

          {/* Profile Image with luxury gold border */}
          <div className="relative mb-4 group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#9A722C] via-[#DFC286] to-[#9A722C] shadow-md transition-transform duration-300 group-hover:scale-105">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#ECE4D8]">
                <Image
                  src={STORE_INFO.profileImage}
                  alt={STORE_INFO.founder}
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <span className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center text-[10px] text-white shadow-xs" title="Disponível para encomendas">
              ✓
            </span>
          </div>

          {/* Brand & Tagline */}
          <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#231D1A]">
            {STORE_INFO.brand}
          </h1>
          <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-[#9A722C] mt-1">
            {STORE_INFO.tagline}
          </p>

          <p className="max-w-md text-xs sm:text-sm text-[#6A5F5B] mt-2.5 px-4 leading-relaxed">
            {STORE_INFO.bio}
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#F0E6D8]/70 border border-[#E4D5C3] text-xs text-[#6B5A4B]">
            <EnvironmentOutlined className="text-[#9A722C]" />
            <span>{STORE_INFO.city} - {STORE_INFO.state} & Região</span>
          </div>

          {/* Quick Contact & Social Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5 w-full max-w-sm">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
                "Olá Geraldina! Vi o catálogo no link da bio da La Table e gostaria de tirar uma dúvida sobre encomendas."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[160px] flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-sm shadow-sm hover:shadow transition-all duration-200"
            >
              <WhatsAppOutlined className="text-lg" />
              <span>Fazer Pedido</span>
            </a>

            <a
              href={STORE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-white hover:bg-[#FAF4EC] border border-[#E2D5C3] text-[#4A3D36] font-medium text-sm shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              <InstagramOutlined className="text-lg text-[#C13584]" />
              <span>{STORE_INFO.instagramHandle}</span>
            </a>
          </div>
        </header>

        {/* =========================================================
            SEARCH & CATEGORIES FILTER
           ========================================================= */}
        <div className="w-full mb-6">
          <Input
            placeholder="Buscar por cesta, queijo, vinho, presente..."
            prefix={<SearchOutlined className="text-[#9A722C] mr-1" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            allowClear
            size="large"
            className="rounded-full! border-[#E2D5C3]! bg-white/95! shadow-xs hover:border-[#9A722C]! focus:border-[#9A722C]! text-sm py-2 px-4"
          />
        </div>

        {/* Category Navigation Pills */}
        <div className="w-full mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none flex items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#9A722C] text-white shadow-sm"
                    : "bg-white/90 text-[#6A5F5B] hover:bg-white hover:text-[#2C2523] border border-[#E8DEC9]"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Category Header description */}
        {selectedCategory !== "todos" && (
          <div className="w-full mb-6 text-center">
            <h2 className="text-lg font-serif font-bold text-[#2C2523]">
              {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
            </h2>
            <p className="text-xs text-[#7A6A53] mt-0.5">
              {CATEGORIES.find((c) => c.slug === selectedCategory)?.subtitle}
            </p>
          </div>
        )}

        {/* =========================================================
            PRODUCTS LIST (Responsive Grid / Cards)
           ========================================================= */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleOpenProduct(product)}
              className="group flex flex-col bg-white rounded-2xl border border-[#ECE2D2] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative w-full h-56 bg-[#F4EFEA] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Category & Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-medium text-[#73541E] border border-white/60 shadow-2xs">
                    {product.category}
                  </span>
                  {product.featured && (
                    <span className="px-2 py-1 rounded-full bg-[#9A722C] text-white text-[10px] font-semibold flex items-center gap-1 shadow-2xs">
                      <StarFilled className="text-[10px]" /> Destaque
                    </span>
                  )}
                </div>

                {/* Price Tag Overlay bottom-right */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-xs text-xs font-bold text-[#2C2523] shadow-xs border border-white/80">
                  {product.formattedPrice}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-serif font-bold text-[#231D1A] group-hover:text-[#9A722C] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#6A5F5B] mt-1.5 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Dimensions or Serves badge */}
                  <div className="flex flex-wrap gap-2 mt-3 text-[11px] text-[#7A6A53]">
                    {product.serves && (
                      <span className="inline-flex items-center gap-1 bg-[#F5ECE0] px-2 py-0.5 rounded-md">
                        👥 {product.serves}
                      </span>
                    )}
                    {product.dimensions && (
                      <span className="inline-flex items-center gap-1 bg-[#F5ECE0] px-2 py-0.5 rounded-md">
                        📏 {product.dimensions}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3 border-t border-[#F5ECE0] flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#9A722C] group-hover:underline">
                    Ver Composição →
                  </span>
                  <a
                    href={getWhatsAppOrderLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-medium shadow-2xs transition-all"
                  >
                    <WhatsAppOutlined />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="w-full py-16 text-center bg-white rounded-2xl border border-[#ECE2D2] p-8 mb-12">
            <CoffeeOutlined className="text-4xl text-[#C4B29E] mb-3" />
            <h3 className="text-base font-serif font-semibold text-[#2C2523]">
              Nenhum item encontrado
            </h3>
            <p className="text-xs text-[#7A6A53] mt-1 max-w-sm mx-auto">
              Não encontramos resultados para &quot;{searchQuery}&quot;. Tente buscar por outros termos ou selecione outra categoria.
            </p>
            <Button
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("todos");
              }}
            >
              Ver Cardápio Completo
            </Button>
          </div>
        )}

        {/* =========================================================
            ADD-ONS & COMPLEMENTOS SECTION
           ========================================================= */}
        <section className="w-full mb-12 bg-white rounded-3xl border border-[#ECE2D2] p-5 sm:p-7 shadow-xs">
          <div className="text-center mb-6">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9A722C]">
              Personalize seu Presente
            </span>
            <h2 className="text-xl font-serif font-bold text-[#231D1A] mt-0.5">
              Mimos & Itens Agregáveis
            </h2>
            <p className="text-xs text-[#6A5F5B] mt-1 max-w-md mx-auto">
              Adicione fotos polaroid, balões temáticos, bolos artesanais ou vinhos extras para tornar sua cesta inesquecível.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE0D1] hover:border-[#9A722C] transition-all"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2C2523]">
                    {addon.name}
                  </h4>
                  {addon.description && (
                    <p className="text-[11px] text-[#7A6A53] mt-0.5">
                      {addon.description}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0 ml-3">
                  <span className="text-xs font-bold text-[#9A722C]">
                    {addon.formattedPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            HOW TO ORDER / ORDER STEPS
           ========================================================= */}
        <section className="w-full mb-12 bg-gradient-to-b from-[#FAF4EC] to-[#F5ECE0] rounded-3xl border border-[#E8DEC9] p-6 sm:p-8 text-center">
          <GiftOutlined className="text-3xl text-[#9A722C] mb-2" />
          <h2 className="text-xl font-serif font-bold text-[#231D1A]">
            Como Funciona a sua Encomenda
          </h2>
          <p className="text-xs text-[#6A5F5B] mt-1 max-w-lg mx-auto leading-relaxed">
            Todas as nossas criações são feitas sob medida com ingredientes frescos de altíssima qualidade.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-left">
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-white/60">
              <span className="w-6 h-6 rounded-full bg-[#9A722C] text-white flex items-center justify-center text-xs font-bold mb-2">
                1
              </span>
              <h4 className="text-xs font-bold text-[#2C2523]">Escolha o Produto</h4>
              <p className="text-[11px] text-[#6A5F5B] mt-1">
                Navegue pelas cestas, boxes ou tábuas e clique no botão de pedido.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-white/60">
              <span className="w-6 h-6 rounded-full bg-[#9A722C] text-white flex items-center justify-center text-xs font-bold mb-2">
                2
              </span>
              <h4 className="text-xs font-bold text-[#2C2523]">Personalize no WhatsApp</h4>
              <p className="text-[11px] text-[#6A5F5B] mt-1">
                Defina mensagem do cartão, flores, opções de rótulo e adicionais com a Geraldina.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-white/60">
              <span className="w-6 h-6 rounded-full bg-[#9A722C] text-white flex items-center justify-center text-xs font-bold mb-2">
                3
              </span>
              <h4 className="text-xs font-bold text-[#2C2523]">Entrega com Carinho</h4>
              <p className="text-[11px] text-[#6A5F5B] mt-1">
                Agende data e horário para surpreender alguém especial em Irecê e região.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#E8DEC9]/70 text-xs text-[#7A6A53] max-w-md mx-auto">
            <p>
              📦 <strong>Garantia de Apresentação:</strong> {STORE_INFO.standardPackagingNote}
            </p>
          </div>
        </section>

        {/* =========================================================
            FOOTER
           ========================================================= */}
        <footer className="w-full text-center py-6 border-t border-[#E8DEC9] text-xs text-[#8A7969]">
          <p className="font-serif font-semibold text-[#2C2523]">
            {STORE_INFO.brand}
          </p>
          <p className="mt-1">
            {STORE_INFO.city} - {STORE_INFO.state} • WhatsApp: {STORE_INFO.whatsappDisplay}
          </p>
          <p className="text-[10px] text-[#A69585] mt-3">
            © {new Date().getFullYear()} {STORE_INFO.brand}. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* =========================================================
          PRODUCT DETAIL MODAL (Ant Design Modal)
         ========================================================= */}
      <Modal
        open={!!selectedProduct}
        onCancel={() => setSelectedProduct(null)}
        footer={null}
        width={560}
        centered
        className="product-detail-modal"
      >
        {selectedProduct && (
          <div className="pt-2">
            {/* Modal Image */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#F4EFEA] mb-4">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(max-width: 640px) 100vw, 560px"
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3">
                <Tag color="#9A722C" className="rounded-full px-3 py-0.5 text-xs">
                  {selectedProduct.category}
                </Tag>
              </div>
            </div>

            {/* Title & Price */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h2 className="text-xl font-serif font-bold text-[#231D1A]">
                  {selectedProduct.name}
                </h2>
                <p className="text-xs text-[#7A6A53] mt-0.5">
                  {selectedProduct.shortDescription}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-lg font-bold text-[#9A722C]">
                  {selectedVariation
                    ? selectedVariation.formattedPrice
                    : selectedProduct.formattedPrice}
                </span>
              </div>
            </div>

            {/* Price Variations Radio (if any) */}
            {selectedProduct.priceVariations &&
              selectedProduct.priceVariations.length > 0 && (
                <div className="mt-4 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE0D1]">
                  <span className="text-xs font-semibold text-[#2C2523] block mb-2">
                    Selecione a opção desejada:
                  </span>
                  <Radio.Group
                    value={selectedVariation?.label}
                    onChange={(e) => {
                      const found = selectedProduct.priceVariations?.find(
                        (v) => v.label === e.target.value
                      );
                      if (found) setSelectedVariation(found);
                    }}
                    className="w-full flex flex-col gap-2"
                  >
                    {selectedProduct.priceVariations.map((v) => (
                      <Radio
                        key={v.label}
                        value={v.label}
                        className="text-xs! flex justify-between items-center w-full"
                      >
                        <span className="font-medium text-[#2C2523]">
                          {v.label}
                        </span>{" "}
                        —{" "}
                        <strong className="text-[#9A722C]">
                          {v.formattedPrice}
                        </strong>
                      </Radio>
                    ))}
                  </Radio.Group>
                </div>
              )}

            {/* Dimensions / Serves / Packaging Info */}
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              {selectedProduct.dimensions && (
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#EAE0D1]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9A722C] font-semibold block">
                    Dimensões
                  </span>
                  <span className="text-[#2C2523] font-medium">
                    {selectedProduct.dimensions}
                  </span>
                </div>
              )}
              {selectedProduct.serves && (
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#EAE0D1]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9A722C] font-semibold block">
                    Rendimento
                  </span>
                  <span className="text-[#2C2523] font-medium">
                    {selectedProduct.serves}
                  </span>
                </div>
              )}
            </div>

            {/* Items Composition */}
            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A722C] mb-2.5">
                O que compõe este item:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#4A3D36]">
                {selectedProduct.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleFilled className="text-[#9A722C] text-xs mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes / Observações (e.g. heating brie) */}
            {selectedProduct.notes && selectedProduct.notes.length > 0 && (
              <div className="mt-4 p-3 rounded-xl bg-[#FFF9E6] border border-[#FFE7A8] text-xs text-[#7A5B00]">
                <div className="font-semibold flex items-center gap-1.5 mb-1">
                  <InfoCircleOutlined /> Observações Importantes:
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                  {selectedProduct.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Packaging info */}
            {selectedProduct.packaging && (
              <p className="mt-4 text-[11px] text-[#7A6A53] italic">
                🎁 <strong>Embalagem:</strong> {selectedProduct.packaging}
              </p>
            )}

            {/* CTA Order Button */}
            <div className="mt-6 pt-4 border-t border-[#ECE2D2]">
              <a
                href={getWhatsAppOrderLink(
                  selectedProduct,
                  selectedVariation || undefined
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-sm shadow-md transition-all duration-200"
              >
                <WhatsAppOutlined className="text-xl" />
                <span>
                  Pedir pelo WhatsApp (
                  {selectedVariation
                    ? selectedVariation.formattedPrice
                    : selectedProduct.formattedPrice}
                  )
                </span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

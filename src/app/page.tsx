"use client";

import React from "react";
import Image from "next/image";
import { Button, Space, Tooltip, message } from "antd";
import {
  WhatsAppOutlined,
  InstagramOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
  FilePdfOutlined,
  GiftOutlined,
  CoffeeOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { STORE_INFO } from "@/data/catalog";

interface CatalogItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

const CATALOGS: CatalogItem[] = [
  {
    id: "cestas-boxes",
    title: "Cestas & Box Presenteáveis",
    subtitle: "Vinhos, queijos nobres, chocolates e presentes afetivos",
    href: "/catalogos/catalogo-cestas-e-boxes.pdf",
    icon: <GiftOutlined className="text-xl text-[#9A722C]" />,
    badge: "Mais Pedido",
  },
  {
    id: "cafe-da-manha",
    title: "Café da Manhã & Afeto",
    subtitle: "Cestas de café da manhã, boxes especiais e delícias artesanais",
    href: "/catalogos/catalogo-cafe-da-manha.pdf",
    icon: <CoffeeOutlined className="text-xl text-[#9A722C]" />,
  },
  {
    id: "tabuas",
    title: "Tábuas & Gastronomia",
    subtitle: "Charcutaria refinada, queijo brie folhado e ilhas gastronômicas",
    href: "/catalogos/catalogo-tabuas.pdf",
    icon: <FilePdfOutlined className="text-xl text-[#9A722C]" />,
  },
  {
    id: "maternidade",
    title: "Linha Maternidade",
    subtitle: "Cestas delicadas para a chegada do bebê e boas-vindas",
    href: "/catalogos/catalogo-maternidade.pdf",
    icon: <HeartFilled className="text-xl text-[#9A722C]" />,
  },
];

export default function HomePage() {
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
      message.success("Link copiado para a área de transferência!");
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

      <div className="relative max-w-xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
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
            <span
              className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center text-[10px] text-white shadow-xs"
              title="Disponível para encomendas"
            >
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
            <span>
              {STORE_INFO.city} - {STORE_INFO.state} & Região
            </span>
          </div>

          {/* Quick Contact & Social Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5 w-full max-w-sm">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
                "Olá Geraldina! Vi os catálogos no link da bio da La Table e gostaria de tirar uma dúvida sobre encomendas."
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
            CATALOGS SECTION (Space with large block Ant Design buttons)
           ========================================================= */}
        <section className="w-full max-w-md mb-8">
          <div className="text-center mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9A722C]">
              Catálogos Oficiais em PDF
            </h2>
            <p className="text-xs text-[#7A6A53] mt-1">
              Toque abaixo para visualizar ou fazer download do cardápio completo
            </p>
          </div>

          <Space
            direction="vertical"
            size={14}
            className="w-full"
            style={{ width: "100%" }}
          >
            {CATALOGS.map((item) => (
              <Button
                key={item.id}
                size="large"
                block
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: "auto" }}
                className="!py-3.5 !px-4 sm:!px-5 !rounded-2xl !bg-white/95 hover:!bg-white !border-[#E8DEC9] hover:!border-[#9A722C] !shadow-2xs hover:!shadow-md transition-all duration-300 group !text-left"
              >
                <span className="flex items-center justify-between w-full gap-3">
                  <span className="flex items-center gap-3.5 min-w-0">
                    <span className="w-11 h-11 rounded-xl bg-[#FAF4EC] flex items-center justify-center shrink-0 border border-[#ECE0D0] group-hover:bg-[#F5ECE0] transition-colors text-[#9A722C]">
                      {item.icon}
                    </span>
                    <span className="flex flex-col min-w-0 text-left">
                      <span className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm sm:text-base text-[#2C2523] group-hover:text-[#9A722C] transition-colors truncate">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#9A722C] text-white shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-[#7A6A53] truncate font-normal mt-0.5">
                        {item.subtitle}
                      </span>
                    </span>
                  </span>
                  <span className="shrink-0 flex items-center gap-1 text-[#9A722C] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <span className="text-[11px] font-medium hidden sm:inline">
                      Abrir PDF
                    </span>
                    <FilePdfOutlined className="text-base" />
                  </span>
                </span>
              </Button>
            ))}
          </Space>
        </section>

        {/* =========================================================
            HOW TO ORDER / ORDER STEPS
           ========================================================= */}
        <section className="w-full max-w-md mb-8 bg-gradient-to-b from-[#FAF4EC] to-[#F5ECE0] rounded-3xl border border-[#E8DEC9] p-5 sm:p-6 text-center shadow-xs">
          <GiftOutlined className="text-2xl text-[#9A722C] mb-2" />
          <h3 className="text-base font-serif font-bold text-[#231D1A]">
            Como Funciona a sua Encomenda
          </h3>
          <p className="text-xs text-[#6A5F5B] mt-1 leading-relaxed">
            Todas as nossas criações são preparadas sob medida com ingredientes frescos de altíssima qualidade.
          </p>

          <div className="flex flex-col gap-2.5 mt-4 text-left">
            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-white/60 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#9A722C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                1
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#2C2523]">Escolha no Catálogo</h4>
                <p className="text-[11px] text-[#6A5F5B]">
                  Abra o PDF desejado nos botões acima e confira as opções e composições.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-white/60 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#9A722C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                2
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#2C2523]">Personalize no WhatsApp</h4>
                <p className="text-[11px] text-[#6A5F5B]">
                  Defina mensagem do cartão, flores, rótulos e adicionais com a Geraldina.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-white/60 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#9A722C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                3
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#2C2523]">Entrega com Carinho</h4>
                <p className="text-[11px] text-[#6A5F5B]">
                  Agende data e horário para surpreender alguém especial em Irecê e região.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOOTER
           ========================================================= */}
        <footer className="w-full max-w-md text-center py-6 border-t border-[#E8DEC9] text-xs text-[#8A7969]">
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
    </div>
  );
}

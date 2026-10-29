import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import "./globals.css";
import { STORE_INFO } from "@/data/catalog";

export const metadata: Metadata = {
  metadataBase: new URL("https://latable-irece.com.br"),
  title: `${STORE_INFO.brand} | Cardápio de Cestas & Gastronomia`,
  description: `${STORE_INFO.tagline} Cestas de café da manhã, boxes com vinho, linha maternidade e tábuas de frios em Irecê - BA.`,
  keywords: [
    "Cestas de café da manhã",
    "Cestas personalizadas",
    "Tábuas de frios",
    "Grazing Table",
    "Maternidade",
    "Presentes gourmet",
    "Irecê",
    "Geraldina Ribeiro",
    "La Table",
  ],
  openGraph: {
    title: `${STORE_INFO.brand} | Momentos Especiais`,
    description: STORE_INFO.bio,
    images: ["/images/profile.jpeg"],
  },
};

const customTheme = {
  token: {
    colorPrimary: "#9A722C",
    colorInfo: "#B38E46",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorTextBase: "#2C2523",
    colorBgBase: "#FAF7F2",
    borderRadius: 14,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    Button: {
      colorPrimary: "#9A722C",
      colorPrimaryHover: "#846023",
      borderRadius: 9999,
      controlHeight: 44,
    },
    Card: {
      borderRadiusLG: 16,
      colorBorderSecondary: "#EAE2D8",
    },
    Tabs: {
      colorPrimary: "#9A722C",
      itemSelectedColor: "#9A722C",
    },
    Modal: {
      borderRadiusLG: 20,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#FDFBF7] text-[#2C2523] antialiased">
        <AntdRegistry>
          <ConfigProvider theme={customTheme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

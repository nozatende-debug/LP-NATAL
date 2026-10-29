import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noz-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noz-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kits de Natal Corporativos Personalizados | NOZ",
  description:
    "Kits de Natal corporativos com a sua marca, a partir de R$15. Envio para todo o Brasil e sem pedido mínimo. Peça seu orçamento no WhatsApp.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${display.variable} ${body.variable} antialiased`}
        style={{ fontFamily: "var(--font-noz-body), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

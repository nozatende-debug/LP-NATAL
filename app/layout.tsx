import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://natal.nozpresentes.com.br"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${display.variable} ${body.variable} antialiased`}
        style={{ fontFamily: "var(--font-noz-body), sans-serif" }}
      >
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-314JJ5TJRT" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-314JJ5TJRT');`}
        </Script>
      </body>
    </html>
  );
}

import Image from "next/image";
import { FAQ, PRODUCTS, WHATSAPP_GERAL, whatsappLink, type Product } from "./config";

const wine = "#5e1f2b";
const cream = "#f4ead9";
const green = "#3b4a40";
const gold = "#c9a063";

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0c.6 6.6 4.8 10.8 12 12-7.2 1.2-11.4 5.4-12 12-.6-6.6-4.8-10.8-12-12C7.2 10.8 11.4 6.6 12 0Z" />
    </svg>
  );
}

export function CtaButton({
  href = WHATSAPP_GERAL,
  children,
  variant = "wine",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "wine" | "cream" | "gold";
}) {
  const styles = {
    wine: { background: wine, color: cream },
    cream: { background: cream, color: wine },
    gold: { background: gold, color: "#2a1115" },
  }[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={styles}
      className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
    >
      {children}
    </a>
  );
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 backdrop-blur-md" style={{ background: "rgba(94,31,43,0.94)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#topo" aria-label="NOZ Presentes">
          <img src="/noz-logo.svg" alt="NOZ" className="h-9 w-auto" />
        </a>
        <p
          className="hidden items-center gap-3 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] md:flex"
          style={{ background: "rgba(201,160,99,0.16)", color: gold, border: "1px solid rgba(201,160,99,0.4)" }}
        >
          <span>Envio rápido em até 10 dias</span>
          <span aria-hidden>|</span>
          <span>Atendimento em todo Brasil</span>
        </p>
        <CtaButton variant="gold">Orçamento</CtaButton>
      </div>
      <p
        className="px-4 py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.1em] md:hidden"
        style={{ background: "rgba(201,160,99,0.16)", color: gold }}
      >
        Envio rápido em até 10 dias | Atendimento em todo Brasil
      </p>
    </header>
  );
}

const HERO_PHOTOS = [
  { src: "/noz/conexoes-09.jpg", alt: "Kit Conexões 09 com sacola personalizada", cls: "" },
  { src: "/noz/celebre-07.jpg", alt: "Kit Celebre 07 com bolas acrílicas e vinho", cls: "" },
  { src: "/noz/celebre-13.jpg", alt: "Kit Celebre 13 com lata de biscoitos e café", cls: "" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 pb-8 md:pt-28 md:pb-10" style={{ background: wine, color: cream }}>
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 md:grid-cols-[1.05fr_1fr] md:gap-10">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em]" style={{ color: gold }}>
            <Star className="h-3 w-3" /> Natal e fim de ano corporativo
          </p>
          <h1 className="font-[family-name:var(--font-noz-display)] text-4xl font-medium leading-[1.05] md:text-5xl lg:text-6xl">
            Presentes de fim de ano que eternizam sua marca.
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed opacity-85 md:text-lg">
            Kits natalinos personalizados para presentear sua equipe e seus clientes, sem pedido mínimo.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <CtaButton variant="gold">Solicitar orçamento</CtaButton>
            <p className="text-sm opacity-70">Kits a partir de R$15</p>
          </div>
        </div>
        <div className="grid h-[150px] grid-cols-3 gap-2 md:h-[260px] md:gap-3">
          {HERO_PHOTOS.map((ph) => (
            <div key={ph.src} className={`relative overflow-hidden rounded-2xl ${ph.cls}`}>
              <Image src={ph.src} alt={ph.alt} fill priority sizes="(min-width: 768px) 200px, 33vw" className="object-cover" />
            </div>
          ))}
          <Star className="pointer-events-none absolute right-6 top-28 hidden h-8 w-8 md:block" />
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = ["Sem pedido mínimo", "Envio rápido em até 10 dias", "Marca personalizada", "Atendimento em todo Brasil"];
  return (
    <section style={{ background: gold, color: "#2a1115" }}>
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] md:grid-cols-4">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  const msg = `Olá! Quero solicitar orçamento do kit ${p.name}. Quantidade: `;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl text-center" style={{ background: "#fff8ec", border: "1px solid rgba(94,31,43,0.12)" }}>
      <div className="relative aspect-[4/5]" style={{ background: green }}>
        <Image src={p.image} alt={`Kit ${p.name}`} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ background: cream, color: wine }}>
          {p.line}
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center p-6" style={{ color: wine }}>
        <h3 className="font-[family-name:var(--font-noz-display)] text-3xl font-medium">{p.name}</h3>
        <ul className="mt-3 flex-1 space-y-1.5 text-[15px] leading-snug" style={{ color: "#4a2a2f" }}>
          {p.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <div className="mt-6 flex w-full justify-center">
          <CtaButton href={whatsappLink(msg)}>Solicitar orçamento</CtaButton>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="kits" className="py-16 md:py-24" style={{ background: cream, color: wine }}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em]" style={{ color: green }}>Catálogo de Natal</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-noz-display)] text-4xl font-medium leading-tight md:text-6xl">
            Escolha o kit ideal para o seu time.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: "#4a2a2f" }}>
            Todos os kits podem ter a identidade da sua marca. Escolha o seu e solicite o orçamento pelo WhatsApp.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
          <div className="flex flex-col items-center justify-center rounded-2xl p-8 text-center" style={{ background: wine, color: cream }}>
            <h3 className="font-[family-name:var(--font-noz-display)] text-3xl font-medium">Não achou o kit ideal?</h3>
            <p className="mt-3 mb-6 opacity-85">Montamos uma proposta sob medida para o seu orçamento e a sua marca.</p>
            <CtaButton variant="gold">Falar com a NOZ</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["Escolha o kit", "Veja o catálogo e envie a quantidade desejada pelo WhatsApp."],
    ["Personalize", "Aplicamos a sua marca em tags, bolas acrílicas, sacolas e tubolatas."],
    ["Aprove", "Você recebe a proposta e valida os detalhes antes da produção."],
    ["Receba", "Cuidamos da logística e entregamos em todo o Brasil."],
  ];
  return (
    <section id="como-funciona" className="py-20 md:py-28" style={{ background: green, color: cream }}>
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="text-xs uppercase tracking-[0.25em]" style={{ color: gold }}>Como funciona</p>
        <h2 className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-noz-display)] text-4xl font-medium leading-tight md:text-6xl">
          Do orçamento à entrega, sem dor de cabeça.
        </h2>
        <ol className="mt-12 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t pt-5" style={{ borderColor: "rgba(244,234,217,0.3)" }}>
              <span className="font-[family-name:var(--font-noz-display)] text-5xl" style={{ color: gold }}>0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-2 opacity-80">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <CtaButton variant="gold">Começar meu orçamento</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="duvidas" className="py-20 md:py-28" style={{ background: cream, color: wine }}>
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-[family-name:var(--font-noz-display)] text-4xl font-medium md:text-5xl">Dúvidas frequentes</h2>
        <div className="mt-10 divide-y" style={{ borderColor: "rgba(94,31,43,0.2)" }}>
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {f.q}
                <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 leading-relaxed" style={{ color: "#4a2a2f" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-20 text-center md:py-28" style={{ background: wine, color: cream }}>
      <div className="mx-auto max-w-3xl px-5">
        <Star className="mx-auto h-8 w-8" />
        <h2 className="mt-5 font-[family-name:var(--font-noz-display)] text-4xl font-medium leading-tight md:text-6xl">
          NOZ, para marcas que se fazem presentes.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg opacity-85">
          Peça seu orçamento agora e garanta o Natal da sua empresa com entrega para todo o Brasil.
        </p>
        <div className="mt-9">
          <CtaButton variant="gold">Solicitar orçamento no WhatsApp</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm" style={{ background: "#3f141c", color: "rgba(244,234,217,0.7)" }}>
      <img src="/noz-logo.svg" alt="NOZ" className="mx-auto h-9 w-auto" />
      <p className="mt-2">Presentes corporativos · © {new Date().getFullYear()} Noz Presentes</p>
      <p className="mt-2">
        WhatsApp:{" "}
        <a href={WHATSAPP_GERAL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-80" style={{ color: cream }}>
          (41) 98894-5633
        </a>
      </p>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_GERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-105"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

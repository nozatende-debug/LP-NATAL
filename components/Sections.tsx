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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 backdrop-blur-md" style={{ background: "rgba(94,31,43,0.92)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#topo" className="font-[family-name:var(--font-noz-display)] text-2xl font-semibold tracking-[0.2em]" style={{ color: cream }}>
          NOZ
        </a>
        <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.16em] md:flex" style={{ color: cream }}>
          <a href="#kits" className="hover:opacity-70">Kits</a>
          <a href="#como-funciona" className="hover:opacity-70">Como funciona</a>
          <a href="#duvidas" className="hover:opacity-70">Dúvidas</a>
        </nav>
        <CtaButton variant="gold">Orçamento</CtaButton>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24" style={{ background: wine, color: cream }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.25em]" style={{ color: gold }}>
            <Star className="h-3 w-3" /> Natal corporativo
          </p>
          <h1 className="font-[family-name:var(--font-noz-display)] text-5xl font-medium leading-[1.05] md:text-7xl">
            Kits de Natal que levam a sua marca à mesa.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed opacity-85">
            Presentes corporativos personalizados para equipes e clientes, com entrega para todo o Brasil e sem pedido mínimo.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaButton variant="gold">Solicitar orçamento</CtaButton>
            <a href="#kits" className="text-sm uppercase tracking-[0.16em] underline underline-offset-8 hover:opacity-70">
              Ver os kits
            </a>
          </div>
          <p className="mt-8 text-sm opacity-70">Kits a partir de R$ 30 por pessoa · Curitiba, PR</p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <Image
            src="/noz/conexoes-09.jpg"
            alt="Kit Conexões 09 com sacola personalizada, vinho e panetone"
            fill
            priority
            sizes="(min-width: 768px) 448px, 90vw"
            className="rounded-t-[999px] object-cover"
          />
          <Star className="absolute -right-3 top-10 h-9 w-9" />
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = ["Sem pedido mínimo", "Envio para todo o Brasil", "Marca personalizada", "A partir de R$ 30"];
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
  const msg = `Olá! Quero orçamento do kit ${p.name} (a partir de R$ ${p.price}/un.). Quantidade: `;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl" style={{ background: "#fff8ec", border: "1px solid rgba(94,31,43,0.12)" }}>
      <div className="relative aspect-[4/3]" style={{ background: green }}>
        <Image src={p.image} alt={`Kit ${p.name}`} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ background: cream, color: wine }}>
          {p.line}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6" style={{ color: wine }}>
        <h3 className="font-[family-name:var(--font-noz-display)] text-3xl font-medium">{p.name}</h3>
        <ul className="mt-3 flex-1 space-y-1.5 text-[15px] leading-snug" style={{ color: "#4a2a2f" }}>
          {p.items.map((i) => (
            <li key={i} className="flex gap-2">
              <Star className="mt-1.5 h-2 w-2 shrink-0" />
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-5 font-[family-name:var(--font-noz-display)] text-4xl font-semibold">
          <span className="mr-1 text-base font-normal opacity-70">R$</span>
          {p.price}
          <span className="ml-1 text-sm font-normal opacity-60">/un.</span>
        </p>
        <dl className="mt-3 grid grid-cols-4 gap-1 border-t pt-3 text-center text-xs" style={{ borderColor: "rgba(94,31,43,0.15)" }}>
          {p.tiers.map((t) => (
            <div key={t.qty}>
              <dt className="opacity-60">{t.qty} und.</dt>
              <dd className="font-semibold">R$ {t.price}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5">
          <CtaButton href={whatsappLink(msg)}>Quero este kit</CtaButton>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="kits" className="py-20 md:py-28" style={{ background: cream, color: wine }}>
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs uppercase tracking-[0.25em]" style={{ color: green }}>Catálogo de Natal</p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-noz-display)] text-4xl font-medium leading-tight md:text-6xl">
          Escolha o kit ideal para o seu time.
        </h2>
        <p className="mt-4 max-w-xl text-lg" style={{ color: "#4a2a2f" }}>
          Quanto maior a quantidade, menor o valor por unidade. Todos os kits podem ter a identidade da sua marca.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
          <div className="flex flex-col items-start justify-center rounded-2xl p-8" style={{ background: wine, color: cream }}>
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
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs uppercase tracking-[0.25em]" style={{ color: gold }}>Como funciona</p>
        <h2 className="mt-3 max-w-xl font-[family-name:var(--font-noz-display)] text-4xl font-medium leading-tight md:text-6xl">
          Do orçamento à entrega, sem dor de cabeça.
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
      <p className="font-[family-name:var(--font-noz-display)] text-xl tracking-[0.2em]" style={{ color: cream }}>NOZ</p>
      <p className="mt-2">Presentes corporativos · Curitiba, PR · © {new Date().getFullYear()} Noz Presentes</p>
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

export const WHATSAPP_NUMBER = "5541988945633";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_GERAL = whatsappLink(
  "Olá! Quero um orçamento de kits de Natal corporativos da NOZ.",
);

export interface Tier {
  qty: string;
  price: string;
}

export interface Product {
  slug: string;
  line: string;
  name: string;
  price: string;
  items: string[];
  tiers: Tier[];
  /** Troque o arquivo em public/noz/ pela foto real do Drive. */
  image: string;
}

const tiers = (a: string, b: string, c: string, d: string): Tier[] => [
  { qty: "10+", price: a },
  { qty: "50+", price: b },
  { qty: "100+", price: c },
  { qty: "150+", price: d },
];

export const PRODUCTS: Product[] = [
  {
    slug: "encontros-02",
    line: "Encontros",
    name: "Encontros 02",
    price: "30",
    items: ["Tubolata 100% personalizável", "Biscoitos amanteigados natalinos 100g"],
    tiers: tiers("29,10", "28,50", "27", "26,40"),
    image: "/noz/encontros-02.jpg",
  },
  {
    slug: "conexoes-05",
    line: "Conexões",
    name: "Conexões 05",
    price: "82",
    items: [
      "Espumante brut ou moscatel 187ml",
      "Mini panetone ou chocotone 100g",
      "Caixa de presente com tag",
      "Cartão",
    ],
    tiers: tiers("80", "78", "74", "72"),
    image: "/noz/conexoes-05.jpg",
  },
  {
    slug: "conexoes-09",
    line: "Conexões",
    name: "Conexões 09",
    price: "90",
    items: [
      "Sacola com tag acrílica",
      "Vinho Miolo 375ml",
      "Mini panetone ou chocotone 100g",
      "Biscoitos natalinos 100g",
    ],
    tiers: tiers("88", "86", "81", "80"),
    image: "/noz/conexoes-09.jpg",
  },
  {
    slug: "celebre-01",
    line: "Celebre",
    name: "Celebre 01",
    price: "103",
    items: [
      "Vinho Miolo 375ml",
      "Grissinis assados, sabor a definir",
      "Caixa de presente com tag",
      "Cartão",
    ],
    tiers: tiers("100", "98", "93", "91"),
    image: "/noz/celebre-01.jpg",
  },
  {
    slug: "celebre-06",
    line: "Celebre",
    name: "Celebre 06",
    price: "114",
    items: [
      "Espumante brut ou moscatel 187ml",
      "Lata natalina de biscoitos amanteigados",
      "Bola acrílica personalizável",
      "Caixa de presente com tag",
      "Cartão",
    ],
    tiers: tiers("111", "109", "103", "101"),
    image: "/noz/celebre-06.jpg",
  },
  {
    slug: "celebre-07",
    line: "Celebre",
    name: "Celebre 07",
    price: "121",
    items: [
      "Vinho Miolo 375ml",
      "Bola acrílica personalizável",
      "Bola acrílica com amendoim crocante",
      "Bola acrílica com biscoitos natalinos",
      "Caixa de presente com tag e cartão",
    ],
    tiers: tiers("118", "115", "109", "107"),
    image: "/noz/celebre-07.jpg",
  },
  {
    slug: "celebre-13",
    line: "Celebre",
    name: "Celebre 13",
    price: "157",
    items: [
      "Lata natalina de biscoitos amanteigados",
      "Coador de café individual",
      "Mini panetone ou chocotone 100g",
      "Café gourmet moído 100g",
      "Caixa de presente com tag e cartão",
    ],
    tiers: tiers("153", "150", "142", "139"),
    image: "/noz/celebre-13.jpg",
  },
  {
    slug: "premium-01",
    line: "Premium",
    name: "Premium 01",
    price: "204",
    items: [
      "Maleta em couro sintético + utensílios",
      "Vinho Miolo 375ml",
      "Mini panetone ou chocotone 100g",
      "Cartão",
    ],
    tiers: tiers("198", "194", "184", "180"),
    image: "/noz/premium-01.jpg",
  },
];

export const FAQ = [
  {
    q: "Existe pedido mínimo?",
    a: "Para envio, a NOZ atende sem pedido mínimo. Os valores por unidade diminuem a partir de 10, 50, 100 e 150 kits.",
  },
  {
    q: "Posso colocar a minha marca nos kits?",
    a: "Sim. Tags, bolas acrílicas, sacolas e tubolatas são personalizáveis com a identidade da sua empresa.",
  },
  {
    q: "A NOZ entrega em todo o Brasil?",
    a: "Sim. Cuidamos da logística completa e enviamos para todo o Brasil, direto para cada colaborador ou cliente.",
  },
  {
    q: "Posso trocar sabores ou itens do kit?",
    a: "Alguns itens têm opções, como panetone ou chocotone e espumante brut ou moscatel. Fale com a equipe para ajustar o kit ao seu orçamento.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O envio é rápido: em até 10 dias. Confirme o prazo exato para a sua quantidade ao solicitar o orçamento.",
  },
  {
    q: "Como peço um orçamento?",
    a: "Clique em qualquer botão da página e envie a quantidade e o kit desejado pelo WhatsApp. A equipe responde com a proposta.",
  },
];

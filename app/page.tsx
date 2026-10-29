import { Faq, FinalCta, Footer, Hero, HowItWorks, Navbar, Products, TrustBar, WhatsAppFloat } from "@/components/Sections";

export default function NozPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Products />
      <HowItWorks />
      <Faq />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

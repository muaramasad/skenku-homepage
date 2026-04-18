import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Analytics from "@/components/Analytics";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Stats />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Features />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <HowItWorks />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Analytics />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Pricing />
      </main>
      <CTA />
      <Footer />
    </>
  );
}

import UrgencyBar from "@/components/landing/UrgencyBar";
import Hero from "@/components/landing/Hero";
import Pain from "@/components/landing/Pain";
import Promise from "@/components/landing/Promise";
import Modules from "@/components/landing/Modules";
import Personas from "@/components/landing/Personas";
import SocialProof from "@/components/landing/SocialProof";
import Format from "@/components/landing/Format";
import Mentorship from "@/components/landing/Mentorship";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20 sm:pb-16">
      <UrgencyBar />
      <Hero />
      <Pain />
      <Promise />
      <Modules />
      <Personas />
      <SocialProof />
      <Format />
      <Mentorship />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBar />
    </main>
  );
};

export default Index;

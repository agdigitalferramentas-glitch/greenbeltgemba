import UrgencyBar from "@/components/landing/UrgencyBar";
import HeroV2 from "@/components/landing/HeroV2";
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

const IndexV2 = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <UrgencyBar />
      <HeroV2 />
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
    </main>
  );
};

export default IndexV2;

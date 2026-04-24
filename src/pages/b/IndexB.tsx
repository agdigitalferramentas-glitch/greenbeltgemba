import { useEffect } from "react";
import "./theme.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Authority from "./components/Authority";
import Personas from "./components/Personas";
import Benefits from "./components/Benefits";
import Curriculum from "./components/Curriculum";
import Practical from "./components/Practical";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const IndexB = () => {
  // Load Google Fonts only on this page
  useEffect(() => {
    const id = "b-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);

    // Update SEO meta for this page
    const prevTitle = document.title;
    document.title = "Green Belt Lean Six Sigma — Destrave sua carreira | Gemba Group";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="b-theme min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Authority />
        <Personas />
        <Benefits />
        <Curriculum />
        <Practical />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default IndexB;

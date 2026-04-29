import aeroflex from "@/assets/logos/aeroflex.svg";
import firjan from "@/assets/logos/firjan.svg";
import frisia from "@/assets/logos/frisia.svg";
import kapazi from "@/assets/logos/kapazi.svg";
import nhs from "@/assets/logos/nhs.svg";
import renault from "@/assets/logos/renault.svg";
import riosulense from "@/assets/logos/riosulense.svg";
import senai from "@/assets/logos/senai.svg";
import sicredi from "@/assets/logos/sicredi.svg";
import valmet from "@/assets/logos/valmet.svg";

const logos = [
  { src: renault, alt: "Renault" },
  { src: senai, alt: "SENAI" },
  { src: sicredi, alt: "Sicredi" },
  { src: valmet, alt: "Valmet" },
  { src: firjan, alt: "Firjan" },
  { src: frisia, alt: "Frísia" },
  { src: nhs, alt: "NHS" },
  { src: riosulense, alt: "Riosulense" },
  { src: aeroflex, alt: "Aeroflex" },
  { src: kapazi, alt: "Kapazi" },
];

const LogosMarquee = () => (
  <section className="bg-[hsl(var(--bg-elevated))] border-t border-green-vibrant/10">
    <div className="container py-10 sm:py-12">
      <h3 className="text-center text-sm sm:text-base text-muted-foreground uppercase tracking-wider max-w-2xl mx-auto leading-relaxed">
        Método validado e aplicado em empresas de todos os portes e setores
      </h3>

      <div
        className="mt-8 sm:mt-10 relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center px-8 sm:px-12 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-8 sm:h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LogosMarquee;

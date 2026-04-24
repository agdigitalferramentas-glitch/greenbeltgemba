import SectionLabel from "./SectionLabel";

const videoTestimonials = [
  "wJQeUW8ZQQA",
  "cnA_jrJDcRU",
  "YhS3Fz6iEYk",
  "mCfsnekzJ0o",
  "VRcPrcZigHM",
];

const numbers = [
  { v: "+30k", l: "Profissionais capacitados em todo o Brasil" },
  { v: "+1Bi", l: "Em ganhos gerados pelos nossos alunos" },
  { v: "+1500", l: "Projetos Lean Six Sigma certificados" },
  { v: "30x", l: "Média de retorno sobre o investimento" },
  { v: "17 anos", l: "De liderança nacional em Lean Six Sigma" },
  { v: "+1000", l: "Empresas atendidas em consultoria" },
];

const SocialProof = () => (
  <section className="bg-[hsl(var(--bg-elevated))]">
    <div className="container py-10 sm:py-14 lg:py-20">
      <div className="flex justify-center"><SectionLabel>Números que comprovam</SectionLabel></div>
      <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-center leading-tight">
        A Gemba Group <span className="text-green-glow">não promete.</span> Entrega resultados.
      </h2>

      <div className="mt-14 rounded-2xl border border-green-vibrant/25 overflow-hidden grid grid-cols-2 md:grid-cols-3">
        {numbers.map((n, i) => (
          <div
            key={n.l}
            className={`p-6 sm:p-10 text-center transition-colors hover:bg-green-vibrant/5
              ${i % 3 !== 2 ? "md:border-r md:border-green-vibrant/20" : ""}
              ${i % 2 === 0 ? "border-r md:border-r" : ""}
              ${i < numbers.length - 2 ? "border-b border-green-vibrant/20" : ""}
              ${i < numbers.length - 3 ? "md:border-b md:border-green-vibrant/20" : "md:border-b-0"}
            `}
          >
            <div className="font-display text-4xl sm:text-6xl text-green-glow text-glow leading-none">{n.v}</div>
            <div className="mt-2 sm:mt-3 text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{n.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;

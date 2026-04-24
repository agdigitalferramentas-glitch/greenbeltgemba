import heroImg from "@/assets/b/hero-team.jpg";

const heroStats = [
  { v: "+30%", l: "Aumento salarial médio" },
  { v: "30 mil", l: "Profissionais formados" },
  { v: "17 anos", l: "Liderando o mercado" },
];

/**
 * Variação 2 da Versão B — composição centrada com banner de imagem larga.
 *  - Foco máximo na headline e prova social numérica
 *  - Sem repetir a logo do produto (apenas a tag "Formação Green Belt")
 *  - Imagem ocupa banner full-width abaixo, com card de prova flutuante
 */
const HeroV2 = () => (
  <section id="b-top" className="relative" style={{ background: "hsl(var(--b-bg))" }}>
    <span
      className="b-asym-corner hidden lg:block"
      style={{ top: 60, left: 0, borderRight: "none", borderBottom: "none" }}
    />

    {/* Top: centered copy */}
    <div className="max-w-5xl mx-auto px-5 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 text-center b-fade-up">
      <div className="b-section-bar mb-6 mx-auto w-fit">Formação Green Belt — Turma 2025</div>

      <h1
        className="b-display leading-[1.05] max-w-4xl mx-auto"
        style={{
          fontSize: "clamp(32px, 5.5vw, 64px)",
          color: "hsl(var(--b-text))",
        }}
      >
        O método que faz profissionais comuns{" "}
        <span style={{ color: "hsl(var(--b-green))" }}>ganharem +30% de salário</span>{" "}
        em até 12 meses.
      </h1>

      <p
        className="mt-5 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        style={{ color: "hsl(var(--b-text-soft))" }}
      >
        Lean Six Sigma é a metodologia mais valorizada pelas multinacionais.
        E a Gemba Group é a referência nacional para você dominá-la
        e ser disputado pelo mercado.
      </p>

      {/* KPI pills */}
      <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl mx-auto">
        {heroStats.map((s) => (
          <div
            key={s.l}
            className="rounded-lg border bg-white p-3 sm:p-4"
            style={{ borderColor: "hsl(var(--b-border))" }}
          >
            <div
              className="b-display text-xl sm:text-3xl leading-none"
              style={{ color: "hsl(var(--b-green))" }}
            >
              {s.v}
            </div>
            <div
              className="text-[10px] sm:text-xs mt-1.5 leading-tight"
              style={{ color: "hsl(var(--b-text-soft))" }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#b-investimento" className="b-btn">
          Garantir minha vaga →
        </a>
        <a href="#b-conteudo" className="b-btn-outline">
          Ver conteúdo do curso
        </a>
      </div>
    </div>

    {/* Bottom: wide image banner */}
    <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pb-14 sm:pb-20">
      <div className="b-img-overlay relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
        <img
          src={heroImg}
          alt="Profissionais analisando resultados de projeto Lean Six Sigma"
          width={1920}
          height={820}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating proof card */}
      <div
        className="hidden sm:block absolute -bottom-6 right-8 lg:right-16 bg-white rounded-lg shadow-2xl border p-5 max-w-[280px]"
        style={{ borderColor: "hsl(var(--b-border))" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ background: "hsl(var(--b-green))" }}
          >
            ✓
          </div>
          <div>
            <div className="text-sm font-bold" style={{ color: "hsl(var(--b-text))" }}>
              Certificação reconhecida
            </div>
            <div className="text-xs" style={{ color: "hsl(var(--b-text-soft))" }}>
              Council for Six Sigma Certification
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroV2;

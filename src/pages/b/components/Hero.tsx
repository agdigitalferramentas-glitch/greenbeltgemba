import heroImg from "@/assets/b/hero-team.jpg";

const stats = [
  { v: "30K+", l: "Profissionais formados" },
  { v: "80%", l: "Tiveram aumento salarial" },
  { v: "R$ 1Bi", l: "Em resultados gerados" },
];

const Hero = () => (
  <section id="b-top" className="relative overflow-hidden" style={{ background: "hsl(var(--b-bg))" }}>
    {/* Decorative asymmetric corner */}
    <span
      className="b-asym-corner hidden lg:block"
      style={{ top: 80, left: 0, borderRight: "none", borderBottom: "none" }}
    />

    <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-7 b-fade-up">
        <div className="b-section-bar mb-6">Formação Green Belt</div>

        <h1
          className="b-display leading-[1.05]"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            color: "hsl(var(--b-text))",
          }}
        >
          Destrave sua carreira com{" "}
          <span style={{ color: "hsl(var(--b-green))" }}>Green Belt Lean Six Sigma</span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(var(--b-text-soft))" }}>
          O diferencial que falta no seu currículo para conquistar a promoção,
          aumentar seu salário e ser disputado pelas maiores multinacionais.
          Junte-se aos <strong style={{ color: "hsl(var(--b-text))" }}>30 mil profissionais</strong> que já transformaram suas carreiras.
        </p>

        <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {[
            "80% dos alunos tiveram aumento salarial",
            "Certificação reconhecida pelo Council for Six Sigma",
            "17 anos formando líderes",
            "Metodologia testada em +100 empresas",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm" style={{ color: "hsl(var(--b-text))" }}>
              <span style={{ color: "hsl(var(--b-green))" }} className="font-bold mt-0.5">✓</span>
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#b-investimento" className="b-btn">
            Quero garantir minha vaga →
          </a>
          <a href="#b-conteudo" className="b-btn-outline">
            Ver conteúdo do curso
          </a>
        </div>
      </div>

      {/* Image with green overlay */}
      <div className="lg:col-span-5 relative b-fade-up">
        <div className="b-img-overlay aspect-[4/5] sm:aspect-[5/6] shadow-xl">
          <img src={heroImg} alt="Profissionais analisando resultados de projeto Lean Six Sigma" width={1280} height={1280} />
        </div>
        {/* Floating stat card */}
        <div
          className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-5 sm:p-6 rounded-lg shadow-xl border max-w-[260px]"
          style={{ borderColor: "hsl(var(--b-border))" }}
        >
          <div className="b-display text-3xl sm:text-4xl" style={{ color: "hsl(var(--b-green))" }}>
            +30%
          </div>
          <div className="text-xs sm:text-sm mt-1" style={{ color: "hsl(var(--b-text-soft))" }}>
            Aumento salarial médio dos alunos certificados
          </div>
        </div>
      </div>
    </div>

    {/* Stats strip */}
    <div style={{ background: "hsl(var(--b-green))" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8 grid grid-cols-3 gap-4 sm:gap-8 text-white text-center">
        {stats.map((s, i) => (
          <div key={s.l} className={i < 2 ? "border-r border-white/20 pr-2 sm:pr-8" : ""}>
            <div className="b-display text-2xl sm:text-4xl">{s.v}</div>
            <div className="text-[11px] sm:text-sm mt-1 text-white/80 leading-tight">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

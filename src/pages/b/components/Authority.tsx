import authImg from "@/assets/b/authority.jpg";

const points = [
  "Formou mais de 30 mil profissionais em Lean Six Sigma",
  "Gerou mais de R$ 1 bilhão em resultados para clientes",
  "Trabalha com as maiores multinacionais do Brasil (Volvo, Renault)",
  "Consultores especializados com vivência real de mercado",
  "Suporte prático, não apenas teoria",
];

const Authority = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="b-img-overlay aspect-[4/3] shadow-xl">
          <img src={authImg} alt="Equipe de consultores analisando resultados de projetos Lean Six Sigma" loading="lazy" width={1280} height={896} />
        </div>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="b-section-bar mb-6">Autoridade</div>
        <h2
          className="b-display b-underline leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
        >
          Por que confiar na <span style={{ color: "hsl(var(--b-green))" }}>Gemba Group</span>?
        </h2>
        <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(var(--b-text-soft))" }}>
          Não é um curso online qualquer. A Gemba Group é líder nacional em transformação
          de processos há mais de <strong style={{ color: "hsl(var(--b-text))" }}>17 anos</strong>.
        </p>

        <ul className="mt-7 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm sm:text-base" style={{ color: "hsl(var(--b-text))" }}>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                style={{ background: "hsl(var(--b-green))" }}
              >
                ✓
              </span>
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-8 b-display text-xl sm:text-2xl leading-snug" style={{ color: "hsl(var(--b-green-dark))" }}>
          Não vendemos relatórios que ninguém lê. Nós implementamos. Nós ensinamos. Nós certificamos.
        </p>
      </div>
    </div>

    {/* Logos faixa */}
    <div style={{ borderTop: "1px solid hsl(var(--b-border))", borderBottom: "1px solid hsl(var(--b-border))" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm uppercase tracking-widest font-semibold" style={{ color: "hsl(var(--b-text-soft))" }}>
        <span className="opacity-60">Confiam em nós:</span>
        <span>Volvo</span>
        <span style={{ color: "hsl(var(--b-border))" }}>•</span>
        <span>Renault</span>
        <span style={{ color: "hsl(var(--b-border))" }}>•</span>
        <span>+ 100 empresas</span>
        <span style={{ color: "hsl(var(--b-border))" }}>•</span>
        <span>Council for Six Sigma</span>
      </div>
    </div>
  </section>
);

export default Authority;

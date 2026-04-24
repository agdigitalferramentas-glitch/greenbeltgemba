const includes = [
  "8 módulos completos seguindo a metodologia DMAIC",
  "Aulas ao vivo via Microsoft Teams (terças e quintas)",
  "1h de mentoria individual durante o curso",
  "2h de mentoria pós-formação para o seu projeto",
  "Banca de avaliação com consultor especializado",
  "Certificação Internacional — Council for Six Sigma",
];

const Pricing = () => (
  <section id="b-investimento" style={{ background: "hsl(var(--b-surface))" }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex justify-center"><div className="b-section-bar mb-6">Investimento</div></div>
        <h2
          className="b-display leading-tight"
          style={{ fontSize: "clamp(30px, 4vw, 48px)", color: "hsl(var(--b-text))" }}
        >
          Quanto custa transformar sua carreira?
        </h2>
        <p className="mt-4 text-base sm:text-lg" style={{ color: "hsl(var(--b-text-soft))" }}>
          Comparado ao retorno (média de 30% de aumento salarial),
          é um investimento que se paga em 3-4 meses.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* À vista (recomendado) */}
        <div
          className="relative p-7 sm:p-9 rounded-xl text-white"
          style={{ background: "hsl(var(--b-green))" }}
        >
          <span
            className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase"
            style={{ background: "white", color: "hsl(var(--b-green))" }}
          >
            ★ Recomendado
          </span>
          <div className="text-xs uppercase tracking-widest font-bold opacity-90 mb-2">À vista</div>
          <div className="b-display text-5xl sm:text-6xl leading-none">R$ 2.755</div>
          <div className="mt-2 text-sm opacity-90">5% de desconto · economize R$ 145</div>
          <ul className="mt-7 space-y-2.5">
            {includes.map((i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed">
                <span className="font-bold flex-shrink-0 mt-0.5">✓</span>
                {i}
              </li>
            ))}
          </ul>
          <a
            href="#b-cta-final"
            className="mt-7 block w-full text-center py-3.5 rounded-md font-bold transition-colors"
            style={{ background: "white", color: "hsl(var(--b-green))" }}
          >
            Quero pagar à vista →
          </a>
        </div>

        {/* Parcelado */}
        <div className="b-card p-7 sm:p-9">
          <div
            className="text-xs uppercase tracking-widest font-bold mb-2"
            style={{ color: "hsl(var(--b-green))" }}
          >
            Parcelado
          </div>
          <div className="b-display text-5xl sm:text-6xl leading-none" style={{ color: "hsl(var(--b-text))" }}>
            6x R$ 483
          </div>
          <div className="mt-2 text-sm" style={{ color: "hsl(var(--b-text-soft))" }}>
            Total R$ 2.900,00 · sem juros no cartão
          </div>
          <ul className="mt-7 space-y-2.5">
            {includes.map((i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "hsl(var(--b-text))" }}>
                <span style={{ color: "hsl(var(--b-green))" }} className="font-bold flex-shrink-0 mt-0.5">✓</span>
                {i}
              </li>
            ))}
          </ul>
          <a href="#b-cta-final" className="b-btn w-full mt-7">Parcelar em 6x →</a>
        </div>
      </div>

      {/* ROI */}
      <div
        className="mt-10 max-w-4xl mx-auto p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center gap-5 sm:gap-7"
        style={{ background: "white", border: "1px solid hsl(var(--b-border))" }}
      >
        <div className="b-circle-stat">3-4<br/>meses</div>
        <div>
          <div className="b-display text-lg sm:text-xl mb-1" style={{ color: "hsl(var(--b-text))" }}>
            Cálculo do ROI
          </div>
          <p className="text-sm sm:text-base" style={{ color: "hsl(var(--b-text-soft))" }}>
            Se você ganha R$ 5.000/mês, um aumento de 30% representa{" "}
            <strong style={{ color: "hsl(var(--b-green))" }}>R$ 1.500 extras por mês</strong>.
            Você recupera todo o investimento em menos de 2 meses — e o aumento permanece para o resto da sua carreira.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;

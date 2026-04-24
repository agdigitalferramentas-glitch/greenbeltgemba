const items = [
  { label: "Formato", value: "100% Online ao vivo", sub: "Microsoft Teams" },
  { label: "Dias", value: "Terças e Quintas", sub: "Compatível com sua rotina" },
  { label: "Horário", value: "19:30 às 22:30", sub: "3 horas por aula" },
  { label: "Duração", value: "4 a 5 meses", sub: "16 aulas + projeto" },
];

const support = [
  "1h de mentoria individual durante o curso",
  "2h de mentoria após o curso para finalizar seu projeto",
  "Apresentação e avaliação de projeto com consultor",
  "Material didático: slides, templates e ferramentas",
];

const Practical = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="b-section-bar mb-6 mx-auto w-fit">Como funciona</div>
      <h2
        className="b-display b-underline leading-tight max-w-3xl mx-auto text-center"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
      >
        Informações práticas da formação
      </h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Info cards */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-5">
          {items.map((it) => (
            <div
              key={it.label}
              className="p-5 sm:p-6 rounded-lg"
              style={{
                background: "hsl(var(--b-surface))",
                borderLeft: "4px solid hsl(var(--b-green))",
              }}
            >
              <div
                className="text-[11px] uppercase tracking-widest font-bold mb-2"
                style={{ color: "hsl(var(--b-green))" }}
              >
                {it.label}
              </div>
              <div className="b-display text-lg sm:text-xl leading-tight" style={{ color: "hsl(var(--b-text))" }}>
                {it.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "hsl(var(--b-text-soft))" }}>
                {it.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Support card */}
        <div
          className="lg:col-span-5 p-7 sm:p-8 rounded-lg text-white"
          style={{ background: "hsl(var(--b-green))" }}
        >
          <div className="text-[11px] uppercase tracking-widest font-bold opacity-80 mb-3">
            Suporte especializado incluído
          </div>
          <h3 className="b-display text-2xl sm:text-3xl leading-tight mb-5">
            Você não estará sozinho.
          </h3>
          <ul className="space-y-3">
            {support.map((s) => (
              <li key={s} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-bold flex-shrink-0 mt-0.5">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Practical;

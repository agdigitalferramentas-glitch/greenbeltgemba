import SectionLabel from "./SectionLabel";

const includes = [
  { star: false, text: "8 módulos completos (Define, Measure, Analyse, Improve, Control + Lean + Ger. Projetos + Introdução)" },
  { star: false, text: "Aulas ao vivo via Teams — terças e quintas, 19h30–22h30" },
  { star: false, text: "1h de mentoria individual durante o curso" },
  { star: false, text: "2h de mentoria pós-formação para seu projeto" },
  { star: false, text: "Projeto real aplicado na sua empresa" },
  { star: false, text: "Banca de avaliação com consultor especializado" },
  { star: true, text: "Certificação Internacional — Council for Six Sigma" },
  { star: true, text: "Acesso à rede de +30.000 profissionais certificados" },
];

const Pricing = () => (
  <section id="pricing" className="relative overflow-hidden bg-gradient-pricing">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="container relative py-20 sm:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex"><SectionLabel>Investimento</SectionLabel></div>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
          Escolha a melhor forma de <span className="text-green-glow">começar agora.</span>
        </h2>
      </div>

      <div className="mt-14 max-w-[700px] mx-auto rounded-2xl border-2 border-green-vibrant/40 bg-card shadow-deep overflow-hidden">
        {/* Header */}
        <div className="px-7 sm:px-9 py-7 border-b border-border flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-green-glow font-bold">Formação</div>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl text-foreground leading-tight">
              Green Belt Lean Six Sigma
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold tracking-wide">
            🔒 Vagas Limitadas
          </div>
        </div>

        {/* Price options */}
        <div className="px-7 sm:px-9 py-8">
          <div className="rounded-xl border border-green-vibrant/40 bg-green-vibrant/5 p-6">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div className="text-xs uppercase tracking-wider text-green-glow font-bold">À vista — 5% de desconto</div>
                <div className="font-display text-5xl sm:text-6xl text-foreground mt-1">R$ 2.755<span className="text-2xl text-muted-foreground">,00</span></div>
              </div>
              <div className="text-sm text-muted-foreground max-w-[200px] text-right">
                Você economiza <strong className="text-gold">R$ 145,00</strong> pagando à vista
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center gap-4">
            <span className="flex-1 h-px bg-border" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">ou</span>
            <span className="flex-1 h-px bg-border" />
          </div>

          <div className="rounded-xl border border-border p-6">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Parcelado sem juros</div>
                <div className="font-display text-4xl sm:text-5xl text-foreground mt-1">6x R$ 483<span className="text-xl text-muted-foreground">,33</span></div>
              </div>
              <div className="text-sm text-muted-foreground">
                Total <strong className="text-foreground">R$ 2.900,00</strong> · sem acréscimos
              </div>
            </div>
          </div>

          {/* Includes */}
          <ul className="mt-8 space-y-3">
            {includes.map((i) => (
              <li key={i.text} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className={i.star ? "text-gold" : "text-green-glow"}>{i.star ? "★" : "✓"}</span>
                <span>{i.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#"
            className="btn-glow mt-8 flex items-center justify-center w-full px-6 py-5 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-lg shadow-glow"
          >
            Garantir minha vaga agora →
          </a>

          <div className="mt-6 text-center text-xs text-muted-foreground tracking-wide">
            🔒 Ambiente seguro · Turma com vagas limitadas · Início em breve
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;

import SectionLabel from "./SectionLabel";

const includes = [
  { star: false, text: "8 módulos completos (Define, Measure, Analyse, Improve, Control + Lean + Ger. Projetos + Introdução)" },
  { star: false, text: "Aulas ao vivo via Teams — terças e quintas, 19h30–22h30" },
  { star: false, text: "1h de mentoria individual durante o curso" },
  
  { star: false, text: "Projeto real aplicado na sua empresa" },
  { star: false, text: "Banca de avaliação com consultor especializado" },
  { star: true, text: "Certificação Internacional — Council for Six Sigma" },
  { star: true, text: "Acesso à rede de +30.000 profissionais certificados" },
];

const Pricing = () => (
  <section id="pricing" className="relative overflow-hidden bg-gradient-pricing">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="container relative py-10 sm:py-14 lg:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex"><SectionLabel>Investimento</SectionLabel></div>
        <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground leading-tight">
          Escolha a melhor forma de <span className="text-green-glow">começar agora.</span>
        </h2>
      </div>

      <div className="mt-10 sm:mt-14 max-w-[700px] mx-auto rounded-2xl border-2 border-green-vibrant/40 bg-card shadow-deep">
        {/* Header */}
        <div className="px-5 sm:px-9 py-5 sm:py-7 border-b border-border flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-green-glow font-bold">Formação</div>
            <h3 className="mt-1 font-display text-xl sm:text-3xl text-foreground leading-tight">
              Green Belt Lean Six Sigma
            </h3>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-[10px] sm:text-xs font-bold tracking-wide">
            🔒 Vagas Limitadas
          </div>
        </div>

        {/* Price options */}
        <div className="px-5 sm:px-9 py-7 sm:py-8">
          <div className="rounded-xl border border-green-vibrant/40 bg-green-vibrant/5 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-green-glow font-bold">À vista — 5% de desconto</div>
                <div className="font-display text-[40px] sm:text-6xl text-foreground mt-1 leading-none">R$ 2.755<span className="text-xl sm:text-2xl text-muted-foreground">,00</span></div>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground sm:max-w-[200px] sm:text-right">
                Você economiza <strong className="text-gold">R$ 145,00</strong> pagando à vista
              </div>
            </div>
          </div>

          <div className="my-5 sm:my-6 flex items-center gap-4">
            <span className="flex-1 h-px bg-border" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">ou</span>
            <span className="flex-1 h-px bg-border" />
          </div>

          <div className="rounded-xl border border-border p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Parcelado sem juros</div>
                <div className="font-display text-[34px] sm:text-5xl text-foreground mt-1 leading-none">6x R$ 483<span className="text-lg sm:text-xl text-muted-foreground">,33</span></div>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Total <strong className="text-foreground">R$ 2.900,00</strong> · sem acréscimos
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="btn-glow mt-7 sm:mt-8 flex items-center justify-center w-full px-3 sm:px-6 py-4 sm:py-5 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-sm sm:text-lg shadow-glow text-center leading-tight whitespace-normal break-words"
          >
            Garantir minha vaga agora →
          </a>

          {/* Divider */}
          <div className="my-7 sm:my-8 h-px bg-border" />

          {/* Includes */}
          <ul className="space-y-2.5 sm:space-y-3">
            {includes.map((i) => (
              <li key={i.text} className="flex items-start gap-3 text-[13px] sm:text-sm text-foreground/90 leading-relaxed">
                <span className={`flex-shrink-0 ${i.star ? "text-gold" : "text-green-glow"}`}>{i.star ? "★" : "✓"}</span>
                <span>{i.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 sm:mt-6 text-center text-[11px] sm:text-xs text-muted-foreground tracking-wide leading-relaxed">
            🔒 Ambiente seguro · Turma com vagas limitadas · Início em breve
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;

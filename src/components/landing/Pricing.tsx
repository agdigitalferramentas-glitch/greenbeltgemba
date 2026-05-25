import SectionLabel from "./SectionLabel";

const includes = [
  { star: false, text: "8 módulos completos (Define, Measure, Analyse, Improve, Control + Lean + Ger. Projetos + Introdução)" },
  { star: false, text: "72 horas de carga horária + 8 horas de coaching para certificação de\u00A0projetos" },
  { star: false, text: "Aulas ao vivo via Teams — terças e quintas, das 19:30 às\u00A022:30" },
  { star: false, text: "Início em 06/07/2026 · 100% online ao\u00A0vivo" },
  { star: false, text: "Projeto real aplicado na sua\u00A0empresa" },
  { star: false, text: "Banca de avaliação com consultor\u00A0especializado" },
  { star: true, text: "Certificação Internacional — Council for Six\u00A0Sigma" },
  { star: true, text: "Acesso à rede de +30.000 profissionais\u00A0certificados" },
];

const Pricing = () => (
  <section id="pricing" className="relative overflow-hidden bg-gradient-pricing">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="container relative py-10 sm:py-14 lg:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex"><SectionLabel>Investimento</SectionLabel></div>
        <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
          Escolha a melhor forma de <span className="text-green-glow">começar&nbsp;agora.</span>
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
          {/* Anchor price */}
          <div className="mb-4 text-center sm:text-left">
            <span className="text-xs sm:text-sm text-muted-foreground">De </span>
            <span className="text-base sm:text-lg text-muted-foreground line-through decoration-2">R$ 4.997,00</span>
            <span className="text-xs sm:text-sm text-muted-foreground"> por:</span>
          </div>

          <div className="rounded-xl border border-green-vibrant/40 bg-green-vibrant/5 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-green-glow font-bold">À vista no Pix — 5% de desconto</div>
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

          {/* Secondary CTA */}
          <a
            href="https://wa.me/5541987617531?text=Ol%C3%A1!%20Vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20a%20Certifica%C3%A7%C3%A3o%20Green%20Belt!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-3 sm:px-6 py-3 sm:py-4 rounded-md font-bold text-sm sm:text-base text-center leading-tight transition-colors text-white"
            style={{ backgroundColor: "#25D366" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1ebe5d"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#25D366"; }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
            </svg>
            Falar com o comercial
          </a>

          {/* CTA */}
          <a
            href="https://celcash.celcoin.com.br/landingpage8400068/green-belt/comprar/elite-green-belt-lean-eamp-six-sigma/2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-3 sm:mt-4 flex items-center justify-center w-full px-3 sm:px-6 py-4 sm:py-5 rounded-md bg-gold text-[hsl(var(--green-deep))] font-bold text-sm sm:text-lg shadow-glow text-center leading-tight whitespace-normal break-words hover:bg-gold-light"
          >
            Garantir minha vaga agora →
          </a>

          <div className="mt-5 sm:mt-6 text-center text-[11px] sm:text-xs text-muted-foreground tracking-wide leading-relaxed">
            🔒 Ambiente seguro · Turma com vagas limitadas · Início em 06/07/2026
          </div>

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

        </div>
      </div>
    </div>
  </section>
);

export default Pricing;

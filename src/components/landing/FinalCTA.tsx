const FinalCTA = () => (
  <section className="relative overflow-hidden bg-green-mid">
    <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--bg))]/40 pointer-events-none" />
    <div className="container relative py-12 sm:py-16 lg:py-24 text-center">
      <div className="max-w-[700px] mx-auto">
        <h2 className="font-display text-[38px] sm:text-6xl lg:text-7xl text-foreground leading-[0.95] text-balance">
          Sua carreira muda quando <span className="text-gold-light">você decide&nbsp;mudar.</span>
        </h2>
        <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-foreground/85 leading-relaxed">
          Mais de 30.000 profissionais já tomaram essa decisão com a Gemba Group.
          O próximo pode ser você. As vagas são limitadas — não deixe para amanhã
          o que pode mudar&nbsp;hoje.
        </p>
        <a
          href="#pricing"
          className="btn-glow inline-flex items-center justify-center mt-8 sm:mt-10 px-8 sm:px-10 py-4 sm:py-5 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-base sm:text-lg shadow-glow"
        >
          Quero minha vaga agora
        </a>
        <div className="mt-5 sm:mt-6 text-[11px] sm:text-sm text-foreground/70 tracking-wide leading-relaxed">
          Início em 06/07/2026 · Terças e quintas · 19:30–22:30 · Online ao vivo via Microsoft Teams
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;

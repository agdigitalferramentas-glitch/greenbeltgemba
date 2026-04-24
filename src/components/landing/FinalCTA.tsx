const FinalCTA = () => (
  <section className="relative overflow-hidden bg-green-mid">
    <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--bg))]/40 pointer-events-none" />
    <div className="container relative py-24 sm:py-32 text-center">
      <div className="max-w-[700px] mx-auto">
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[0.95]">
          Sua carreira muda quando <span className="text-gold-light">você decide mudar.</span>
        </h2>
        <p className="mt-8 text-base sm:text-lg text-foreground/85 leading-relaxed">
          Mais de 30.000 profissionais já tomaram essa decisão com a Gemba Group.
          O próximo pode ser você. As vagas são limitadas — não deixe para amanhã
          o que pode mudar hoje.
        </p>
        <a
          href="#pricing"
          className="btn-glow inline-flex items-center justify-center mt-10 px-10 py-5 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-lg shadow-glow"
        >
          Quero minha vaga agora
        </a>
        <div className="mt-6 text-xs sm:text-sm text-foreground/70 tracking-wide">
          Terças e quintas · 19h30–22h30 · Online ao vivo · Microsoft Teams
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;

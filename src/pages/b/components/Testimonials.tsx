const testimonials = [
  { text: "Aumentei 40% em 6 meses. A certificação abriu portas que eu não imaginava.", who: "Analista de Processos, Multinacional" },
  { text: "Entrei no mercado ganhando 50% acima da média. O diferencial fez toda a diferença.", who: "Engenheiro Júnior, Startup Tech" },
  { text: "Implementei 5 projetos que geraram R$ 2,3 milhões em economia. Agora sou diretor.", who: "Gerente de Operações, Indústria" },
  { text: "Finalmente tenho uma metodologia para resolver os problemas que meu chefe cobra.", who: "Supervisor de Qualidade, Manufatura" },
];

const Testimonials = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="b-section-bar mb-6 mx-auto w-fit">Prova social</div>
      <h2
        className="b-display b-underline b-center leading-tight max-w-3xl mx-auto text-center"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
      >
        O que dizem nossos alunos
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {testimonials.map((t) => (
          <blockquote
            key={t.who}
            className="b-card p-7 sm:p-8 relative"
          >
            <span
              className="absolute top-4 right-6 b-display text-6xl leading-none"
              style={{ color: "hsl(var(--b-green))", opacity: 0.15 }}
            >
              "
            </span>
            <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: "hsl(var(--b-text))" }}>
              “{t.text}”
            </p>
            <footer className="text-xs uppercase tracking-widest font-bold" style={{ color: "hsl(var(--b-green))" }}>
              — {t.who}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

const scenarios = [
  {
    title: "Estagnado no mesmo cargo há anos",
    text: "Você está há 3, 4 ou 5 anos no mesmo lugar. Vê colegas com menos experiência sendo promovidos enquanto você continua fazendo as mesmas tarefas. Seu salário não cresce e o mercado não reconhece seu valor.",
  },
  {
    title: "Recém-formado perdido na pilha de currículos",
    text: "Diploma bonito na parede, mas a faculdade não ensinou nada que o mercado realmente quer. Você é apenas 'mais um' na pilha de currículos que os recrutadores descartam antes da entrevista.",
  },
  {
    title: "Gerente sem metodologia robusta",
    text: "Sabe que precisa entregar resultados agressivos para chegar à diretoria, mas vive apagando incêndios. Sem metodologia para resolver problemas complexos, não consegue justificar altos salários com ganhos mensuráveis.",
  },
];

const Problem = () => (
  <section style={{ background: "hsl(var(--b-surface))" }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="b-section-bar mb-6 mx-auto w-fit">O Problema</div>
      <h2
        className="b-display b-underline leading-tight text-center"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
      >
        Você reconhece alguma dessas situações?
      </h2>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {scenarios.map((s, i) => (
          <div key={s.title} className="b-card p-7 sm:p-8">
            <div
              className="b-display text-5xl mb-4"
              style={{ color: "hsl(var(--b-green))", opacity: 0.3 }}
            >
              0{i + 1}
            </div>
            <h3
              className="b-display text-xl mb-3 leading-tight"
              style={{ color: "hsl(var(--b-text))" }}
            >
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--b-text-soft))" }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>

      <p
        className="mt-12 max-w-3xl text-lg sm:text-xl leading-relaxed border-l-4 pl-5"
        style={{ color: "hsl(var(--b-text))", borderColor: "hsl(var(--b-green))" }}
      >
        <strong>A verdade é incômoda:</strong> o mercado não recompensa apenas tempo de casa
        ou um diploma universitário. As empresas buscam profissionais que geram{" "}
        <span style={{ color: "hsl(var(--b-green))" }} className="font-bold">resultados mensuráveis</span>.
      </p>
    </div>
  </section>
);

export default Problem;

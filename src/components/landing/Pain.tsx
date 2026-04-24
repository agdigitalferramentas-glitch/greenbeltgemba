import SectionLabel from "./SectionLabel";

const pains = [
  {
    icon: "😶‍🌫️",
    title: "Estagnado no mesmo cargo há anos",
    text: "Você vê colegas mais novos passando na sua frente. O esforço não falta, mas falta o diferencial técnico que justifica a promoção que você tanto esperou.",
  },
  {
    icon: "📄",
    title: "Diploma não está sendo suficiente",
    text: "Você tem formação, mas o mercado quer mais do que teoria. Sem uma certificação prática e reconhecida, seu currículo é descartado antes mesmo da entrevista.",
  },
  {
    icon: "📉",
    title: "Entregando resultado sem metodologia",
    text: "Você lidera projetos, resolve problemas no improviso, mas sem uma estrutura robusta os resultados são inconsistentes e difíceis de justificar para a diretoria.",
  },
  {
    icon: "💸",
    title: "Salário abaixo do seu potencial",
    text: "Profissionais com Green Belt Lean Six Sigma ganham, em média, 30% a mais. Cada mês sem a certificação é dinheiro deixado na mesa — literalmente.",
  },
];

const Pain = () => (
  <section className="bg-[hsl(var(--bg-elevated))]">
    <div className="container py-20 sm:py-28">
      <SectionLabel>Você se identifica com isso?</SectionLabel>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-3xl leading-tight">
        Se um desses cenários parece o seu — leia com atenção.
      </h2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {pains.map((p) => (
          <div
            key={p.title}
            className="hover-lift relative pl-6 pr-6 py-7 rounded-lg bg-card/40 border border-border hover:border-green-vibrant/50"
          >
            <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-green-vibrant" />
            <div className="text-3xl mb-3" aria-hidden>{p.icon}</div>
            <h3 className="font-display text-2xl text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pain;

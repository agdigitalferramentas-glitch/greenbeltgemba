import { TrendingDown, FileX, BarChart3, Wallet } from "lucide-react";
import SectionLabel from "./SectionLabel";

const pains = [
  {
    Icon: TrendingDown,
    title: "Estagnado no mesmo cargo há anos",
    text: "Você vê colegas mais novos passando na sua frente. O esforço não falta, mas falta o diferencial técnico que justifica a promoção que você tanto esperou.",
  },
  {
    Icon: FileX,
    title: "Diploma não está sendo suficiente",
    text: "Você tem formação, mas o mercado quer mais do que teoria. Sem uma certificação prática e reconhecida, seu currículo é descartado antes mesmo da entrevista.",
  },
  {
    Icon: BarChart3,
    title: "Entregando resultado sem metodologia",
    text: "Você lidera projetos, resolve problemas no improviso, mas sem uma estrutura robusta os resultados são inconsistentes e difíceis de justificar para a diretoria.",
  },
  {
    Icon: Wallet,
    title: "Salário abaixo do seu potencial",
    text: "Profissionais com Green Belt Lean Six Sigma ganham, em média, 30% a mais. Cada mês sem a certificação é dinheiro deixado na mesa — literalmente.",
  },
];

const Pain = () => (
  <section className="bg-[hsl(var(--bg-elevated))]">
    <div className="container py-10 sm:py-14 lg:py-20">
      <div className="flex justify-center"><SectionLabel>Você se identifica com isso?</SectionLabel></div>
      <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-center leading-tight">
        Se um desses cenários parece o seu — leia com atenção.
      </h2>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {pains.map((p) => (
          <div
            key={p.title}
            className="hover-lift relative pl-5 pr-5 py-6 sm:pl-6 sm:pr-6 sm:py-7 rounded-lg bg-card/40 border border-border hover:border-green-vibrant/50"
          >
            <span className="absolute left-0 top-5 bottom-5 sm:top-6 sm:bottom-6 w-[3px] rounded-full bg-green-vibrant" />
            <div
              className="mb-3 sm:mb-4 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-green-vibrant/10 border border-green-vibrant/25 text-green-glow"
              aria-hidden
            >
              <p.Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2 leading-tight">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pain;

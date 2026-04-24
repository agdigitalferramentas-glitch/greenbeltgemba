import SectionLabel from "./SectionLabel";

const personas = [
  {
    icon: "🧭",
    title: "O Profissional Estagnado",
    role: "Analista / Coordenador · 30–40 anos",
    text: "Está no mesmo cargo há anos e vê colegas mais novos sendo promovidos. Tem experiência, mas falta o diferencial que justifica o próximo passo. O Green Belt é a 'chave-mestra' para destravar promoção e aumento ainda este ano.",
    win: "Saiu da estagnação com metodologia e autoridade técnica.",
  },
  {
    icon: "🚀",
    title: "O Jovem Ambicioso",
    role: "Recém-formado / Iniciante · 20–28 anos",
    text: "Tem diploma, mas o mercado quer prática. Sabe que sem diferenciação vai ser mais um currículo descartado. A certificação Lean Six Sigma é o 'carimbo' que faz recrutadores de grandes empresas — Volvo, Renault — pararem de rolar.",
    win: "Entrou no mercado acima da média, disputado por multinacionais.",
  },
  {
    icon: "🏆",
    title: "O Líder de Alta Performance",
    role: "Gerente / Supervisor · busca Black Belt",
    text: "Já entrega resultados, mas precisa de uma metodologia robusta para liderar projetos de alto impacto, justificar salários de elite e se candidatar à diretoria. O Green Belt é o primeiro passo obrigatório para o Black Belt.",
    win: "Liderou projetos com savings milionários e foi promovido.",
  },
];

const Personas = () => (
  <section className="relative overflow-hidden bg-green-mid/40">
    <div className="absolute inset-0 bg-[hsl(var(--green-deep))]" />
    <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
    <div className="container relative py-14 sm:py-20 lg:py-28">
      <SectionLabel>Para quem é esta formação</SectionLabel>
      <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground max-w-3xl leading-tight">
        3 perfis que <span className="text-gold-light">transformamos</span> todo mês.
      </h2>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {personas.map((p) => (
          <article
            key={p.title}
            className="hover-lift rounded-xl border border-gold/30 bg-[hsl(var(--bg))]/60 backdrop-blur-sm p-6 sm:p-7 hover:border-gold/60 shadow-card"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4" aria-hidden>{p.icon}</div>
            <h3 className="font-display text-xl sm:text-2xl text-foreground leading-tight">{p.title}</h3>
            <div className="text-[11px] sm:text-xs mt-1 mb-4 sm:mb-5 text-gold tracking-wide">{p.role}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gold/20 flex gap-2 items-start text-sm text-foreground/90">
              <span className="text-green-glow font-bold flex-shrink-0">✓</span>
              <span className="italic">{p.win}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Personas;

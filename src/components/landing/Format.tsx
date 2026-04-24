import SectionLabel from "./SectionLabel";

const items = [
  { icon: "🖥️", title: "100% Online ao Vivo", text: "Aulas interativas via Microsoft Teams. Sem gravar e assistir sozinho — você aprende, pergunta e aplica em tempo real." },
  { icon: "📅", title: "Terças e Quintas", text: "Das 19h30 às 22h30. Compatível com a rotina profissional — sem abrir mão da carreira para estudar." },
  { icon: "🎓", title: "Certificação Internacional", text: "Credenciada pelo Council for Six Sigma. Reconhecida globalmente e aceita por multinacionais de todos os setores." },
  { icon: "🛠️", title: "Projeto Real Aplicado", text: "Você não apenas estuda — você conduz um projeto real dentro da sua empresa e apresenta para certificação." },
];

const Format = () => (
  <section className="bg-gradient-format">
    <div className="container py-14 sm:py-20 lg:py-28">
      <SectionLabel>Como funciona</SectionLabel>
      <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground max-w-3xl leading-tight">
        Formato pensado para <span className="text-green-glow">quem não pode parar.</span>
      </h2>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="hover-lift rounded-xl border border-border bg-card/40 p-7 text-center hover:border-green-vibrant/60"
          >
            <div className="text-4xl mb-4">{it.icon}</div>
            <h3 className="font-display text-xl text-green-glow">{it.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Format;

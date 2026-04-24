import SectionLabel from "./SectionLabel";

const modules = [
  {
    n: "01", phase: "Fundamentos", title: "Introdução ao Lean & Six Sigma",
    items: ["Origem do Lean & Six Sigma", "Raciocínio Crítico", "Introdução à Variação", "Ciclos PDCA e DMAIC"],
  },
  {
    n: "02", phase: "Lean", title: "Mentalidade Enxuta na Prática",
    items: ["Estabilidade Básica", "MFV — Mapeamento do Fluxo de Valor", "Hoshin Kanri / Planejamento Estratégico", "A3 e Lean Office"],
  },
  {
    n: "03", phase: "Projetos", title: "Gerenciamento de Projetos (PMI)",
    items: ["Escopo, Cronograma e Custos", "Gestão de Riscos e Stakeholders", "Comunicação e Aquisições", "Qualidade e Recursos"],
  },
  {
    n: "04", phase: "DMAIC — Define", title: "Fase Definir",
    items: ["VOC — Voz do Cliente", "Diagrama CTQ", "SIPOC e Benchmarking", "Gráficos e escopo do projeto"],
  },
  {
    n: "05", phase: "DMAIC — Measure", title: "Fase Medir",
    items: ["Mapa de Processo e Produto", "Estatística Básica e Tipos de Dados", "Cartas de Controle (CEP)", "MSA — Measurement System Analysis"],
  },
  {
    n: "06", phase: "DMAIC — Analyse", title: "Fase Analisar",
    items: ["Ishikawa, Matriz C&E e 5 Porquês", "Correlação, Regressão e COV", "DOE Completo e Fracionado", "Otimizador de Respostas"],
  },
  {
    n: "07", phase: "DMAIC — Improve", title: "Fase Melhorar",
    items: ["Matriz de Priorização", "Plano de ação 5W2H", "Lote Piloto e Poka Yoke", "FMEA — Failure Mode and Effect Analysis"],
  },
  {
    n: "08", phase: "DMAIC — Control", title: "Fase Controlar",
    items: ["Gráficos de Comprovação de Ganhos", "Plano de Controle", "Procedimento Operacional Padrão", "Treinamentos Operacionais"],
  },
];

const Modules = () => (
  <section id="modules" className="bg-[hsl(var(--bg))]">
    <div className="container py-10 sm:py-14 lg:py-20">
      <div className="flex justify-center"><SectionLabel>Conteúdo completo</SectionLabel></div>
      <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-center leading-tight">
        8 Módulos. <span className="text-green-glow">Do zero à certificação.</span>
      </h2>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {modules.map((m) => (
          <article
            key={m.n}
            className="hover-lift group relative overflow-hidden rounded-xl border border-border bg-card/50 p-5 sm:p-6 hover:border-green-vibrant/60 hover:bg-card"
          >
            <span className="font-display absolute -top-2 -right-1 text-[90px] sm:text-[110px] leading-none text-green-vibrant/10 select-none group-hover:text-green-vibrant/20 transition-colors">
              {m.n}
            </span>
            <div className="relative">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold font-bold">{m.phase}</div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl text-foreground leading-tight">{m.title}</h3>
              <ul className="mt-4 sm:mt-5 space-y-2">
                {m.items.map((it) => (
                  <li key={it} className="flex gap-2 text-[13px] sm:text-sm text-muted-foreground">
                    <span className="text-green-vibrant mt-0.5 flex-shrink-0">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Modules;

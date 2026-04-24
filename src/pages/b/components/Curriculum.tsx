const modules = [
  { n: "01", phase: "Fundamentos", title: "Introdução ao Lean & Six Sigma", text: "Origem, raciocínio crítico, conceitos de variação e ciclos PDCA/DMAIC." },
  { n: "02", phase: "Lean", title: "Mentalidade Enxuta", text: "Estabilidade básica, MFV, Hoshin Kanri, A3 e Lean Office." },
  { n: "03", phase: "PMI", title: "Gerenciamento de Projetos", text: "Escopo, cronograma, custos, riscos, stakeholders e qualidade." },
  { n: "04", phase: "DMAIC", title: "Define — Definir", text: "VOC, CTQ, SIPOC, Benchmarking e definição do escopo do projeto." },
  { n: "05", phase: "DMAIC", title: "Measure — Medir", text: "Mapa de processo, estatística básica, cartas de controle (CEP) e MSA." },
  { n: "06", phase: "DMAIC", title: "Analyse — Analisar", text: "Ishikawa, 5 Porquês, correlação, regressão e DOE completo/fracionado." },
  { n: "07", phase: "DMAIC", title: "Improve — Melhorar", text: "Matriz de priorização, 5W2H, lote piloto, Poka Yoke e FMEA." },
  { n: "08", phase: "DMAIC", title: "Control — Controlar", text: "Plano de controle, POP, treinamentos e comprovação dos ganhos." },
];

const Curriculum = () => (
  <section id="b-conteudo" style={{ background: "hsl(var(--b-surface))" }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="b-section-bar mb-6 mx-auto w-fit">Conteúdo do curso</div>
      <h2
        className="b-display b-underline leading-tight max-w-3xl mx-auto text-center"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
      >
        O que você vai aprender
      </h2>
      <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: "hsl(var(--b-text-soft))" }}>
        Currículo prático e aplicável seguindo a metodologia <strong style={{ color: "hsl(var(--b-green))" }}>DMAIC</strong> em 8 módulos intensivos.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modules.map((m) => (
          <article key={m.n} className="b-card p-6 relative overflow-hidden">
            <span
              className="b-display absolute -top-2 -right-2 text-7xl"
              style={{ color: "hsl(var(--b-green))", opacity: 0.08 }}
            >
              {m.n}
            </span>
            <div className="relative">
              <div
                className="text-[11px] tracking-widest uppercase font-bold mb-2"
                style={{ color: "hsl(var(--b-green))" }}
              >
                Módulo {m.n} · {m.phase}
              </div>
              <h3
                className="b-display text-base mb-2 leading-tight"
                style={{ color: "hsl(var(--b-text))" }}
              >
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--b-text-soft))" }}>
                {m.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div
        className="mt-10 p-6 sm:p-7 rounded-lg flex items-start gap-4"
        style={{ background: "hsl(var(--b-green-soft))" }}
      >
        <span style={{ color: "hsl(var(--b-green))" }} className="text-2xl">✦</span>
        <p className="text-sm sm:text-base" style={{ color: "hsl(var(--b-text))" }}>
          <strong>Resultado:</strong> você sairá do curso com um <strong>projeto real implementado</strong> e <strong>certificado</strong>, pronto para aplicar na sua função.
        </p>
      </div>
    </div>
  </section>
);

export default Curriculum;

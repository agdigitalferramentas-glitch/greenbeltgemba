import p1 from "@/assets/b/persona-1.jpg";
import p2 from "@/assets/b/persona-2.jpg";
import p3 from "@/assets/b/persona-3.jpg";

const personas = [
  {
    img: p1,
    icon: "🎯",
    title: "O Profissional Estagnado",
    role: "Analista, Coordenador ou Supervisor · 30–40 anos",
    problem: "Frustração por não crescer financeiramente. Ver colegas mais novos sendo promovidos enquanto você fica para trás.",
    gains: [
      "A 'chave-mestra' para destravar a promoção",
      "Aumento salarial comprovado (média de 30%)",
      "Diferencial reconhecido pelo mercado",
    ],
    quote: "Aumentei 40% em 6 meses após a certificação. Agora sou líder de projetos de melhoria.",
  },
  {
    img: p2,
    icon: "🚀",
    title: "O Jovem Ambicioso",
    role: "Recém-formado / Júnior · 20–28 anos",
    problem: "Ser 'mais um' na pilha de currículos. A faculdade não ensinou o que o mercado realmente quer.",
    gains: [
      "Diferenciação competitiva entre candidatos",
      "O 'carimbo' que brilha nos olhos dos recrutadores",
      "Entrada no mercado acima da média salarial",
    ],
    quote: "Entrei em uma multinacional 50% acima do salário inicial padrão. O diferencial fez toda a diferença.",
  },
  {
    img: p3,
    icon: "👑",
    title: "O Líder de Alta Performance",
    role: "Gerente / Supervisor / Diretor experiente",
    problem: "Falta de metodologia robusta para problemas complexos. Pressão para entregar ganhos financeiros agressivos.",
    gains: [
      "Autoridade técnica comprovada",
      "Metodologia para liderar projetos milionários",
      "Credibilidade para chegar à diretoria",
    ],
    quote: "Implementei 5 projetos que geraram R$ 2,3 milhões. Isso me colocou no radar para diretor.",
  },
];

const Personas = () => (
  <section style={{ background: "hsl(var(--b-surface))" }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="b-section-bar mb-6">Para quem é</div>
      <h2
        className="b-display b-underline leading-tight max-w-3xl"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
      >
        Você é um destes profissionais?
      </h2>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {personas.map((p) => (
          <article key={p.title} className="b-card overflow-hidden flex flex-col">
            <div className="b-img-overlay aspect-[4/3]">
              <img src={p.img} alt={p.title} loading="lazy" width={896} height={672} />
            </div>
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="b-display text-lg sm:text-xl leading-tight" style={{ color: "hsl(var(--b-text))" }}>
                  {p.title}
                </h3>
              </div>
              <div className="text-xs mb-4 italic" style={{ color: "hsl(var(--b-text-soft))" }}>
                {p.role}
              </div>
              <p className="text-sm mb-5" style={{ color: "hsl(var(--b-text-soft))" }}>
                <strong style={{ color: "hsl(var(--b-text))" }}>Seu Problema:</strong> {p.problem}
              </p>
              <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: "hsl(var(--b-green))" }}>
                O que você vai ganhar
              </div>
              <ul className="space-y-2 mb-5">
                {p.gains.map((g) => (
                  <li key={g} className="flex gap-2 text-sm" style={{ color: "hsl(var(--b-text))" }}>
                    <span style={{ color: "hsl(var(--b-green))" }} className="font-bold flex-shrink-0">→</span>
                    {g}
                  </li>
                ))}
              </ul>
              <div
                className="mt-auto pt-5 border-t text-sm italic leading-relaxed"
                style={{ borderColor: "hsl(var(--b-border))", color: "hsl(var(--b-text))" }}
              >
                <span style={{ color: "hsl(var(--b-green))" }} className="font-bold">"</span>
                {p.quote}
                <span style={{ color: "hsl(var(--b-green))" }} className="font-bold">"</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Personas;

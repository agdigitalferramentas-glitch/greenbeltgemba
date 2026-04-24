const benefits = [
  {
    icon: "💰",
    title: "Aumento Salarial Comprovado",
    text: "80% dos alunos tiveram aumento salarial após a certificação. Média de 30% no primeiro ano. Recuperação do investimento em 3-4 meses.",
  },
  {
    icon: "🏆",
    title: "Certificação Internacional",
    text: "Válida globalmente pelo Council for Six Sigma Certification. Selo que impressiona recrutadores no LinkedIn e abre portas em multinacionais.",
  },
  {
    icon: "🎯",
    title: "Resolver Problemas Complexos",
    text: "Domine a metodologia DMAIC: identifique a causa raiz, analise dados de forma avançada e implemente soluções baseadas em fatos.",
  },
  {
    icon: "👥",
    title: "Liderança de Alto Impacto",
    text: "Lidere iniciativas que reduzem custos, melhoram qualidade e geram economia mensurável. Torne-se indispensável na sua organização.",
  },
];

const Benefits = () => (
  <section id="b-beneficios" className="bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="b-section-bar mb-6 mx-auto w-fit">Benefícios</div>
      <h2
        className="b-display b-underline leading-tight max-w-3xl mx-auto text-center"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
      >
        O que você vai ganhar (além da certificação)
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="b-card p-7 sm:p-8 flex gap-5">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "hsl(var(--b-green-soft))" }}
            >
              {b.icon}
            </div>
            <div>
              <h3 className="b-display text-xl mb-2 leading-tight" style={{ color: "hsl(var(--b-text))" }}>
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--b-text-soft))" }}>
                {b.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;

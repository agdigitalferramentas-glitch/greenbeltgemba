import SectionLabel from "./SectionLabel";

const cards = [
  { badge: "1h / durante", title: "Mentoria durante o curso", text: "Sessões agendadas durante o treinamento para tirar dúvidas e orientar a aplicação das ferramentas no seu projeto." },
  { badge: "✓ / banca", title: "Avaliação final com consultor", text: "Apresente seu projeto a um especialista, receba feedback profundo e conquiste sua certificação com confiança." },
];

const Mentorship = () => (
  <section className="bg-[hsl(var(--bg-elevated))]">
    <div className="container py-10 sm:py-14 lg:py-20">
      <div className="flex justify-center"><SectionLabel>Suporte exclusivo</SectionLabel></div>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
        <div>
          <h2 className="font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            Você não estará <span className="text-green-glow">sozinho</span> nessa&nbsp;jornada.
          </h2>
          <p className="mt-5 sm:mt-6 text-sm sm:text-lg text-muted-foreground leading-relaxed">
            Além das aulas ao vivo, cada aluno tem acesso a mentorias individuais com consultores
            que atuam no campo — não apenas em sala de aula. São profissionais que já geraram
            resultados reais em empresas como as que você conhece. A mentoria garante que seu
            projeto evolua com segurança, fase a fase, sem travar no&nbsp;caminho.
          </p>
        </div>

        <div className="space-y-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="hover-lift rounded-xl border border-green-vibrant/30 bg-gradient-to-br from-green-deep/60 to-card/40 p-5 sm:p-6 hover:border-green-vibrant/60"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-vibrant/15 text-green-glow text-[11px] sm:text-xs font-semibold tracking-wide">
                {c.badge}
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl text-foreground leading-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Mentorship;

import { useState } from "react";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "Preciso ter experiência prévia em Lean Six Sigma?",
    a: "Não. A formação começa do zero, cobrindo todos os fundamentos no Módulo 1. O único pré-requisito é estar trabalhando ou ter acesso a um processo real para desenvolver seu projeto aplicado.",
  },
  {
    q: "As aulas ficam gravadas para revisão?",
    a: "As aulas são realizadas ao vivo para maximizar o aprendizado e a interação. Verifique com a equipe Gemba Group sobre a política de gravações para revisão — basta entrar em contato pelo WhatsApp.",
  },
  {
    q: "A certificação é reconhecida internacionalmente?",
    a: "Sim. A certificação é credenciada pelo Council for Six Sigma, reconhecida globalmente. Empresas multinacionais como Volvo, Renault e centenas de outras exigem ou valorizam profissionais com este certificado.",
  },
  {
    q: "Qual é a carga horária total do curso?",
    a: "O curso é conduzido às terças e quintas das 19h30 às 22h30 (3 horas por aula), com duração total que cobre os 8 módulos do programa DMAIC completo. A data de início e duração exatas são confirmadas no momento da matrícula.",
  },
  {
    q: "Posso parcelar no cartão sem juros?",
    a: "Sim. O parcelamento é em até 6x sem juros no cartão de crédito. O valor total é de R$ 2.900,00 (6 parcelas de R$ 483,33). Para quem preferir pagar à vista, há 5% de desconto, totalizando R$ 2.755,00.",
  },
  {
    q: "Como funciona o projeto aplicado para certificação?",
    a: "Você desenvolve um projeto real de melhoria na sua própria empresa ao longo da formação, aplicando as ferramentas de cada fase do DMAIC. Ao final, agenda uma sessão com um consultor Gemba Group para apresentação, avaliação e recebimento da sua certificação.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[hsl(var(--bg-elevated))]">
      <div className="container py-14 sm:py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex"><SectionLabel>Perguntas frequentes</SectionLabel></div>
          <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground leading-tight">
            Ainda tem dúvidas? <span className="text-green-glow">A gente responde.</span>
          </h2>
        </div>

        <div className="mt-12 max-w-[800px] mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-xl border bg-card/40 overflow-hidden transition-colors ${
                  isOpen ? "border-green-vibrant/50" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-foreground">{f.q}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-green-vibrant/40 flex items-center justify-center text-green-glow transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-green-vibrant/10" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

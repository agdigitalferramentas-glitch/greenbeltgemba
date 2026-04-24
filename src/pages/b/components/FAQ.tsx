import { useState } from "react";

const faqs = [
  { q: "Mas eu não tenho experiência em Lean Six Sigma...", a: "Exatamente por isso você precisa fazer este curso. Começamos do zero, com os conceitos mais básicos, e evoluímos até metodologias avançadas. Não é pré-requisito ter experiência prévia." },
  { q: "Vou conseguir aplicar o que aprendo?", a: "Sim. A formação é 100% prática. Você trabalha em um projeto real durante o curso, aplicando cada ferramenta conforme aprende. Ao final, terá um projeto implementado e certificado." },
  { q: "E se eu não conseguir acompanhar?", a: "Você tem mentoria especializada incluída (3 horas). As aulas são ao vivo, então você pode tirar dúvidas em tempo real, e o material fica disponível para revisar quantas vezes precisar." },
  { q: "Quanto tempo leva?", a: "Aproximadamente 4-5 meses (16 aulas de 3 horas + projeto). As aulas são terças e quintas à noite, então você consegue conciliar com o trabalho." },
  { q: "A certificação é reconhecida?", a: "Sim. É reconhecida globalmente pelo Council for Six Sigma Certification. Você pode listar no LinkedIn e em seu currículo, comprovando expertise oficialmente." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ background: "hsl(var(--b-surface))" }}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <div className="inline-flex"><div className="b-section-bar mb-6">FAQ</div></div>
          <h2
            className="b-display leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10 bg-white rounded-xl px-2 sm:px-4" style={{ border: "1px solid hsl(var(--b-border))" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="b-faq-item">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base" style={{ color: "hsl(var(--b-text))" }}>
                    {f.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-transform duration-300"
                    style={{
                      background: isOpen ? "hsl(var(--b-green))" : "hsl(var(--b-green-soft))",
                      color: isOpen ? "white" : "hsl(var(--b-green))",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-5 text-sm leading-relaxed" style={{ color: "hsl(var(--b-text-soft))" }}>
                      {f.a}
                    </p>
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

import heroBg from "@/assets/hero-bg-team.jpg";

const trustPoints = [
  "Certificação reconhecida internacionalmente",
  "Mentoria com especialistas do mercado",
  "30x de retorno médio sobre o investimento",
];

/**
 * Variação 2 da Versão A — composição split:
 *  - Esquerda: copy focada em benefício + CTA + selos de confiança
 *  - Direita: foto da equipe em moldura com glow, sem logo do produto
 *  - Sem repetição da logo do produto na primeira dobra
 */
const HeroV2 = () => (
  <section className="relative overflow-hidden bg-gradient-hero min-h-[88vh] md:min-h-[92vh] lg:min-h-[88vh] flex flex-col">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-green-vibrant/15 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />

    <div className="container relative flex-1 flex flex-col justify-center pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 order-last lg:order-first">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-vibrant/40 bg-green-deep/60 backdrop-blur-sm text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wider uppercase animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-glow pulse-dot" />
            <span className="text-foreground/90">Próxima turma — Vagas limitadas</span>
          </div>

          <h1
            className="font-display mt-5 sm:mt-6 lg:mt-8 leading-[0.95] tracking-tight animate-fade-up"
            style={{ fontSize: "clamp(36px, 6.5vw, 76px)" }}
          >
            <span className="block text-foreground">Conquiste o</span>
            <span className="block text-green-glow text-glow">+30% no seu salário</span>
            <span className="block text-foreground">com a metodologia que</span>
            <span className="block text-gold-light">o mercado disputa.</span>
          </h1>

          <p className="mt-5 sm:mt-6 lg:mt-8 max-w-xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed animate-fade-up">
            Formação <strong className="text-foreground">Green Belt Lean Six Sigma</strong> da Gemba Group:
            o caminho mais curto para virar referência na sua área e ser
            promovido pelos resultados que você entrega.
          </p>

          <ul className="mt-6 sm:mt-7 space-y-2.5 animate-fade-up">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-vibrant/20 border border-green-vibrant/50 flex items-center justify-center">
                  <span className="text-green-glow text-xs font-bold">✓</span>
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <a
              href="#pricing"
              className="btn-glow inline-flex items-center justify-center px-7 sm:px-9 py-4 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-sm sm:text-base shadow-glow text-center"
            >
              Garantir minha vaga →
            </a>
            <a
              href="#modules"
              className="text-foreground/85 hover:text-green-glow transition-colors text-sm font-semibold tracking-wide border-b border-green-vibrant/40 hover:border-green-glow pb-1 self-start sm:self-auto"
            >
              Ver o que você vai aprender
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative animate-fade-up">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-green-vibrant/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              src={heroBg}
              alt="Profissionais formados em Lean Six Sigma"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--green-deep))] via-[hsl(var(--green-deep))]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-vibrant/15 to-transparent mix-blend-overlay" />
          </div>

          {/* Floating proof card */}
          <div className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-7 bg-[hsl(var(--green-deep))]/90 backdrop-blur-md border border-green-vibrant/40 rounded-xl p-4 sm:p-5 shadow-2xl max-w-[240px]">
            <div className="font-display text-2xl sm:text-3xl text-green-glow leading-none">+30mil</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1.5 leading-tight">
              Profissionais já transformaram a carreira
            </div>
          </div>

          {/* Floating accent card */}
          <div className="hidden sm:block absolute -top-5 -right-3 lg:-top-6 lg:-right-6 bg-gold-light/95 text-[hsl(var(--green-deep))] rounded-xl px-4 py-3 shadow-2xl font-bold text-sm rotate-3">
            17 anos de mercado
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroV2;

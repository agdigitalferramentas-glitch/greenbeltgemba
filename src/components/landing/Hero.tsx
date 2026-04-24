import productLogo from "@/assets/logo-greenbelt-product.png";
import heroBg from "@/assets/hero-bg-team.jpg";

const stats = [
  { value: "+30mil", label: "Profissionais certificados" },
  { value: "+1BI", label: "Em ganhos gerados" },
  { value: "17 anos", label: "Líderes no mercado" },
  { value: "+1500", label: "Projetos certificados" },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-hero">
    {/* Background photo with strong overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-hidden
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--green-deep))]/85 via-[hsl(var(--green-deep))]/70 to-[hsl(var(--green-deep))] pointer-events-none" />
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-green-vibrant/15 blur-3xl pointer-events-none" />

    <div className="container relative pt-10 sm:pt-20 pb-16 sm:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-8">
          {/* Badge */}
          <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-vibrant/40 bg-green-deep/60 backdrop-blur-sm text-[10px] sm:text-sm font-semibold tracking-wider uppercase animate-fade-up">
            <span className="w-2 h-2 flex-shrink-0 rounded-full bg-green-glow pulse-dot" />
            <span className="text-foreground/90 truncate">Gemba Group — Referência Nacional</span>
          </div>

          {/* Title */}
          <h1
            className="font-display mt-6 sm:mt-8 leading-[0.92] tracking-tight animate-fade-up"
            style={{ fontSize: "clamp(40px, 8vw, 88px)" }}
          >
            <span className="block text-foreground">Green Belt</span>
            <span className="block text-green-vibrant text-glow">LEAN SIX SIGMA</span>
            <span className="block text-gold-light">Formação</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed animate-fade-up">
            A certificação que transforma profissionais em agentes de resultado.
            Domine o método usado pelas maiores multinacionais do mundo e destrave
            a promoção, o aumento ou o impacto que você merece.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <a
              href="#pricing"
              className="btn-glow inline-flex items-center justify-center px-6 sm:px-8 py-4 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-sm sm:text-base shadow-glow text-center"
            >
              Quero me inscrever agora →
            </a>
            <a
              href="#modules"
              className="text-foreground/85 hover:text-green-glow transition-colors text-sm font-semibold tracking-wide border-b border-green-vibrant/40 hover:border-green-glow pb-1 self-start sm:self-auto"
            >
              Ver conteúdo completo
            </a>
          </div>
        </div>

        {/* Right: product logo */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end order-first lg:order-last">
          <img
            src={productLogo}
            alt="Selo Green Belt Lean Six Sigma"
            className="w-[200px] sm:w-[260px] lg:w-full max-w-[360px] h-auto animate-fade-up drop-shadow-[0_0_25px_rgba(80,220,120,0.25)]"
            width={1040}
            height={376}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-green-vibrant/15 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="font-display text-2xl sm:text-4xl text-green-glow">{s.value}</div>
            <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

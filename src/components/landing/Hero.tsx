import productLogo from "@/assets/logo-greenbelt-product.png";
import heroBg from "@/assets/hero-bg-team.jpg";

const stats = [
  { value: "+30mil", label: "Profissionais certificados" },
  { value: "+1BI", label: "Em ganhos gerados" },
  { value: "17 anos", label: "Líderes no mercado" },
  { value: "+1500", label: "Projetos certificados" },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-hero min-h-[88vh] md:min-h-[92vh] lg:min-h-[88vh] flex flex-col">
    {/* Background photo with strong overlay (LCP candidate — preloaded as <img>) */}
    <img
      src={heroBg}
      alt=""
      aria-hidden="true"
      width={1920}
      height={1280}
      fetchPriority="high"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--green-deep))]/85 via-[hsl(var(--green-deep))]/70 to-[hsl(var(--green-deep))] pointer-events-none" />
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="absolute -top-32 -right-32 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] rounded-full bg-green-vibrant/15 blur-3xl pointer-events-none" />

    <div className="container relative flex-1 flex flex-col justify-center pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 lg:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left: copy */}
        <div className="md:col-span-7 lg:col-span-8">
          {/* Badge */}
          <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-vibrant/40 bg-green-deep/60 backdrop-blur-sm text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wider uppercase animate-fade-up">
            <span className="w-2 h-2 flex-shrink-0 rounded-full bg-green-glow pulse-dot" />
            <span className="text-foreground/90 truncate">Gemba Group — Referência Nacional</span>
          </div>

          {/* Title */}
          <h1
            className="font-display mt-5 sm:mt-6 lg:mt-8 leading-[0.92] tracking-tight animate-fade-up"
            style={{ fontSize: "clamp(38px, 7.5vw, 88px)" }}
          >
            <span className="block text-foreground">Green Belt</span>
            <span className="block text-green-vibrant text-glow">LEAN SIX SIGMA</span>
            <span className="block text-gold-light">Formação</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 lg:mt-8 max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed animate-fade-up">
            A certificação que transforma profissionais em agentes de resultado.
            Domine o método usado pelas maiores multinacionais do mundo e destrave
            a promoção, o aumento ou o impacto que você merece.
          </p>

          {/* CTAs */}
          <div className="mt-7 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 lg:gap-6">
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
        <div className="md:col-span-5 lg:col-span-4 flex justify-start md:justify-end order-first md:order-last">
          <img
            src={productLogo}
            alt="Selo da certificação Green Belt Lean Six Sigma — Gemba Group"
            className="w-[180px] sm:w-[220px] md:w-full max-w-[260px] lg:max-w-[360px] h-auto animate-fade-up drop-shadow-[0_0_25px_rgba(80,220,120,0.25)]"
            width={1040}
            height={376}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-10 sm:mt-14 lg:mt-20 pt-6 sm:pt-8 border-t border-green-vibrant/15 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl text-green-glow">{s.value}</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

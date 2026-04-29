import gembaLogo from "@/assets/gemba-logo.png";

const Footer = () => (
  <footer className="bg-[hsl(140_40%_3%)] border-t border-green-vibrant/20">
    <div className="container py-10 sm:py-12">
      <div className="flex items-center justify-center">
        <img
          src={gembaLogo}
          alt="Gemba Group"
          className="h-12 sm:h-16 w-auto"
          loading="lazy"
        />
      </div>
      <p className="mt-5 sm:mt-6 text-center text-[11px] sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        © 2026 Gemba Group. Todos os direitos reservados. Referência Nacional em Lean Six Sigma ·
        Mais de 17 anos formando líderes que geram resultado.
      </p>
    </div>
  </footer>
);

export default Footer;

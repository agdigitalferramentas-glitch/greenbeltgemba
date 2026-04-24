const Footer = () => (
  <footer className="bg-[hsl(140_40%_3%)] border-t border-green-vibrant/20">
    <div className="container py-12">
      <div className="flex items-center justify-center gap-6 text-foreground">
        <span className="font-display text-2xl tracking-wide">Gemba Group</span>
        <span className="w-px h-6 bg-green-vibrant/40" />
        <span className="font-display text-2xl tracking-wide text-green-glow">Produzzi</span>
      </div>
      <p className="mt-6 text-center text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        © 2025 Gemba Group. Todos os direitos reservados. Referência Nacional em Lean Six Sigma ·
        Mais de 17 anos formando líderes que geram resultado.
      </p>
    </div>
  </footer>
);

export default Footer;

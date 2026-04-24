const Footer = () => (
  <footer style={{ background: "hsl(var(--b-text))", color: "white" }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="b-display text-xl" style={{ color: "hsl(150 50% 70%)" }}>
            Gemba<span className="text-white">Group</span>
          </span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">
          Transformando carreiras desde 2007. 30 mil profissionais formados,
          R$ 1 bilhão em resultados gerados.
        </p>
      </div>

      <div>
        <div className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: "hsl(150 50% 70%)" }}>
          Navegação
        </div>
        <ul className="space-y-2 text-sm">
          {[
            { href: "#b-beneficios", l: "Benefícios" },
            { href: "#b-conteudo", l: "Conteúdo do curso" },
            { href: "#b-investimento", l: "Investimento" },
            { href: "/", l: "← Versão dark (A)" },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white/80 hover:text-white transition-colors">
                {l.l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: "hsl(150 50% 70%)" }}>
          Contato
        </div>
        <p className="text-sm text-white/70">Aulas: Terças e Quintas, 19:30 às 22:30</p>
        <p className="text-sm text-white/70 mt-1">Microsoft Teams · Online ao vivo</p>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 text-xs text-white/50 text-center">
        © 2025 Gemba Group. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;

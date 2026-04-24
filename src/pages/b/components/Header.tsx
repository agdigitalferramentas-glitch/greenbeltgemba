import { useEffect, useState } from "react";

const links = [
  { href: "#b-beneficios", label: "Benefícios" },
  { href: "#b-conteudo", label: "Conteúdo" },
  { href: "#b-investimento", label: "Investimento" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
      style={{ borderBottom: "1px solid hsl(var(--b-border))" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">
        <a href="#b-top" className="flex items-center gap-2">
          <span
            className="b-display text-lg sm:text-xl"
            style={{ color: "hsl(var(--b-green))" }}
          >
            Gemba<span style={{ color: "hsl(var(--b-text))" }}>Group</span>
          </span>
          <span style={{ color: "hsl(var(--b-border))" }}>|</span>
          <span
            className="b-display text-lg sm:text-xl"
            style={{ color: "hsl(var(--b-text))" }}
          >
            Produzzi
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold transition-colors"
              style={{ color: "hsl(var(--b-text))" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--b-green))")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--b-text))")}
            >
              {l.label}
            </a>
          ))}
          <a href="#b-investimento" className="b-btn-outline" style={{ padding: "10px 20px", fontSize: 14 }}>
            Inscrever-se
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5" style={{ background: "hsl(var(--b-text))" }} />
          <span className="block w-6 h-0.5" style={{ background: "hsl(var(--b-text))" }} />
          <span className="block w-6 h-0.5" style={{ background: "hsl(var(--b-text))" }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "hsl(var(--b-border))" }}>
          <nav className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 font-semibold"
                style={{ color: "hsl(var(--b-text))" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#b-investimento"
              onClick={() => setOpen(false)}
              className="b-btn mt-2"
              style={{ padding: "12px 20px", fontSize: 14 }}
            >
              Inscrever-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

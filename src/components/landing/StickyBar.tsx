import { useEffect, useState } from "react";

const StickyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="region"
      aria-label="Inscrição rápida"
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="bg-green-deep/95 backdrop-blur-md border-t border-green-vibrant/40 shadow-deep">
        <div className="container py-3 sm:py-3">
          {/* Mobile: stacked, CTA full width. Desktop: inline. */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex flex-col sm:block leading-tight min-w-0">
              <span className="font-bold text-sm sm:text-sm text-foreground truncate">
                Green Belt Lean Six Sigma
              </span>
              <span className="text-[11px] sm:text-sm text-muted-foreground sm:ml-1">
                <span className="sm:hidden">6x R$ 483,33 ou R$ 2.755 à vista</span>
                <span className="hidden sm:inline">— 6x R$ 483,33 sem juros ou R$ 2.755 à vista</span>
              </span>
            </div>
            <a
              href="#pricing"
              className="btn-glow flex-shrink-0 inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-sm sm:text-sm shadow-glow"
            >
              Garantir vaga →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;

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
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-green-deep/90 backdrop-blur-md border-t border-green-vibrant/40 shadow-deep">
        <div className="container py-3 flex items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-foreground leading-tight">
            <strong className="font-bold">Green Belt Lean Six Sigma</strong>
            <span className="hidden sm:inline text-muted-foreground"> — 6x R$ 483,33 sem juros ou R$ 2.755 à vista</span>
          </div>
          <a
            href="#pricing"
            className="btn-glow flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-green-vibrant text-[hsl(var(--green-deep))] font-bold text-sm shadow-glow"
          >
            Garantir vaga →
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;

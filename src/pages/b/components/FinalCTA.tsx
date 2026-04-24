const FinalCTA = () => (
  <section
    id="b-cta-final"
    className="relative overflow-hidden text-white"
    style={{ background: "hsl(var(--b-green-dark))" }}
  >
    {/* asym corners */}
    <span className="b-asym-corner hidden md:block" style={{ top: 40, left: 40, borderColor: "white", opacity: 0.2, borderRight: "none", borderBottom: "none" }} />
    <span className="b-asym-corner hidden md:block" style={{ bottom: 40, right: 40, borderColor: "white", opacity: 0.2, borderLeft: "none", borderTop: "none" }} />

    <div className="max-w-4xl mx-auto px-5 lg:px-8 py-14 sm:py-20 text-center">
      <div className="inline-flex justify-center mb-6">
        <div
          className="b-section-bar"
          style={{ background: "white", color: "hsl(var(--b-green))" }}
        >
          Última chamada
        </div>
      </div>

      <h2
        className="b-display leading-[1.05]"
        style={{ fontSize: "clamp(34px, 5vw, 60px)" }}
      >
        Não deixe sua carreira <span style={{ color: "hsl(150 50% 70%)" }}>estagnar</span>.
      </h2>

      <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
        O mercado mudou. Não recompensa mais apenas tempo de casa ou diploma universitário —
        recompensa <strong className="text-white">resultados</strong>. 30 mil profissionais já fizeram essa
        escolha e transformaram suas carreiras. O próximo pode ser você.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#b-investimento"
          className="b-btn inline-flex"
          style={{ background: "white", color: "hsl(var(--b-green))", padding: "18px 36px", fontSize: 16 }}
        >
          Quero minha certificação Green Belt →
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl mx-auto text-left sm:text-center">
        {[
          { l: "Valor", v: "R$ 2.900" },
          { l: "Parcelado", v: "6x s/ juros" },
          { l: "Aulas", v: "Ter & Qui · 19:30" },
          { l: "Formato", v: "Online · Teams" },
        ].map((s) => (
          <div key={s.l} className="border-t border-white/20 pt-3">
            <div className="text-[11px] uppercase tracking-widest text-white/60">{s.l}</div>
            <div className="b-display text-base sm:text-lg mt-1">{s.v}</div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs sm:text-sm italic text-white/70">
        Vagas limitadas. Comece sua transformação hoje.
      </p>
    </div>
  </section>
);

export default FinalCTA;

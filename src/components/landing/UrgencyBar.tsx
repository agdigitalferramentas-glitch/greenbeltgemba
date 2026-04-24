const UrgencyBar = () => (
  <div className="w-full bg-gold text-[hsl(var(--green-deep))] text-xs sm:text-sm font-semibold tracking-wide">
    <div className="container flex items-center justify-center gap-2 sm:gap-4 py-2.5 text-center flex-wrap">
      <span className="flex items-center gap-2">
        <span aria-hidden>🔥</span>
        Vagas limitadas para a próxima turma — Garanta sua vaga antes que encerre!
      </span>
      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-[hsl(var(--green-deep))] text-gold text-[11px] font-bold tracking-widest">
        INSCRIÇÕES ABERTAS
      </span>
    </div>
  </div>
);

export default UrgencyBar;

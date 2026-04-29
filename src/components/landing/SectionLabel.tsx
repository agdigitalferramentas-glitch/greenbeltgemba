const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center justify-center gap-2 text-[11px] sm:text-sm font-bold tracking-[0.22em] sm:tracking-[0.25em] uppercase text-green-glow text-center max-w-[28ch] sm:max-w-none leading-snug [text-wrap:balance]">
    <span className="hidden sm:inline-block w-8 h-px bg-green-vibrant/60 flex-shrink-0" />
    <span className="block sm:inline">{children}</span>
  </div>
);

export default SectionLabel;

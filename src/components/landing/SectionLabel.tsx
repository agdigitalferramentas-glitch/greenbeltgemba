const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-green-glow">
    <span className="w-8 h-px bg-green-vibrant/60" />
    {children}
  </div>
);

export default SectionLabel;

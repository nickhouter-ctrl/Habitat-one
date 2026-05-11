export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-sand-50">
      <div className="flex flex-col items-center gap-5">
        <span className="relative grid h-16 w-16 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-terracotta-400/25" />
          <span className="absolute inset-2 rounded-full bg-terracotta-500/10" />
          <svg viewBox="0 0 40 40" className="h-11 w-11" aria-hidden>
            <path d="M7 35 V18 a13 13 0 0 1 26 0 V35 Z" fill="none" stroke="var(--color-terracotta-500)" strokeWidth="2.6" strokeLinejoin="round" />
            <path d="M15 35 V24 a5 5 0 0 1 10 0 V35" fill="none" stroke="var(--color-terracotta-500)" strokeWidth="2.2" />
            <circle cx="20" cy="13.5" r="3.1" fill="var(--color-terracotta-600)" />
          </svg>
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ink-soft/55">Habitat One</span>
      </div>
    </div>
  );
}

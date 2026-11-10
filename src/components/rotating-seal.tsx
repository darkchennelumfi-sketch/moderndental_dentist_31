export function RotatingSeal({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="animate-spin-slow relative size-full">
        <svg viewBox="0 0 120 120" className="size-full">
          <defs>
            <path
              id="seal-circle"
              d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
            />
          </defs>
          <text className="fill-pine text-[10px] font-bold tracking-[0.22em] uppercase">
            <textPath href="#seal-circle">
              Modern Dental · Minot, North Dakota ·
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-xl text-pine">MD</span>
      </div>
    </div>
  );
}

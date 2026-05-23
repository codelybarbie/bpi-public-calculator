"use client";

export default function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200,240,192,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl">
        {/* Tag */}
        <div className="animate-fade-up animate-delay-1 mb-8 inline-flex items-center gap-2 rounded-full border bg-[#111] px-3 py-1" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8f0c0]" style={{ animation: "pulse-soft 2s infinite" }} />
          <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
            PUBLIC RESEARCH LAYER · v1.0
          </span>
        </div>

        {/* Title */}
        <h1
          className="animate-fade-up animate-delay-2 mb-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Body
          <br />
          <span style={{ color: "var(--accent)" }}>Proportion</span>
          <br />
          Index
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up animate-delay-3 mt-6 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "var(--text-secondary)" }}>
          An exploratory visible-body proportion observation framework.{" "}
          <span style={{ color: "var(--text-muted)" }}>(Silhouette Calculator)</span>
        </p>

        {/* Founder credit */}
        <p className="animate-fade-up animate-delay-4 mt-3 font-mono text-xs" style={{ color: "var(--text-very-muted)" }}>
          By Sarang Kang&nbsp;·&nbsp;Silhouette Intelligence, S-Scale Founder
        </p>

        {/* Divider line */}
        <div className="animate-fade-up animate-delay-4 mt-10 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.07)" }} />
          <span className="font-mono text-[10px] tracking-[0.3em]" style={{ color: "var(--text-very-muted)" }}>
            BG · UD · LD · BG-10
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* Anchor */}
        <div className="animate-fade-up animate-delay-5 mt-8">
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest transition-colors hover:text-[#c8f0c0]"
            style={{ color: "var(--text-muted)" }}
          >
            <span>CALCULATE</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 2v8M2 8l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

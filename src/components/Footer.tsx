export default function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div>
            <p
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              className="mb-1 text-sm font-semibold"
            >
              BPI
            </p>
            <p className="mb-2 font-mono text-[10px]" style={{ color: "var(--text-very-muted)" }}>
              By Sarang Kang · Silhouette Intelligence, S-Scale Founder
            </p>
            <p
              className="font-mono text-[10px] leading-relaxed"
              style={{ color: "var(--text-very-muted)" }}
            >
              Body Proportion Index is an exploratory visible-body proportion
              observation framework. (Silhouette Calculator) It does not define
              human worth, attractiveness, or medical status.
            </p>
          </div>
          <div>
            <p
              className="mb-2 font-mono text-[9px] tracking-[0.2em]"
              style={{ color: "var(--text-very-muted)" }}
            >
              ETHICAL STATEMENT
            </p>
            <p
              className="font-mono text-[10px] leading-relaxed"
              style={{ color: "var(--text-very-muted)" }}
            >
              Visible-body interpretation should remain contextual, non-diagnostic,
              and ethically applied. BG-10 coding ranges are defined for
              educational and observational purposes only.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-between gap-4 pt-6 md:flex-row md:items-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="font-mono text-[9px] tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.18)" }}>
            BPI · PUBLIC RESEARCH LAYER · EXPLORATORY PROPORTION FRAMEWORK
          </p>
          <p className="font-mono text-[9px]" style={{ color: "rgba(255,255,255,0.1)" }}>
            Protected interpretation infrastructure not included.
          </p>
        </div>
      </div>
    </footer>
  );
}

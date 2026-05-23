"use client";

const BG10_ROWS = [
  { range: "0.0 – 0.9",   level: 1,  label: "Near-Perfect Balance",       cls: "bg-band-1"  },
  { range: "1.0 – 1.9",   level: 2,  label: "High Balance",               cls: "bg-band-2"  },
  { range: "2.0 – 2.9",   level: 3,  label: "Balanced",                   cls: "bg-band-3"  },
  { range: "3.0 – 3.9",   level: 4,  label: "Balanced Tendency",          cls: "bg-band-4"  },
  { range: "4.0 – 5.9",   level: 5,  label: "Balanced Stability Range", cls: "bg-band-5"  },
  { range: "6.0 – 7.9",   level: 6,  label: "Noticeable Gap",             cls: "bg-band-6"  },
  { range: "8.0 – 9.9",   level: 7,  label: "Strong Gap",                 cls: "bg-band-7"  },
  { range: "10.0 – 11.9", level: 8,  label: "High Gap",                   cls: "bg-band-8"  },
  { range: "12.0 – 13.9", level: 9,  label: "Very High Gap",              cls: "bg-band-9"  },
  { range: "> 14.0",       level: 10, label: "Outlier / Review",           cls: "bg-band-10" },
];

export default function BGTable() {
  return (
    <section className="px-6 py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-3xl">

        {/* Section header */}
        <div className="mb-10">
          <p
            className="mb-1 font-mono text-[10px] tracking-[0.25em]"
            style={{ color: "var(--text-very-muted)" }}
          >
            02 · REFERENCE
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            className="text-2xl font-semibold md:text-3xl"
          >
            BG-10 Observational Coding Table
          </h2>
          <p className="mt-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            Lower coding level = smaller gap · Higher coding level = broader relational discrepancy
          </p>
        </div>

        {/* Formula definitions */}
        <div className="mb-8 grid gap-3 md:grid-cols-3">
          {[
            { term: "UD", def: "Upper Difference", eq: "Shoulder − Waist" },
            { term: "LD", def: "Lower Difference", eq: "Hip − Waist" },
            { term: "BG", def: "Balance Gap",       eq: "| UD − LD |" },
          ].map((d) => (
            <div
              key={d.term}
              className="rounded-xl p-4"
              style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#0e0e0e" }}
            >
              <p className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {d.term}
              </p>
              <p className="mt-0.5 font-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>
                {d.def}
              </p>
              <p className="mt-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                {d.eq}
              </p>
            </div>
          ))}
        </div>

        {/* BG-10 table */}
        <div className="overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
          {/* Header */}
          <div
            className="grid grid-cols-3 px-5 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#0c0c0c" }}
          >
            {["BG (inch)", "BG-10 Coding Level", "Operational Label"].map((h) => (
              <p key={h} className="font-mono text-[9px] tracking-[0.2em]" style={{ color: "var(--text-very-muted)" }}>
                {h}
              </p>
            ))}
          </div>

          {/* Rows */}
          {BG10_ROWS.map((row, i) => (
            <div
              key={row.level}
              className="grid grid-cols-3 items-center px-5 py-3.5 transition-colors hover:bg-white/[0.02]"
              style={{
                borderBottom: i < BG10_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <p className="font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
                {row.range}
              </p>
              <p className={`font-mono text-sm font-medium ${row.cls}`}>{row.level}</p>
              <p className={`font-mono text-xs ${row.cls}`}>{row.label}</p>
            </div>
          ))}
        </div>

        {/* Direction note */}
        <div
          className="mt-4 flex items-start gap-3 rounded-xl px-4 py-3"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#0a0a0a" }}
        >
          <div className="mt-0.5 flex gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-band-1" style={{ background: "#c8f0c0" }} />
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#e0c87a" }} />
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#c07050" }} />
          </div>
          <p className="font-mono text-[9px] leading-relaxed" style={{ color: "var(--text-very-muted)" }}>
            Coding direction: Level 1 indicates the smallest observed Balance Gap.
            Level 10 indicates the broadest relational discrepancy requiring contextual review.
            This table is an educational observational reference — not a diagnostic scale.
          </p>
        </div>

        {/* Public / Protected boundary */}
        <div
          className="mt-6 rounded-xl p-5"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0a0a0a" }}
        >
          <p
            className="mb-4 font-mono text-[9px] tracking-[0.2em]"
            style={{ color: "var(--text-very-muted)" }}
          >
            PUBLIC / PROTECTED BOUNDARY
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-[10px]" style={{ color: "var(--accent)" }}>
                PUBLIC LAYER
              </p>
              <ul className="space-y-1">
                {[
                  "Measurement language (UD / LD / BG)",
                  "BG-10 Coding Level reference table",
                  "Educational visualization",
                  "Observational operational labels",
                ].map((item) => (
                  <li key={item} className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-mono text-[10px]" style={{ color: "var(--text-very-muted)" }}>
                PROTECTED LAYER
              </p>
              <ul className="space-y-1">
                {[
                  "Patent-pending interpretation architecture",
                  "Protected S-Scale / S.A.A. logic",
                  "Internal calibration and review systems",
                  "Non-public grading and platform infrastructure",
                ].map((item) => (
                  <li key={item} className="font-mono text-[10px]" style={{ color: "rgba(255,255,255,0.18)" }}>
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

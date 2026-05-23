"use client";

import { useState, useRef } from "react";
import { calculateBPI, type BPIInputs, type BPIResult, type Unit } from "@/lib/bpi";

const INITIAL_INPUTS: BPIInputs = { shoulder: 0, waist: 0, hip: 0, unit: "inch" };

export default function Calculator() {
  const [inputs, setInputs] = useState<BPIInputs>(INITIAL_INPUTS);
  const [result, setResult] = useState<BPIResult | null>(null);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleChange = (field: keyof Omit<BPIInputs, "unit">, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }));
    setResult(null);
  };

  const handleUnit = (unit: Unit) => {
    setInputs((prev) => ({ ...prev, unit }));
    setResult(null);
  };

  const handleCalculate = () => {
    const res = calculateBPI(inputs);
    setResult(res);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  };

  const handleCopy = () => {
    if (!result) return;
    const text = `BPI Result\nUD: ${result.ud} ${result.unit}\nLD: ${result.ld} ${result.unit}\nBG: ${result.bg} ${result.unit}\nBG-10 Coding Level: ${result.bg10}/10\nObservation: ${result.label}\n\nBPI — Exploratory Visible-Body Proportion Observation Framework\nBy Sarang Kang | Silhouette Intelligence, S-Scale Founder`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isReady = inputs.shoulder > 0 && inputs.waist > 0 && inputs.hip > 0;

  // Bar fill: level 1 = narrow fill (small gap), level 10 = full fill (large gap)
  const barWidth = Math.max(4, Math.min(100, (result?.bg10 ?? 0) * 10));

  return (
    <section id="calculator" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">

        {/* Section header */}
        <div className="mb-10">
          <p
            className="mb-1 font-mono text-[10px] tracking-[0.25em]"
            style={{ color: "var(--text-very-muted)" }}
          >
            01 · CALCULATOR
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            className="text-2xl font-semibold md:text-3xl"
          >
            Proportion Input
          </h2>
          <p className="mt-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            Circumference measurements. No height or weight required.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ border: "1px solid var(--border)", background: "#0e0e0e" }}
        >
          {/* Unit toggle */}
          <div
            className="mb-8 flex items-center gap-1 rounded-lg p-1 w-fit"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#111" }}
          >
            {(["inch", "cm"] as Unit[]).map((u) => (
              <button
                key={u}
                onClick={() => handleUnit(u)}
                className="px-4 py-1.5 rounded-md font-mono text-xs tracking-widest transition-all"
                style={{
                  background: inputs.unit === u ? "rgba(255,255,255,0.08)" : "transparent",
                  color: inputs.unit === u ? "var(--text-primary)" : "var(--text-very-muted)",
                }}
              >
                {u.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Input fields */}
          <div className="grid gap-4 md:grid-cols-3">
            {(["shoulder", "waist", "hip"] as const).map((field) => (
              <div key={field}>
                <label
                  className="mb-2 block font-mono text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {field}
                  <span className="ml-2" style={{ color: "var(--text-very-muted)" }}>
                    circumference
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="0.0"
                    value={inputs[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className="w-full rounded-lg px-4 py-3 font-mono text-sm outline-none transition-all"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#141414",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                  <span
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px]"
                    style={{ color: "var(--text-very-muted)" }}
                  >
                    {inputs.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            disabled={!isReady}
            className="mt-6 w-full rounded-lg py-3.5 font-mono text-xs tracking-[0.2em] transition-all"
            style={
              isReady
                ? {
                    background: "#1a2a18",
                    color: "#c8f0c0",
                    border: "1px solid #2a4828",
                    cursor: "pointer",
                  }
                : {
                    background: "#0f0f0f",
                    color: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    cursor: "not-allowed",
                  }
            }
          >
            CALCULATE BPI
          </button>
        </div>

        {/* Result panel */}
        {result && result.isValid && (
          <div
            ref={resultRef}
            className="mt-6 animate-fade-up rounded-2xl p-6 md:p-8"
            style={{ border: "1px solid var(--border)", background: "#0e0e0e" }}
          >
            {/* Result header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p
                  className="font-mono text-[10px] tracking-[0.25em]"
                  style={{ color: "var(--text-very-muted)" }}
                >
                  RESULT · BG-10 CODING LEVEL
                </p>
                <p className={`mt-1 font-mono text-4xl font-medium ${result.labelClass}`}>
                  {result.bg10}
                  <span className="text-base ml-0.5" style={{ color: "var(--text-very-muted)" }}>
                    /10
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className={`font-mono text-sm font-medium ${result.labelClass}`}>
                  {result.label}
                </p>
                <p
                  className="mt-0.5 font-mono text-[10px]"
                  style={{ color: "var(--text-very-muted)" }}
                >
                  Observational coding · not diagnostic
                </p>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="mb-6 grid grid-cols-3 gap-3">
              {[
                { label: "UD", desc: "Upper Difference", value: `${result.ud}`, sub: "Shoulder − Waist" },
                { label: "LD", desc: "Lower Difference", value: `${result.ld}`, sub: "Hip − Waist" },
                { label: "BG", desc: "Balance Gap",      value: `${result.bg}`, sub: "|UD − LD|" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg p-4"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#111" }}
                >
                  <p
                    className="font-mono text-[9px] tracking-[0.2em]"
                    style={{ color: "var(--text-very-muted)" }}
                  >
                    {m.label}
                  </p>
                  <p className="mt-1 font-mono text-xl" style={{ color: "var(--text-primary)" }}>
                    {m.value}
                    <span
                      className="ml-1 text-[10px]"
                      style={{ color: "var(--text-very-muted)" }}
                    >
                      {result.unit}
                    </span>
                  </p>
                  <p className="mt-1 font-mono text-[9px]" style={{ color: "var(--text-muted)" }}>
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* BG-10 coding level bar — fills left→right as gap increases */}
            <div className="mb-6">
              <div
                className="mb-1.5 flex justify-between font-mono text-[9px]"
                style={{ color: "var(--text-very-muted)" }}
              >
                <span>BG = {result.bg} {result.unit}</span>
                <span>BG-10 Coding Level {result.bg10} / 10</span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${barWidth}%`,
                    background:
                      result.bg10 <= 3
                        ? "linear-gradient(to right, #4a6b44, #c8f0c0)"
                        : result.bg10 <= 6
                        ? "linear-gradient(to right, #6b5a30, #e0c87a)"
                        : "linear-gradient(to right, #6b3030, #c07050)",
                  }}
                />
              </div>
              <div
                className="mt-1 flex justify-between font-mono text-[8px]"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                <span>1 — smallest gap</span>
                <span>10 — broadest gap</span>
              </div>
            </div>

            {/* Disclaimer */}
            <div
              className="rounded-lg px-4 py-3"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#0c0c0c" }}
            >
              <p
                className="font-mono text-[9px] leading-relaxed"
                style={{ color: "var(--text-very-muted)" }}
              >
                BG-10 is a simplified observational coding layer for educational and visualization purposes.
                This output does not define health, attractiveness, or human worth. Protected interpretation
                infrastructure is not included in this public layer.
              </p>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-widest transition-colors hover:text-[#b8b8b8]"
              style={{ color: "var(--text-very-muted)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
                <path d="M1 8V2a1 1 0 011-1h6" stroke="currentColor" strokeWidth="1" />
              </svg>
              {copied ? "COPIED" : "COPY RESULT"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// BPI Public Measurement Language Layer
// This file contains ONLY the public observational layer.
// Interpretation engine, weighting, calibration, and S.A.A. architecture
// are NOT included in this repository.

export type Unit = "inch" | "cm";

export interface BPIInputs {
  shoulder: number;
  waist: number;
  hip: number;
  unit: Unit;
}

export interface BPIResult {
  ud: number;           // Upper Difference: Shoulder − Waist
  ld: number;           // Lower Difference: Hip − Waist
  bg: number;           // Balance Gap: |UD − LD|
  bg10: number;         // BG-10 Coding Level (1 = smallest gap, 10 = largest gap)
  label: string;        // Public operational label
  labelClass: string;   // CSS class for color coding
  unit: Unit;
  isValid: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// BG-10 Public Observational Coding Table  (LOCKED DIRECTION)
//
//   Lower BG-10 Coding Level  →  smaller Balance Gap / stronger proportional balance
//   Higher BG-10 Coding Level →  larger Balance Gap / broader relational discrepancy
//
// These are intentionally defined ranges for educational/visualization purposes.
// Precise internal thresholds, S.A.A. architecture, and interpretation-engine
// logic are NOT included in this public layer.
// ─────────────────────────────────────────────────────────────────────────────
const BG10_TABLE: { maxBG: number; codingLevel: number; label: string; labelClass: string }[] = [
  { maxBG: 0.9,       codingLevel: 1,  label: "Near-Perfect Balance",      labelClass: "bg-band-1"  },
  { maxBG: 1.9,       codingLevel: 2,  label: "High Balance",              labelClass: "bg-band-2"  },
  { maxBG: 2.9,       codingLevel: 3,  label: "Balanced",                  labelClass: "bg-band-3"  },
  { maxBG: 3.9,       codingLevel: 4,  label: "Balanced Tendency",         labelClass: "bg-band-4"  },
  { maxBG: 5.9,       codingLevel: 5,  label: "Balanced Stability Range",labelClass: "bg-band-5"  },
  { maxBG: 7.9,       codingLevel: 6,  label: "Noticeable Gap",            labelClass: "bg-band-6"  },
  { maxBG: 9.9,       codingLevel: 7,  label: "Strong Gap",                labelClass: "bg-band-7"  },
  { maxBG: 11.9,      codingLevel: 8,  label: "High Gap",                  labelClass: "bg-band-8"  },
  { maxBG: 13.9,      codingLevel: 9,  label: "Very High Gap",             labelClass: "bg-band-9"  },
  { maxBG: Infinity,  codingLevel: 10, label: "Outlier / Review",          labelClass: "bg-band-10" },
];

export function toCM(value: number): number {
  return value * 2.54;
}

export function toInch(value: number): number {
  return value / 2.54;
}

export function normalizeToCM(value: number, unit: Unit): number {
  return unit === "inch" ? toCM(value) : value;
}

export function normalizeToInch(value: number, unit: Unit): number {
  return unit === "cm" ? toInch(value) : value;
}

export function calculateBPI(inputs: BPIInputs): BPIResult {
  const { shoulder, waist, hip, unit } = inputs;

  if (!shoulder || !waist || !hip || shoulder <= 0 || waist <= 0 || hip <= 0) {
    return { ud: 0, ld: 0, bg: 0, bg10: 0, label: "", labelClass: "", unit, isValid: false };
  }

  // Convert to inches for BG-10 lookup (table ranges defined in inches)
  const s = normalizeToInch(shoulder, unit);
  const w = normalizeToInch(waist, unit);
  const h = normalizeToInch(hip, unit);

  const ud = parseFloat((s - w).toFixed(2));
  const ld = parseFloat((h - w).toFixed(2));
  const bg = parseFloat(Math.abs(ud - ld).toFixed(2));

  // BG-10 lookup — public observational coding layer only
  const entry = BG10_TABLE.find((row) => bg <= row.maxBG) ?? BG10_TABLE[BG10_TABLE.length - 1];

  return {
    ud,
    ld,
    bg,
    bg10: entry.codingLevel,
    label: entry.label,
    labelClass: entry.labelClass,
    unit,
    isValid: true,
  };
}

export function formatValue(value: number, unit: Unit): string {
  return `${value.toFixed(1)} ${unit}`;
}

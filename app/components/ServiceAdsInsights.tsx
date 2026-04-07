"use client";

import { useId } from "react";

type AdsTheme = "meta" | "google" | "amazon";

const themeStyles: Record<
  AdsTheme,
  { stroke: string; grid: string; label: string; pill: string; gradId: string }
> = {
  meta: {
    stroke: "#7c3aed",
    grid: "#e2e8f0",
    label: "Meta Ads performance",
    pill: "bg-violet-50 text-violet-800 ring-violet-200/80",
    gradId: "metaFill",
  },
  google: {
    stroke: "#2563eb",
    grid: "#e2e8f0",
    label: "Google Ads performance",
    pill: "bg-blue-50 text-blue-800 ring-blue-200/80",
    gradId: "googleFill",
  },
  amazon: {
    stroke: "#d97706",
    grid: "#e2e8f0",
    label: "Amazon Ads performance",
    pill: "bg-amber-50 text-amber-900 ring-amber-200/80",
    gradId: "amazonFill",
  },
};

const SERIES: Record<AdsTheme, number[]> = {
  meta: [42, 48, 52, 58, 55, 68, 72, 78, 82, 86, 84, 91],
  google: [38, 44, 46, 52, 58, 56, 62, 70, 74, 79, 85, 88],
  amazon: [45, 50, 48, 55, 60, 58, 64, 70, 73, 78, 80, 87],
};

function buildPaths(values: number[], w: number, h: number, padX: number, padY: number) {
  const n = values.length;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;
  const step = innerW / (n - 1);
  const pts = values.map((v, i) => ({
    x: padX + i * step,
    y: padY + innerH - (v / 100) * innerH,
  }));
  let area = `M ${pts[0].x} ${h} L ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const mx = (p0.x + p1.x) / 2;
    area += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  area += ` L ${pts[pts.length - 1].x} ${h} Z`;
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  return { area, line, pts };
}

export default function ServiceAdsInsights({
  theme,
  eyebrow = "Reporting preview",
  title = "How we show progress",
  subtitle = "Structured weekly reviews with conversion trend, efficiency, and spend context. Your live dashboards use account-specific data.",
}: {
  theme: AdsTheme;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const t = themeStyles[theme];
  const values = SERIES[theme];
  const w = 520;
  const h = 200;
  const padX = 36;
  const padY = 22;
  const { area, line, pts } = buildPaths(values, w, h, padX, padY);

  const gradStop =
    theme === "meta"
      ? { c1: "#7c3aed", o1: "0.22", o2: "0.02" }
      : theme === "google"
        ? { c1: "#2563eb", o1: "0.2", o2: "0.02" }
        : { c1: "#d97706", o1: "0.22", o2: "0.02" };

  const bars = [42, 55, 48, 62, 58, 71, 68, 74];
  const barMax = Math.max(...bars);

  const fillId = `${t.gradId}-${uid}`;

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/40 to-white p-5 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)] ring-1 ring-slate-100/80 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">{subtitle}</p>
        </div>
        <span
          className={`inline-flex shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ${t.pill}`}
        >
          {t.label}
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <p className="text-xs font-semibold text-slate-700">Conversion volume (indexed)</p>
            <p className="text-[11px] text-slate-500">12-week view</p>
          </div>
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="mt-3 h-auto w-full max-h-[200px]"
            role="img"
            aria-label="Illustrative conversion trend chart"
          >
            <defs>
              <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={gradStop.c1} stopOpacity={gradStop.o1} />
                <stop offset="100%" stopColor={gradStop.c1} stopOpacity={gradStop.o2} />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((i) => (
              <line
                key={i}
                x1={padX}
                y1={padY + (i * (h - padY * 2)) / 3}
                x2={w - padX}
                y2={padY + (i * (h - padY * 2)) / 3}
                stroke={t.grid}
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            ))}
            <path d={area} fill={`url(#${fillId})`} />
            <path d={line} fill="none" stroke={t.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {pts.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="white" stroke={t.stroke} strokeWidth="2" />
            ))}
          </svg>
          <p className="mt-2 text-[10px] leading-snug text-slate-400">
            Illustrative trend for layout only — your reports pull live data from ad accounts.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 lg:w-[200px]">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Efficiency</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-slate-900">
              {theme === "meta" ? "3.4×" : theme === "google" ? "4.1×" : "3.9×"}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">Blended ROAS (example)</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Weekly spend mix</p>
            <div className="mt-3 flex h-16 items-end justify-between gap-1">
              {bars.map((b, i) => (
                <div
                  key={i}
                  className="w-full max-w-[18px] rounded-t-md bg-gradient-to-t from-slate-200 to-slate-400/90"
                  style={{ height: `${(b / barMax) * 100}%`, minHeight: "18%" }}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

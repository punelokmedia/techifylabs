"use client";

import { useState, type CSSProperties, type SyntheticEvent } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Brush, ChevronDown, Diamond, FileText, Infinity as InfinityIcon, Layers, Lightbulb, Megaphone, Monitor, Settings, Target, TrendingUp, Users, Zap } from "lucide-react";
import ConsultationModal from "./ConsultationModel";
import styles from "./GrowthHero.module.css";

const stages = [
  { label: "Strategy", icon: Lightbulb, color: "#ff852b", top: 170 },
  { label: "Branding", icon: Brush, color: "#c558ff", top: 95 },
  { label: "Website", icon: Monitor, color: "#219bff", top: 45 },
  { label: "Content", icon: FileText, color: "#00db95", top: 20 },
  { label: "Ads", icon: Megaphone, color: "#ff852b", top: 45 },
  { label: "Leads", icon: Users, color: "#219bff", top: 95 },
  { label: "Growth", icon: BarChart3, color: "#d455ff", top: 170 },
];
const choices = [
  { title: "Build My Brand", copy: "Branding • Website • Social Media", icon: Diamond, color: "#791fff", href: "/services/Branding-agency" },
  { title: "Generate More Leads", copy: "Meta Ads • Google Ads • Lead Generation", icon: Target, color: "#ff6509", href: "/services/lead-generation" },
  { title: "Grow My Business", copy: "SEO • Marketing Strategy • Sales Support", icon: BarChart3, color: "#2864ff", href: "/services/organic-growth-seo" },
];
const performance = [
  { label: "Brand Growth", value: 35, icon: Users, color: "#791fff" },
  { label: "Lead Generation", value: 40, icon: Megaphone, color: "#ff6509" },
  { label: "Sales Growth", value: 25, icon: BarChart3, color: "#2864ff" },
];
const benefits = [
  { label: "360° Marketing Solutions", icon: Settings, color: "#791fff" },
  { label: "8+ Core Services", icon: Layers, color: "#ff6509" },
  { label: "Multiple Industries Served", icon: Users, color: "#2864ff" },
  { label: "Result Driven Growth Strategy", icon: TrendingUp, color: "#00bd77" },
];
const tone = (color: string) => ({ "--tone": color }) as CSSProperties;

function animateControl(event: SyntheticEvent<HTMLElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const control = target.closest("a, button");
  if (!control || !event.currentTarget.contains(control)) return;
  control.querySelectorAll("svg").forEach(icon => {
    icon.getAnimations().forEach(animation => animation.cancel());
    icon.animate(
      [
        { transform: "scale(1) rotate(0deg)" },
        { transform: "scale(1.2) rotate(-10deg)", offset: 0.4 },
        { transform: "scale(.95) rotate(5deg)", offset: 0.75 },
        { transform: "scale(1) rotate(0deg)" },
      ],
      { duration: 420, easing: "ease-out" },
    );
  });
}

export default function GrowthHero() {
  const [range, setRange] = useState("6");
  const [period, setPeriod] = useState("current");
  const [benefit, setBenefit] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const chartPoints = range === "6"
    ? [[10,109],[36,99],[62,89],[88,88],[117,73],[143,72],[172,56],[198,56],[225,40],[251,33],[279,15]]
    : [[10,109],[36,104],[62,98],[88,99],[117,85],[143,80],[172,73],[198,74],[225,62],[251,56],[279,43]];
  const chartPath = chartPoints.map(([x, y], index) => `${index ? "L" : "M"}${x} ${y}`).join(" ");
  const finalY = chartPoints[chartPoints.length - 1][1];
  return (
    <div className={styles.hero} onPointerDownCapture={animateControl} onClickCapture={animateControl}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <span className={styles.badge}><Zap size={19} /> Complete 360° Marketing Solutions</span>
          <h2>360° MARKETING &amp;<br />BUSINESS GROWTH<br /><span>SOLUTIONS</span></h2>
          <p className={styles.subtitle}>Build Your Brand. Generate Leads.<br />Grow Your Business.</p>
          <p className={styles.description}>From strategy and branding to advertising, websites, social media and lead generation—we help businesses build a strong digital presence and achieve measurable growth.</p>
          <div className={styles.actions}>
            <button type="button" onClick={() => setOpen(true)}>Build My Growth Plan <ArrowRight size={17} /></button>
            <a href="#services">Explore Our Services</a>
          </div>
          <div className={styles.trust}>
            <span><i style={tone("#ff852b")}><Target /></i>Strategy<br />Focused</span>
            <span><i style={tone("#219bff")}><BarChart3 /></i>Data-Driven<br />Approach</span>
            <span><i style={tone("#b15cff")}><Users /></i>Dedicated<br />Support</span>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.system} aria-label="360 degree marketing growth system: strategy, branding, website, content, ads, leads and growth">
            <div className={styles.dome} />
            <svg className={styles.connections} viewBox="0 0 660 260" fill="none" aria-hidden="true"><path d="M35 215 Q330 -125 625 215" stroke="#a4b9ff" strokeWidth="1.5" strokeDasharray="4 5" /></svg>
            {stages.map(({ label, icon: Icon, color, top }, i) => (
              <button
                key={label}
                type="button"
                className={styles.stage}
                style={{ ...tone(color), left: `${5 + i * 15}%`, top }}
                aria-pressed={activeStage === label}
                onClick={() => setActiveStage(current => current === label ? null : label)}
              >
                <span><Icon aria-hidden="true" /></span><strong>{label}</strong>
              </button>
            ))}
            <div className={styles.systemTitle}>
              <div className={styles.cycleMark}>
                <svg viewBox="0 0 132 96" fill="none" aria-hidden="true">
                  <path d="M18 68 A44 37 0 0 1 105 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="m96 24 10 2-2-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M114 43 A44 37 0 0 1 27 76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 7" opacity=".65" />
                  <path d="m25 83 1-10 9 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <strong>360°</strong>
              </div>
              <p>MARKETING GROWTH SYSTEM</p>
            </div>
          </div>
          <div className={styles.picker}>
            <p className={styles.eyebrow}>START YOUR GROWTH JOURNEY</p>
            <h3>Choose what your business needs</h3>
            <div className={styles.choices}>
              {choices.map(({ title, copy, icon: Icon, color, href }) => (
                <Link key={title} href={href} className={styles.choice} style={tone(color)}>
                  <span className={styles.choiceIcon}><Icon /></span>
                  <h4>{title}</h4><p>{copy}</p><span className={styles.roundArrow}><ArrowRight size={21} /></span>
                </Link>
              ))}
            </div>
            <div className={styles.team}><InfinityIcon /><span>One team. Every digital growth solution.</span></div>
          </div>
        </div>

        <aside className={styles.dashboard} aria-label="Illustrative marketing performance">
          <div className={styles.chartCard}>
            <div className={styles.cardHeader}><h3>BUSINESS GROWTH TRACKER</h3><label className={styles.filter}><select aria-label="Growth tracker time range" value={range} onChange={event => setRange(event.target.value)}><option value="6">Last 6 Months</option><option value="3">Last 3 Months</option></select><ChevronDown size={12} aria-hidden="true" /></label></div>
            <p className={styles.visibility}>Visibility</p><strong className={styles.growth} aria-live="polite">{range === "6" ? "+42%" : "+24%"}</strong>
            <svg key={range} className={styles.chart} viewBox="0 0 300 120" role="img" aria-label={range === "6" ? "Example visibility growth of 42 percent from January to June" : "Example visibility growth of 24 percent from April to June"}>
              <defs><linearGradient id="growth-hero-chart-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#00bd77" stopOpacity=".35" /><stop offset="1" stopColor="#00bd77" stopOpacity="0" /></linearGradient></defs>
              <path d={`${chartPath} V120 H10Z`} fill="url(#growth-hero-chart-fill)" />
              <path d={chartPath} stroke="#00b976" strokeWidth="3" fill="none" />
              {chartPoints.map(([cx,cy]) => <circle key={cx} cx={cx} cy={cy} r="3" fill="#71e6b5" stroke="#00b976" strokeWidth="2" />)}
              <circle cx="279" cy={finalY} r="8" fill="white" stroke="#b2f0d6" strokeWidth="3" /><circle cx="279" cy={finalY} r="4" fill="#00bd77" />
            </svg>
            <div className={styles.months}>{(range === "6" ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] : ["Apr", "May", "Jun"]).map(month => <span key={month}>{month}</span>)}</div>
          </div>
          <div className={styles.chartCard}>
            <div className={styles.cardHeader}><h3>MARKETING PERFORMANCE</h3><label className={styles.filter}><select aria-label="Marketing performance period" value={period} onChange={event => setPeriod(event.target.value)}><option value="current">This Month</option><option value="previous">Last Month</option></select><ChevronDown size={12} aria-hidden="true" /></label></div>
            {performance.map(({ label, value: currentValue, icon: Icon, color }, index) => {
              const value = period === "current" ? currentValue : [30, 38, 32][index];
              return (
              <div key={label} className={styles.performance} style={tone(color)}><span className={styles.metricIcon}><Icon size={22} /></span><div><p><strong>{label}</strong><b>{value}%</b></p><div className={styles.track}><span style={{ width: `${value}%` }} /></div></div></div>
            ); })}
          </div>
          <p className={styles.example}>Illustrative performance data</p>
        </aside>
      </div>
      <div className={styles.benefits}>{benefits.map(({ label, icon: Icon, color }) => <div key={label} className={benefit === label ? styles.activeBenefit : ""} style={tone(color)}><button type="button" aria-pressed={benefit === label} onClick={() => setBenefit(current => current === label ? null : label)}><Icon style={{ color }} aria-hidden="true" /><strong>{label}</strong></button></div>)}</div>
      <ConsultationModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

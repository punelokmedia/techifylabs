"use client";

import { useState, type CSSProperties } from "react";
import { ArrowRight, ArrowUp, BarChart3, FileText, Funnel, Layers, Pencil, Rocket, Search, Target, TrendingUp, Trophy, Users } from "lucide-react";
import ConsultationModal from "./ConsultationModel";
import styles from "./GrowthProcess.module.css";

const steps = [
  { title: "Discover", description: "We understand your business, audience and goals.", result: "Clear Direction", icon: Search, resultIcon: BarChart3, color: "#ff6509" },
  { title: "Strategize", description: "We create a clear roadmap for measurable growth.", result: "Focused Plan", icon: FileText, resultIcon: Target, color: "#0879ff" },
  { title: "Create", description: "Content, branding and campaigns built for your market.", result: "High-Quality Assets", icon: Pencil, resultIcon: Layers, color: "#8524ff" },
  { title: "Launch", description: "Reach the right audience across the right channels.", result: "More Visibility", icon: Rocket, resultIcon: Rocket, color: "#ff6509" },
  { title: "Optimise", description: "Track performance and improve what matters.", result: "Better Performance", icon: BarChart3, resultIcon: TrendingUp, color: "#0879ff" },
  { title: "Grow", description: "Turn attention into leads, sales and long-term growth.", result: "Sustainable Growth", icon: TrendingUp, resultIcon: Trophy, color: "#8524ff" },
];
const metrics = [
  { label: "Reach", value: "125K+", change: "+68%", icon: Users, color: "#29d3aa" },
  { label: "Qualified Leads", value: "4.8K+", change: "+52%", icon: Funnel, color: "#40a4ff" },
  { label: "Conversions", value: "892+", change: "+43%", icon: BarChart3, color: "#b581ff" },
];
const tone = (color: string) => ({ "--tone": color }) as CSSProperties;

export default function GrowthProcess() {
  const [open, setOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="growth-process-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>OUR PROCESS</p>
          <h2 id="growth-process-title">How We Grow Your Business</h2>
          <p className={styles.subtitle}>A complete 360° marketing process built around your goals.</p>
        </header>
        <ol className={styles.steps}>
          {steps.map(({ title, description, result, icon: Icon, resultIcon: ResultIcon, color }, index) => (
            <li key={title} className={`${styles.step} ${selectedStep === index ? styles.selected : ""}`} style={tone(color)}>
              <button
                type="button"
                className={styles.stepButton}
                aria-label={`Highlight step ${index + 1}: ${title}`}
                aria-pressed={selectedStep === index}
                onClick={() => setSelectedStep(current => current === index ? null : index)}
              />
              <span className={styles.stepIcon}><Icon aria-hidden="true" /></span>
              <h3><span>{String(index + 1).padStart(2, "0")}</span>{title}</h3>
              <p>{description}</p>
              <div className={styles.result}><ResultIcon size={19} aria-hidden="true" /><span>{result}</span></div>
            </li>
          ))}
        </ol>
        <div className={styles.dashboard}>
          <div className={styles.dashboardContent}>
            <h3>YOUR GROWTH DASHBOARD</h3>
            <div className={styles.dashboardRow}>
              <div className={styles.metrics}>
                {metrics.map(({ label, value, change, icon: Icon, color }) => (
                  <div key={label} className={styles.metric} style={tone(color)}>
                    <span className={styles.metricIcon}><Icon aria-hidden="true" /></span>
                    <div className={styles.metricText}><p>{label}</p><strong>{value}</strong></div>
                    <div className={styles.sparkline}>
                      <span><ArrowUp size={14} aria-hidden="true" />{change}</span>
                      <div className={styles.bars} aria-hidden="true">{[16, 29, 39, 53, 50, 61, 73, 95].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.cta}>
                <button type="button" onClick={() => setOpen(true)}>Start Your Growth Plan <ArrowRight size={20} aria-hidden="true" /></button>
                <p>Strategy • Creativity • Results</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.note}>Illustrative dashboard metrics.</p>
      </div>
      <ConsultationModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}

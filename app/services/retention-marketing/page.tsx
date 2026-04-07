import ServicePageLayout, { ServicePageData } from "@/app/components/Servicepagelayout";

// ─── Icons ────────────────────────────────────────────────────────────────────

const AutomationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const SegmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 3v9l6 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 11.5a8.5 8.5 0 01-12.4 7.6L3 21l1.9-4.6A8.5 8.5 0 1120 11.5z"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 10.5c.5 1 1.5 2.5 3 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const FlowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.7" />
    <rect x="9" y="10" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.7" />
    <rect x="16" y="17" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 5h3M15 12h2M12 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DelivIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ReportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 15l3-3 3 3 4-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Page data ────────────────────────────────────────────────────────────────

const retentionPageData: ServicePageData = {
  breadcrumb: "Retention Marketing",
  heroTag: "Retention Marketing",
  heroTitle: "Turn Customers into",
  heroHighlight: "Loyal Repeat Buyers",
  heroSubtitle:
    "Techeasify helps businesses retain customers and increase lifetime value through strategic email, WhatsApp, and SMS campaigns — fully automated, personally relevant, and measurable.",
  heroCta: "Get Free Consultation",
  accentColor: "violet",
  stats: [
    { value: "40%", label: "Avg. increase in repeat purchase rate" },
    { value: "6X", label: "ROI vs new customer acquisition" },
    { value: "35%", label: "Avg. email open rate for our clients" },
    { value: "100%", label: "Owned audience — no algorithm dependency" },
  ],
  problemTitle: "Why most retention marketing fails",
  problems: [
    "Lists are unclean — bad emails and low-intent leads drag down delivery.",
    "No automation, so follow-up is manual and inconsistent.",
    "Messages sound generic and get ignored or marked as spam.",
    "Poor deliverability — emails land in promotions or junk.",
    "No tracking — teams don't know which campaigns are driving revenue.",
  ],
  whyTitle: "Why Choose Techeasify for Retention Marketing?",
  whyPoints: [
    "We plan your full email strategy, not just one-off sends.",
    "We set up automations that run 24/7 without your team's effort.",
    "Every campaign is tested — subject lines, CTAs, and timing.",
    "Clear revenue attribution — you see exactly what each campaign earns.",
  ],
  servicesTitle: "Our Retention Marketing Services",
  services: [
    {
      title: "Email Campaign Management",
      description:
        "Weekly or bi-weekly campaigns designed, written, and sent on your behalf with A/B testing built in.",
      icon: <DelivIcon />,
    },
    {
      title: "Marketing Automation & Flows",
      description:
        "Welcome series, abandoned cart, post-purchase, win-back — automated sequences that drive revenue 24/7.",
      icon: <AutomationIcon />,
    },
    {
      title: "Audience Segmentation",
      description:
        "Separate your list by behaviour, purchase history, and intent so every message feels relevant.",
      icon: <SegmentIcon />,
    },
    {
      title: "WhatsApp & SMS Marketing",
      description:
        "High open-rate channels for flash sales, order updates, and re-engagement campaigns.",
      icon: <WhatsAppIcon />,
    },
    {
      title: "Customer Journey Mapping",
      description:
        "We map every touchpoint from first purchase to loyal advocate and build campaigns for each stage.",
      icon: <FlowIcon />,
    },
    {
      title: "Performance Reporting",
      description:
        "Open rates, click rates, revenue per email — plain English reporting with clear next steps.",
      icon: <ReportIcon />,
    },
  ],
  processTitle: "How We Build Your Retention Engine",
  process: [
    {
      step: "01",
      title: "Audit & List Health Check",
      description:
        "We clean your list, check deliverability, and assess your current open and click rates.",
    },
    {
      step: "02",
      title: "Strategy & Flow Planning",
      description:
        "Map out your customer journey and define which automations and campaigns will drive the most revenue.",
    },
    {
      step: "03",
      title: "Setup & Integration",
      description:
        "We configure your ESP (Klaviyo, Mailchimp, etc.), connect it to your store, and build the automation flows.",
    },
    {
      step: "04",
      title: "Campaign Launch",
      description:
        "Go live with designed, written, and scheduled campaigns — tested before every send.",
    },
    {
      step: "05",
      title: "Optimise & Scale",
      description:
        "Monthly reporting and continuous improvement of subject lines, timing, and segment targeting.",
    },
  ],
  ctaBanner: "Your customers are ready to buy again. You just need the right message at the right time.",
  ctaButtonText: "Start Retention Marketing",
};

export default function RetentionMarketingPage() {
  return <ServicePageLayout data={retentionPageData} />;
}
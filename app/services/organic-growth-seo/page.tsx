import ServicePageLayout, { ServicePageData } from "@/app/components/Servicepagelayout";

// ─── Icons ────────────────────────────────────────────────────────────────────

const LocalSEOIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const TechSEOIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 10l2 2-2 2M13 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10 13a5 5 0 007.5.5l2-2a5 5 0 00-7-7l-1 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 11a5 5 0 00-7.5-.5l-2 2a5 5 0 007 7l1-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const EcomSEOIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M3 6h18" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─── Page data ────────────────────────────────────────────────────────────────

const seoPageData: ServicePageData = {
  breadcrumb: "Organic Growth (SEO)",
  heroTag: "Organic Growth",
  heroTitle: "Rank #1 on Google with",
  heroHighlight: "Expert SEO",
  heroTitleAfter: "Services in India",
  heroSubtitle:
    "Techeasify helps businesses grow with steady, long-term search traffic that turns into calls, leads, and sales. White-hat methods. Clear deliverables. Measurable results.",
  heroCta: "Book Free Strategy Call",
  accentColor: "violet",
  stats: [
    { value: "3.5X", label: "Avg. organic traffic growth in 6 months" },
    { value: "47+", label: "Active SEO clients across India" },
    { value: "85%", label: "Clients ranking on Page 1 within 90 days" },
    { value: "100%", label: "White-hat SEO — zero penalty risk" },
  ],
  problemTitle: "When SEO is not working, these are usually the reasons",
  problems: [
    "Pages targeting the wrong keywords, so traffic does not convert.",
    "Technical errors that block crawling or indexing.",
    "Thin or outdated content that does not match search intent.",
    "Slow websites that lose users before they contact you.",
    'Weak local signals, so competitors win "near me" searches.',
  ],
  whyTitle: "Why Choose Techeasify's SEO Services?",
  whyPoints: [
    "Experience you can see in the work — clean structure, clear checklists, steady execution.",
    "Expertise across SEO and content — we match search intent and improve page quality.",
    "Transparent reporting — simple updates and next actions, not confusing dashboards.",
    "Full ownership — your website, content, and accounts stay in your control.",
  ],
  servicesTitle: "Our Advanced SEO Services Include",
  services: [
    {
      title: "Local SEO & Google Maps",
      description:
        'Dominate "near me" searches and Google Maps results so local customers find you first.',
      icon: <LocalSEOIcon />,
    },
    {
      title: "Technical SEO Audits",
      description:
        "Fix crawl errors, improve Core Web Vitals, and ensure Google can index every important page.",
      icon: <TechSEOIcon />,
    },
    {
      title: "Content Marketing & Blogging",
      description:
        "Strategy-led content that targets high-intent keywords and builds topical authority.",
      icon: <ContentIcon />,
    },
    {
      title: "Guest Posting & Outreach",
      description:
        "High-quality backlinks from relevant, authoritative sites to strengthen your domain.",
      icon: <LinkIcon />,
    },
    {
      title: "E-Commerce SEO",
      description:
        "Product and category page optimisation for better visibility and higher conversions.",
      icon: <EcomSEOIcon />,
    },
    {
      title: "SEO Reporting & Analytics",
      description:
        "Clear monthly reports showing rankings, traffic, and the actions driving results.",
      icon: <AnalyticsIcon />,
    },
  ],
  processTitle: "How We Deliver Results",
  process: [
    {
      step: "01",
      title: "Discovery & Audit",
      description:
        "We audit your site, analyse competitors, and define target keywords aligned to your revenue goals.",
    },
    {
      step: "02",
      title: "Strategy & Roadmap",
      description:
        "A 90-day priority roadmap covering technical fixes, content gaps, and link-building targets.",
    },
    {
      step: "03",
      title: "On-Page & Technical Execution",
      description:
        "We fix site structure, improve meta data, speed, and internal linking across your key pages.",
    },
    {
      step: "04",
      title: "Content & Link Building",
      description:
        "We produce optimised content and earn backlinks from quality sites in your niche.",
    },
    {
      step: "05",
      title: "Track, Report & Improve",
      description:
        "Monthly reporting on rankings, traffic, and leads with clear next actions every cycle.",
    },
  ],
  ctaBanner: "Ranking on Page 2? You're losing traffic every day. Let's fix it.",
  ctaButtonText: "Fix My SEO Today",
};

export default function SEOPage() {
  return <ServicePageLayout data={seoPageData} />;
}
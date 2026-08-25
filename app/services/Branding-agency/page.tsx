import ServicePageLayout, { ServicePageData } from "@/app/components/Servicepagelayout";

// ─── Icons ────────────────────────────────────────────────────────────────────

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3l3 6h6l-5 4 2 6-6-4-6 4 2-6L3 9h6z"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const GuidelineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 8h10M7 12h7M7 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const PackagingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 3v18M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2 12h4M18 12h4M12 2v4M12 18v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const TypographyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 7V5h16v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 5v14M15 11H9M15 5v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const CollateralIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M6 8h6M6 12h6M6 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M18 2v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2h4l2 4v12a2 2 0 01-2 2h-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

// ─── Page data ────────────────────────────────────────────────────────────────

const brandingPageData: ServicePageData = {
  breadcrumb: "Branding Agency India",
  heroTag: "Branding Agency India",
  heroTitle: "Build a Brand People",
  heroHighlight: "Remember & Trust",
  heroSubtitle:
    "Techeasify is a branding agency that helps businesses look professional, sound clear, and stand out in crowded markets. From logo systems to brand strategy, we create identities that last.",
  heroCta: "Get Free Consultation",
  accentColor: "violet",
  stats: [
    { value: "50+", label: "Brands built and refreshed across India" },
    { value: "4.9★", label: "Average client satisfaction rating" },
    { value: "14", label: "Day avg. turnaround for brand identity" },
    { value: "100%", label: "Custom design - no templates" },
  ],
  problemTitle: "Why weak branding costs you customers",
  problems: [
    "No visual consistency across website, social, and ads - looks unprofessional.",
    "Brand messaging is unclear, so customers don't understand what you offer.",
    "Logo and colours don't reflect your price point or audience.",
    "No brand guidelines, so every designer creates something different.",
    "Hard to scale ads effectively without a clear, ownable brand identity.",
  ],
  whyTitle: "Why Choose Techeasify as Your Branding Agency?",
  whyPoints: [
    "We start with strategy - understanding your audience, competitors, and positioning.",
    "100% custom design - no stock logos, no recycled templates.",
    "Full brand guidelines delivered so every touchpoint stays consistent.",
    "We support startups and established businesses with equal care.",
  ],
  servicesTitle: "Our Branding Services",
  services: [
    {
      title: "Logo & Visual Identity",
      description:
        "Custom logo design, colour palette, typography, and icon system that reflects your brand.",
      icon: <LogoIcon />,
    },
    {
      title: "Brand Strategy & Positioning",
      description:
        "Define your mission, vision, audience, and the unique position your brand owns in the market.",
      icon: <StrategyIcon />,
    },
    {
      title: "Brand Guidelines Document",
      description:
        "A complete guide covering logo usage, colours, typography, tone of voice, and do's & don'ts.",
      icon: <GuidelineIcon />,
    },
    {
      title: "Tone of Voice & Messaging",
      description:
        "Brand copy framework - tagline, value proposition, and messaging pillars for all channels.",
      icon: <TypographyIcon />,
    },
    {
      title: "Packaging & Print Design",
      description:
        "Product packaging, business cards, brochures, and offline collateral designed on-brand.",
      icon: <PackagingIcon />,
    },
    {
      title: "Brand Collateral & Templates",
      description:
        "Social media templates, pitch decks, email signatures, and presentation kits.",
      icon: <CollateralIcon />,
    },
  ],
  processTitle: "How We Build Your Brand",
  process: [
    {
      step: "01",
      title: "Discovery Workshop",
      description:
        "We explore your business goals, target audience, competitors, and brand personality.",
    },
    {
      step: "02",
      title: "Research & Positioning",
      description:
        "Market research, competitor audit, and positioning framework to define what makes you different.",
    },
    {
      step: "03",
      title: "Visual Identity Design",
      description:
        "Logo concepts, colour palette, and typography exploration - presented with rationale, not just options.",
    },
    {
      step: "04",
      title: "Refine & Finalise",
      description:
        "Two rounds of revisions based on your feedback to perfect every element of the identity.",
    },
    {
      step: "05",
      title: "Brand Guidelines Handover",
      description:
        "Full guidelines document + all source files handed over so your brand stays consistent everywhere.",
    },
  ],
  ctaBanner: "A strong brand makes every rupee you spend on marketing work harder.",
  ctaButtonText: "Build My Brand",
};

export default function BrandingAgencyPage() {
  return <ServicePageLayout data={brandingPageData} />;
}
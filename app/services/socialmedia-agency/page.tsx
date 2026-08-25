import ServicePageLayout, { ServicePageData } from "@/app/components/Servicepagelayout";

// ─── Icons ────────────────────────────────────────────────────────────────────

const StrategyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ReelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 8l6 4-6 4V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const CommunityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const InfluencerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.5l-4.9 2.7.9-5.5L4 7.8 9.5 7z"
      stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const AdsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2 9h20" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 14h4M15 14h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ReportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 20V10M12 20V4M18 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─── Page data ────────────────────────────────────────────────────────────────

const socialPageData: ServicePageData = {
  breadcrumb: "Social Media Agency India",
  heroTag: "Social Media Agency India",
  heroTitle: "Grow Your Brand on",
  heroHighlight: "Social Media",
  heroTitleAfter: "Across India",
  heroSubtitle:
    "Techeasify is a social media agency India businesses trust for consistent content, scroll-stopping creatives, and community growth across Instagram, Facebook, LinkedIn, and YouTube.",
  heroCta: "Get Free Consultation",
  accentColor: "violet",
  stats: [
    { value: "2.8X", label: "Avg. follower growth in 90 days" },
    { value: "47+", label: "Brands managed across India" },
    { value: "5X", label: "Avg. engagement uplift vs before" },
    { value: "100%", label: "In-house design & copy team" },
  ],
  problemTitle: "Why most brands struggle with social media",
  problems: [
    "Posting without a strategy - random content that doesn't build an audience.",
    "Inconsistent visual identity that confuses potential customers.",
    "No content calendar, leading to gaps and last-minute posts.",
    "Ignoring comments and DMs, which kills community trust.",
    "Running ads without organic credibility, wasting ad spend.",
  ],
  whyTitle: "Why Choose Techeasify as Your Social Media Agency?",
  whyPoints: [
    "Platform-specific strategy - what works on Instagram differs from LinkedIn.",
    "End-to-end execution: strategy, design, captions, posting, and reporting.",
    "In-house creative team for Reels, carousels, Stories, and static posts.",
    "Transparent monthly reports with reach, engagement, and growth metrics.",
  ],
  servicesTitle: "Our Social Media Marketing Services",
  services: [
    {
      title: "Social Media Strategy",
      description:
        "Platform-specific content plan aligned to your brand goals, audience, and growth targets.",
      icon: <StrategyIcon />,
    },
    {
      title: "Reels, Carousels & Content Creation",
      description:
        "Thumb-stopping short-form video, carousels, Stories, and static posts produced in-house.",
      icon: <ReelIcon />,
    },
    {
      title: "Community Management",
      description:
        "Responding to comments, DMs, and mentions to build trust and convert followers into customers.",
      icon: <CommunityIcon />,
    },
    {
      title: "Influencer Collaboration",
      description:
        "Identifying and managing influencer partnerships that match your brand and target audience.",
      icon: <InfluencerIcon />,
    },
    {
      title: "Social Media Advertising",
      description:
        "Paid campaigns on Meta and LinkedIn to amplify organic reach and drive measurable conversions.",
      icon: <AdsIcon />,
    },
    {
      title: "Monthly Analytics Report",
      description:
        "Reach, impressions, engagement, follower growth, and top-performing content analysis.",
      icon: <ReportIcon />,
    },
  ],
  processTitle: "How We Manage Your Social Presence",
  process: [
    {
      step: "01",
      title: "Brand & Audience Deep-Dive",
      description:
        "We study your brand, competitors, and audience to define the content direction and tone of voice.",
    },
    {
      step: "02",
      title: "Content Calendar Planning",
      description:
        "A monthly calendar with content types, themes, and posting frequency - approved before execution.",
    },
    {
      step: "03",
      title: "Design & Copy Production",
      description:
        "Our in-house team creates all visuals and captions - Reels, carousels, Stories, and static posts.",
    },
    {
      step: "04",
      title: "Schedule & Publish",
      description:
        "Content is scheduled at optimal posting times for maximum organic reach on each platform.",
    },
    {
      step: "05",
      title: "Engage, Report & Refine",
      description:
        "We manage engagement, deliver monthly analytics, and improve the strategy each cycle.",
    },
  ],
  ctaBanner: "Your audience is on social media right now. Are they seeing your brand?",
  ctaButtonText: "Grow My Social Presence",
};

export default function SocialMediaPage() {
  return <ServicePageLayout data={socialPageData} />;
}
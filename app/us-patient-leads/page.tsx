import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, Building2, CalendarDays, Check, ClipboardCheck, HeartPulse, Mail, Phone, Scissors, SlidersHorizontal, UserRound } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/app/lib/contact";
import BookingForm from "./BookingForm";
import s from "./landing.module.css";

export const metadata: Metadata = {
  title: "Patient Leads & Booked Appointments for IVF & Hair Clinics | Techify Labs",
  description: "Connect your IVF or hair transplant clinic with patient enquiries. Discuss your target states, lead criteria, and delivery preferences with Techify Labs.",
};

const faqs = [
  [
    "Can we choose treatments and locations?",
    "Yes. Target IVF, fertility, or hair restoration patients in your service areas, including multiple clinic locations."
  ],
  [
    "Do you offer booked appointments?",
    "Yes. We agree on a booking process with your clinic. Appointment outcomes are not guaranteed."
  ],
  [
    "How are leads delivered?",
    "Through an agreed method that fits your team’s workflow."
  ],
  [
    "How much does it cost?",
    "Pricing depends on your treatments, locations, and monthly volume. We discuss pricing and pilot options on the call."
  ],
  [
    "What happens after I request a meeting?",
    "We confirm availability and email your Google Meet invitation. The consultation is free of obligation."
  ]
];

function Brand() { return <Link href="/" className={s.brand} aria-label="Techify Labs home"><Image src="/techify-labs-logo.png" alt="Techify Labs" width={428} height={180} className={s.brandImage} /></Link>; }
function BookLink({ children = "Book a Google Meet" }: { children?: React.ReactNode }) { return <a className={s.button} href="#book"><CalendarDays size={19} />{children}<ArrowRight size={18} /></a>; }

export default function PatientLeadsPage() {
  return <div className={s.page}>
    <header className={s.header}><div className={s.nav}><Brand /><nav aria-label="Landing page navigation"><a href="#ivf">For IVF Clinics</a><a href="#hair">For Hair Clinics</a><a href="#how-it-works">How It Works</a><a href="#faq">FAQ</a></nav><BookLink>Book a Strategy Call</BookLink></div></header>
    <main>
      <section className={s.hero}>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>Patient Leads & Appointments</p>
            <h1>More Patient Enquiries for <span>IVF & Hair Clinics</span></h1>
            <p className={s.intro}>Connect with patients exploring treatment. We help your clinic generate enquiries and arrange consultations.</p>
            <div className={s.quickLinks}><a href="#ivf"><span className={s.orangeIcon}><Baby /></span><strong>IVF & Fertility<br />Patient Leads</strong><ArrowRight size={18} /></a><a href="#hair"><span className={s.blueIcon}><Scissors /></span><strong>Hair Transplant<br />Patient Leads</strong><ArrowRight size={18} /></a></div>
            <ul className={s.checkList}>{["Target your treatments and locations", "Receive patient leads", "Get appointment booking support"].map(text => <li key={text}><Check />{text}</li>)}</ul>
            <div className={s.heroPhoto}><Image src="/images/us-patient-leads/clinic-hero.png" alt="Bright consultation room with a clinician and patient" fill sizes="(max-width: 760px) 100vw, 55vw" /><div /><p>More patients.<br /><span>More possibilities.</span></p></div>
          </div>
          <BookingForm bookingUrl={process.env.GOOGLE_MEET_BOOKING_URL} />
        </div>
      </section>
      <section className={`${s.section} ${s.tinted}`}>
        <div className={s.container}><div className={s.sectionHeading}><h2>Patients for Your Specialty</h2></div>
          <div className={s.serviceGrid}>
            <article id="ivf" className={s.service}><div className={s.servicePhoto}><Image src="/images/us-patient-leads/ivf-fertility-consultation.png" alt="Couple discussing fertility care with a clinician" fill sizes="160px" /></div><div><span className={s.orangeIcon}><HeartPulse /></span><h3>IVF & Fertility Patient Leads</h3><p>Reach individuals and couples exploring fertility care.</p></div></article>
            <article id="hair" className={s.service}><div className={s.servicePhoto}><Image src="/images/us-patient-leads/hair-restoration-consultation.png" alt="Hair restoration consultation with a clinician" fill sizes="160px" /></div><div><span className={s.blueIcon}><Scissors /></span><h3>Hair Transplant Patient Leads</h3><p>Reach patients exploring hair restoration, including FUE and FUT.</p></div></article>
          </div>
        </div>
      </section>
      <section className={s.section}><div className={s.container}><div className={s.sectionHeading}><h2>From Enquiry to Appointment</h2></div><div className={s.serviceGrid}>
<article className={s.service}><div><span className={s.blueIcon}><UserRound /></span><h3>Patient Leads</h3><p>Enquiries matched to your treatments, locations, and patient criteria.</p></div></article>
<article className={s.service}><div><span className={s.orangeIcon}><CalendarDays /></span><h3>Booked Appointments</h3><p>Help interested patients schedule a consultation through a process agreed with your clinic.</p></div></article>
</div><p className={s.resultsNote}>Results vary by clinic, market, and campaign. We do not guarantee patient volume, appointments, or revenue.</p></div></section>
      <section id="how-it-works" className={s.section}><div className={s.container}><div className={s.sectionHeading}><h2>How It Works</h2></div><div className={s.steps}>
        {[{ Icon: Building2, title: "Share Your Goals", text: "Tell us your treatments, locations, and monthly needs." }, { Icon: SlidersHorizontal, title: "Agree on a Plan", text: "Set patient criteria, pricing, and delivery preferences." }, { Icon: ClipboardCheck, title: "Connect With Patients", text: "Receive enquiries and booking support. Your team takes care of consultations." }].map(({ Icon, title, text }, i) => <article key={title}><span className={s.stepNumber}>{i + 1}</span><div><span className={s.blueIcon}><Icon /></span><h3>{title}</h3><p>{text}</p></div>{i < 2 && <ArrowRight className={s.stepArrow} />}</article>)}
      </div></div></section>
      <section id="faq" className={s.section}><div className={s.container}><div className={s.faqHeading}><div><h2>Frequently asked questions</h2></div><p>Still have questions?<br /><a href="mailto:info@techifylabs.in">Get in touch with our team →</a></p></div><div className={s.faqs}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></div></section>
      <section className={s.cta}><div className={`${s.container} ${s.ctaInner}`}><div><h2>Ready to Grow Your Clinic?</h2><p>Let’s discuss your patient goals, pricing, and next steps.</p></div><div><BookLink /><p>A no-obligation consultation.</p></div></div></section>
    </main>
    <footer className={s.footer}><div className={s.container}><div className={s.footerTop}><Brand /><a href="mailto:info@techifylabs.in"><Mail size={17} />info@techifylabs.in</a><a href={PHONE_TEL}><Phone size={17} />{PHONE_DISPLAY}</a><Link href="/contact">Contact us</Link></div><div className={s.footerBottom}><p>© {new Date().getFullYear()} Techify Labs. All rights reserved.</p><p>Business-to-business services for IVF and hair transplant clinics. Not a patient-facing website.</p></div></div></footer>
  </div>;
}

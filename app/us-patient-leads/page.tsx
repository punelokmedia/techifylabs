import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, BarChart3, Building2, CalendarDays, Check, ClipboardCheck, HeartPulse, Mail, Phone, Scissors, SlidersHorizontal, UserRound } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/app/lib/contact";
import BookingForm from "./BookingForm";
import s from "./landing.module.css";

export const metadata: Metadata = {
  title: "U.S. Patient Leads for IVF & Hair Clinics | Techify Labs",
  description: "Connect your IVF or hair transplant clinic with U.S. patient enquiries. Discuss your target states, lead criteria, and delivery preferences with Techify Labs.",
};

const faqs = [
  ["What information do you need from our clinic?", "We’ll ask for your clinic details, service lines (IVF and/or hair transplant), U.S. states you want to target, and your preferred lead criteria. Specific details will be discussed on the call."],
  ["Can we focus on IVF or hair transplant?", "Yes. We can generate enquiries for IVF & fertility, hair transplant, or both, based on your clinic’s focus. We’ll discuss the best approach for your goals."],
  ["Which U.S. states can we discuss?", "We run U.S.-focused campaigns and can discuss the states you’re interested in during the meeting."],
  ["What happens after I request a meeting?", "Our team will confirm availability and share the Google Meet details by email. On the call, we’ll learn about your clinic and discuss lead criteria, pricing, and next steps."],
  ["How are leads delivered?", "Enquiry details are shared with your clinic through an agreed method, such as email or CRM integration. Delivery process and format will be confirmed on the call."],
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
            <p className={s.eyebrow}> patient leads for IVF & hair transplant clinics</p>
            <h1>Get More Patient Leads for <span>Your IVF or Hair Transplant Clinic</span></h1>
            <p className={s.intro}>Techify Labs helps IVF and hair transplant clinics connect with patient enquiries generated through targeted digital campaigns across the United States.</p>
            <div className={s.quickLinks}><a href="#ivf"><span className={s.orangeIcon}><Baby /></span><strong>IVF & Fertility<br />Patient Leads</strong><ArrowRight size={18} /></a><a href="#hair"><span className={s.blueIcon}><Scissors /></span><strong>Hair Transplant<br />Patient Leads</strong><ArrowRight size={18} /></a></div>
            <ul className={s.checkList}>{["U.S.-focused campaigns", "Enquiry details shared with your clinic", "Discuss lead criteria and delivery on a call"].map(text => <li key={text}><Check />{text}</li>)}</ul>
            <div className={s.heroPhoto}><Image src="/images/us-patient-leads/clinic-hero.png" alt="Bright consultation room with a clinician and patient" fill sizes="(max-width: 760px) 100vw, 55vw" /><div /><p>More patients.<br /><span>More possibilities.</span></p></div>
          </div>
          <BookingForm bookingUrl={process.env.GOOGLE_MEET_BOOKING_URL} />
        </div>
      </section>
      <section className={`${s.section} ${s.tinted}`}>
        <div className={s.container}><div className={s.sectionHeading}><p className={s.eyebrow}>U.S. patient enquiries</p><h2>Patient enquiries for the services you provide</h2><p>We generate patient enquiries through targeted digital campaigns in the United States and share the details with your clinic,<br className={s.desktopBreak} /> so your team can follow up and discuss care with interested individuals.</p></div>
          <div className={s.serviceGrid}>
            <article id="ivf" className={s.service}><div className={s.servicePhoto}><Image src="/images/us-patient-leads/ivf-fertility-consultation.png" alt="Couple discussing fertility care with a clinician" fill sizes="160px" /></div><div><span className={s.orangeIcon}><HeartPulse /></span><h3>IVF & Fertility Patient Leads</h3><p>Connect with individuals and couples in the U.S. who are exploring fertility treatment options and enquiring about care.</p></div></article>
            <article id="hair" className={s.service}><div className={s.servicePhoto}><Image src="/images/us-patient-leads/hair-restoration-consultation.png" alt="Hair restoration consultation with a clinician" fill sizes="160px" /></div><div><span className={s.blueIcon}><Scissors /></span><h3>Hair Transplant Patient Leads</h3><p>Receive enquiries from U.S. individuals interested in hair restoration and exploring treatment options at your clinic.</p></div></article>
          </div>
        </div>
      </section>
      <section id="how-it-works" className={s.section}><div className={s.container}><div className={s.sectionHeading}><p className={s.eyebrow}>A simple process</p><h2>How it works</h2><p>We make it easy for clinics to explore and start receiving U.S. patient enquiries.</p></div><div className={s.steps}>
        {[{ Icon: Building2, title: "Tell us your clinic and service area", text: "Share your clinic details, service lines and the U.S. states you want to target." }, { Icon: SlidersHorizontal, title: "Define lead criteria and delivery preferences", text: "Discuss your ideal patient profile, enquiry criteria and how you’d like to receive the leads." }, { Icon: ClipboardCheck, title: "Review the plan and discuss next steps", text: "We’ll walk you through the proposed approach, pricing and pilot options, and answer your questions." }].map(({ Icon, title, text }, i) => <article key={title}><span className={s.stepNumber}>{i + 1}</span><div><span className={s.blueIcon}><Icon /></span><h3>{title}</h3><p>{text}</p></div>{i < 2 && <ArrowRight className={s.stepArrow} />}</article>)}
      </div></div></section>
      <section className={`${s.section} ${s.tinted}`}><div className={`${s.container} ${s.discovery}`}><div><p className={s.eyebrow}>Sales discovery meeting</p><h2>What we’ll cover on the Google Meet</h2><p>This is a consultation with the Techify Labs team to understand your requirements and discuss how we can support your clinic.</p><ul className={s.checkList}>{["Target U.S. states and service lines", "Enquiry criteria and patient profiles", "Lead delivery process and response expectations", "Pricing and pilot options (details to be discussed on the call)"].map(text => <li key={text}><Check />{text}</li>)}</ul></div>
        <div className={s.workflow}><div className={s.workflowHeading}><span className={s.blueIcon}><BarChart3 /></span><div><h3>Illustrative lead workflow</h3><p>Example view of how enquiries move from a campaign to your clinic.<br />(Names and details are anonymised.)</p></div></div><div className={s.columns}>{["New enquiry", "Shared with clinic", "Follow-up"].map((title, col) => <div key={title} className={s.column}><h4>{title}</h4><p>{["From U.S. campaigns", "Enquiry details sent", "Your clinic’s team"][col]}</p>{[0, 1, 2].map(row => <div className={s.lead} key={row}><UserRound size={25} /><div><strong>Enquiry #{1048 - col * 3 - row}</strong><span>{[row === 1 ? "Hair transplant" : "IVF enquiry", "Shared", "In follow-up"][col]}</span><small>{col === 2 ? "—" : `${row * 10 + 2} mins ago`}</small></div></div>)}</div>)}</div></div>
      </div></section>
      <section id="faq" className={s.section}><div className={s.container}><div className={s.faqHeading}><div><p className={s.eyebrow}>For clinic owners & practice managers</p><h2>Frequently asked questions</h2></div><p>Still have questions?<br /><a href="mailto:info@techifylabs.in">Get in touch with our team →</a></p></div><div className={s.faqs}>{faqs.map(([question, answer]) => <details key={question} open><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></div></section>
      <section className={s.cta}><div className={`${s.container} ${s.ctaInner}`}><div><p className={s.eyebrow}>U.S. patient leads. Real conversations.</p><h2>Let’s discuss your clinic’s<br />lead requirements.</h2><p>Book a Google Meet with our team to explore how Techify Labs can<br className={s.desktopBreak} /> support your patient acquisition goals in the United States.</p></div><div><BookLink /><p>A friendly, no-obligation consultation<br />with the Techify Labs team.</p></div></div></section>
    </main>
    <footer className={s.footer}><div className={s.container}><div className={s.footerTop}><Brand /><a href="mailto:info@techifylabs.in"><Mail size={17} />info@techifylabs.in</a><a href={PHONE_TEL}><Phone size={17} />{PHONE_DISPLAY}</a><Link href="/contact">Contact us</Link></div><div className={s.footerBottom}><p>© {new Date().getFullYear()} Techify Labs. All rights reserved.</p><p>Business-to-business services for IVF and hair transplant clinics. Not a patient-facing website.</p></div></div></footer>
  </div>;
}

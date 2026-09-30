import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Check, HeartPulse, Mail, Phone, Scissors, UserRound } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/app/lib/contact";
import BookingForm from "./BookingForm";
import s from "./landing.module.css";

export const metadata: Metadata = {
  title: "Patient Acquisition for IVF & Hair Transplant Clinics | Techify Labs",
  description: "Patient leads and booked appointment solutions for IVF, fertility, and hair restoration clinics across the U.S. Discuss treatments, locations, and monthly requirements.",
};

const faqs = [
  ["What types of clinics do you work with?", "IVF and fertility clinics and hair transplant and hair restoration clinics, from single-location practices to multi-location groups."],
  ["Can we focus only on IVF?", "Yes. Campaigns can focus exclusively on IVF and fertility treatments."],
  ["Can we focus only on hair transplant patients?", "Yes, including specific procedures such as FUE or FUT."],
  ["Can we target specific states or locations?", "Yes. Campaigns are structured around the states and service areas you want to serve. We confirm coverage on the discovery call."],
  ["How are patient enquiries delivered?", "Through a delivery method we agree on together, so it fits how your coordinators already work."],
  ["Can we choose the type of patient enquiries we want?", "Yes. We discuss treatment interest, location, and other patient criteria, then shape the campaign around them."],
  ["Do you provide booked appointments as well as patient leads?", "Yes. Along with patient leads, we offer a booked appointment solution. We walk through how it works for your clinic on the Google Meet. Appointment outcomes depend on the clinic, market, and campaign, and are not guaranteed."],
  ["How much does it cost?", "Pricing depends on your treatments, service areas, and monthly requirements. We review pricing and pilot options during the Google Meet."],
  ["What happens after I request a meeting?", "We confirm availability and share a Google Meet invitation. We use the call to learn about your clinic and discuss options, with no obligation."],
  ["Can you support multi-location clinics?", "Yes. Campaigns can be organized by location and treatment line, with requirements set for each site."],
  ["How quickly can we discuss starting a campaign?", "Request a time that suits you, and we will talk through next steps and timing."],
];

const steps = [
  ["Tell Us About Your Clinic", "Locations, specialties, treatments, and service areas."],
  ["Define Your Patient Criteria", "Treatment interest, location, criteria, and expected monthly volume."],
  ["Build Your Campaign", "Strategy is structured around your agreed requirements."],
  ["Receive Leads & Booked Appointments", "Delivered through the method you agree on."],
  ["Your Team Welcomes the Patient", "Your coordinators manage the conversation and the consultation."],
];
const discussion = ["Clinic locations", "Treatments and specialties", "Geographic coverage", "Ideal patient profile", "Patient enquiry criteria", "Expected monthly volume", "Delivery process", "Follow-up requirements", "Booked appointment process", "Pricing options", "Pilot campaign options"];
const specialties = [
  { id: "ivf", Icon: HeartPulse, title: "IVF & Fertility Patient Enquiries", description: "Connect with individuals and couples exploring fertility care and treatment options.", image: "ivf-fertility-consultation.png", alt: "Couple discussing fertility care with a clinician", treatments: ["IVF", "Fertility Consultation", "Fertility Evaluation", "Assisted Reproductive Care"], cta: "Discuss IVF Patient Enquiries" },
  { id: "hair", Icon: Scissors, title: "Hair Transplant Patient Enquiries", description: "Connect with prospective patients exploring hair-loss and hair-restoration treatment options.", image: "hair-restoration-consultation.png", alt: "Hair restoration consultation with a clinician", treatments: ["Hair Transplant", "Hair Restoration", "FUE", "FUT", "Hair Loss Consultation"], cta: "Discuss Hair Transplant Patient Enquiries" },
];

function Brand() {
  return <Link href="/" className={s.brand} aria-label="Techify Labs home"><Image src="/techify-labs-logo.png" alt="Techify Labs" width={428} height={180} className={s.brandImage} /></Link>;
}
function BookLink({ children = "Book a Google Meet" }: { children?: React.ReactNode }) {
  return <a className={s.button} href="#book"><CalendarDays size={18} />{children}<ArrowRight size={18} /></a>;
}

export default function PatientLeadsPage() {
  return <div className={s.page}>
    <header className={s.header}><div className={s.nav}><Brand /><nav aria-label="Landing page navigation"><a href="#ivf">For IVF Clinics</a><a href="#hair">For Hair Clinics</a><a href="#how-it-works">How It Works</a><a href="#faq">FAQ</a></nav><BookLink /></div></header>
    <main>
      <section className={s.hero}>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>Patient Acquisition & Booked Appointment Solutions</p>
            <h1>Connect With More Patients Looking for <span>IVF & Hair Transplant Care</span></h1>
            <p className={s.intro}>Techify Labs helps IVF, fertility, and hair restoration clinics connect with prospective patients who are actively exploring treatment options. We deliver patient leads and a booked appointment solution, so your team can focus on real conversations and consultations.</p>
            <div className={s.heroActions}><BookLink>Discuss Your Patient Requirements</BookLink><a className={s.textLink} href="#solutions">Explore our solutions <ArrowRight size={17} /></a></div>
            <p className={s.heroCaption}>More patient conversations. More opportunities to grow your practice.</p>
            <div className={s.clinicPhoto}><Image src="/images/us-patient-leads/clinic-hero.png" alt="Clinician and patient in a bright consultation room" fill sizes="(max-width: 760px) 100vw, 55vw" loading="eager" /><span>Built around your practice.<br /><strong>Focused on patient connections.</strong></span></div>
          </div>
          <BookingForm bookingUrl={process.env.GOOGLE_MEET_BOOKING_URL} />
        </div>
      </section>
      <section className={s.benefits} aria-label="Patient acquisition capabilities"><div className={s.container}><p className={s.eyebrow}>Patient Acquisition Across the U.S.</p><ul>{["Treatment-specific campaigns", "Location-based targeting", "Patient leads delivered to your clinic", "Booked appointment solution", "Flexible monthly requirements", "IVF, fertility & hair restoration focus"].map(item => <li key={item}><Check size={17} />{item}</li>)}</ul></div></section>
      <section className={`${s.section} ${s.tinted}`}><div className={s.container}>
        <div className={s.sectionHeading}><p className={s.eyebrow}>Your treatments. Your service areas.</p><h2>Patient Enquiries for the Treatments You Provide</h2><p>Campaigns are structured around your clinic’s treatments, geographic coverage, and the patient criteria that matter to your team.</p></div>
        <div className={s.serviceGrid}>{specialties.map(({ id, Icon, title, description, image, alt, treatments, cta }) => <article id={id} className={s.specialty} key={id}><div className={s.specialtyPhoto}><Image src={`/images/us-patient-leads/${image}`} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className={s.specialtyBody}><span className={id === "ivf" ? s.orangeIcon : s.blueIcon}><Icon /></span><h3>{title}</h3><p>{description}</p><ul className={s.tags}>{treatments.map(treatment => <li key={treatment}>{treatment}</li>)}</ul><a className={s.textLink} href="#book">{cta}<ArrowRight size={17} /></a></div></article>)}</div>
      </div></section>
      <section id="solutions" className={s.section}><div className={s.container}><div className={s.sectionHeading}><p className={s.eyebrow}>Support at both stages</p><h2>Patient Leads Plus a Booked Appointment Solution</h2><p>Most clinics need more than enquiries. We support both stages, from the first prospective patient lead to a scheduled consultation.</p></div><div className={s.serviceGrid}>
        <article className={s.service}><div><span className={s.blueIcon}><UserRound /></span><h3>Patient Leads</h3><p>Prospective patient enquiries matched to your treatments, service areas, and patient criteria, delivered to your team through the method we agree on.</p></div></article>
        <article className={s.service}><div><span className={s.orangeIcon}><CalendarDays /></span><h3>Booked Appointment Solution</h3><p>Beyond enquiries, we help move interested prospective patients toward a scheduled consultation with your clinic. The process is agreed with each clinic.</p></div></article>
      </div><p className={s.resultsNote}>Results vary by clinic, market, and campaign. We do not guarantee patient volume, appointments, or revenue.</p></div></section>
      <section id="how-it-works" className={`${s.section} ${s.tinted}`}><div className={s.container}><div className={s.sectionHeading}><p className={s.eyebrow}>Clear steps. A shared plan.</p><h2>A Simple Patient Acquisition Process</h2></div><ol className={s.processSteps}>{steps.map(([title, description], i) => <li key={title}><span className={s.stepNumber}>{i + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol><div className={s.journey}><h3>From Patient Interest to Your Clinic</h3><ol>{["Patient searches for treatment", "Patient submits an enquiry", "Enquiry is delivered to clinic", "Appointment is booked", "Consultation at your clinic"].map(item => <li key={item}>{item}<ArrowRight size={18} aria-hidden="true" /></li>)}</ol></div></div></section>
      <section className={s.section}><div className={s.container}><div className={s.sectionHeading}><h2>Patient Acquisition Built for Specialized Clinics</h2></div><div className={s.practiceGrid}>{[
        ["IVF & Fertility Clinics", "Fertility care is personal and carefully considered. Campaigns reflect your treatments, service areas, and the enquiries your team is best equipped to support."],
        ["Hair Transplant & Restoration Clinics", "From FUE to FUT and consultation-led restoration, campaigns reflect the procedures you offer and the patient profile you want to reach."],
        ["Multi-Location Practices", "Organize campaigns by location and treatment line, with monthly requirements set for each site."],
      ].map(([title, description], i) => <article className={s.practice} key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className={`${s.section} ${s.tinted}`}><div className={`${s.container} ${s.discovery}`}><div><p className={s.eyebrow}>A conversation about your practice</p><h2>Let’s Talk About Your Growth Goals</h2><p>What we’ll discuss on the Google Meet</p><ul className={s.discussion}>{discussion.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><BookLink /></div><div className={s.workflowExample}><p className={s.eyebrow}>Illustrative patient enquiry workflow</p><div className={s.workflowStage}><span>01</span><div><h3>New Patient Enquiry</h3><div className={s.enquiryExamples}><p><HeartPulse size={18} />IVF & Fertility Enquiry<small>New enquiry received</small></p><p><Scissors size={18} />Hair Restoration Enquiry<small>New enquiry received</small></p></div></div></div><div className={s.workflowStage}><span>02</span><div><h3>Delivered to Clinic</h3><p>Patient information and, where applicable, booked appointment details are shared through the agreed delivery method.</p></div></div><div className={s.workflowStage}><span>03</span><div><h3>Clinic Follow-Up</h3><p>Your patient coordinator manages the next step, from follow-up to the scheduled consultation.</p></div></div><p className={s.exampleNote}>Example workflow shown for illustration. Actual campaign structure and delivery process are agreed with each clinic.</p></div></div></section>
      <section id="faq" className={s.section}><div className={s.container}><div className={s.faqHeading}><h2>Frequently Asked Questions</h2><p>Still have questions?<br /><a href="mailto:info@techifylabs.in">Get in touch with our team →</a></p></div><div className={s.faqs}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div></div></section>
      <section className={s.cta}><div className={`${s.container} ${s.ctaInner}`}><div><p className={s.eyebrow}>More patient conversations start here.</p><h2>Grow Your Clinic With a Patient Acquisition Strategy Built Around Your Practice.</h2><p>Tell us the patients you’re looking to reach. We’ll discuss a program with patient leads and a booked appointment solution around your clinic’s services, locations, and growth goals.</p></div><div><BookLink /><p>No-obligation discovery consultation.</p></div></div></section>
    </main>
    <footer className={s.footer}><div className={s.container}><div className={s.footerTop}><Brand /><a href="mailto:info@techifylabs.in"><Mail size={17} />info@techifylabs.in</a><a href={PHONE_TEL}><Phone size={17} />{PHONE_DISPLAY}</a><Link href="/contact">Contact us</Link></div><div className={s.footerBottom}><p>© {new Date().getFullYear()} Techify Labs. All rights reserved.</p><p>Patient Acquisition Solutions for IVF, Fertility & Hair Restoration Clinics</p></div></div></footer>
  </div>;
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Check, HeartPulse, Scissors, UserRound } from "lucide-react";
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
  ["Do you provide booked appointments as well as patient leads?", "Yes. Along with patient leads, we offer a booked appointment solution. We walk through how it works for your clinic when our team contacts you. Appointment outcomes depend on the clinic, market, and campaign, and are not guaranteed."],
  ["How much does it cost?", "Pricing depends on your treatments, service areas, and monthly requirements. We review pricing and pilot options when our team contacts you."],
  ["What happens after I submit the form?", "Your enquiry is saved and our team contacts you to learn about your clinic and discuss options, with no obligation."],
  ["Can you support multi-location clinics?", "Yes. Campaigns can be organized by location and treatment line, with requirements set for each site."],
  ["How quickly can we discuss starting a campaign?", "Share your requirements using the form, and our team will contact you to discuss next steps and timing."],
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
  { id: "ivf", Icon: HeartPulse, title: "IVF & Fertility Patient Enquiries", description: "Connect with individuals and couples exploring fertility care and treatment options.", image: "ivf-fertility-consultation.png", alt: "Couple discussing fertility care with a clinician", treatments: ["IVF", "Fertility Consultation", "Fertility Evaluation", "Assisted Reproductive Care"] },
  { id: "hair", Icon: Scissors, title: "Hair Transplant Patient Enquiries", description: "Connect with prospective patients exploring hair-loss and hair-restoration treatment options.", image: "hair-restoration-consultation.png", alt: "Hair restoration consultation with a clinician", treatments: ["Hair Transplant", "Hair Restoration", "FUE", "FUT", "Hair Loss Consultation"] },
];

function Brand() {
  return <Link href="/" className={s.brand} aria-label="Techify Labs home"><Image src="/techify-labs-logo.png" alt="Techify Labs" width={428} height={180} className={s.brandImage} /></Link>;
}

export default function PatientLeadsPage() {
  return <div className={s.page}>
    <header className={s.header}><div className={s.nav}><Brand /></div></header>
    <main>
      <section className={s.hero}><div className={s.container + " " + s.heroGrid}>
        <div><p className={s.eyebrow}>Patient Acquisition &amp; Booked Appointment Solutions</p>
          <h1>Connect With More<br />Patients Looking for<br />IVF &amp; Hair<br />Transplant Care</h1>
          <p className={s.intro}>Techify Labs helps IVF, fertility, and hair restoration clinics connect with prospective patients who are actively exploring treatment options. We deliver patient leads and a booked appointment solution, so your team can focus on real conversations and consultations.</p>
          <ul className={s.benefits}>{["Patient Acquisition Across the U.S.", "Treatment-Specific Campaigns", "Location-Based Targeting", "Patient Leads Delivered to Your Clinic", "Booked Appointment Solution", "Flexible Monthly Requirements", "IVF, Fertility & Hair Restoration Focus"].map(item => <li key={item}><Check size={12} />{item}</li>)}</ul>
          <p className={s.heroCaption}>More patient conversations. More opportunities to grow your practice.</p>
        </div><BookingForm /><div className={s.heroPhoto}><Image src="/images/us-patient-leads/clinic-hero.png" alt="Clinician consulting with a patient in a bright clinic" fill sizes="100vw" unoptimized preload /></div>
      </div></section>
      <section className={s.section}><div className={s.container}><div className={s.sectionHeading}><h2>Patient Enquiries for the Treatments You Provide</h2><p>Campaigns are structured around your clinic&apos;s treatments, geographic coverage, and the patient criteria that matter to your team.</p></div><div className={s.serviceGrid}>{specialties.map(({id, Icon, title, description, image, alt, treatments}) => <article id={id} className={s.card + " " + s.specialtyCard} key={id}><div className={s.specialtyPhoto}><Image src={`/images/us-patient-leads/${image}`} alt={alt} fill sizes="(max-width: 760px) calc(100vw - 40px), 45vw" /></div><span className={s.icon}><Icon size={18} /></span><h3>{title}</h3><p>{description}</p><ul className={s.treatments}>{treatments.map(t => <li key={t}>{t}</li>)}</ul></article>)}</div></div></section>
      <section id="solutions" className={s.section}><div className={s.container}><div className={s.sectionHeading}><h2>Patient Leads Plus a Booked Appointment Solution</h2><p>Most clinics need more than enquiries. Techify Labs supports both stages, from the first prospective patient lead to a scheduled consultation.</p></div><div className={s.serviceGrid}>{[["Patient Leads", "Prospective patient enquiries matched to your treatments, service areas, and patient criteria, delivered to your team through the method we agree on."], ["Booked Appointment Solution", "Beyond enquiries, we help move interested prospective patients toward a scheduled consultation with your clinic. The process is agreed with each clinic."]].map(([title, description],i) => <article className={s.card} key={title}><span className={s.icon}>{i ? <CalendarDays size={18} /> : <UserRound size={18} />}</span><h3>{title}</h3><p>{description}</p></article>)}</div><p className={s.resultsNote}>Results vary by clinic, market, and campaign. We do not guarantee patient volume, appointments, or revenue.</p></div></section>
      <section id="how-it-works" className={s.section + " " + s.tinted}><div className={s.container}><h2>A Simple Patient Acquisition Process</h2><ol className={s.processSteps}>{steps.map(([title, description],i) => <li key={title}><span className={s.stepNumber}>{i+1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></div></section>
      <section className={s.section}><div className={s.container}><h2>From Patient Interest to Your Clinic</h2><ol className={s.journey}>{["Patient Searches for Treatment", "Patient Submits an Enquiry", "Enquiry Is Delivered to Clinic", "Appointment Is Booked", "Consultation at Your Clinic"].map(item => <li key={item}>{item}<span aria-hidden="true">&rsaquo;</span></li>)}</ol></div></section>
      <section className={s.section + " " + s.tinted}><div className={s.container}><h2>Patient Acquisition Built for Specialized Clinics</h2><div className={s.practiceGrid}>{[["IVF & Fertility Clinics", "Fertility care is personal and carefully considered. Campaigns reflect your treatments, service areas, and the enquiries your team is best equipped to support."], ["Hair Transplant & Restoration Clinics", "From FUE to FUT and consultation-led restoration, campaigns reflect the procedures you offer and the patient profile you want to reach."], ["Multi-Location Practices", "Organize campaigns by location and treatment line, with monthly requirements set for each site."]].map(([title, description]) => <article className={s.card} key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className={s.section}><div className={s.container + " " + s.discovery}><div><h2>Let&apos;s Talk About Your<br />Growth Goals</h2><h3>What We&apos;ll Discuss With You</h3><ul className={s.discussion}>{discussion.map(item => <li key={item}>{item}</li>)}</ul></div><div className={s.discoveryPhoto}><Image src="/photos/team-meeting.jpg" alt="Team discussing a growth strategy during a meeting" fill sizes="(max-width: 760px) calc(100vw - 40px), 45vw" /></div></div></section>
      <section className={s.section + " " + s.tinted}><div className={s.container}><h2>Illustrative Patient Enquiry Workflow</h2><div className={s.practiceGrid}><article className={s.card}><h3>New Patient Enquiry</h3><div className={s.enquiryExamples}><p>IVF &amp; Fertility Enquiry<small>New enquiry received</small></p><p>Hair Restoration Enquiry<small>New enquiry received</small></p></div></article><article className={s.card}><h3>Delivered to Clinic</h3><p>Patient information and, where applicable, booked appointment details are shared through the agreed delivery method.</p></article><article className={s.card}><h3>Clinic Follow-Up</h3><p>Your patient coordinator manages the next step, from follow-up to the scheduled consultation.</p></article></div><p className={s.resultsNote}>Example workflow shown for illustration. Actual campaign structure and delivery process are agreed with each clinic.</p></div></section>
      <section id="faq" className={s.section}><div className={s.faqContainer}><h2>Frequently Asked Questions</h2><div className={s.faqs}>{faqs.map(([question, answer]) => <details open key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className={s.cta}><div className={s.ctaInner}><h2>More Patient Conversations Start Here.</h2><h3>Grow Your IVF or Hair Transplant<br />Clinic With a Patient Acquisition<br />Strategy Built Around Your Practice.</h3><p>Tell us the patients you&apos;re looking to reach. We&apos;ll discuss how Techify Labs can help create a patient acquisition program, with patient leads and a booked appointment solution, around your clinic&apos;s services, locations, and growth goals.</p><small>Discovery consultation for clinic owners, practice managers, and healthcare growth teams.</small></div></section>
    </main>
    <footer className={s.footer}><div className={s.container + " " + s.footerInner}><div><Brand /><p>Patient Acquisition Solutions for IVF, Fertility &amp; Hair Restoration Clinics</p></div><div><a href="mailto:info@techifylabs.in">info@techifylabs.in</a><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></div></div></footer>
  </div>;
}

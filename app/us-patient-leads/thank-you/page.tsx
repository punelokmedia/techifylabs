import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Mail, Video, ArrowRight } from "lucide-react";
import s from "../landing.module.css";

export const metadata: Metadata = {
  title: "Thank You | Techify Labs",
  description: "Thank you for scheduling your consultation with Techify Labs.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className={`${s.page} ${s.thankYouPage}`}>
      <header className={s.thankYouHeader}>
        <Link href="/" className={s.brand} aria-label="Techify Labs home"><Image src="/LOGO-2.png" alt="Techify Labs" width={2057} height={764} className={s.brandImage} /></Link>
      </header>
      <main className={s.thankYouMain}>
        <div className={s.thankYouCard}>
          <span className={s.thankYouIcon}><Check size={38} aria-hidden="true" /></span>
          <p className={s.thankYouEyebrow}>LET&apos;S GROW YOUR CLINIC</p>
          <h1>Thank You!</h1>
          <p className={s.thankYouIntro}>Thank you for scheduling your Google Meet consultation with Techify Labs. We look forward to learning about your clinic and your growth goals.</p>
          <div className={s.thankYouSteps}>
            <div><Mail size={24} aria-hidden="true" /><div><h2>Check your inbox</h2><p>Look for Google&apos;s booking confirmation with your meeting date, time, and invitation. Check your spam folder too.</p></div></div>
            <div><Video size={24} aria-hidden="true" /><div><h2>Join us on Google Meet</h2><p>Use the meeting link in your invitation at your booked time. Bring your questions and clinic goals.</p></div></div>
          </div>
          <Link href="/us-patient-leads" className={s.button}>Back to Patient Leads <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link href="/" className={s.thankYouHome}>Visit Techify Labs</Link>
        </div>
      </main>
    </div>
  );
}

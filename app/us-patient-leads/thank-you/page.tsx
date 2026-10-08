import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Mail } from "lucide-react";
import s from "../landing.module.css";

export const metadata: Metadata = {
  title: "Thank You | Techify Labs",
  description: "Thank you for contacting Techify Labs.",
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
          <p className={s.thankYouIntro}>Your enquiry has been saved successfully. Our team will contact you to discuss your clinic and your growth goals.</p>
          <div className={s.thankYouSteps}>
            <div><Mail size={24} aria-hidden="true" /><div><h2>Check your inbox</h2><p>Our team will follow up using the contact details you provided.</p></div></div>
          </div>
        </div>
      </main>
    </div>
  );
}

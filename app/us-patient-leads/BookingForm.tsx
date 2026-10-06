"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Check, ShieldCheck, CalendarDays, Video, MessageCircle, Target, Users, Lightbulb, Clock, ExternalLink } from "lucide-react";
import s from "./landing.module.css";

export default function BookingForm({ bookingUrl }: { bookingUrl?: string }) {
  const router = useRouter();
  const scheduler = useRef<HTMLDialogElement>(null);
  const [activeBookingId, setActiveBookingId] = useState<string | null>(null);
  let embedUrl: string | undefined;
  try {
    const url = new URL(bookingUrl || "");
    if (url.protocol === "https:" && url.hostname === "calendar.google.com" && /^\/calendar\/(?:u\/\d+\/)?appointments\/schedules\/[\w-]+\/?$/.test(url.pathname)) {
      url.searchParams.set("gv", "true");
      embedUrl = url.toString();
    }
  } catch { /* Scheduling stays unavailable until a public booking URL is configured. */ }
  const [schedulerOpened, setSchedulerOpened] = useState(false);
  const [schedulerLoaded, setSchedulerLoaded] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  const submissionId = useRef<string | null>(null);
  const lastPayload = useRef<string | null>(null);
  // Keep only confirmed saves in memory for this mounted form; never cache failures.
  const savedPayload = useRef<string | null>(null);
  useEffect(() => {
    if (!activeBookingId) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    function redirectToThankYou() {
      if (controller.signal.aborted) return;
      controller.abort();
      clearTimeout(timer);
      clearTimeout(redirectTimer);
      scheduler.current?.close();
      router.replace("/us-patient-leads/thank-you");
    }
    // Redirect after 30 seconds even if status checks fail, hang, or return false.
    const redirectTimer = setTimeout(redirectToThankYou, 30000);
    async function checkBooking() {
      if (controller.signal.aborted) return;
      try {
        const response = await fetch("/api/patient-leads/booking-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ submissionId: activeBookingId }),
          signal: controller.signal,
          cache: "no-store",
        });
        const result = await response.json();
        if (!controller.signal.aborted && response.ok && result.booked === true) {
          redirectToThankYou();
          return;
        }
        // Stop if the deployment cannot check bookings, or the enquiry expired.
        if (response.status === 503 || response.status === 410) return;
      } catch {
        // Keep retrying transient failures until the redirect timer fires.
      }
      if (!controller.signal.aborted) timer = setTimeout(checkBooking, 10000);
    }
    timer = setTimeout(checkBooking, 10000);
    return () => {
      controller.abort();
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [activeBookingId, router]);
  function prepareScheduler() {
    if (embedUrl) setSchedulerOpened(true);
  }
  function openScheduler() {
    if (!embedUrl) return;
    prepareScheduler();
    scheduler.current?.showModal();
    setActiveBookingId(submissionId.current);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("sending");
    setError("");
    const element = event.currentTarget;
    const form = new FormData(element);
    const shouldSchedule = (event.nativeEvent as SubmitEvent).submitter?.getAttribute("value") === "schedule";
    const data = Object.fromEntries(form);
    const fingerprint = JSON.stringify(data);
    prepareScheduler();
    if (savedPayload.current === fingerprint) {
      setStatus("success");
      pending.current = false;
      if (shouldSchedule) openScheduler();
      return;
    }
    if (lastPayload.current !== fingerprint) submissionId.current = null;
    lastPayload.current = fingerprint;
    submissionId.current ??= crypto.randomUUID();
    try {
      const response = await fetch("/api/patient-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submissionId: submissionId.current }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.error || "Could not save your request. Please try again.");
      savedPayload.current = fingerprint;
      setStatus("success");
      if (shouldSchedule) openScheduler();
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Could not save your request. Please try again.");
    } finally {
      pending.current = false;
    }
  }
  return <aside id="book" className={s.booking}>
    <form onSubmit={submit} onFocus={prepareScheduler} onChange={() => {
      if (!pending.current) {
        setStatus("idle");
        setError("");
      }
    }} className={s.form}>
      <div className={s.formRow}><label>Your Name <em>*</em><input name="Name" autoComplete="name"  required maxLength={100} /></label><label>Work Email <em>*</em><input name="Email" type="email" autoComplete="email"  required /></label></div>
      <div className={s.formRow}><label>Phone Number<input name="Phone" type="tel" autoComplete="tel"  maxLength={50} /></label><label>Clinic / Practice Name <em>*</em><input name="Clinic" autoComplete="organization"  required maxLength={150} /></label></div>
      <label>Website (optional)<input name="Website" type="url" placeholder="https://" /></label>
      <div className={s.formRow}><label>Clinic Type <em>*</em><select name="Clinic type" required><option>IVF & Fertility</option><option>Hair Transplant</option><option>IVF & Hair Transplant</option></select></label><label>State(s) / Service Areas <em>*</em><input name="States"  required maxLength={200} /></label></div>
      <label>Solution You&apos;re Interested In<select name="Solution"><option>Patient Leads</option><option>Booked Appointment Solution</option><option>Patient Leads & Booked Appointments</option></select></label>
      <label>Monthly Patient Enquiry Requirement <em>*</em><select name="Monthly leads" required defaultValue="Under 50"><option>Under 50</option><option>50–100</option><option>100–250</option><option>250+</option><option>Let’s discuss</option></select></label>
      <fieldset className={s.schedule}><div className={s.formRow}><label>Preferred Meeting Date <em>*</em><input type="date" name="Preferred date" required onFocus={event => { const now = new Date(); event.currentTarget.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`; }} /></label><label>Time Zone<select name="Time zone"><option>Eastern Time (ET)</option><option>Central Time (CT)</option><option>Mountain Time (MT)</option><option>Pacific Time (PT)</option><option>India Standard Time (IST)</option></select></label></div></fieldset>
      <button className={s.button} type="submit" name="action" value="schedule" disabled={status === "sending"} title={embedUrl ? "Save your enquiry, then choose a meeting time" : "Save your enquiry to request a meeting"}>{status === "sending" ? "Saving your enquiry…" : "Schedule a Google Meet"}</button>
      <p className={s.formNote}>No obligation. We&apos;ll use the meeting to understand your clinic&apos;s requirements and discuss available patient acquisition options.{!embedUrl && ' We will confirm your meeting time by email.'}</p>
      {status === "success" && <p className={s.status} role="status">Your enquiry has been saved.{embedUrl ? <button type="button" className={s.reopenScheduler} onClick={openScheduler}>Choose your meeting time</button> : " We will confirm your meeting time by email."}</p>}
      {status === "error" && <p className={s.error} role="alert">{error}</p>}
    </form>
    <dialog ref={scheduler} className={s.schedulerDialog} aria-labelledby="scheduler-title" onClose={() => setActiveBookingId(null)}>
      <div className={s.schedulerHeader}><Link href="/" className={s.brand} aria-label="Techify Labs home"><Image src="/LOGO-2.png" alt="Techify Labs" width={2057} height={764} className={s.brandImage} /></Link><button type="button" aria-label="Close meeting scheduler" onClick={() => scheduler.current?.close()}><X size={22} /></button></div>
      <div className={s.schedulerBody}>
        <div className={s.schedulerCard}>
          <div className={s.schedulerMain}>
            <span className={s.schedulerAccent} />
            <h2 id="scheduler-title">Schedule Your<br /><strong>Google Meet</strong> Session</h2>
            <p className={s.schedulerIntro}>Let&apos;s discuss your goals, strategy, and how Techify Labs can help your business grow. Choose a convenient date and time below.</p>
            <p className={s.bookingEmailNote}>Use the same email address you entered in your enquiry when booking.</p>
            <div className={s.liveBooking}>
              <div className={s.meetingDetails}><Image src="/LOGO-2.png" alt="Techify Labs" width={2057} height={764} style={{ display: "block", width: "100%", maxWidth: 180, height: "auto", marginBottom: 18 }} /><h3>30-Minute Consultation</h3><span><Clock size={18} /> 30 min</span><span><Video size={18} /> Google Meet video call</span><p>A quick session to understand your requirements and discuss how we can help you with digital marketing and growth solutions.</p></div>
              <div className={s.calendarPane}>
                {embedUrl && schedulerOpened && <>
                  {!schedulerLoaded && <p className={s.schedulerLoading} role="status">Loading available meeting times…</p>}
                  <iframe src={embedUrl} title="Techify Labs meeting availability and booking" className={s.schedulerFrame} loading="eager" onLoad={() => setSchedulerLoaded(true)} />
                  <a className={s.calendarFallback} href={embedUrl} target="_blank" rel="noopener noreferrer">Open scheduler in a new tab <ExternalLink size={14} /></a>
                </>}
              </div>
            </div>
          </div>
          <aside className={s.schedulerSidebar}>
            <span className={s.schedulerAccent} /><h3>What to Expect?</h3>
            <ul className={s.expectations}>{[[MessageCircle, "Understand your business goals"], [Target, "Discuss strategy & growth opportunities"], [Users, "Get expert guidance from our team"], [Lightbulb, "Plan next steps for your digital growth"]].map(([Icon, text]) => { const ExpectIcon = Icon as typeof MessageCircle; return <li key={String(text)}><span><ExpectIcon size={25} /></span>{String(text)}</li>; })}</ul>
            <div className={s.expertise}><span className={s.schedulerAccent} /><h3>Our Expertise</h3><ul>{["Social Media Marketing", "Paid Advertising (Meta & Google)", "SEO (Local & Global)", "Lead Generation", "Content Shoot & Production", "Business Consulting"].map(item => <li key={item}><Check size={18} />{item}</li>)}</ul></div>
          </aside>
        </div>
        <div className={s.schedulerBenefits}><div><ShieldCheck /><span><strong>100% Free</strong><br />Consultation</span></div><div><CalendarDays /><span>Quick &amp; Easy<br />Scheduling</span></div><div><Video /><span>Google Meet<br />Online Session</span></div></div>
      </div>
    </dialog>
  </aside>;
}

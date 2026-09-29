"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, Video, X } from "lucide-react";
import s from "./landing.module.css";

export default function BookingForm({ bookingUrl }: { bookingUrl?: string }) {
  const scheduler = useRef<HTMLDialogElement>(null);
  let embedUrl: string | undefined;
  try {
    const url = new URL(bookingUrl || "");
    if (url.protocol === "https:" && url.hostname === "calendar.google.com" && /^\/calendar\/(?:u\/\d+\/)?appointments\/schedules\/[\w-]+\/?$/.test(url.pathname)) {
      url.searchParams.set("gv", "true");
      embedUrl = url.toString();
    }
  } catch { /* Scheduling stays unavailable until a public booking URL is configured. */ }
  const [schedulerOpened, setSchedulerOpened] = useState(false);
  const [time, setTime] = useState("11:30 AM");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  const submissionId = useRef<string | null>(null);
  const lastPayload = useRef<string | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("sending");
    setError("");
    const element = event.currentTarget;
    const form = new FormData(element);
    const shouldSchedule = (event.nativeEvent as SubmitEvent).submitter?.getAttribute("value") === "schedule";
    const data = { ...Object.fromEntries(form), "Preferred time": time };
    const fingerprint = JSON.stringify(data);
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
      setStatus("success");
      if (shouldSchedule && embedUrl) {
        setSchedulerOpened(true);
        scheduler.current?.showModal();
      }
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Could not save your request. Please try again.");
    } finally {
      pending.current = false;
    }
  }
  return <aside id="book" className={s.booking}><div className={s.bookingHeader}><CalendarDays /><div><h2>Tell Us About Your Clinic</h2><p>Share your details to request a no-obligation call.</p></div></div>
    <form onSubmit={submit} className={s.form}>
      <div className={s.formRow}><label>Your name <em>*</em><input name="Name" autoComplete="name" placeholder="John Smith" required maxLength={100} /></label><label>Work email <em>*</em><input name="Email" type="email" autoComplete="email" placeholder="you@clinic.com" required /></label></div>
      <label>Clinic / practice name <em>*</em><input name="Clinic" autoComplete="organization" placeholder="Your clinic name" required maxLength={150} /></label>
      <label>Website<input name="Website" type="url" placeholder="https://www.yourclinic.com" /></label>
      <label>Clinic type <em>*</em><select name="Clinic type" required><option>IVF & Fertility</option><option>Hair Transplant</option><option>IVF & Hair Transplant</option></select></label>
      <label>State(s) / service areas <em>*</em><input name="States" placeholder="Your states, cities, or service areas" required maxLength={200} /></label>
      <label>Monthly enquiries needed <em>*</em><select name="Monthly leads" required defaultValue=""><option value="" disabled>Select an option</option><option>Under 50</option><option>50–100</option><option>100–250</option><option>250+</option><option>Let’s discuss</option></select></label>
      <fieldset className={s.schedule}><legend>Preferred meeting time</legend><div className={s.formRow}><label>Date <em>*</em><input type="date" name="Preferred date" required onFocus={event => { const now = new Date(); event.currentTarget.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`; }} /></label><label>Time zone<select name="Time zone"><option>Eastern Time (ET)</option><option>Central Time (CT)</option><option>Mountain Time (MT)</option><option>Pacific Time (PT)</option><option>India Standard Time (IST)</option></select></label></div><div className={s.times} role="group" aria-label="Preferred meeting time">{["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"].map(slot => <button key={slot} type="button" aria-pressed={time === slot} onClick={() => setTime(slot)}>{slot}</button>)}</div></fieldset>
      <button className={s.button} type="submit" name="action" value="schedule" disabled={!embedUrl || status === "sending"} title={embedUrl ? "Save your enquiry, then choose a meeting time" : "Online scheduling will be available soon"}><Video size={19} />{status === "sending" ? "Saving your enquiry…" : "Schedule a Google Meet"}<ArrowRight size={18} /></button>
      <button className={`${s.button} ${s.submitButton}`} type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>{status === "sending" ? "Submitting…" : "Submit Form"}<ArrowRight size={18} /></button>
      <p className={s.formNote}>{embedUrl ? "Both buttons save your enquiry. Schedule a Google Meet also opens booking; choose a slot to confirm your meeting." : "Submit your enquiry and we’ll confirm a meeting time by email. Online booking is currently unavailable."}</p>
      {status === "success" && <p className={s.status} role="status">Enquiry received. A meeting requires separate confirmation.</p>}
      {status === "error" && <p className={s.error} role="alert">{error}</p>}
      <p className={s.meetNote}><Video size={25} />Google Meet invitation shared after confirmation.</p>
    </form>
    <dialog ref={scheduler} className={s.schedulerDialog} aria-labelledby="scheduler-title">
      <div className={s.schedulerHeader}><div><h2 id="scheduler-title">Schedule a Google Meet</h2><p>Choose an available time with the Techify Labs team.</p></div><button type="button" aria-label="Close meeting scheduler" onClick={() => scheduler.current?.close()}><X size={22} /></button></div>
      {embedUrl && schedulerOpened && <iframe src={embedUrl} title="Techify Labs meeting availability and booking" className={s.schedulerFrame} />}
    </dialog>
  </aside>;
}

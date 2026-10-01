"use client";

import { useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
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
  const [schedulerLoaded, setSchedulerLoaded] = useState(false);
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  const submissionId = useRef<string | null>(null);
  const lastPayload = useRef<string | null>(null);
  // Keep only confirmed saves in memory for this mounted form; never cache failures.
  const savedPayload = useRef<string | null>(null);
  function prepareScheduler() {
    if (embedUrl) setSchedulerOpened(true);
  }
  function openScheduler() {
    if (!embedUrl) return;
    prepareScheduler();
    scheduler.current?.showModal();
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
    const data = { ...Object.fromEntries(form), "Preferred time": time };
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
      <label>Website<input name="Website" type="url" placeholder="https://" /></label>
      <div className={s.formRow}><label>Clinic Type <em>*</em><select name="Clinic type" required><option>IVF & Fertility</option><option>Hair Transplant</option><option>IVF & Hair Transplant</option></select></label><label>State(s) / Service Areas <em>*</em><input name="States"  required maxLength={200} /></label></div>
      <label>Solution You&apos;re Interested In<select name="Solution"><option>Patient Leads</option><option>Booked Appointment Solution</option><option>Patient Leads & Booked Appointments</option></select></label>
      <label>Monthly Patient Enquiry Requirement <em>*</em><select name="Monthly leads" required defaultValue="Under 50"><option>Under 50</option><option>50–100</option><option>100–250</option><option>250+</option><option>Let’s discuss</option></select></label>
      <fieldset className={s.schedule}><div className={s.formRow}><label>Preferred Meeting Date <em>*</em><input type="date" name="Preferred date" required onFocus={event => { const now = new Date(); event.currentTarget.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`; }} /></label><label>Time Zone<select name="Time zone"><option>Eastern Time (ET)</option><option>Central Time (CT)</option><option>Mountain Time (MT)</option><option>Pacific Time (PT)</option><option>India Standard Time (IST)</option></select></label></div><label>Preferred Meeting Time<input type="time" value={time} onChange={event => setTime(event.target.value)} required /></label></fieldset>
      <button className={s.button} type="submit" name="action" value="schedule" disabled={status === "sending"} title={embedUrl ? "Save your enquiry, then choose a meeting time" : "Save your enquiry to request a meeting"}>{status === "sending" ? "Saving your enquiry…" : "Schedule a Google Meet"}</button>
      <p className={s.formNote}>No obligation. We&apos;ll use the meeting to understand your clinic&apos;s requirements and discuss available patient acquisition options.{!embedUrl && ' We will confirm your meeting time by email.'}</p>
      {status === "success" && <p className={s.status} role="status">Enquiry received. A meeting requires separate confirmation.</p>}
      {status === "error" && <p className={s.error} role="alert">{error}</p>}
    </form>
    <dialog ref={scheduler} className={s.schedulerDialog} aria-labelledby="scheduler-title">
      <div className={s.schedulerHeader}><div><h2 id="scheduler-title">Schedule a Google Meet</h2><p>Choose an available time with the Techify Labs team.</p></div><button type="button" aria-label="Close meeting scheduler" onClick={() => scheduler.current?.close()}><X size={22} /></button></div>
      {embedUrl && schedulerOpened && <>
        {!schedulerLoaded && <p className={s.schedulerLoading} role="status">Loading available meeting times…</p>}
        <iframe src={embedUrl} title="Techify Labs meeting availability and booking" className={s.schedulerFrame} loading="eager" onLoad={() => setSchedulerLoaded(true)} />
      </>}
    </dialog>
  </aside>;
}

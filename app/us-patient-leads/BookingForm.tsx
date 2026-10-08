"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import s from "./landing.module.css";

export default function BookingForm() {
  const router = useRouter();
  const pending = useRef(false);
  const submissionId = useRef<string | null>(null);
  const lastPayload = useRef<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  // Google Meet scheduling is disabled. Redirect only after the sheet confirms saving.
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(event.currentTarget));
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
      if (!response.ok || result.ok !== true) throw new Error(result.error || "Could not save your enquiry. Please try again.");
      setStatus("success");
      router.replace("/us-patient-leads/thank-you");
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Could not save your enquiry. Please try again.");
      pending.current = false;
    }
  }

  return <aside id="book" className={s.booking} aria-labelledby="enquiry-title">
    <form onSubmit={submit} className={s.form}>
      <h2 id="enquiry-title">Tell Us About Your Requirements</h2>
      <label>Your Name<input name="Name" autoComplete="name" required maxLength={100} /></label>
      <label>Email<input name="Email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>Phone Number<input name="Phone" type="tel" autoComplete="tel" required maxLength={50} /></label>
      <label>Message<textarea name="Message" rows={4} required maxLength={2000} /></label>
      <button className={s.button} type="submit" disabled={status === "sending" || status === "success"}>{status === "sending" ? "Submitting..." : status === "success" ? "Submitted" : "Submit"}</button>
      {status === "success" && <p className={s.status} role="status">Your enquiry has been saved. Opening the thank-you page...</p>}
      {status === "error" && <p className={s.error} role="alert">{error}</p>}
    </form>
  </aside>;
}

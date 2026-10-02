"use client";

import type { ReactNode } from "react";
import s from "./landing.module.css";

export default function BookButton({ children = "Book a Google Meet", secondary = false }: { children?: ReactNode; secondary?: boolean }) {
  return <button type="button" className={secondary ? s.secondaryButton : s.button} onClick={() => {
    const form = document.getElementById("book");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
    form?.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true });
  }}>{children}</button>;
}

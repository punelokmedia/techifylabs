"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ClientLogoMarquee.module.css";

const logos = [
  "client-1-logo.jpeg",
  "client-2-logo.jpeg",
  "client-3-logo.jpeg",
  "client-4-logo.jpeg",
  "client-5-logo.jpeg",
  "client-logo-6.jpeg",
].map((filename, index) => ({
  src: `/client-logo/${filename}`,
  alt: `Client ${index + 1} logo`,
}));

export default function ClientLogoMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className={styles.section} aria-label="Our clients">
      <div className={styles.heading}>
        <h2>Our Clients</h2>
        <button
          type="button"
          className={styles.pause}
          aria-pressed={paused}
          aria-label={paused ? "Resume client logo scrolling" : "Pause client logo scrolling"}
          onClick={() => setPaused(!paused)}
        >
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track} data-paused={paused}>
          {[0, 1].map((group) => (
            <div className={styles.group} key={group} aria-hidden={group === 1 ? true : undefined}>
              {[0, 1].map((repeat) =>
                logos.map((logo) => (
                  <div className={styles.card} key={`${repeat}-${logo.src}`} aria-hidden={repeat === 1 ? true : undefined}>
                    <Image
                      src={logo.src}
                      alt={group === 0 && repeat === 0 ? logo.alt : ""}
                      width={180}
                      height={100}
                      sizes="(max-width: 640px) 140px, 180px"
                      className={styles.logo}
                    />
                  </div>
                )),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

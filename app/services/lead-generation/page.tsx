"use client";

const PhoneIcon = ({ color = "currentColor" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.8 12.8 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.8 12.8 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const HairIcon = ({ color = "currentColor" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12l3.31 3.31" />
  </svg>
);

const WAIcon = ({ color = "currentColor" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M21 12a9 9 0 01-13.9 7.6L3 21l1.4-4.1A9 9 0 1112 21z" />
    <path d="M8.5 9.5c.2-.4.5-.4.7-.4h.5c.2 0 .5.1.6.4l.5 1.3c.1.3.1.5-.1.8l-.4.6c-.1.1-.1.3 0 .4.3.5 1 1.4 2.1 1.9.2.1.3.1.4 0l.6-.5c.2-.2.5-.3.8-.2l1.2.5c.3.1.4.4.4.6v.6c0 .2-.1.5-.4.7-.4.2-1 .3-1.6.2-2-.4-4.2-2.4-4.8-4.7-.2-.7-.1-1.3.1-1.7z" />
  </svg>
);

const MsgIcon = ({ color = "currentColor" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <path d="M8 9h8M8 13h5" />
  </svg>
);

const UserIcon = ({ color = "currentColor" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c1.8-3.3 5-5 8-5s6.2 1.7 8 5" />
  </svg>
);

export default function LeadGenerationPage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#f1f2f7", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <section style={{
        background: "linear-gradient(100deg, #040a30 0%, #0a1b66 55%, #0f1d3f 100%)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr 0.75fr",
          gap: 0,
          padding: "0 32px 0",
          minHeight: 610,
          alignItems: "stretch",
        }}>
          {/* LEFT: Copy */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 32 }}>
            {/* Badge */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)",
              borderRadius: 999, padding: "4px 12px", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.08em", color: "#ddd6fe", width: "fit-content", marginBottom: 12,
            }}>
              👤 For Clinics & Healthcare Providers
            </span>

            <h1 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.08, margin: 0, letterSpacing: "-0.02em" }}>
              Healthcare Marketing & Patient Lead Generation for IVF & Hair Transplant Clinics
            </h1>

            <p style={{ marginTop: 14, fontSize: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.6, maxWidth: 400 }}>
              We help IVF and hair transplant clinics get verified, high-intent patient inquiries through performance marketing.
            </p>

            {/* CTA Buttons */}
            <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, maxWidth: 420 }}>
              <button style={{
                background: "#7c3aed", color: "#fff", border: "none", borderRadius: 10,
                padding: "12px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                transition: "background 0.2s", boxShadow: "0 6px 14px rgba(124,58,237,0.35)",
              }}
              >
                Get Patients for Your Clinic →
              </button>
              <button style={{
                background: "#0d163c", color: "#fff", border: "1px solid rgba(167,139,250,0.4)",
                borderRadius: 10, padding: "12px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}>
                👤 Expert in Leads Generation
              </button>
            </div>

            {/* Pills */}
            <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, maxWidth: 420 }}>
              {["◉ High Intent Patient Leads", "◈ Verified & Filtered Inquiries", "◎ ROI Focused Campaigns"].map(t => (
                <div key={t} style={{
                  background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)",
                  borderRadius: 8, padding: "7px 6px", fontSize: 10, color: "rgba(221,214,254,0.9)",
                  textAlign: "center", lineHeight: 1.4,
                }}>
                  {t}
                </div>
              ))}
            </div>

            <p style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", gap: 5 }}>
              🛡 We work with clinics, we are not a treatment provider.
            </p>
          </div>

          {/* CENTER: Card */}
          <div style={{
            background: "#fff", color: "#1e293b",
            borderRadius: 16, border: "1px solid #e5e7eb",
            padding: "16px 18px 12px",
            boxShadow: "0 20px 48px -24px rgba(2,6,23,0.5)",
            margin: "12px 10px 0",
            display: "flex", flexDirection: "column",
            maxWidth: 620,
            alignSelf: "end",
            position: "relative",
            zIndex: 3,
            overflow: "hidden",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
                  Select Your Requirement
                </h2>
                <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 13, marginTop: 6 }}>
                  Choose your service to get qualified patient leads
                </p>
              </div>
              <span style={{ fontSize: 20, color: "#94a3b8", marginLeft: -10, cursor: "pointer" }}>×</span>
            </div>

            <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {/* IVF Card */}
              <div style={{
                background: "#f5f3ff", border: "1px solid #ddd6fe",
                borderRadius: 14, padding: 14,
                minHeight: 290,
                display: "flex",
                flexDirection: "column",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 10,
                }}>
                  <PhoneIcon color="#fff" />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "#6d28d9", margin: 0, lineHeight: 1.12 }}>
                  IVF Leads
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
                  {["High intent couples", "Consultation ready", "Location targeted"].map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#475569" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed", flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <button style={{
                  marginTop: "auto", width: "100%", background: "#7c3aed", color: "#fff",
                  border: "none", borderRadius: 10, padding: "9px 0", fontSize: 16, fontWeight: 700,
                  cursor: "pointer",
                }}>Get IVF Leads →</button>
              </div>

              {/* Hair Card */}
              <div style={{
                background: "#fff7ed", border: "1px solid #fed7aa",
                borderRadius: 14, padding: 14,
                minHeight: 290,
                display: "flex",
                flexDirection: "column",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 10,
                }}>
                  <HairIcon color="#fff" />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "#ea580c", margin: 0, lineHeight: 1.12 }}>
                  Hair Transplant Leads
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
                  {["Qualified male leads", "Budget ready", "Consultation bookings"].map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#475569" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316", flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <button style={{
                  marginTop: "auto", width: "100%", background: "#f97316", color: "#fff",
                  border: "none", borderRadius: 10, padding: "9px 0", fontSize: 16, fontWeight: 700,
                  cursor: "pointer",
                }}>Get Hair Leads →</button>
              </div>
            </div>

            <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8", marginTop: 12 }}>
              🔒 For Clinics Only. We do not provide medical treatment.
            </p>
          </div>

          {/* RIGHT: Cards left + image right */}
          <div style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 12, marginRight: 4, marginLeft: -4, zIndex: 1, minHeight: 360 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 10 }}>
              <div style={{
                background: "#fff", borderRadius: 14, padding: "12px 14px",
                boxShadow: "0 10px 22px rgba(15,23,42,0.2)", color: "#1e293b",
              }}>
                <p style={{ fontSize: 10, fontWeight: 600, color: "#64748b", margin: 0 }}>Monthly Leads Delivered</p>
                <p style={{ fontSize: 40, fontWeight: 900, margin: "3px 0 0", lineHeight: 1 }}>
                  248 <span style={{ fontSize: 12, fontWeight: 700, color: "#16a34a" }}>↑32%</span>
                </p>
                <div style={{ height: 34, marginTop: 8 }}>
                  <svg viewBox="0 0 180 40" style={{ width: "100%", height: "100%" }}>
                    <polyline
                      points="5,32 32,26 56,20 79,16 103,19 126,10 152,15 175,5"
                      fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                    {[
                      [5, 32], [32, 26], [56, 20], [79, 16], [103, 19], [126, 10], [152, 15], [175, 5]
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="3" fill="#7c3aed" />
                    ))}
                  </svg>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, color: "#94a3b8", marginTop: 2 }}>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>

              <div style={{
                background: "#fff", borderRadius: 14, padding: "12px 14px",
                boxShadow: "0 10px 22px rgba(15,23,42,0.2)", color: "#1e293b",
              }}>
                <p style={{ fontSize: 10, fontWeight: 600, color: "#64748b", margin: 0 }}>Leads by Service</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                  <svg width="46" height="46" viewBox="0 0 52 52">
                    <circle cx="26" cy="26" r="20" fill="none" stroke="#f97316" strokeWidth="9" strokeDasharray="50.3 125.6" strokeDashoffset="0" />
                    <circle cx="26" cy="26" r="20" fill="none" stroke="#7c3aed" strokeWidth="9" strokeDasharray="75.4 125.6" strokeDashoffset="-50.3" />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 10 }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6, whiteSpace: "nowrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7c3aed", display: "inline-block" }} />
                        IVF Leads
                      </span>
                      <strong>60%</strong>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6, whiteSpace: "nowrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f97316", display: "inline-block" }} />
                        Hair Transplant Leads
                      </span>
                      <strong>40%</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ overflow: "hidden", borderRadius: "0 12px 12px 0", aspectRatio: "1 / 1", width: "100%", alignSelf: "start" }}>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80"
                alt="Lead generation specialist"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={{ maxWidth: 1400, margin: "-2px auto 0", padding: "40px 32px", position: "relative", zIndex: 6 }}>
        {/* Section title with decorative lines */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ flex: 1, maxWidth: 120, height: 2, background: "linear-gradient(to right, transparent, #6d28d9)" }} />
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1e1b4b", margin: 0, whiteSpace: "nowrap" }}>
            What Happens Next?
          </h2>
          <div style={{ flex: 1, maxWidth: 120, height: 2, background: "linear-gradient(to left, transparent, #6d28d9)" }} />
        </div>

        <div style={{
          background: "#fff", borderRadius: 24, border: "1px solid #e2e8f0",
          padding: "24px 28px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center" }}>
            {/* IVF Flow */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { label: "You Select", sub: "IVF Leads", icon: <PhoneIcon color="#7c3aed" />, bg: "#f5f3ff", border: "#ddd6fe", iconBg: "#ede9fe", iconBorder: "#c4b5fd", textColor: "#7c3aed" },
                { label: "We Open", sub: "WhatsApp", icon: <WAIcon color="#16a34a" />, bg: "#f0fdf4", border: "#bbf7d0", iconBg: "#dcfce7", iconBorder: "#86efac", textColor: "#16a34a" },
                { label: "Pre-filled Message", sub: "for IVF Leads", icon: <MsgIcon color="#7c3aed" />, bg: "#f5f3ff", border: "#ddd6fe", iconBg: "#ede9fe", iconBorder: "#c4b5fd", textColor: "#7c3aed" },
                { label: "Chat With Our Team", sub: "Get Started", icon: <UserIcon color="#7c3aed" />, bg: "#f5f3ff", border: "#ddd6fe", iconBg: "#ede9fe", iconBorder: "#c4b5fd", textColor: "#7c3aed" },
              ].map((step, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{
                    background: step.bg, border: `1px solid ${step.border}`,
                    borderRadius: 12, padding: "12px 8px", textAlign: "center",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: step.iconBg, border: `1px solid ${step.iconBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 8px",
                    }}>
                      {step.icon}
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#374151", margin: 0, lineHeight: 1.4 }}>
                      {step.label}
                    </p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: step.textColor, margin: 0 }}>
                      {step.sub}
                    </p>
                  </div>
                  {i < 3 && (
                    <div style={{
                      position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 2, zIndex: 2,
                    }}>
                      {[0, 1, 2].map(d => (
                        <span key={d} style={{ width: 3, height: 3, borderRadius: "50%", background: "#94a3b8", display: "block" }} />
                      ))}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* OR */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                border: "1px solid #cbd5e1", background: "#f1f5f9",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: "#475569",
              }}>
                OR
              </div>
            </div>

            {/* Hair Flow */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { label: "You Select", sub: "Hair Transplant Leads", icon: <HairIcon color="#f97316" />, bg: "#fff7ed", border: "#fed7aa", iconBg: "#ffedd5", iconBorder: "#fdba74", textColor: "#ea580c" },
                { label: "We Open", sub: "WhatsApp", icon: <WAIcon color="#16a34a" />, bg: "#f0fdf4", border: "#bbf7d0", iconBg: "#dcfce7", iconBorder: "#86efac", textColor: "#16a34a" },
                { label: "Pre-filled Message", sub: "for Hair Leads", icon: <MsgIcon color="#f97316" />, bg: "#fff7ed", border: "#fed7aa", iconBg: "#ffedd5", iconBorder: "#fdba74", textColor: "#ea580c" },
                { label: "Chat With Our Team", sub: "Get Started", icon: <UserIcon color="#f97316" />, bg: "#fff7ed", border: "#fed7aa", iconBg: "#ffedd5", iconBorder: "#fdba74", textColor: "#ea580c" },
              ].map((step, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{
                    background: step.bg, border: `1px solid ${step.border}`,
                    borderRadius: 12, padding: "12px 8px", textAlign: "center",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: step.iconBg, border: `1px solid ${step.iconBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 8px",
                    }}>
                      {step.icon}
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#374151", margin: 0, lineHeight: 1.4 }}>
                      {step.label}
                    </p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: step.textColor, margin: 0 }}>
                      {step.sub}
                    </p>
                  </div>
                  {i < 3 && (
                    <div style={{
                      position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 2, zIndex: 2,
                    }}>
                      {[0, 1, 2].map(d => (
                        <span key={d} style={{ width: 3, height: 3, borderRadius: "50%", background: "#94a3b8", display: "block" }} />
                      ))}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Message Previews */}
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{
              border: "1.5px dashed #c4b5fd", background: "#f5f3ff",
              borderRadius: 12, padding: "12px 16px", textAlign: "center",
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", margin: "0 0 4px" }}>Message That Will Be Sent</p>
              <p style={{ fontSize: 13, color: "#374151", margin: 0 }}>Hi, I run a clinic. I need IVF patient leads.</p>
            </div>
            <div style={{
              border: "1.5px dashed #fdba74", background: "#fff7ed",
              borderRadius: 12, padding: "12px 16px", textAlign: "center",
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#ea580c", margin: "0 0 4px" }}>Message That Will Be Sent</p>
              <p style={{ fontSize: 13, color: "#374151", margin: 0 }}>Hi, I run a clinic. I need Hair Transplant leads.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
const PhoneIcon = ({ color = "currentColor" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.8 12.8 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.8 12.8 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const HairIcon = ({ color = "currentColor" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12l3.31 3.31" />
  </svg>
);

const WAIcon = ({ color = "currentColor" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M21 12a9 9 0 01-13.9 7.6L3 21l1.4-4.1A9 9 0 1112 21z" />
    <path d="M8.5 9.5c.2-.4.5-.4.7-.4h.5c.2 0 .5.1.6.4l.5 1.3c.1.3.1.5-.1.8l-.4.6c-.1.1-.1.3 0 .4.3.5 1 1.4 2.1 1.9.2.1.3.1.4 0l.6-.5c.2-.2.5-.3.8-.2l1.2.5c.3.1.4.4.4.6v.6c0 .2-.1.5-.4.7-.4.2-1 .3-1.6.2-2-.4-4.2-2.4-4.8-4.7-.2-.7-.1-1.3.1-1.7z" />
  </svg>
);

const MsgIcon = ({ color = "currentColor" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <path d="M8 9h8M8 13h5" />
  </svg>
);

const UserIcon = ({ color = "currentColor" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c1.8-3.3 5-5 8-5s6.2 1.7 8 5" />
  </svg>
);

export default function LeadGenerationPage() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "#f1f2f7",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(100deg, #040a30 0%, #0a1b66 55%, #0f1d3f 100%)",
          color: "#fff",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr 0.75fr",
            gap: 0,
            padding: "0 32px 0",
            minHeight: 610,
            alignItems: "stretch",
          }}
        >
          {/* LEFT: Copy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingRight: 32,
            }}
          >
            {/* Badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(167,139,250,0.12)",
                border: "1px solid rgba(167,139,250,0.3)",
                borderRadius: 999,
                padding: "4px 12px",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#ddd6fe",
                width: "fit-content",
                marginBottom: 12,
              }}
            >
              👤 For Clinics & Healthcare Providers
            </span>

            <h1
              style={{
                fontSize: 34,
                fontWeight: 900,
                lineHeight: 1.08,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Healthcare Marketing & Patient Lead Generation for IVF & Hair
              Transplant Clinics
            </h1>

            <p
              style={{
                marginTop: 14,
                fontSize: 14,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.6,
                maxWidth: 400,
              }}
            >
              We help IVF and hair transplant clinics get verified, high-intent
              patient inquiries through performance marketing.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                marginTop: 18,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
                maxWidth: 420,
              }}
            >
              <button
                style={{
                  background: "#7c3aed",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "12px 16px",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background 0.2s",
                  boxShadow: "0 6px 14px rgba(124,58,237,0.35)",
                }}
              >
                Get Patients for Your Clinic →
              </button>
              <button
                style={{
                  background: "#0d163c",
                  color: "#fff",
                  border: "1px solid rgba(167,139,250,0.4)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                👤 Expert in Leads Generation
              </button>
            </div>

            {/* Pills */}
            <div
              style={{
                marginTop: 14,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 6,
                maxWidth: 420,
              }}
            >
              {[
                "◉ High Intent Patient Leads",
                "◈ Verified & Filtered Inquiries",
                "◎ ROI Focused Campaigns",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    background: "rgba(167,139,250,0.1)",
                    border: "1px solid rgba(167,139,250,0.2)",
                    borderRadius: 8,
                    padding: "7px 6px",
                    fontSize: 10,
                    color: "rgba(221,214,254,0.9)",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: 14,
                fontSize: 12,
                color: "rgba(255,255,255,0.75)",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              🛡 We work with clinics, we are not a treatment provider.
            </p>
          </div>

          {/* CENTER: Card */}
          <div
            style={{
              background: "#fff",
              color: "#1e293b",
              borderRadius: 16,
              border: "1px solid #e5e7eb",
              padding: "16px 18px 12px",
              boxShadow: "0 20px 48px -24px rgba(2,6,23,0.5)",
              margin: "12px 10px 0",
              display: "flex",
              flexDirection: "column",
              maxWidth: 620,
              alignSelf: "end",
              position: "relative",
              zIndex: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: 28,
                    fontWeight: 800,
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  Select Your Requirement
                </h2>
                <p
                  style={{
                    textAlign: "center",
                    color: "#94a3b8",
                    fontSize: 13,
                    marginTop: 6,
                  }}
                >
                  Choose your service to get qualified patient leads
                </p>
              </div>
              <span
                style={{
                  fontSize: 20,
                  color: "#94a3b8",
                  marginLeft: -10,
                  cursor: "pointer",
                }}
              >
                ×
              </span>
            </div>

            <div
              style={{
                marginTop: 12,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {/* IVF Card */}
              <div
                style={{
                  background: "#f5f3ff",
                  border: "1px solid #ddd6fe",
                  borderRadius: 14,
                  padding: 14,
                  minHeight: 290,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#7c3aed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <PhoneIcon color="#fff" />
                </div>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#6d28d9",
                    margin: 0,
                    lineHeight: 1.12,
                  }}
                >
                  IVF Leads
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "8px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {[
                    "High intent couples",
                    "Consultation ready",
                    "Location targeted",
                  ].map((p) => (
                    <li
                      key={p}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        fontSize: 12,
                        color: "#475569",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#7c3aed",
                          flexShrink: 0,
                        }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    marginTop: "auto",
                    width: "100%",
                    background: "#7c3aed",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "9px 0",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Get IVF Leads →
                </button>
              </div>

              {/* Hair Card */}
              <div
                style={{
                  background: "#fff7ed",
                  border: "1px solid #fed7aa",
                  borderRadius: 14,
                  padding: 14,
                  minHeight: 290,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#f97316",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <HairIcon color="#fff" />
                </div>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#ea580c",
                    margin: 0,
                    lineHeight: 1.12,
                  }}
                >
                  Hair Transplant Leads
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "8px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {[
                    "Qualified male leads",
                    "Budget ready",
                    "Consultation bookings",
                  ].map((p) => (
                    <li
                      key={p}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        fontSize: 12,
                        color: "#475569",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#f97316",
                          flexShrink: 0,
                        }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    marginTop: "auto",
                    width: "100%",
                    background: "#f97316",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "9px 0",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Get Hair Leads →
                </button>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                color: "#94a3b8",
                marginTop: 12,
              }}
            >
              🔒 For Clinics Only. We do not provide medical treatment.
            </p>
          </div>

          {/* RIGHT: Cards left + image right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.92fr 1.08fr",
              gap: 12,
              marginRight: 4,
              marginLeft: -4,
              zIndex: 1,
              minHeight: 360,
            }}
          >
            {/* LEFT CARDS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 10,
              }}
            >
              {/* Monthly Leads */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "12px 14px",
                  boxShadow: "0 10px 22px rgba(15,23,42,0.2)",
                  color: "#1e293b",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  Monthly Leads Delivered
                </p>

                <p style={{ fontSize: 40, fontWeight: 900, margin: "3px 0 0" }}>
                  248{" "}
                  <span
                    style={{ fontSize: 12, fontWeight: 700, color: "#16a34a" }}
                  >
                    ↑32%
                  </span>
                </p>

                {/* Animated Graph */}
                <div style={{ height: 34, marginTop: 8 }}>
                  <svg
                    viewBox="0 0 180 40"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <motion.polyline
                      points="5,32 32,26 56,20 79,16 103,19 126,10 152,15 175,5"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2 }}
                    />
                  </svg>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 8,
                    color: "#94a3b8",
                    marginTop: 2,
                  }}
                >
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </motion.div>

              {/* Leads by Service */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "12px 14px",
                  boxShadow: "0 10px 22px rgba(15,23,42,0.2)",
                  color: "#1e293b",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  Leads by Service
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 8,
                  }}
                >
                  {/* Animated Donut */}
                  <svg width="46" height="46" viewBox="0 0 52 52">
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="20"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="9"
                      strokeDasharray="50.3 125.6"
                      initial={{ strokeDasharray: "0 125.6" }}
                      animate={{ strokeDasharray: "50.3 125.6" }}
                      transition={{ duration: 1 }}
                    />
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="20"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="9"
                      strokeDasharray="75.4 125.6"
                      strokeDashoffset="-50.3"
                      initial={{ strokeDasharray: "0 125.6" }}
                      animate={{ strokeDasharray: "75.4 125.6" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </svg>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      fontSize: 10,
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ display: "flex", gap: 5 }}>
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#7c3aed",
                          }}
                        />
                        IVF Leads
                      </span>
                      <strong>60%</strong>
                    </span>

                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ display: "flex", gap: 5 }}>
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#f97316",
                          }}
                        />
                        Hair Transplant Leads
                      </span>
                      <strong>40%</strong>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                overflow: "hidden",
                borderRadius: "0 12px 12px 0",
                aspectRatio: "1 / 1",
                width: "100%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80"
                alt="Lead generation specialist"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section
        style={{
          maxWidth: 1400,
          margin: "-2px auto 0",
          padding: "40px 32px",
          position: "relative",
          zIndex: 6,
        }}
      >
        {/* Section title with decorative lines */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: 120,
              height: 2,
              background: "linear-gradient(to right, transparent, #6d28d9)",
            }}
          />
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#1e1b4b",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            What Happens Next?
          </h2>
          <div
            style={{
              flex: 1,
              maxWidth: 120,
              height: 2,
              background: "linear-gradient(to left, transparent, #6d28d9)",
            }}
          />
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            border: "1px solid #e2e8f0",
            padding: "24px 28px",
            boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: 16,
              alignItems: "center",
            }}
          >
            {/* IVF Flow */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {[
                {
                  label: "You Select",
                  sub: "IVF Leads",
                  icon: <PhoneIcon color="#7c3aed" />,
                  bg: "#f5f3ff",
                  border: "#ddd6fe",
                  iconBg: "#ede9fe",
                  iconBorder: "#c4b5fd",
                  textColor: "#7c3aed",
                },
                {
                  label: "We Open",
                  sub: "WhatsApp",
                  icon: <WAIcon color="#16a34a" />,
                  bg: "#f0fdf4",
                  border: "#bbf7d0",
                  iconBg: "#dcfce7",
                  iconBorder: "#86efac",
                  textColor: "#16a34a",
                },
                {
                  label: "Pre-filled Message",
                  sub: "for IVF Leads",
                  icon: <MsgIcon color="#7c3aed" />,
                  bg: "#f5f3ff",
                  border: "#ddd6fe",
                  iconBg: "#ede9fe",
                  iconBorder: "#c4b5fd",
                  textColor: "#7c3aed",
                },
                {
                  label: "Chat With Our Team",
                  sub: "Get Started",
                  icon: <UserIcon color="#7c3aed" />,
                  bg: "#f5f3ff",
                  border: "#ddd6fe",
                  iconBg: "#ede9fe",
                  iconBorder: "#c4b5fd",
                  textColor: "#7c3aed",
                },
              ].map((step, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      borderRadius: 12,
                      padding: "12px 8px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: step.iconBg,
                        border: `1px solid ${step.iconBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 8px",
                      }}
                    >
                      {step.icon}
                    </div>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#374151",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {step.label}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: step.textColor,
                        margin: 0,
                      }}
                    >
                      {step.sub}
                    </p>
                  </div>
                  {i < 3 && (
                    <div
                      style={{
                        position: "absolute",
                        right: -14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        zIndex: 2,
                      }}
                    >
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          style={{
                            width: 3,
                            height: 3,
                            borderRadius: "50%",
                            background: "#94a3b8",
                            display: "block",
                          }}
                        />
                      ))}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* OR */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 8px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid #cbd5e1",
                  background: "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#475569",
                }}
              >
                OR
              </div>
            </div>

            {/* Hair Flow */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {[
                {
                  label: "You Select",
                  sub: "Hair Transplant Leads",
                  icon: <HairIcon color="#f97316" />,
                  bg: "#fff7ed",
                  border: "#fed7aa",
                  iconBg: "#ffedd5",
                  iconBorder: "#fdba74",
                  textColor: "#ea580c",
                },
                {
                  label: "We Open",
                  sub: "WhatsApp",
                  icon: <WAIcon color="#16a34a" />,
                  bg: "#f0fdf4",
                  border: "#bbf7d0",
                  iconBg: "#dcfce7",
                  iconBorder: "#86efac",
                  textColor: "#16a34a",
                },
                {
                  label: "Pre-filled Message",
                  sub: "for Hair Leads",
                  icon: <MsgIcon color="#f97316" />,
                  bg: "#fff7ed",
                  border: "#fed7aa",
                  iconBg: "#ffedd5",
                  iconBorder: "#fdba74",
                  textColor: "#ea580c",
                },
                {
                  label: "Chat With Our Team",
                  sub: "Get Started",
                  icon: <UserIcon color="#f97316" />,
                  bg: "#fff7ed",
                  border: "#fed7aa",
                  iconBg: "#ffedd5",
                  iconBorder: "#fdba74",
                  textColor: "#ea580c",
                },
              ].map((step, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      borderRadius: 12,
                      padding: "12px 8px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: step.iconBg,
                        border: `1px solid ${step.iconBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 8px",
                      }}
                    >
                      {step.icon}
                    </div>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#374151",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {step.label}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: step.textColor,
                        margin: 0,
                      }}
                    >
                      {step.sub}
                    </p>
                  </div>
                  {i < 3 && (
                    <div
                      style={{
                        position: "absolute",
                        right: -14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        zIndex: 2,
                      }}
                    >
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          style={{
                            width: 3,
                            height: 3,
                            borderRadius: "50%",
                            background: "#94a3b8",
                            display: "block",
                          }}
                        />
                      ))}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Message Previews */}
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <div
              style={{
                border: "1.5px dashed #c4b5fd",
                background: "#f5f3ff",
                borderRadius: 12,
                padding: "12px 16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#7c3aed",
                  margin: "0 0 4px",
                }}
              >
                Message That Will Be Sent
              </p>
              <p style={{ fontSize: 13, color: "#374151", margin: 0 }}>
                Hi, I run a clinic. I need IVF patient leads.
              </p>
            </div>
            <div
              style={{
                border: "1.5px dashed #fdba74",
                background: "#fff7ed",
                borderRadius: 12,
                padding: "12px 16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#ea580c",
                  margin: "0 0 4px",
                }}
              >
                Message That Will Be Sent
              </p>
              <p style={{ fontSize: 13, color: "#374151", margin: 0 }}>
                Hi, I run a clinic. I need Hair Transplant leads.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BadgeCheck,
//   CheckCircle2,
//   CircleUserRound,
//   ClipboardList,
//   Lock,
//   MessageCircle,
//   Scissors,
//   ShieldCheck,
//   Sparkles,
//   Stethoscope,
//   Target,
//   UserRoundCheck,
//   X,
// } from "lucide-react";
// import Image from "next/image";

// const whatsappNumber = "919876543210";

// const serviceCards = [
//   {
//     key: "ivf",
//     title: "IVF Leads",
//     cta: "Get IVF Leads",
//     message: "Hi, I run a clinic. I need IVF patient leads.",
//     icon: Stethoscope,
//     accent: "violet",
//     bullets: ["High intent couples", "Consultation ready", "Location targeted"],
//   },
//   {
//     key: "hair",
//     title: "Hair Transplant Leads",
//     cta: "Get Hair Leads",
//     message: "Hi, I run a clinic. I need Hair Transplant leads.",
//     icon: Scissors,
//     accent: "orange",
//     bullets: ["Qualified male leads", "Budget ready", "Consultation bookings"],
//   },
// ] as const;

// const flowSteps = {
//   ivf: [
//     { title: "You Select", label: "IVF Leads", icon: Stethoscope },
//     { title: "We Open", label: "WhatsApp", icon: MessageCircle },
//     {
//       title: "Pre-filled Message",
//       label: "for IVF Leads",
//       icon: ClipboardList,
//     },
//     {
//       title: "Chat With Our Team",
//       label: "Get Started",
//       icon: CircleUserRound,
//     },
//   ],
//   hair: [
//     { title: "You Select", label: "Hair Transplant Leads", icon: Scissors },
//     { title: "We Open", label: "WhatsApp", icon: MessageCircle },
//     {
//       title: "Pre-filled Message",
//       label: "for Hair Leads",
//       icon: ClipboardList,
//     },
//     {
//       title: "Chat With Our Team",
//       label: "Get Started",
//       icon: CircleUserRound,
//     },
//   ],
// };

// function whatsappLink(message: string) {
//   return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
// }

// function ServiceChoice({
//   service,
// }: {
//   service: (typeof serviceCards)[number];
// }) {
//   const isViolet = service.accent === "violet";
//   const Icon = service.icon;

//   return (
//     <article
//       className={[
//         "flex min-h-[210px] flex-col rounded-lg border p-5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.55)]",
//         isViolet
//           ? "border-violet-200 bg-violet-50/80"
//           : "border-orange-200 bg-orange-50/85",
//       ].join(" ")}
//     >
//       <div
//         className={[
//           "mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg",
//           isViolet
//             ? "bg-violet-600 shadow-violet-600/25"
//             : "bg-orange-500 shadow-orange-500/25",
//         ].join(" ")}
//       >
//         <Icon className="h-8 w-8" strokeWidth={2.15} />
//       </div>
//       <h3
//         className={[
//           "text-xl font-black tracking-tight",
//           isViolet ? "text-violet-700" : "text-orange-600",
//         ].join(" ")}
//       >
//         {service.title}
//       </h3>
//       <ul className="mt-3 space-y-2 text-sm font-medium text-slate-700">
//         {service.bullets.map((item) => (
//           <li key={item} className="flex items-center gap-2">
//             <CheckCircle2
//               className={[
//                 "h-4 w-4 shrink-0",
//                 isViolet ? "text-violet-600" : "text-orange-500",
//               ].join(" ")}
//             />
//             {item}
//           </li>
//         ))}
//       </ul>
//       <a
//         href={whatsappLink(service.message)}
//         className={[
//           "mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-md px-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5",
//           isViolet
//             ? "bg-violet-600 shadow-violet-600/25 hover:bg-violet-700"
//             : "bg-orange-500 shadow-orange-500/25 hover:bg-orange-600",
//         ].join(" ")}
//       >
//         {service.cta}
//         <ArrowRight className="h-4 w-4" />
//       </a>
//     </article>
//   );
// }

// function MiniChart() {
//   return (
//     <svg viewBox="0 0 210 70" className="mt-4 h-16 w-full overflow-visible">
//       <path
//         d="M8 54 C32 45, 42 47, 58 38 S90 42, 106 32 S134 37, 148 24 S178 32, 202 12"
//         fill="none"
//         stroke="#7c3aed"
//         strokeLinecap="round"
//         strokeWidth="4"
//       />
//       {[8, 58, 106, 148, 202].map((x, index) => (
//         <circle
//           key={x}
//           cx={x}
//           cy={[54, 38, 32, 24, 12][index]}
//           r="3.5"
//           fill="#7c3aed"
//         />
//       ))}
//     </svg>
//   );
// }

// function DonutChart() {
//   return (
//     <svg width="72" height="72" viewBox="0 0 72 72" className="shrink-0">
//       <circle
//         cx="36"
//         cy="36"
//         r="24"
//         fill="none"
//         stroke="#fb923c"
//         strokeWidth="12"
//       />
//       <circle
//         cx="36"
//         cy="36"
//         r="24"
//         fill="none"
//         stroke="#7c3aed"
//         strokeDasharray="91 151"
//         strokeLinecap="round"
//         strokeWidth="12"
//         transform="rotate(-90 36 36)"
//       />
//       <circle cx="36" cy="36" r="14" fill="white" />
//     </svg>
//   );
// }

// function FlowCard({
//   step,
//   tone,
// }: {
//   step: (typeof flowSteps.ivf)[number];
//   tone: "violet" | "orange";
// }) {
//   const Icon = step.icon;
//   const isWhatsapp = step.label === "WhatsApp";
//   const color = isWhatsapp
//     ? "emerald"
//     : tone === "violet"
//       ? "violet"
//       : "orange";

//   return (
//     <div
//       className={[
//         "relative flex min-h-[116px] flex-col items-center justify-center rounded-lg border px-3 py-4 text-center",
//         color === "emerald"
//           ? "border-emerald-100 bg-emerald-50"
//           : color === "violet"
//             ? "border-violet-100 bg-violet-50"
//             : "border-orange-100 bg-orange-50",
//       ].join(" ")}
//     >
//       <div
//         className={[
//           "mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white",
//           color === "emerald"
//             ? "text-emerald-600 ring-emerald-100"
//             : color === "violet"
//               ? "text-violet-600 ring-violet-100"
//               : "text-orange-500 ring-orange-100",
//           "ring-1",
//         ].join(" ")}
//       >
//         <Icon className="h-6 w-6" />
//       </div>
//       <p className="text-[11px] font-black leading-tight text-slate-800">
//         {step.title}
//       </p>
//       <p
//         className={[
//           "mt-1 text-[11px] font-black leading-tight",
//           color === "emerald"
//             ? "text-emerald-600"
//             : color === "violet"
//               ? "text-violet-700"
//               : "text-orange-600",
//         ].join(" ")}
//       >
//         {step.label}
//       </p>
//     </div>
//   );
// }

// function FlowLane({ tone }: { tone: "violet" | "orange" }) {
//   const steps = tone === "violet" ? flowSteps.ivf : flowSteps.hair;

//   return (
//     <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_24px_1fr_24px_1fr_24px_1fr] lg:grid-cols-[1fr_26px_1fr_26px_1fr_26px_1fr]">
//       {steps.map((step, index) => (
//         <div key={`${tone}-${step.title}`} className="contents">
//           <FlowCard step={step} tone={tone} />
//           {index < steps.length - 1 && (
//             <div
//               className={[
//                 "hidden items-center justify-center sm:flex",
//                 tone === "violet" ? "text-violet-400" : "text-orange-400",
//               ].join(" ")}
//               aria-hidden
//             >
//               <span className="h-px flex-1 border-t border-dashed border-current" />
//               <ArrowRight className="h-4 w-4" />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function LeadGenerationPage() {
//   return (
//     <section className="bg-[#f5f6fb] font-sans text-slate-950">
//       <div className="relative overflow-hidden bg-[#030823] text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_0%,rgba(124,58,237,0.32),transparent_32%),linear-gradient(90deg,#020617_0%,#07143d_50%,rgba(2,6,23,0.35)_100%)]" />
//         <div className="relative mx-auto grid max-w-[1450px] grid-cols-1 items-stretch gap-5 px-5 py-8 md:px-8 lg:min-h-[430px] lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:gap-4 lg:py-6">
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45 }}
//             className="flex flex-col justify-center lg:pr-2"
//           >
//             <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-violet-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-violet-950/25">
//               <Sparkles className="h-3.5 w-3.5" />
//               For Clinics & Healthcare Providers
//             </span>
//             <h1 className="max-w-[480px] text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-[34px] xl:text-[38px]">
//               We Generate High-Quality{" "}
//               <span className="text-violet-400">IVF & Hair Transplant</span>{" "}
//               Patients for Clinics
//             </h1>
//             <p className="mt-4 max-w-[460px] text-sm font-medium leading-6 text-slate-200">
//               We help IVF and hair transplant clinics get verified, high-intent
//               patient inquiries through performance marketing.
//             </p>
//             <div className="mt-6 grid max-w-[460px] grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
//               <a
//                 href={whatsappLink(
//                   "Hi, I run a clinic. I need patient leads for my clinic.",
//                 )}
//                 className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-violet-600 px-5 text-sm font-black text-white shadow-xl shadow-violet-950/30 transition hover:bg-violet-500"
//               >
//                 Get Patients for Your Clinic
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//               <span className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-violet-400/60 bg-slate-950/30 px-4 text-xs font-black text-white">
//                 <UserRoundCheck className="h-4 w-4 text-violet-300" />
//                 Expert in Leads Generation
//               </span>
//             </div>
//             <div className="mt-6 grid max-w-[520px] grid-cols-1 gap-3 text-xs font-bold text-slate-200 sm:grid-cols-3">
//               {[
//                 { icon: Target, text: "High Intent Patient Leads" },
//                 { icon: BadgeCheck, text: "Verified & Filtered Inquiries" },
//                 { icon: ShieldCheck, text: "ROI Focused Campaigns" },
//               ].map(({ icon: Icon, text }) => (
//                 <div
//                   key={text}
//                   className="flex items-center gap-2 border-violet-300/20 sm:border-r sm:pr-3 last:border-r-0"
//                 >
//                   <Icon className="h-5 w-5 shrink-0 text-violet-400" />
//                   <span className="leading-tight">{text}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="mt-7 flex items-center gap-2 text-xs font-semibold text-slate-300">
//               <ShieldCheck className="h-4 w-4" />
//               We work with clinics, we are not a treatment provider.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 22, scale: 0.98 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.08 }}
//             className="relative z-10 self-center rounded-xl bg-white p-5 text-slate-950 shadow-[0_28px_70px_-26px_rgba(0,0,0,0.75)] ring-1 ring-slate-200 lg:-mb-10 lg:p-6"
//           >
//             <button
//               type="button"
//               aria-label="Close selector"
//               className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
//             >
//               <X className="h-5 w-5" />
//             </button>
//             <div className="px-6 text-center">
//               <h2 className="text-2xl font-black tracking-tight">
//                 Select Your Requirement
//               </h2>
//               <p className="mt-2 text-sm font-medium text-slate-600">
//                 Choose your service to get qualified patient leads
//               </p>
//             </div>
//             <div className="mt-5 grid gap-4 sm:grid-cols-2">
//               {serviceCards.map((service) => (
//                 <ServiceChoice key={service.key} service={service} />
//               ))}
//             </div>
//             <p className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
//               <Lock className="h-3.5 w-3.5 text-slate-800" />
//               For Clinics Only. We do not provide medical treatment.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.14 }}
//             className="relative min-h-[330px] overflow-hidden rounded-none lg:-mr-8 lg:-my-6"
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
//               alt="Marketing specialist reviewing clinic lead reports"
//               fill
//               className="object-cover object-center opacity-95"
//               sizes="(max-width: 1024px) 100vw, 34vw"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#030823] via-[#030823]/20 to-transparent lg:from-transparent" />
//             <div className="absolute left-4 top-10 w-[min(78vw,245px)] rounded-lg bg-white p-5 text-slate-950 shadow-2xl lg:left-2 xl:left-5">
//               <p className="text-xs font-bold text-slate-500">
//                 Monthly Leads Delivered
//               </p>
//               <div className="mt-2 flex items-end gap-3">
//                 <span className="text-4xl font-black leading-none">248</span>
//                 <span className="pb-1 text-sm font-black text-emerald-600">
//                   +32%
//                 </span>
//               </div>
//               <MiniChart />
//               <div className="mt-1 flex justify-between text-[10px] font-semibold text-slate-400">
//                 {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
//                   <span key={month}>{month}</span>
//                 ))}
//               </div>
//             </div>
//             <div className="absolute bottom-10 left-4 w-[min(78vw,265px)] rounded-lg bg-white p-5 text-slate-950 shadow-2xl lg:left-2 xl:left-5">
//               <p className="text-xs font-bold text-slate-600">
//                 Leads by Service
//               </p>
//               <div className="mt-4 flex items-center gap-4">
//                 <DonutChart />
//                 <div className="min-w-0 flex-1 space-y-3 text-[11px] font-bold text-slate-700">
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="flex items-center gap-2">
//                       <span className="h-2.5 w-2.5 rounded-full bg-violet-600" />
//                       IVF Leads
//                     </span>
//                     <strong>60%</strong>
//                   </div>
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="flex items-center gap-2">
//                       <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
//                       Hair Transplant Leads
//                     </span>
//                     <strong>40%</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <div className="mx-auto max-w-[1450px] px-5 py-9 md:px-8">
//         <div className="mb-7 flex items-center justify-center gap-5">
//           <span className="h-px w-20 bg-slate-400" />
//           <h2 className="text-center text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
//             What Happens Next?
//           </h2>
//           <span className="h-px w-20 bg-slate-400" />
//         </div>

//         <div className="grid items-start gap-7 lg:grid-cols-[1fr_auto_1fr]">
//           <div>
//             <FlowLane tone="violet" />
//             <div className="mx-auto mt-7 max-w-[370px] rounded-md border border-dashed border-violet-200 bg-violet-50/70 px-5 py-4 text-center">
//               <p className="text-xs font-black text-violet-700">
//                 Message That Will Be Sent
//               </p>
//               <p className="mt-3 text-sm font-medium text-slate-700">
//                 Hi, I run a clinic. I need IVF patient leads.
//               </p>
//             </div>
//           </div>

//           <div className="hidden h-[140px] w-px bg-slate-200 lg:block" />
//           <div className="flex justify-center lg:hidden">
//             <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm">
//               OR
//             </span>
//           </div>
//           <div className="relative hidden self-center lg:flex">
//             <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-black text-slate-700 shadow-sm">
//               OR
//             </span>
//           </div>

//           <div>
//             <FlowLane tone="orange" />
//             <div className="mx-auto mt-7 max-w-[410px] rounded-md border border-dashed border-orange-200 bg-orange-50/70 px-5 py-4 text-center">
//               <p className="text-xs font-black text-orange-600">
//                 Message That Will Be Sent
//               </p>
//               <p className="mt-3 text-sm font-medium text-slate-700">
//                 Hi, I run a clinic. I need Hair Transplant leads.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

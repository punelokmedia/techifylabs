import s from "./landing.module.css";

export default function ClinicIllustration({ meeting = false }: { meeting?: boolean }) {
  return <svg className={s.illustration} viewBox="0 0 420 390" role="img" aria-label={meeting ? "Clinic team meeting by video" : "Clinic, care team, and prospective patients"}>
    <defs><linearGradient id={meeting ? "meet-bg" : "clinic-bg"} x2="0.5" y2="1"><stop stopColor="#f1f6fc" /><stop offset="1" stopColor="#dce6f2" /></linearGradient></defs>
    <rect x="1" y="1" width="418" height="388" rx="17" fill={`url(#${meeting ? "meet-bg" : "clinic-bg"})`} stroke="#d3e0f0" />
    {meeting ? <>
      <rect x="40" y="54" width="340" height="250" rx="15" fill="white" stroke="#aec8e9" />
      <rect x="40" y="54" width="340" height="30" rx="12" fill="#2161c6" />
      <rect x="60" y="103" width="139" height="172" rx="12" fill="#dae9fa" />
      <rect x="215" y="103" width="145" height="172" rx="12" fill="#d7eee9" />
      <circle cx="129" cy="151" r="25" fill="#f3cbb0" /><path d="M87 275v-27c0-52 85-52 85 0v27" fill="white" />
      <circle cx="287" cy="151" r="25" fill="#eab795" /><path d="M244 275v-27c0-52 85-52 85 0v27" fill="#2161c6" />
      <rect x="150" y="317" width="120" height="24" rx="12" fill="#1e9e9f" /><circle cx="210" cy="329" r="6" fill="white" />
    </> : <>
      <circle cx="330" cy="76" r="37" fill="#f6f9fc" />
      <rect x="49" y="58" width="201" height="201" rx="9" fill="white" stroke="#adc5e3" />
      <rect x="49" y="58" width="201" height="36" rx="8" fill="#2161c6" />
      <path d="M137 60h14v7h7v16h-7v6h-14v-6h-8V67h8z" fill="white" />
      {[67,123,179].map(x => <rect key={x} x={x} y="111" width="37" height="37" rx="3" fill="#cfe1f8" />)}
      <rect x="67" y="167" width="37" height="37" rx="3" fill="#cfe1f8" /><rect x="179" y="167" width="37" height="37" rx="3" fill="#cfe1f8" /><rect x="123" y="167" width="37" height="92" rx="3" fill="#209e9f" />
      <path d="M30 264h360" stroke="#b8cde5" strokeWidth="10" strokeLinecap="round" />
      <circle cx="274" cy="204" r="21" fill="#f2c5a5" /><path d="M253 199c0-24 43-24 43 0-12-9-30-9-43 0" fill="#2b3d53" /><path d="M240 264v-38c0-42 67-42 67 0v38z" fill="white" stroke="#afcaef" strokeWidth="1.5" /><path d="m274 207-10 21 10 36 10-36z" fill="#dce8f9" /><circle cx="269" cy="234" r="6" fill="#dce8f9" stroke="#1e9e9f" strokeWidth="2" />
      <circle cx="347" cy="217" r="18" fill="#e8b593" /><path d="M329 213c0-23 37-23 36 0-10-7-24-7-36 0" fill="#69472d" /><path d="M321 264v-29c0-39 52-39 52 0v29z" fill="#80b2e7" />
      <circle cx="97" cy="317" r="16" fill="#efc6ab" /><path d="M81 314c0-21 32-21 32 0-9-5-23-5-32 0" fill="#8a5835" /><path d="M75 362v-25c0-30 45-30 45 0v25z" fill="#f3a4b9" />
      <circle cx="153" cy="319" r="16" fill="#efc6ab" /><path d="M137 315c0-20 32-20 32 0-9-6-23-6-32 0" fill="#304258" /><path d="M131 362v-25c0-30 45-30 45 0v25z" fill="#2161c6" />
      <rect x="209" y="306" width="177" height="56" rx="10" fill="white" stroke="#b5cdec" strokeWidth="1.5" /><circle cx="235" cy="334" r="11" fill="#1e9e9f" /><path d="m230 334 4 4 7-9" fill="none" stroke="white" strokeWidth="2" /><path d="M258 327h105" stroke="#485e76" strokeWidth="8" strokeLinecap="round" /><path d="M258 342h70" stroke="#a3b0c0" strokeWidth="6" strokeLinecap="round" />
    </>}
  </svg>;
}

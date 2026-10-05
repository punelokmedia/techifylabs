import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_IDS = ["GTM-5XXP9PQ5", "GTM-KK6SSDTS"];
const META_PIXEL_IDS = ["2088379125382678", "2055207088462442"];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techify Labs - Digital growth studio",
  description:
    "Performance marketing, web, and growth strategy - Meta, Google, Amazon, SEO, and more.",
  icons: {
    icon: "/techify-favicon-icon.jpeg",
    apple: "/icons/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip bg-[#f4f6f9] text-slate-900">
        <noscript>
          {GTM_IDS.map((gtmId) => (
            <iframe
              key={gtmId}
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title={`Google Tag Manager ${gtmId}`}
            />
          ))}
        </noscript>
        <noscript>
          {META_PIXEL_IDS.map((pixelId) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={pixelId}
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          ))}
        </noscript>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
${META_PIXEL_IDS.map((pixelId) => `fbq('init', '${pixelId}');`).join("\n")}
fbq('track', 'PageView');`}
        </Script>
        {GTM_IDS.map((gtmId) => (
          <Script
            key={gtmId}
            id={`google-tag-manager-${gtmId}`}
            strategy="afterInteractive"
          >
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ))}
      </body>
    </html>
  );
}

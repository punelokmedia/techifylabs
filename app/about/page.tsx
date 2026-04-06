import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About | Techify — Digital growth studio",
  description:
    "Techifylavs Pvt. Ltd., UG Floor, Office No. 67-68 Clover Hills Plaza, NIBM Road, Kondhwa, Pune - 411048. Performance-led studio for paid media, creative, SEO, and commerce.",
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import CareersPage from "../components/CareersPage";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Careers | Techify Labs - Join the growth studio",
  description:
    "Open roles at Techify Labs in Pune. Performance marketing, design, engineering, and client success - hybrid work with real brand accounts.",
};

export default function Careers() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CareersPage />
      </main>
      <Footer />
    </div>
  );
}

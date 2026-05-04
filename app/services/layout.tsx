import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* <div className="flex-1">{children}</div> */}
      {/* <main id="main-content" className="pt-[var(--navbar-h,7rem)]">
        {children}
      </main> */}
      <main className="pt-28 md:pt-32 lg:pt-36">{children}</main>
      <Footer />
    </div>
  );
}

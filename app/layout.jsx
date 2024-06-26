import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { MeshGradient } from "@/public/Icons/MeshGradient";
import { ThemeProvider } from "@/material/ui";
import faqs from "@/data/faqs";
import FAQ from "@/components/FAQ";
import MoreFAQ from "@/components/MoreFAQ";
import Sponsors from "@/components/Sponsors";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MLSA Health Tech Fest",
  description: "MLSA Health Tech Fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/Images/mlsax2.png"
          type="image/png"
          // sizes="<generated>"
        />
      </head>

      <body className="bg-primary mt-3">
        <div className="w-[100%]">
          <Navbar />
        </div>

        <main className={inter.className} id="main-content">
          <ThemeProvider>
            {children}
            <FAQ faqs={faqs} />
            <MoreFAQ />
            <Sponsors />
            <RSVP />
            <Footer />
          </ThemeProvider>
        </main>

        <div className="top-0 -mt-20 absolute -z-10">
          <MeshGradient />
        </div>
      </body>
    </html>
  );
}

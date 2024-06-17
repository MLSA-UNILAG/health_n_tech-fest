import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { MeshGradient } from "@/public/icons/MeshGradient";
import { ThemeProvider } from "@/material/ui";
import faqs from "@/data/faqs"
import FAQ from '@/components/FAQ'
import MoreFAQ from '@/components/MoreFAQ';
import Sponsors from '@/components/Sponsors'
import RSVP from '@/components/RSVP'  
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MLSA Health Tech Fest",
  description: "MLSA Health Tech Fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-primary">
        <div className="w-full px-12 pt-6">
          <Navbar />
        </div>

        <main
          className={inter.className}
          id="main-content"
        >
          <ThemeProvider>{children}</ThemeProvider>
          <FAQ faqs={faqs} />
          <MoreFAQ />
          <Sponsors />
          <RSVP />
          <Footer />

        </main>

        <div className="top-0 absolute -z-10">
          <MeshGradient />
        </div>
      </body>
    </html>
  );
}

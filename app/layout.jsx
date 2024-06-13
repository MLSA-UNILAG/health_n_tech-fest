import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { MeshGradient } from "@/public/Icons/MeshGradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MLSA Health Tech Fest",
  description: "MLSA Health Tech Fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-primary my-3 mx-12">
        <div className="w-[100%]">
          <Navbar />
        </div>

        <main
          className={inter.className}
          id="main-content"
        >
          {children}
        </main>

        <div className="top-0 absolute -z-10">
          <MeshGradient />
        </div>
      </body>
    </html>
  );
}

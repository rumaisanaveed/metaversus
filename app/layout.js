import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar, Footer } from "@/components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Metaversus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body className={inter.className}>
        <div className="bg-slate-800 overflow-hidden">
          <Navbar />
          <Hero />
          <div className="relative">
            <About />
            <div className="gradient-03 z-0" />
            <Explore />
          </div>
          <div className="relative">
            <GetStarted />
            <div className="gradient-04 z-0" />
            <WhatsNew />
          </div>
          <World />
          <div className="relative">
            <Insights />
            <div className="gradient-04 z-0" />
            <Feedback />
          </div>
          <Footer />

          {children}
        </div>
      </body>
    </html>
  );
}

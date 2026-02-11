"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Trainers from "@/components/Trainers";
import Gallery from "@/components/Gallery";
import Motivation from "@/components/Motivation";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-neon selection:text-black">
      <Navbar />
      <Hero />
      <Motivation text="NO EXCUSES" image="/images/motivation-1.jpg" />
      <Services /> {/* Renamed to Programs visually */}
      <Motivation text="ONLY RESULTS" image="/images/motivation-2.jpg" />
      <Gallery />
      <Trainers />
      <Pricing />
      <CTA />

      <footer className="py-8 bg-black border-t border-white/10 text-center text-white/40 font-montserrat text-sm">
        <p>&copy; {new Date().getFullYear()} IRON PULSE. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}

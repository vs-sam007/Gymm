"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import SmartFitness from "@/components/SmartFitness";
import Transformation from "@/components/Transformation";
import Trainers from "@/components/Trainers";
import ClassSchedule from "@/components/ClassSchedule";
import LocationAndApp from "@/components/LocationAndApp";
import CTA from "@/components/CTA";
import HorizontalTicker from "@/components/HorizontalTicker";


export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground relative overflow-hidden">

      {/* Global Background Blobs for Density */}
      <div className="bg-blob top-[15%] -left-[10%] opacity-10" />
      <div className="bg-blob top-[45%] -right-[10%] opacity-[0.07]" />
      <div className="bg-blob top-[75%] -left-[10%] opacity-[0.05]" />

      <Navbar />
      <Hero />

      {/* Primary Ticker for Social Proof */}
      <HorizontalTicker />

      {/* Main Narrative Cycle */}
      <ScrollStory
        image="/images/strength-male-dumbbells.jpg"
        title="THE HEIGHT OF POWER"
        subtitle="Our institutional methodology is engineered for those who seek the pinnacle of physical architecture."
        accent="PILLAR I: ARCHITECTURE"
      />

      <Services />

      <ScrollStory
        image="/images/hero-gym-dark.jpg"
        title="BEYOND RESILIENCE"
        subtitle="Mastery is not a destination. It is a perpetual state of physiological evolution."
        accent="PILLAR II: GENESIS"
      />

      <SmartFitness />

      <ScrollStory
        image="/images/hiit-battle-ropes.jpg"
        title="KINETIC MASTERY"
        subtitle="Unlocking the neurological pathways to explosive performance and sustained longevity."
        accent="PILLAR III: EVOLUTION"
      />

      <Pricing />

      {/* Secondary Storytelling Moment */}
      <ScrollStory
        image="/images/gallery-4.jpg"
        title="THE ELITE SANCTUARY"
        subtitle="Every detail in Iron Pulse is curated to inspire the relentless pursuit of greatness."
        accent="PILLAR IV: DOMINION"
      />

      <Transformation />
      <Trainers />
      <ClassSchedule />
      <LocationAndApp />
      <CTA />
    </main>
  );
}

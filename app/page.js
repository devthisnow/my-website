import HeroSection from "./components/hero-section";
import Skillset from "./components/skillset-section";
import TechStack from "./components/tech-stack-section";
import Projects from "./components/projects-section";
import PointOD from "./components/point-of-difference";
import ReasonsToWork from "./components/reasoning-section";
import ContactWithAI from "./components/contact-with-ai-section";
import ScrollingQuote from "./components/scrolling-quote-section";
import ContactMe from "./components/contact-section";
import { MobileMenu, Footer } from "./components/top-menu-n-footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative top-0 left-0 z-0 w-auto snap-y snap-mandatory min-w-[210px] ">
      {/* overflow-y-auto h-[100vh] "> */}
      <HeroSection name="Hero section" />
      <PointOD name="Point of difference" />
      <Projects name="Portfolio" />
      <Skillset name="Skillset and tech-stack" />
      <ScrollingQuote name="Quote" />
      <ReasonsToWork />
      <ContactWithAI name="Contact with AI" />
      <ContactMe />
    </main>
  );
}

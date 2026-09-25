import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsBar } from "@/components/home/StatsBar";
import {CommunitySection} from "@/components/home/CommunitySection";
import {CtaBanner} from "@/components/home/CtaBanner";
import {Footer} from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <StatsBar />
      <CommunitySection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
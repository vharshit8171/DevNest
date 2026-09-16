import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/ui/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
    </main>
  );
}
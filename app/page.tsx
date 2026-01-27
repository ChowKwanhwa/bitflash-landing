import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Features } from "@/components/Features";
import { Ecosystem } from "@/components/Ecosystem";
import { Technology } from "@/components/Technology";
import { Roadmap } from "@/components/Roadmap";
import { Tokenomics } from "@/components/Tokenomics";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Vision />
      <Features />
      <Ecosystem />
      <Technology />
      <Tokenomics />
      <Roadmap />
    </main>
  );
}

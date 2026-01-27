import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { Tokenomics } from "@/components/Tokenomics";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
    </main>
  );
}

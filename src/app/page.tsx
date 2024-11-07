import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] py-10 md:py-0 overflow-hidden">
    <HeroSection/>
    </main>
  );
}

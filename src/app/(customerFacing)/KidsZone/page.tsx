import type { Metadata } from "next";
import GamesSection from "./components/sections/GamesSection";
import HeroSection from "./components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Kids Zone | Free Games for Kids at Venice Pizza House",
  description:
    "Venice Pizza House is a family and kids restaurant in Ore City, TX. While you wait for pizza, pasta, and wings, play free games in our Kids Zone.",
  keywords: [
    "kids restaurant Ore City",
    "family restaurant Ore City",
    "kids games Venice Pizza House",
  ],
  alternates: {
    canonical: "/KidsZone",
  },
  openGraph: {
    title: "Kids Zone | Venice Pizza House Ore City",
    description:
      "A family-friendly Ore City restaurant with a Kids Zone full of free games.",
    url: "/KidsZone",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <main>
        <HeroSection />
        <GamesSection />
      </main>
    </div>
  );
};

export default Index;

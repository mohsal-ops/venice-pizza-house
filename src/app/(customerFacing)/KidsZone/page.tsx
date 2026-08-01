import type { Metadata } from "next";
import GamesSection from "./components/sections/GamesSection";
import HeroSection from "./components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Kids Zone | Free Games for Kids at Pam's Kitchen",
  description:
    "Pam's Kitchen is a family and kids restaurant in Houston, TX. While you wait for jerk chicken and wings, play free games in our Kids Zone.",
  keywords: [
    "kids restaurant Houston",
    "family restaurant Houston",
    "kids games Pam's Kitchen",
  ],
  alternates: {
    canonical: "/KidsZone",
  },
  openGraph: {
    title: "Kids Zone | Pam's Kitchen Houston",
    description:
      "A family-friendly Houston restaurant with a Kids Zone full of free games.",
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

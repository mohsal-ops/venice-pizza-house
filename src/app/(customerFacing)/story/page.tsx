import type { Metadata } from "next";
import db from "@/db/db";
import StoryClient from "./_components/StoryClient";
import { getSiteImage } from "@/lib/getSiteImages";

export const metadata: Metadata = {
  title: "Our Story | Pizza, Pasta & Wings in Ore City, TX",
  description:
    "The story behind Venice Pizza House - a family-owned kitchen in Ore City, TX serving fresh pizzas, pastas, wings, and daily specials.",
  keywords: [
    "Venice Pizza House Ore City story",
    "family owned restaurant Ore City",
    "homemade food Ore City history",
    "Venice Pizza House owners",
  ],
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "Our Story | Venice Pizza House Ore City",
    description:
      "The family story behind Venice Pizza House - homemade comfort food in Ore City, TX.",
    url: "/story",
  },
};

export default async function Page() {
  const [partners, storyHero, storyOrigin, storyClosing] = await Promise.all([
    db.partner.findMany({ orderBy: { order: "asc" } }),
    getSiteImage("story_hero"),
    getSiteImage("story_origin"),
    getSiteImage("story_closing"),
  ]);

  return (
    <StoryClient
      partners={partners}
      images={{ story_hero: storyHero, story_origin: storyOrigin, story_closing: storyClosing }}
    />
  );
}
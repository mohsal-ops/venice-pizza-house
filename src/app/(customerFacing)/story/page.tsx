import type { Metadata } from "next";
import db from "@/db/db";
import StoryClient from "./_components/StoryClient";
import { getSiteImage } from "@/lib/getSiteImages";

export const metadata: Metadata = {
  title: "Our Story | Homemade Comfort Food in Friona, TX",
  description:
    "The story behind Pam's Kitchen - a family-owned kitchen in Friona, TX serving fresh homemade breakfast, burgers, and daily specials.",
  keywords: [
    "Pam's Kitchen Friona story",
    "family owned restaurant Friona",
    "homemade food Friona history",
    "Pam's Kitchen owners",
  ],
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "Our Story | Pam's Kitchen Friona",
    description:
      "The family story behind Pam's Kitchen - homemade comfort food in Friona, TX.",
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
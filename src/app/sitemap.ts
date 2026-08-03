import type { MetadataRoute } from "next";
import db from "@/db/db";

const BASE_URL = "https://venicepizzahouseorecity.com";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/Menu", priority: 0.9, changeFrequency: "daily" },
  { path: "/catering", priority: 0.8, changeFrequency: "weekly" },
  { path: "/GiftCard", priority: 0.7, changeFrequency: "monthly" },
  { path: "/story", priority: 0.6, changeFrequency: "monthly" },
  { path: "/Blog", priority: 0.7, changeFrequency: "daily" },
  { path: "/KidsZone", priority: 0.5, changeFrequency: "monthly" },
  { path: "/rewards", priority: 0.5, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let posts: { id: string; createdAt: Date }[] = [];
  try {
    posts = await db.post.findMany({
      select: { id: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    // Don't let a DB hiccup (or an un-migrated database) fail the whole build.
    // Fall back to the static routes only.
    console.error("sitemap: failed to load posts, emitting static routes only", error);
    return staticEntries;
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/Blog/${post.id}/post`,
    lastModified: post.createdAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}

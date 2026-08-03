import type { Metadata } from "next";
import GiftCardPageClient from "./_components/GiftCardPageClient";
import { getLogoUrl } from "@/lib/siteSettings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gift Cards | Send Pizza & Wings to a Friend",
  description:
    "Buy a Venice Pizza House gift card online - perfect for wood-fired pizza, wings, and Italian food lovers in Ore City, TX. Instant delivery, no expiration.",
  keywords: [
    "restaurant gift card Ore City",
    "Venice Pizza House gift card",
    "wood-fired pizza gift card",
  ],
  alternates: {
    canonical: "/GiftCard",
  },
  openGraph: {
    title: "Gift Cards | Venice Pizza House Ore City",
    description:
      "Send a Venice Pizza House gift card instantly - great for pizza and wings lovers in Ore City, TX.",
    url: "/GiftCard",
  },
};

export default async function Page() {
  const logoUrl = await getLogoUrl();
  return <GiftCardPageClient logoUrl={logoUrl} />;
}

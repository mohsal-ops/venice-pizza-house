import type { Metadata } from "next";
import GiftCardPageClient from "./_components/GiftCardPageClient";
import { getLogoUrl } from "@/lib/siteSettings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gift Cards | Send Jerk Chicken & Wings to a Friend",
  description:
    "Buy a Pam's Kitchen gift card online - perfect for jerk chicken, wings, and Caribbean-inspired food lovers in Houston, TX. Instant delivery, no expiration.",
  keywords: [
    "restaurant gift card Houston",
    "Pam's Kitchen gift card",
    "jerk chicken gift card",
  ],
  alternates: {
    canonical: "/GiftCard",
  },
  openGraph: {
    title: "Gift Cards | Pam's Kitchen Houston",
    description:
      "Send a Pam's Kitchen gift card instantly - great for jerk chicken and wings lovers in Houston, TX.",
    url: "/GiftCard",
  },
};

export default async function Page() {
  const logoUrl = await getLogoUrl();
  return <GiftCardPageClient logoUrl={logoUrl} />;
}

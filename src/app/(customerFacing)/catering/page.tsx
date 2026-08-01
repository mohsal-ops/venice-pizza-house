import type { Metadata } from "next";
import CateringPageClient from "./_components/CateringPageClient";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Catering | Homemade Comfort Food Catering for ${SITE_CONFIG.city} Events`,
  description: `${SITE_CONFIG.name} caters all-day breakfast, burgers, homemade pizza, wings, and daily specials for parties, corporate events, and gatherings in ${SITE_CONFIG.city}, ${SITE_CONFIG.state}. Request a custom quote today.`,
  keywords: [
    `catering ${SITE_CONFIG.city}`,
    `breakfast catering ${SITE_CONFIG.city}`,
    `burger catering ${SITE_CONFIG.city}`,
    `event catering ${SITE_CONFIG.city} ${SITE_CONFIG.state}`,
    `party catering ${SITE_CONFIG.city}`,
  ],
  alternates: {
    canonical: "/catering",
  },
  openGraph: {
    title: `Catering | ${SITE_CONFIG.name} ${SITE_CONFIG.city}`,
    description: `Homemade comfort-food catering - breakfast, burgers, pizza, wings, and daily specials for events in ${SITE_CONFIG.city}, ${SITE_CONFIG.state}.`,
    url: "/catering",
  },
};

export default function Page() {
  return <CateringPageClient />;
}

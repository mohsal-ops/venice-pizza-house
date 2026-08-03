"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/siteConfig";

// Social feed section. Config-driven: uses the Instagram Behold widget when a
// feed id is set, otherwise just links to whichever social profile the site
// has (Instagram first, then Facebook). Nothing is hardcoded per-brand.
export default function InstagramFeed() {
  const beholdFeedId = SITE_CONFIG.beholdFeedId;
  const igUrl = SITE_CONFIG.instagramUrl;
  const fbUrl = SITE_CONFIG.facebookUrl;
  const network = igUrl ? "Instagram" : "Facebook";
  const socialUrl = igUrl || fbUrl || "";
  const socialLabel = SITE_CONFIG.instagram
    ? `@${SITE_CONFIG.instagram}`
    : SITE_CONFIG.name;

  useEffect(() => {
    if (!beholdFeedId) return;
    if (document.querySelector('script[src*="behold.so"]')) return;
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    document.head.appendChild(script);
  }, [beholdFeedId]);

  // Don't render the section at all if there's no social presence configured.
  if (!socialUrl && !beholdFeedId) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="uppercase tracking-widest text-[#f4b400] text-sm">
            Follow Us
          </span>
          <h2 className="text-3xl font-bold mt-1">Latest from {network}</h2>
        </div>
        {socialUrl && (
          <a
            href={socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-full px-4 py-2 hover:border-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            {socialLabel}
          </a>
        )}
      </div>

      {/* Behold Widget - only when an Instagram feed is configured */}
      {beholdFeedId && (
        <behold-widget feed-id={beholdFeedId}></behold-widget>
      )}
    </section>
  );
}

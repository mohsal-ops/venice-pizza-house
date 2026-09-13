import { atLeast, type PackageTier } from "./packages";

// Product tier this client is on. The panel patches this line per client at
// provision time. It gates which site + admin sections show (via `minTier`
// below and the admin nav). Defaults to PRO so the template/demo and any
// pre-tier client that lacks this line keep the full feature set.
const PACKAGE_TIER: PackageTier = "PRO";

// Optional sections. Flip a flag to false to remove that section from the
// navbar + footer (the new-project tool sets these per client). The route
// still exists, it is simply not linked. Tier gating (`minTier`) is layered on
// top: a section shows only when its flag is on AND the client's tier reaches
// it, so FEATURES acts as a per-client on/off *within* the tier's ceiling.
const FEATURES = {
  catering: true,
  giftCard: false,
  rewards: true,
  blog: false,
};

type FeatureKey = keyof typeof FEATURES;
type NavLink = { label: string; href: string; feature?: FeatureKey; minTier?: PackageTier };

const ALL_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/Menu" },
  { label: "Catering", href: "/catering", feature: "catering", minTier: "STANDARD" },
  { label: "Gift Cards", href: "/GiftCard", feature: "giftCard", minTier: "STANDARD" },
  { label: "Rewards", href: "/rewards", feature: "rewards", minTier: "PRO" },
  { label: "Press", href: "/Blog", feature: "blog", minTier: "STANDARD" },
  { label: "Our Story", href: "/story" },
];

const ALL_FOOTER_LINKS: NavLink[] = [
  { label: "Menu", href: "/Menu" },
  { label: "Catering", href: "/catering", feature: "catering", minTier: "STANDARD" },
  { label: "Gift Cards", href: "/GiftCard", feature: "giftCard", minTier: "STANDARD" },
  { label: "Terms", href: "/terms" },
];

// A link shows when its feature flag is on (or it has none) AND the client's
// tier reaches its minTier (or it has none).
const enabled = (l: NavLink) =>
  (!l.feature || FEATURES[l.feature]) && (!l.minTier || atLeast(PACKAGE_TIER, l.minTier));
const pickLink = ({ label, href }: NavLink) => ({ label, href });

export const SITE_CONFIG = {
  // Brand
  name: "Venice Pizza House",
  tagline: "GREAT FOOD AND A FAMILY FRIENDLY ATMOSPHERE",
  subTagline:
    "Fresh pizzas, authentic pastas, crispy wings, salads, and subs in Ore City, TX.",
  legalName: "Venice Pizza House LLC",
  trademark: "Venice Pizza House",

  // Admin intro animation: "burger" (fast food) | "coffee" (café) | "pizza" (pizzeria)
  loaderStyle: "pizza",

  defaultTheme: "light" as "light" | "dark",

  // Main call-to-action button label
  menuCtaLabel: "Order online",

  // Loyalty / rewards program
  loyalty: {
    incentive: "free pizza slice rewards, family meal discounts, and exclusive pasta deals",
  },

  // Inline catering menu shown on /catering
  catering: {
    pdfUrl: "",
    animation: "pizza",
    menu: [
      {
        title: "Specialty Pizza & Wings Trays",
        note: "All pizzas and wings made fresh to order with authentic high-quality ingredients",
        items: [
          { name: "Party Size Specialty Pizza Package (3 Large)", qty: "Serves 10-12", price: 65 },
          { name: "Jumbo Party Wings Tray (50 pcs)", qty: "Serves 10-12", price: 60 },
          { name: "Oven-Baked Pasta Platter (Lasagna or Ziti)", qty: "Serves 8-10", price: 70 },
        ],
      },
      {
        title: "Salads, Subs & Desserts",
        items: [
          { name: "Garden / Caesar Salad Tray", qty: "Serves 10-12", price: 35 },
          { name: "Gourmet Sub Platter (Assorted)", qty: "Serves 8-10", price: 55 },
          { name: "Cannoli & Dessert Tray", qty: "Serves 10-12", price: 30 },
        ],
      },
    ] as { title: string; note?: string; items: { name: string; qty?: string; price: number }[] }[],
  },

  // Contact & Location
  address: "504 US HWY 259, Ore City, TX 75683",
  street: "504 US HWY 259",
  city: "Ore City",
  state: "TX",
  zip: "75683",
  phone: "(903) 968-1310",
  email: "roma.pizza@yahoo.com",
  cateringEmail: "roma.pizza@yahoo.com",
  timezone: "America/Chicago",
  lat: 32.8037983,
  lng: -94.7191372,
  googleMapsUrl:
    "https://www.google.com/maps/place/Venice+Pizza/@32.8038028,-94.7217121,17z/data=!3m1!4b1!4m6!3m5!1s0x86366d2822164837:0x9f1b37f49ed086d5!8m2!3d32.8037983!4d-94.7191372!16s%2Fg%2F11jn1q9h6v?entry=ttu",

  // Social
  instagram: "",
  instagramUrl: "",
  facebookUrl: "https://www.facebook.com/profile.php?id=61572209801747",
  tiktokUrl: "",
  beholdFeedId: "",

  // SEO
  siteUrl: "https://venicepizzahouseorecity.com",
  seoTitle: "Venice Pizza House | Pizza, Pasta & Wings in Ore City, TX",
  seoDescription:
    "Venice Pizza House serves fresh pizzas, authentic pastas, crispy wings, salads, and subs in Ore City, TX. Dine-in, takeout, and delivery available.",
  seoKeywords: [
    "pizza Ore City TX",
    "pasta Ore City",
    "wings Ore City",
    "family restaurant Ore City",
    "pizza delivery Ore City",
    "Venice Pizza House",
  ],
  ogImage: "/general/generalPages/mainImage.jpg",

  // Structured-data / business info
  cuisines: ["Pizza", "Italian", "Pasta", "Wings"],
  priceRange: "$$",

  // Outreach conversion layer
  outreach: {
    enabled: true,
    discountReason: "review",
    trialLengthDays: 14,
    calendlyUrl: "https://calendly.com/popdeveloper54/10-minute-meet",
    signalKey: "venice-pizza-house",
    savings: { estimatedOrdersPerDay: 30, avgOrderValue: 24, commissionPct: 20 },
  },

  // Colors (Deep Crimson, Warm Gold & Slate Accent)
  primaryColor: "#8b1a1a",
  secondaryColor: "#c9a227",
  accentColor: "#2f2f2f",

  // Hours (used for open/closed status) - 24h local time (Open 11 AM - 9 PM Sun-Thu, 11 AM - 10 PM Fri-Sat)
  hours: [
    { day: "Sunday", open: 11, close: 21 },
    { day: "Monday", open: 11, close: 21 },
    { day: "Tuesday", open: 11, close: 21 },
    { day: "Wednesday", open: 11, close: 21 },
    { day: "Thursday", open: 11, close: 21 },
    { day: "Friday", open: 11, close: 22 },
    { day: "Saturday", open: 11, close: 22 },
  ] as { day: string; open: number | null; close: number | null }[],

  // Home page text sections
  home: {
    heroHeadline: "FRESH PIZZA, MADE YOUR WAY",
    heroSubHeadline: "Served daily in Ore City.",
    heroSlides: [
      {
        image: "/general/generalPages/mainImage.jpg",
        headline: "FRESH PIZZA, MADE YOUR WAY",
        subheadline: "Served daily in Ore City.",
        ctaLabel: "Order online",
        ctaHref: "/Menu",
      },
      {
        image: "/general/generalPages/enjoy.jpg",
        headline: "Authentic Pastas & Crispy Wings",
        subheadline: "Great food and a family friendly atmosphere.",
        ctaLabel: "See Menu",
        ctaHref: "/Menu",
      },
      {
        image: "/general/generalPages/vibe.jpg",
        headline: "Dine-In, Takeout & Local Delivery",
        subheadline: "Serving Ore City, Diana, Lone Star, and surrounding areas.",
        ctaLabel: "See Catering",
        ctaHref: "/catering",
      },
    ] as { image: string; headline: string; subheadline: string; ctaLabel: string; ctaHref: string }[],
    galleryTitle: "Venice Pizza House",
    gallerySubtitle: "Great food and a family friendly atmosphere",
    distinctiveFeatures: [
      {
        title: "Crispy, Golden & Made Fresh",
        description:
          "From classic pepperoni to loaded specialty pies, every pizza is made fresh to order with high quality ingredients.",
        image: "/general/generalPages/enjoy.jpg",
      },
      {
        title: "More Than Just Pizza",
        description:
          "Authentic pastas, crispy wings, fresh salads, and hearty subs—something for everyone at the table.",
        image: "/general/generalPages/vibe.jpg",
      },
    ],
    featuring: [
      { name: "Dine-in", icon: "MdOutlineFamilyRestroom" },
      { name: "Takeout", icon: "PiPackageFill" },
      { name: "Delivery", icon: "BsBagCheckFill" },
      { name: "Family Friendly", icon: "MdOutlineStorefront" },
    ],
    faq: [
      {
        question: "What are you known for?",
        answer:
          "Fresh pizzas, authentic pastas, crispy wings, and great food in a family friendly atmosphere.",
      },
      {
        question: "What meals do you serve?",
        answer:
          "We serve specialty pizzas, oven-baked pastas, wings, fresh salads, and hearty subs.",
      },
      {
        question: "Do you deliver?",
        answer:
          "Yes! We deliver to Ore City, Diana, Lone Star, and surrounding areas.",
      },
      {
        question: "Where are you located?",
        answer: "We are located at 504 US HWY 259, Ore City, TX 75683.",
      },
    ],
  },

  // Which optional sections are enabled
  features: FEATURES,

  // Product tier - gates site + admin sections
  packageTier: PACKAGE_TIER,

  // Navbar links
  navLinks: ALL_NAV_LINKS.filter(enabled).map(pickLink),

  // Footer
  footer: {
    get copyright() {
      return `© ${new Date().getFullYear()} Venice Pizza House LLC. All rights reserved.`;
    },
    links: ALL_FOOTER_LINKS.filter(enabled).map(pickLink),
  },
};

export type SiteConfig = typeof SITE_CONFIG;



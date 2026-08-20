// Single source of truth for every brand-specific value on the site.
const FEATURES = {
  catering: true,
  giftCard: false,
  rewards: true,
  blog: false,
};

type FeatureKey = keyof typeof FEATURES;
type NavLink = { label: string; href: string; feature?: FeatureKey };

const ALL_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/Menu" },
  { label: "Catering", href: "/catering", feature: "catering" },
  { label: "Gift Card", href: "/GiftCard", feature: "giftCard" },
  { label: "Rewards", href: "/rewards", feature: "rewards" },
  { label: "Press", href: "/Blog", feature: "blog" },
  { label: "Our Story", href: "/story" },
];

const ALL_FOOTER_LINKS: NavLink[] = [
  { label: "Menu", href: "/Menu" },
  { label: "Catering", href: "/catering", feature: "catering" },
  { label: "Gift Cards", href: "/GiftCard", feature: "giftCard" },
  { label: "Terms", href: "/terms" },
];

const enabled = (l: NavLink) => !l.feature || FEATURES[l.feature];
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

  // Main call-to-action button label
  menuCtaLabel: "Order online",

  // Contact & Location
  address: "504 US HWY 259, Ore City, TX 75683",
  street: "504 US HWY 259",
  city: "Ore City",
  state: "TX",
  zip: "75683",
  phone: "+1 903-968-1310",
  email: "roma.pizza@yahoo.com",
  cateringEmail: "roma.pizza@yahoo.com",
  timezone: "America/Chicago",
  lat: 32.8037983,
  lng: -94.7191372,
  googleMapsUrl:
    "https://www.google.com/maps/place/Venice+Pizza/@32.8038028,-94.7217121,17z/data=!3m1!4b1!4m6!3m5!1s0x86366d2822164837:0x9f1b37f49ed086d5!8m2!3d32.8037983!4d-94.7191372!16s%2Fg%2F11jn1q9h6v?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",

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

  // Structured-data / business info (used in JSON-LD)
  cuisines: ["Pizza", "Italian", "Pasta", "Wings"],
  priceRange: "$$",

  // Outreach conversion layer
  outreach: {
    enabled: true,
    fullPrice: 2600,
    discountedPrice: 0,
    discountReason: "review",
    trialLengthDays: 14,
    calendlyUrl: "https://calendly.com/popdeveloper54/10-minute-meet",
    savings: { estimatedOrdersPerDay: 30, avgOrderValue: 24, commissionPct: 20 },
  },

  // Colors (Tailwind hex values)
  primaryColor: "#8b1a1a",
  secondaryColor: "#c9a227",
  accentColor: "#2f2f2f",

  // Hours (used for open/closed status) - 24h local time
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
    heroSubHeadline: "Served daily in Ore City.", // 5 words max
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

  // Navbar links
  navLinks: ALL_NAV_LINKS.filter(enabled).map(pickLink),

  // Footer
  footer: {
    get copyright() {
      return `© ${new Date().getFullYear()} Venice Pizza House. All rights reserved.`;
    },
    links: ALL_FOOTER_LINKS.filter(enabled).map(pickLink),
  },
};

export type SiteConfig = typeof SITE_CONFIG;



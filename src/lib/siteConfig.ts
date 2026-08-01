// Single source of truth for every brand-specific value on the site.
// To onboard a new restaurant client, this is the only file that should
// need to change (plus swapping image assets in /public).

export const SITE_CONFIG = {
  // Brand
  name: "Venice Pizza House",
  tagline: "Great food and a family friendly atmosphere",
  subTagline:
    "Fresh pizzas, authentic pastas, crispy wings, salads, and subs in Ore City, TX.",
  legalName: "Venice Pizza House",
  trademark: "Venice Pizza House",

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
  siteUrl: "https://venicepizzahouseorecity.com", // TODO: confirm real domain
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
  ogImage: "/general/generalPages/mainImage.jpg", // TODO: swap in a real hero photo

  // Colors (Tailwind hex values)
  primaryColor: "#8b1a1a", // TODO: adjust to match their red/gold branding from the logo
  secondaryColor: "#c9a227",
  accentColor: "#2f2f2f",

  // Hours (used for open/closed status) - hour values are 24h local time
  hours: [
    { day: "Sunday", open: null, close: null }, // TODO: confirm
    { day: "Monday", open: null, close: null }, // TODO: confirm
    { day: "Tuesday", open: null, close: null }, // TODO: confirm
    { day: "Wednesday", open: null, close: null }, // TODO: confirm
    { day: "Thursday", open: null, close: null }, // TODO: confirm
    { day: "Friday", open: null, close: null }, // TODO: confirm
    { day: "Saturday", open: null, close: null }, // TODO: confirm
  ] as { day: string; open: number | null; close: number | null }[],

  // Home page text sections
  home: {
    heroHeadline: "Fresh pizza, made your way",
    heroSubHeadline: "served daily in Ore City",
    galleryTitle: "Venice Pizza House",
    gallerySubtitle: "Great Food, Family Friendly Atmosphere",
    distinctiveFeatures: [
      {
        title: "Crispy, golden, made fresh",
        description:
          "From classic pepperoni to loaded specialty pies, every pizza is made fresh to order with quality ingredients.",
        image: "/general/generalPages/enjoy.jpg", // TODO: swap in real photo
      },
      {
        title: "More than just pizza",
        description:
          "Authentic pastas, crispy wings, fresh salads, and hearty subs, something for everyone at the table.",
        image: "/general/generalPages/vibe.jpg", // TODO: swap in real photo
      },
    ],
    featuring: [
      { name: "Dine-in", icon: "MdOutlineFamilyRestroom" },
      { name: "Takeout", icon: "PiPackageFill" },
      { name: "Delivery", icon: "BsBagCheckFill" },
      { name: "Family friendly", icon: "MdOutlineFamilyRestroom" },
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
          "Pizzas, pastas, wings, salads, and subs.",
      },
      {
        question: "Do you deliver?",
        answer:
          "Yes! We deliver to Ore City, Diana, Lone Star, and surrounding areas.", // TODO: confirm delivery radius
      },
      {
        question: "Where are you located?",
        answer: "We're at 504 US HWY 259, Ore City, TX 75683.",
      },
    ],
  },

  // Navbar links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/Menu" },
    { label: "Catering", href: "/catering" }, // TODO: confirm they offer catering
    { label: "Gift Card", href: "/GiftCard" }, // TODO: confirm they offer gift cards
    { label: "Rewards", href: "/rewards" },
    { label: "Press", href: "/Blog" },
    { label: "Our Story", href: "/story" },
  ],

  // Footer
  footer: {
    get copyright() {
      return `© ${new Date().getFullYear()} Venice Pizza House. All rights reserved.`;
    },
    links: [
      { label: "Menu", href: "/Menu" },
      { label: "Catering", href: "/catering" },
      { label: "Terms", href: "/terms" },
    ],
  },
};

export type SiteConfig = typeof SITE_CONFIG;
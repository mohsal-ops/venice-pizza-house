// Single source of truth for every brand-specific value on the site.
const FEATURES = {
  catering: false,
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
  name: "Hamburguesas Rio Laredo Texas",
  tagline: "LAS ORIGINALES DE NUEVO LAREDO SINCE 1967",
  subTagline:
    "Authentic Mexican-style burgers, lonches de milanesa, flour tortilla tacos, and fresh-cut fries in Laredo, TX.",
  legalName: "Hamburguesas Rio Laredo Texas LLC",
  trademark: "Hamburguesas Rio",

  // Admin intro animation: "burger" (fast food) | "coffee" (café) | "pizza" (pizzeria)
  loaderStyle: "burger",

  // Main call-to-action button label
  menuCtaLabel: "Order online",

  // Contact & Location
  address: "520 Shiloh Dr, Laredo, TX 78045",
  street: "520 Shiloh Dr",
  city: "Laredo",
  state: "TX",
  zip: "78045",
  phone: "(956) 704-8195",
  email: "info@hamburguesasrio.com",
  cateringEmail: "catering@hamburguesasrio.com",
  timezone: "America/Chicago",
  lat: 27.5817,
  lng: -99.4703,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hamburguesas+Rio+520+Shiloh+Dr+Laredo+TX",

  // Social
  instagram: "hamburguesasriolaredotexas",
  instagramUrl: "https://www.instagram.com/hamburguesasriolaredotexas/",
  facebookUrl: "https://www.facebook.com/hamburguesas.rio.ltx",
  tiktokUrl: "",
  beholdFeedId: "",

  // SEO
  siteUrl: "https://hamburguesasriolaredo.com",
  seoTitle: "Hamburguesas Rio Laredo Texas | Authentic Mexican Burgers & Lonches",
  seoDescription:
    "Las originales de Nuevo Laredo desde 1967. Serving 100% beef Mexican-style burgers, lonches de milanesa, flour tortilla tacos, and natural hand-cut fries in Laredo, TX.",
  seoKeywords: [
    "Hamburguesas Rio Laredo Texas",
    "Hamburguesas Rio Laredo",
    "Mexican Burgers Laredo TX",
    "Lonche de Milanesa Laredo",
    "Nuevo Laredo Burgers",
    "Food Truck Laredo TX",
  ],
  ogImage: "/general/generalPages/mainImage.jpg",

  // Structured-data / business info (used in JSON-LD)
  cuisines: ["Mexican", "Burgers", "Fast Food"],
  priceRange: "$",

  // Outreach conversion layer
  outreach: {
    enabled: true,
    fullPrice: 2600,
    discountedPrice: 699,
    discountReason: "review",
    trialLengthDays: 14,
    calendlyUrl: "https://calendly.com/popdeveloper54/10-minute-meet",
    savings: { estimatedOrdersPerDay: 40, avgOrderValue: 18, commissionPct: 20 },
  },

  // Colors (Food truck yellow, brand crimson red, clean dark background)
  primaryColor: "#fbc02d",
  secondaryColor: "#d32f2f",
  accentColor: "#111111",

  // Hours (used for open/closed status) - 24h local time (5:00 PM - 10:00 PM)
  hours: [
    { day: "Sunday", open: 17, close: 22 },
    { day: "Monday", open: 17, close: 22 },
    { day: "Tuesday", open: 17, close: 22 },
    { day: "Wednesday", open: 17, close: 22 },
    { day: "Thursday", open: 17, close: 22 },
    { day: "Friday", open: 17, close: 22 },
    { day: "Saturday", open: 17, close: 22 },
  ] as { day: string; open: number | null; close: number | null }[],

  // Home page text sections
  home: {
    heroHeadline: "ORIGINAL LAREDO MEXICAN BURGERS",
    heroSubHeadline: "Authentic Mexican burgers in Laredo.", // 5 words
    galleryTitle: "Hamburguesas Rio Laredo Texas",
    gallerySubtitle: "Las originales de Nuevo Laredo desde 1967",
    distinctiveFeatures: [
      {
        title: "Carne 100% de Res & Papas Naturales",
        description:
          "Made with fresh 100% beef patties, daily baked bread, natural hand-cut fries, and pickled jalapeños.",
        image: "/general/generalPages/enjoy.jpg",
      },
      {
        title: "Lonches de Milanesa & Tacos",
        description:
          "Serving our famous Lonche de Milanesa and large flour tortilla tacos packed with cheese and seasoned beef.",
        image: "/general/generalPages/vibe.jpg",
      },
    ],
    featuring: [
      { name: "Desde 1967", icon: "MdOutlineVerified" },
      { name: "Papas Naturales", icon: "PiPackageFill" },
      { name: "Orden Directa", icon: "BsBagCheckFill" },
      { name: "Laredo, TX", icon: "MdOutlineStorefront" },
    ],
    faq: [
      {
        question: "¿Dónde están ubicados?",
        answer:
          "Estamos ubicados en 520 Shiloh Dr, Laredo, TX 78045 (en el estacionamiento de Variety Meats).",
      },
      {
        question: "¿Cuál es el horario de atención?",
        answer:
          "Abrimos de lunes a domingo de 5:00 PM a 10:00 PM.",
      },
      {
        question: "¿Cuáles son las especialidades del menú?",
        answer:
          "La Hamburguesa Sencilla, el Lonche de Milanesa, los Tacos de harina grandes y las papas naturales recién cortadas.",
      },
      {
        question: "¿Puedo hacer mi pedido por teléfono o para llevar?",
        answer:
          "¡Sí! Puedes llamar al (956) 704-8195 para ordenar y recoger rápidamente.",
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
      return `© ${new Date().getFullYear()} Hamburguesas Rio Laredo Texas LLC. All rights reserved.`;
    },
    links: ALL_FOOTER_LINKS.filter(enabled).map(pickLink),
  },
};

export type SiteConfig = typeof SITE_CONFIG;

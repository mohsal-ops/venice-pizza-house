// Single source of truth for every brand-specific value on the site.
// To onboard a new restaurant client, this is the only file that should
// need to change (plus swapping image assets in /public).

export const SITE_CONFIG = {
  // Brand
  name: "Pam's Kitchen",
  tagline: "Fresh homemade meals served daily",
  subTagline:
    "Breakfast all day, burgers, pizza, and daily specials, homemade comfort food in Friona, TX.",
  legalName: "Pam's Kitchen",
  trademark: "Pam's Kitchen",

  // Contact & Location
  address: "1302 W 11th St, Friona, TX 79035",
  street: "1302 W 11th St",
  city: "Friona",
  state: "TX",
  zip: "79035",
  phone: "(806) 250-3663",
  email: "info@pamskitchentx.com",
  cateringEmail: "info@pamskitchentx.com",
  timezone: "America/Chicago",
  lat: 34.6407,
  lng: -102.7241,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pam%27s%20Kitchen%2C%201302%20W%2011th%20St%2C%20Friona%2C%20TX%2079035",

  // Social
  instagram: "pamskitchentx",
  instagramUrl: "https://www.instagram.com/pamskitchentx/",
  facebookUrl: "https://www.facebook.com/PamskitchenTx/",
  tiktokUrl: "",
  beholdFeedId: "",

  // SEO
  siteUrl: "https://pamskitchentx.com",
  seoTitle: "Pam's Kitchen | Homemade Comfort Food & All-Day Breakfast in Friona, TX",
  seoDescription:
    "Pam's Kitchen serves fresh homemade breakfast all day, hand-pressed burgers, homemade pizza, and daily specials in Friona, TX.",
  seoKeywords: [
    "breakfast Friona TX",
    "burgers Friona",
    "homemade food Friona",
    "daily specials Friona",
    "family restaurant Friona",
    "Pam's Kitchen Friona",
  ],
  ogImage: "/general/generalPages/mainImage.jpg",

  // Colors (Tailwind hex values)
  primaryColor: "#c85a1e",
  secondaryColor: "#1a6b3c",
  accentColor: "#d97706",

  // Hours (used for open/closed status) - hour values are 24h local time
  hours: [
    { day: "Sunday", open: 8, close: 18 },
    { day: "Monday", open: 6, close: 21 },
    { day: "Tuesday", open: 6, close: 21 },
    { day: "Wednesday", open: 6, close: 21 },
    { day: "Thursday", open: 6, close: 21 },
    { day: "Friday", open: 6, close: 21 },
    { day: "Saturday", open: 6, close: 21 },
  ] as { day: string; open: number | null; close: number | null }[],

  // Home page text sections
  home: {
    heroHeadline: "Fresh homemade meals",
    heroSubHeadline: "served daily in Friona",
    galleryTitle: "Pam's Kitchen",
    gallerySubtitle: "Homemade Comfort Food",
    distinctiveFeatures: [
      {
        title: "Breakfast, served all day",
        description:
          "From fluffy pancakes to loaded breakfast burritos, our morning favorites are ready whenever you are, made fresh, made from scratch.",
        image: "/general/generalPages/enjoy.jpg",
      },
      {
        title: "Comfort food done right",
        description:
          "Hand-pressed burgers, homemade pizza, and a daily special board worth driving for. Real food, cooked the way home tastes.",
        image: "/general/generalPages/vibe.jpg",
      },
    ],
    featuring: [
      { name: "Takeaway", icon: "PiPackageFill" },
      { name: "Family friendly", icon: "MdOutlineFamilyRestroom" },
      { name: "Daily Specials", icon: "BsBagCheckFill" },
      { name: "Breakfast All Day", icon: "TbPlant2Off" },
    ],
    faq: [
      {
        question: "What are you known for?",
        answer:
          "Homemade comfort food - hand-pressed burgers, all-day breakfast, and our daily specials.",
      },
      {
        question: "What meals do you serve?",
        answer:
          "Breakfast (served all day), burgers, sandwiches, homemade pizza, and daily specials.",
      },
      {
        question: "Do you offer takeout?",
        answer: "Yes! Give us a call and we'll have your order ready for pickup.",
      },
      {
        question: "Where are you located?",
        answer: "We're at 1302 W 11th St, Friona, TX 79035.",
      },
    ],
  },

  // Navbar links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/Menu" },
    { label: "Catering", href: "/catering" },
    { label: "Gift Card", href: "/GiftCard" },
    { label: "Rewards", href: "/rewards" },
    { label: "Press", href: "/Blog" },
    { label: "Our Story", href: "/story" },
  ],

  // Footer
  footer: {
    get copyright() {
      return `© ${new Date().getFullYear()} Pam's Kitchen. All rights reserved.`;
    },
    links: [
      { label: "Menu", href: "/Menu" },
      { label: "Catering", href: "/catering" },
      { label: "Gift Cards", href: "/GiftCard" },
      { label: "Terms", href: "/terms" },
    ],
  },
};

export type SiteConfig = typeof SITE_CONFIG;

import type { Metadata } from 'next'
import { GetFeaturedProducts, GetGategories, GetPlaces, GetProducts } from './_actions/getDataNeeded'
import MainPageMenu from './_components/mainPage'
import { getBusinessHours } from '@/lib/getHours'

export const metadata: Metadata = {
  title: "Menu | Pizza, Wings & Loaded Fries",
  description:
    "Order wood-fired pizza, crispy wings, loaded fries, sandwiches, and family feasts online from Venice Pizza House in Ore City, TX. Pickup or delivery, kids menu included.",
  keywords: [
    "wood-fired pizza Ore City menu",
    "pizza Ore City",
    "loaded fries Ore City",
    "fried chicken Ore City order online",
    "family dinners Ore City",
    "kids meal Ore City restaurant",
  ],
  alternates: {
    canonical: "/Menu",
  },
  openGraph: {
    title: "Menu | Venice Pizza House Ore City",
    description:
      "Pizza, wings, loaded fries, subs, and family feasts - order online for pickup or delivery in Ore City, TX.",
    url: "/Menu",
  },
}

export default async function Menu() {


   const [featuredProducts , places, categories, products, hours] = await Promise.all([
    GetFeaturedProducts(),
    GetPlaces(),
    GetGategories(),
    GetProducts(),
    getBusinessHours(),
   ])
  return (
      <MainPageMenu featuredProducts={featuredProducts}  places={places} products={products} gategories={categories} hours={hours} />
  )
}



import AddressBar from "@/components/main/AddressBar"
import CategoryNav from "@/components/main/CategoryNav"
import Header from "@/components/main/Header"
import RestaurantCard from "@/components/main/RestaurantCard"
import SearchBar from "@/components/main/SearchBar"

export default function MainPage() {
  const restaurants = [
    {
      id: "1",
      name: "KFC-까치산점",
      rating: 4.7,
      reviewCount: 234,
      deliveryFee: 2000,
      couponAmount: 6000,
      image: "/kfc.jpg",
    },
    {
      id: "2",
      name: "BBQ-강서점",
      rating: 4.8,
      reviewCount: 521,
      deliveryFee: 3000,
      couponAmount: 1000,
      image: "/bbq.jpg",
    },
    {
      id: "3",
      name: "교촌치킨-화곡점",
      rating: 4.9,
      reviewCount: 442,
      deliveryFee: 2000,
      couponAmount: 4000,
      image: "/kyochon.jpg",
    },
    {
      id: "4",
      name: "굽네치킨-까치산역점",
      rating: 4.6,
      reviewCount: 378,
      deliveryFee: 2500,
      couponAmount: 3000,
      image: "/goobne.jpg",
    },
    {
      id: "5",
      name: "호식이두마리-화곡점",
      rating: 4.5,
      reviewCount: 167,
      deliveryFee: 3000,
      couponAmount: 2000,
      image: "/hosigi.jpg",
    },
    {
      id: "6",
      name: "처갓집-강서점",
      rating: 4.6,
      reviewCount: 295,
      deliveryFee: 2000,
      couponAmount: 5000,
      image: "/chugagjib.jpg",
    },
    {
      id: "7",
      name: "BBQ-강서점",
      rating: 4.8,
      reviewCount: 521,
      deliveryFee: 3000,
      couponAmount: 5000,
      image: "/bbq.jpg",
    },
    {
      id: "8",
      name: "교촌치킨-화곡점",
      rating: 4.9,
      reviewCount: 442,
      deliveryFee: 2000,
      couponAmount: 4000,
      image: "/kyochon.jpg",
    },
    {
      id: "9",
      name: "굽네치킨-까치산역점",
      rating: 4.6,
      reviewCount: 378,
      deliveryFee: 2500,
      couponAmount: 3000,
      image: "/goobne.jpg",
    },
    {
      id: "10",
      name: "호식이두마리-화곡점",
      rating: 4.5,
      reviewCount: 167,
      deliveryFee: 3000,
      couponAmount: 7000,
      image: "/hosigi.jpg",
    },
    {
      id: "11",
      name: "처갓집-강서점",
      rating: 4.6,
      reviewCount: 295,
      deliveryFee: 2000,
      couponAmount: 5000,
      image: "/chugagjib.jpg",
    },
  ]

  return (
    <main className="pb-20 w-full">
      <Header />
      <AddressBar />
      <SearchBar />
      <CategoryNav />
      <section>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </section>
    </main>
  )
}

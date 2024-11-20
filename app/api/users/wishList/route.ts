const wishList = [
  {
    store_id: 1,
    store_name: "BHC-도봉산입구점",
    rating: 4.7,
    review_count: 30,
    default_delivery_tip: 2000,
    min_delivery_time: "30분",
    max_delivery_time: "46분",
    discount_price: 3500,
    store_status: "OPEN",
    store_image: "https://placehold.co/100x100",
  },
  {
    store_id: 2,
    store_name: "KFC-도봉산출구점",
    rating: 4.4,
    review_count: 300,
    default_delivery_tip: 1000,
    min_delivery_time: "24분",
    max_delivery_time: "36분",
    discount_price: 3000,
    store_status: "OPEN",
    store_image: "https://placehold.co/100x100",
  },
]
export async function GET() {
  return Response.json(wishList)
}

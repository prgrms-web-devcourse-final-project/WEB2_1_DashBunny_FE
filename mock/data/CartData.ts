import { CartData } from "@/types/cart"

export const cartDummyData: CartData = {
  userId: 1,
  storeName: "맛있는 식당",
  cartItems: [
    {
      cartItemId: 1,
      menuId: 101,
      menuName: "황금올리브치킨",
      menuImage: "https://placehold.co/73x73",
      price: 18000,
      quantity: 2,
      totalPrice: 36000,
    },
    {
      cartItemId: 2,
      menuId: 102,
      menuName: "허니갈릭치킨",
      menuImage: "https://placehold.co/73x73",
      price: 19000,
      quantity: 1,
      totalPrice: 19000,
    },
  ],
  deliveryFee: 3000,
  totalAmount: 58000,
}
export const paymentOptions = [
  { value: "card", label: "카드 결제" },
  { value: "bank", label: "계좌 이체" },
  { value: "phone", label: "휴대폰 결제" },
]
export const couponOptions = [
  { value: "coupon1", label: "쿠폰 1" },
  { value: "coupon2", label: "쿠폰 2" },
  { value: "coupon3", label: "쿠폰 3" },
]

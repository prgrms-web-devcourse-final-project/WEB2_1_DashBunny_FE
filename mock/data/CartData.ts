import { CartData } from "@/types/cart"

export const cartDummyData: CartData = {
  userId: 1,
  storeName: "맛있는 식당",
  cartItems: [
    {
      cartItemId: 1,
      menuId: 101,
      menuName: "불고기",
      menuImage: "https://placehold.co/73x73",
      price: 15000,
      quantity: 2,
      totalPrice: 30000,
    },
    {
      cartItemId: 2,
      menuId: 102,
      menuName: "김치찌개",
      menuImage: "https://placehold.co/73x73",
      price: 8000,
      quantity: 1,
      totalPrice: 8000,
    },
  ],
  deliveryFee: 3000,
  totalAmount: 41000,
}

export interface CartData {
  userId: number
  storeName: string
  cartItems: CartItem[]
  deliveryFee: number
  totalAmount: number
}

export interface CartItem {
  cartItemId: number
  menuId: number
  menuName: string
  menuImage: string
  price: number
  quantity: number
  totalPrice: number
}
export const emptyCart: CartData = {
  userId: 0,
  storeName: "",
  cartItems: [],
  deliveryFee: 0,
  totalAmount: 0,
}
export const emptyCartItem: CartItem = {
  cartItemId: 0,
  menuId: 0,
  menuName: "",
  menuImage: "",
  price: 0,
  quantity: 0,
  totalPrice: 0,
}

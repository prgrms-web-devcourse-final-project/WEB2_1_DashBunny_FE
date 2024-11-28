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

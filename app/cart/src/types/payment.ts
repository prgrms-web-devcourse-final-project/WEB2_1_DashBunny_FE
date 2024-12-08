interface CartItem {
  cartItemId: number
  menuId: number
  menuName: string
  menuImage: string
}

interface CheckoutInfo {
  url: string
}

interface PaymentInfo {
  checkoutUrl: string
  paymentKey: string
  orderId: string
  totalAmount: number
  checkout: CheckoutInfo
}

export interface PaymentResponse {
  cartId: number
  userId: number
  storeName: string
  cartItems: CartItem[]
  deliveryFee: number
  discountPrice: number
  totalAmount: number
  paymentInfo: PaymentInfo
  storeRequirement: string
  deliveryRequirement: string
  coupon: null | string
}

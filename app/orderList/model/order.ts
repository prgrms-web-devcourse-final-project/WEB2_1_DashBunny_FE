export interface Order {
  storeId: string
  userPhone: string
  storeName: string
  storeLogo: string
  orderDate: string
  totalQuantity: number
  menuName: string
  totalPrice: number
  orderStatus: "PENDING" | "IN_PROGRESS" | "DECLINED" | "OUT_FOR_DELIVERY" | "DELIVERED"
}

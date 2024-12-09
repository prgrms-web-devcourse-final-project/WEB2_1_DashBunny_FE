export interface ShortsResponse {
  storeId: string
  storeName: string
  storeLogo: string
  rating: number
  reviewCount: number
  deliveryTip: number | null
  minDeliveryTime: number | null
  maxDeliveryTime: number | null
  discountPrice: number | null
  status: string
  shortsUrl: string
  menuId: number
}

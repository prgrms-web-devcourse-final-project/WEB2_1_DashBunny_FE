enum StoreStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}
export interface Store {
  store_id: string
  store_name: string
  rating: number
  review_count: number
  default_delivery_tip: number
  min_delivery_time: string
  max_delivery_time: string
  discount_price: number
  store_status: StoreStatus
  store_image: string
}

// 메뉴 옵션 인터페이스
interface Menu {
  menu_id: number
  menu_name: string
  price: number
  menu_content: string
  menu_image: string
  menu_option: number
  menu_stock: boolean
}

// 메뉴 그룹 인터페이스
interface MenuGroup {
  group_id: number
  group_name: string
  menus: Menu[]
}

// 스토어 인터페이스
export interface DetailStore {
  store_id: number
  store_name: string
  rating: number
  review_count: number
  default_delivery_tip: number
  min_delivery_time: string
  max_delivery_time: string
  store_image: string
  minimum_order_price: number
  owner_coupon_id: number
  store_status: StoreStatus
  menu_groups: MenuGroup[]
}

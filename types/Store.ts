interface UsersStoreResponseDto {
  storeId: string
  storeName: string
  rating: number
  reviewCount: number
  defaultDeliveryTip: number
  minDeliveryTime: string
  maxDeliveryTime: string
  storeImage: string
  minimumOrderPrice: number
  ownerCouponId: number
  storeStatus: StoreStatus
  usersMenuGroup: UsersMenuGroupDto[]
  usersMenus: UsersMenuDto[]
}

interface UsersStoreListResponseDto {
  storeId: string
  storeLogo: string
  storeName: string
  rating: number
  reviewCount: number
  baseDeliveryTip: number
  minDeliveryTime: string
  maxDeliveryTime: string
  discountPrice: number
  status: StoreStatus
}

interface UsersMenuGroupDto {
  groupId: number
  groupName: string
  menus: UsersMenuDto[]
}

interface UsersMenuDto {
  menuId: number
  menuName: string
  price: number
  menuContent: string
  menuImage: string
  menuOption: number
  isSoldOut: boolean
}

enum StoreStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

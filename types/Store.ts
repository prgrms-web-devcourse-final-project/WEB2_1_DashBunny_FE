export interface UsersStoreDetailResponseDto {
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

export interface UsersStoreListResponseDto {
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

export interface UsersMenuGroupDto {
  groupId: number
  groupName: string
  menus: UsersMenuDto[]
}

export interface UsersMenuDto {
  menuId: number
  menuName: string
  price: number
  menuContent: string
  menuImage: string
  menuOption: number
  isSoldOut: boolean
}

export enum StoreStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

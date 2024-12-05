export interface UserType {
  userId: number;
  phone: string;
  name: string;
  birthday: Date;
  email: string;
  role: string;
  createdDate: string;
}

export interface ShopType {
  storeId: string;
  storeName: string;
  contactNumber: string;
  address: string;
  description: string;
  latitude: number;
  longitude: number;
  category: string[];
  storeRegistrationDocs: string;
  storeLogo: string;
  storeBannerImage: string;

  userName: string;
  userId: number;
  operationId: number;
  storeStatus: string;
  approvedDate: string; //원래는 Date임
}

export interface CouponType {
  couponId: number;
  couponName: string;
  couponType: string;
  discountPrice: number;
  discountType: string;
  minOrderPrice: number;
  maximumDiscount: null | number; //선착순일때만 들어가는 값, 일반 쿠폰일때는 null
  maxIssuance: null | number; //선착순일때만 들어가는 값, 일반 쿠폰일때는 null
  expiredDate: string;
  downloadStartDate: null | string;
  couponStatus: string;
  couponDescription: string;
}
export type CreateCouponRequest = Omit<CouponType, "couponId" | "couponStatus">; //쿠폰 생성할때

export interface NoticeType {
  noticeId: number;
  noticeTitle: string;
  noticeContent: string;
  createdDate: string;
  target: string;
  viewCount: number;
}

export type CreateNotice = Omit<
  NoticeType,
  "noticeId" | "viewCount" | "createdDate"
>;

export interface LoginType {
  phone: string;
  password: string;
}

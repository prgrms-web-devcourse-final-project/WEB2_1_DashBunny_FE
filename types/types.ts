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
  userId: number;
  operationId: number;
  storeName: string;
  storeStatus: string;
  description: string;
  contactNumber: string;
  storeLogo: string;
  Field: string;
  address: string;
  location: string;
  approvedDate: string; //원래는 Date임
}

export interface CouponType {
  couponId: number;
  couponName: string;
  couponType: string;
  discountPrice: number;
  discountType: string;
  minOrderPrice: number;
  maximumDiscount: number;
  maxIssuance: null | number;
  expiredDate: string;
  downloadStartDate: string;
  couponStatus: string;
  couponDescription: string;
}

export interface NoticeType {
  noticeId: number;
  noticeTitle: string;
  noticeContent: string;
  createdDate: string | Date;
  target: string;
  viewCount: number;
}

import { NextResponse } from "next/server";

const mockCoupons = [
  {
    couponId: 1,
    couponName: "Black Friday Discount",
    couponType: "FirstCome",
    discountPrice: 5000,
    discountType: "FIXED",
    minOrderPrice: 20000,
    maximumDiscount: 10000,
    maxIssuance: 100,
    expiredDate: "2024-12-31T23:59:59",
    downloadStartDate: "2024-11-30T00:00:00",
    couponStatus: "ACTIVE",
    couponDescription: "선착순 100명 대상 특별 할인",
  },
  {
    couponId: 2,
    couponName: "Welcome Discount",
    couponType: "Regula",
    discountPrice: 10000,
    discountType: "FIXED",
    minOrderPrice: 50000,
    maximumDiscount: null,
    maxIssuance: null,
    expiredDate: "2025-01-01T23:59:59",
    downloadStartDate: null,
    couponStatus: "PENDING",
    couponDescription: "새로운 고객을 위한 특별 할인",
  },
];

export async function GET() {
  return NextResponse.json(mockCoupons);
}

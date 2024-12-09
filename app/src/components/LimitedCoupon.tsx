"use client"
import { isEmptyResponse, isErrorResponse } from "@/types/limitedCouponTypes"
import { useGetLimitedCoupon } from "../hooks/useGetLimitedCoupon"
import LimitedCouponSkeleton from "../skeleton/LimitedCouponSkeleton"
import ActiveLimitedCoupon from "./ActiveLimitedCoupon"
import DisableLimitedCoupon from "./DisableLimitedCoupon"
import EmptyCoupon from "./EmptyCoupon"

export default function LimitedCoupon() {
  const { data: limitedCouponData, isLoading, isError } = useGetLimitedCoupon()
  if (isLoading) return <LimitedCouponSkeleton />
  if (isError) return <EmptyCoupon />
  if (!limitedCouponData) return null

  //비어있는 객체가 아닌지 확인
  const CouponDataIsEmpty = isEmptyResponse(limitedCouponData)
  const CouponDataIsMessage = isErrorResponse(limitedCouponData)

  return (
    <>
      {CouponDataIsEmpty && null}
      {CouponDataIsMessage && <DisableLimitedCoupon limitedCouponData={limitedCouponData} />}
      {!CouponDataIsEmpty && !CouponDataIsMessage && (
        <ActiveLimitedCoupon limitedCouponData={limitedCouponData} />
      )}
    </>
  )
}

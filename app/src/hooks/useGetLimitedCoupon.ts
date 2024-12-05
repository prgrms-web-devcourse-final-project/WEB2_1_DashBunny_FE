import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getLimitedCouponData } from "../api/limitedCoupon"
import { LimitedCouponResponse } from "../../../types/limitedCouponTypes"
export const LIMITED_COUPON_QUERY_KEY = ["LimitedCouponData"] as const
export const useGetLimitedCoupon = (): UseQueryResult<LimitedCouponResponse, Error> => {
  return useQuery({
    queryKey: LIMITED_COUPON_QUERY_KEY,
    queryFn: getLimitedCouponData,
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

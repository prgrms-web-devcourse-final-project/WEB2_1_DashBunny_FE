"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { PaymentResult, PaymentStatus } from "../types/payment"
import { useEffect } from "react"
import { overlay } from "overlay-kit"

import { PaymentResultAlertModal } from "./PaymentResultAlertModal"

export default function PaymentResultPage() {
  const searchParams = useSearchParams()

  const paymentResult: PaymentResult = {
    status: (searchParams.get("status") as PaymentStatus) || "failure",
    reason: searchParams.get("reason")?.replace(/\+/g, " "),
  }
  useEffect(() => {
    overlay.open(
      ({ close, isOpen, unmount }) =>
        PaymentResultAlertModal({
          close,
          isOpen,
          unmount,
          type: paymentResult.status === "success" ? "success" : "error",
          title: paymentResult.status === "success" ? "결제 완료" : "결제 실패",
          description: paymentResult.reason || "결제 처리 중 오류가 발생했습니다.",
        }),
      {},
    )
  }, [])

  return <></>
}

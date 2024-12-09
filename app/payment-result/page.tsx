import React, { Suspense } from "react"
import PaymentResult from "./src/components/PaymentResult"

export default function page() {
  return (
    <Suspense fallback={"loading..."}>
      <PaymentResult />
    </Suspense>
  )
}

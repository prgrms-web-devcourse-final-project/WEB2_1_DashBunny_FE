// types/payment.ts

export type PaymentStatus = "success" | "failure"

export interface PaymentResult {
  status: PaymentStatus
  reason?: string
}

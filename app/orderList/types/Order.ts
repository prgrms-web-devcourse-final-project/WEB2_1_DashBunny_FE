export interface OrderPayload {
  type: "ORDER_PENDING" | "ORDER_FAILED" | "IN_PROGRESS" | "DECLINED"
  message: string
  data: {
    orderId?: number
    storeId?: string
    preparationTime?: number
    orderStatus?: string
    error?: string
    declineReasonType?: string
  }
}

import { OrderHistory } from "@/app/orderList/model/order"

const dummyOrderHistory: OrderHistory[] = [
  {
    orderDate: "9. 16 (월)",
    orderStatus: "배달중",
    storeName: "BHC 치킨",
    paymentPrice: "24000",
    storeImage: "https://placehold.co/100x100",
  },
  {
    orderDate: "9. 17 (화)",
    orderStatus: "배달완료",
    storeName: "양가형제노형",
    paymentPrice: "35000",
    storeImage: "https://placehold.co/100x100",
  },
  {
    orderDate: "9. 15 (일)",
    orderStatus: "주문취소",
    storeName: "맥도날드 제주점",
    paymentPrice: "42000",
    storeImage: "https://placehold.co/100x100",
  },
]
export async function GET() {
  return Response.json(dummyOrderHistory)
}

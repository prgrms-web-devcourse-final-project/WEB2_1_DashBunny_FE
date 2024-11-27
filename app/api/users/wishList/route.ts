import { wishList } from "@/constants/wishList"

export async function GET() {
  return Response.json(wishList)
}

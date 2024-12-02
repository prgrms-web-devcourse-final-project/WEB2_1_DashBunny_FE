import { useSendAddress } from "@/app/(address)/address-save/src/hooks/useSendAddress"
import { CartData, CartItem } from "@/types/cart"
import { create } from "zustand"

interface CartStore {
  // 상태
  cartData: CartData | null
  isLoading: boolean
  error: string | null
  // 액션
  fetchCart: () => Promise<void>
  addToCart: (cartItemId: number, quantity: number) => Promise<void>
  updateQuantity: (cartItemId: number, quantity: number) => Promise<void>
}
const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000/api"
const useCartStore = create<CartStore>((set, get) => ({
  cartData: null,
  isLoading: false,
  error: null,

  fetchCart: async () => {
    const { sendAddressMutation } = useSendAddress()
    try {
      sendAddressMutation.mutate("서울시 강남구")
      set({ isLoading: true })
      const response = await fetch(SERVER_URL + "/users/carts")
      const data = await response.json()
      set({ cartData: data, isLoading: false })
    } catch (error) {
      set({ error: "장바구니를 불러오는데 실패했습니다.", isLoading: false })
    }
  },

  addToCart: async (menuId, quantity) => {
    try {
      set({ isLoading: true })
      const currentCart = get().cartData
      const existingItem = currentCart?.cartItems.find((item) => item.menuId === menuId)
      // 이미 장바구니에 담긴 메뉴라면 수량만 업데이트
      if (existingItem) {
        await get().updateQuantity(existingItem.menuId, quantity ?? 1)
      } else {
        const response = await fetch(SERVER_URL + "/users/items", {
          method: "POST",
          body: JSON.stringify({ menuId, quantity }),
        })
        const updatedCart = await response.json()
        set({ cartData: updatedCart, isLoading: false })
      }
    } catch (error) {}
  },
  updateQuantity: async (menuId, quantity) => {
    try {
      set({ isLoading: true })
      const response = await fetch(`/api/cart/items/${menuId}`, {
        method: "PATCH",
        body: JSON.stringify({ quantity }),
      })
      const updatedCart = await response.json()
      set({ cartData: updatedCart, isLoading: false })
    } catch (error) {
      set({ error: "수량 변경에 실패했습니다.", isLoading: false })
    }
  },
}))

export default useCartStore

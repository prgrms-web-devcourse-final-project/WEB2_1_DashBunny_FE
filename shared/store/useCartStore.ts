import { CartData, CartItem } from "@/types/cart"
import { createStore } from "zustand"

interface CartStore {
  // 상태
  cartData: CartData | null
  isLoading: boolean
  error: string | null

  // 액션
  fetchCart: () => Promise<void>
  addToCart: (menuItem: Partial<CartItem>) => Promise<void>
  updateQuantity: (cartItemId: number, quantity: number) => Promise<void>
  removeFromCart: (cartItemId: number) => Promise<void>
}
const SERVER_URL = process.env.SERVER_URL
const useCartStore = createStore<CartStore>((set, get) => ({
  cartData: null,
  isLoading: false,
  error: null,

  fetchCart: async () => {
    try {
      set({ isLoading: true })
      const response = await fetch(SERVER_URL + "/users/carts")
      const data = await response.json()
      set({ cartData: data, isLoading: false })
    } catch (error) {
      set({ error: "장바구니를 불러오는데 실패했습니다.", isLoading: false })
    }
  },

  addToCart: async (menuItem) => {
    try {
      set({ isLoading: true })
      const response = await fetch("/users/items", {
        method: "POST",
        body: JSON.stringify(menuItem),
      })
      const updatedCart = await response.json()
      set({ cartData: updatedCart, isLoading: false })
    } catch (error) {
      set({ error: "상품 추가에 실패했습니다.", isLoading: false })
    }
  },

  updateQuantity: async (cartItemId, quantity) => {
    try {
      set({ isLoading: true })
      const response = await fetch(`/api/cart/items/${cartItemId}`, {
        method: "PATCH",
        body: JSON.stringify({ quantity }),
      })
      const updatedCart = await response.json()
      set({ cartData: updatedCart, isLoading: false })
    } catch (error) {
      set({ error: "수량 변경에 실패했습니다.", isLoading: false })
    }
  },

  removeFromCart: async (cartItemId) => {
    try {
      set({ isLoading: true })
      await fetch(`/api/cart/items/${cartItemId}`, {
        method: "DELETE",
      })
      const currentCart = get().cartData
      if (currentCart) {
        const updatedItems = currentCart.cartItems.filter((item) => item.cartItemId !== cartItemId)
        set({
          cartData: {
            ...currentCart,
            cartItems: updatedItems,
          },
          isLoading: false,
        })
      }
    } catch (error) {
      set({ error: "상품 제거에 실패했습니다.", isLoading: false })
    }
  },
}))

export default useCartStore

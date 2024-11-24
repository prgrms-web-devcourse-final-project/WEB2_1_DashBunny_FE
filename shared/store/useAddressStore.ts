import { create } from "zustand"

interface Address {
  roadAddress: string
  jibunAddress: string
}

interface AddressState {
  selectedAddress: Address | null
  setSelectedAddress: (address: Address) => void
  clearAddress: () => void
}

export const useAddressStore = create<AddressState>((set) => ({
  selectedAddress: null,
  setSelectedAddress: (address) => set({ selectedAddress: address }),
  clearAddress: () => set({ selectedAddress: null }),
}))

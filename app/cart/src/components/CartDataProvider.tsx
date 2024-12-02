"use client"

import { useGetCartItem } from "../hook"
interface CartDataProviderProps {
  children: React.ReactNode
}
export default function CartDataProvider({ children }: CartDataProviderProps) {
  const { data, isLoading, isError } = useGetCartItem()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  if (!data) return null

  return <>{children}</>
}

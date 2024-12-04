"use client"

import { OverlayProvider } from "overlay-kit"

interface OverlayProviderProps {
  children: React.ReactNode
}
export default function OverlayProviderContext({ children }: OverlayProviderProps) {
  return <OverlayProvider>{children}</OverlayProvider>
}

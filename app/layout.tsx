import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import GlobalNavBar from "@/components/common/GlobalNavBar"
import ReactQueryConfigContext from "@/context/ReactQueryConfigContext"
import { AddressInitializer } from "@/context/AddressContext"
import OverlayProviderContext from "@/context/OverlayProviderContext"

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  //@=> 세션 및 주소 관리를 auth.js로 하자.
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body className={`${pretendard.variable} antialiased mx-auto w-[400px] min-h-screen`}>
        <ReactQueryConfigContext>
          <OverlayProviderContext>
            <AddressInitializer>
              <div className="overflow-auto w-full h-full no-scrollbar">{children}</div>
            </AddressInitializer>
          </OverlayProviderContext>
        </ReactQueryConfigContext>
        <GlobalNavBar />
      </body>
    </html>
  )
}

import Header from "@/components/common/Header"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header title="주소 검색" previousRoute="/address" />
      {children}
    </>
  )
}

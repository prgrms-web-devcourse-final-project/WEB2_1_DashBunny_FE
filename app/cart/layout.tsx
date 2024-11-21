import Header from "@/components/common/Header"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
      <Header title="주문하기" previousRoute="/main" />
      {children}
    </div>
  )
}

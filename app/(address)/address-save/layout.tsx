import Header from "@/components/common/Header"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header title="주소 상세" previousRoute="/address-search" />
      <div className="px-5">{children}</div>
    </>
  )
}

import Header from "@/components/common/Header"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header title="주소 설정" previousRoute="/" type="prev" />
      <div className="px-5">{children}</div>
    </>
  )
}

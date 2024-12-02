import Header from "@/components/common/Header"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header title="" previousRoute="" type="prev" />
      {children}
    </>
  )
}

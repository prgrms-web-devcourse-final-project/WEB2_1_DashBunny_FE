"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import HomeNavEmptyIcon from "../icons/iconComponents/HomeNavEmptyIcon"
import HomeNavFillIcon from "../icons/iconComponents/HomeNavFillIcon"
import SaveHeartNavEmptyIcon from "../icons/iconComponents/SaveHeartNavEmptyIcon"
import SaveHeartNavFillIcon from "../icons/iconComponents/SaveHeartNavFillIcon"
import ShortsNavEmptyIcon from "../icons/iconComponents/ShortsNavEmptyIcon"
import ShortsNavFillIcon from "../icons/iconComponents/ShortsNavFillIcon"
import OrderHistoryNavEmptyIcon from "../icons/iconComponents/OrderHistoryNavEmptyIcon"
import OrderHistoryNavFillIcon from "../icons/iconComponents/OrderHistoryNavFillIcon"
import MyPageEmptyIcon from "../icons/iconComponents/MyPageEmptyIcon"
import MyPageFillIcon from "../icons/iconComponents/MyPageFillIcon"

//@=> rn보고 고도화가능?
const menu = [
  {
    href: "/main",
    icon: <HomeNavEmptyIcon />,
    clickedIcon: <HomeNavFillIcon />,
    title: "홈",
  },
  {
    href: "/wishList",
    icon: <SaveHeartNavEmptyIcon />,
    clickedIcon: <SaveHeartNavFillIcon />,
    title: "찜",
  },
  {
    href: "/shorts",
    icon: <ShortsNavEmptyIcon />,
    clickedIcon: <ShortsNavFillIcon />,
    title: "쇼츠",
  },
  {
    href: "/orderList",
    icon: <OrderHistoryNavEmptyIcon />,
    clickedIcon: <OrderHistoryNavFillIcon />,
    title: "주문내역",
  },
  {
    href: "/myPage",
    icon: <MyPageEmptyIcon />,
    clickedIcon: <MyPageFillIcon />,
    title: "마이페이지",
  },
]
export default function GlobalNavBar() {
  const pathName = usePathname()
  //   const { data: session } = useSession()
  //   const user = session?.user

  // menu에 있는 경로들과 현재 경로 비교
  const shouldShowNav = menu.some((item) => item.href === pathName)
  if (!shouldShowNav) return null

  return (
    <div className=" fixed bottom-0 max-w-[400px] w-full mx-auto h-[60px]">
      <nav>
        <ul className="grid grid-cols-5 w-full border-t  border-gray-200">
          {menu.map((item) => (
            <li key={item.href} className="flex flex-col items-center justify-center py-2">
              <Link href={item.href} className="flex flex-col items-center">
                {pathName === item.href ? item.clickedIcon : item.icon}
                <span
                  className={`text-xxs font-semibold text-center whitespace-nowrap ${pathName === item.href ? "text-orange-700" : "text-gray-400"}`}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

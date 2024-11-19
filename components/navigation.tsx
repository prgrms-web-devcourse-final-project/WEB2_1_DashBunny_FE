"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navigation = () => {
  const MenuLayout = `flex items-center p-1 w-full my-1 h-16 rounded-xl hover:border hover:bg-white font-semibold text-gray-500`; //메뉴 레이아웃 잡기
  const SelectMenu = `flex items-center p-1 w-full my-1 h-16 rounded-xl bg-white font-semibold text-gray-500 border-2 border-BunnyOrange `; //선택시 레이아웃
  const Line = "bg-gray-200 h-0.5 w-[230px] my-5"; //라인
  const ImageProp = "object-contain mx-3";
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <section className="flex flex-col items-center w-[250px] bg-gray-50 p-5 shadow-xl min-h-screen realtive">
      <header className="text-3xl font-bold mb-5 text-BunnyOrange">DASH</header>
      <div className="flex border h-11 p-1 rounded-xl w-full bg-white border-gray-300">
        <Image
          src="/Icon/search.svg"
          alt="search Icon"
          width={30}
          height={30}
          className={ImageProp}
        />{" "}
        <input placeholder="Search" className="outline-none w-[150px]" />
        {/* 필요한가 다시 의논 */}
      </div>
      <div>
        <div className={Line} />
        <Link href="/">
          <div className={pathname === "/" ? SelectMenu : MenuLayout}>
            <Image
              src="/Icon/Dashboard.svg"
              alt="Dashboard Icon"
              width={30}
              height={30}
              className={ImageProp}
            />
            대시보드
          </div>
        </Link>
        <Link href="/user">
          <div className={pathname === "/user" ? SelectMenu : MenuLayout}>
            <Image
              src="/Icon/User.svg"
              alt="User Icon"
              width={30}
              height={30}
              className={ImageProp}
            />{" "}
            고객관리
          </div>
        </Link>
        <Link href="/shop">
          <div className={pathname === "/shop" ? SelectMenu : MenuLayout}>
            <Image
              src="/Icon/shop.svg"
              alt="shop Icon"
              width={30}
              height={30}
              className={ImageProp}
            />{" "}
            가게관리
          </div>
        </Link>
        <Link href="/coupon">
          <div className={pathname === "/coupon" ? SelectMenu : MenuLayout}>
            <Image
              src="/Icon/coupon.svg"
              alt="coupon Icon"
              width={30}
              height={30}
              className={ImageProp}
            />{" "}
            쿠폰관리
          </div>
        </Link>
        <Link href="/notice">
          <div className={pathname === "/notice" ? SelectMenu : MenuLayout}>
            <Image
              src="/Icon/notice.svg"
              alt="notice Icon"
              width={30}
              height={30}
              className={ImageProp}
            />{" "}
            공지관리
          </div>
        </Link>
        <Link href="/review">
          <div className={pathname === "/review" ? SelectMenu : MenuLayout}>
            <Image
              src="/Icon/review.svg"
              alt="review Icon"
              width={30}
              height={30}
              className={ImageProp}
            />{" "}
            리뷰관리
          </div>
        </Link>
        <Link href="/report">
          <div className={pathname === "/report" ? SelectMenu : MenuLayout}>
            <Image
              src="/Icon/warning.svg"
              alt="warning Icon"
              width={30}
              height={30}
              className={ImageProp}
            />{" "}
            신고 및 문의 관리
          </div>
        </Link>
      </div>
      <div>
        <div className={Line} />
        <div className={MenuLayout}>
          <Image
            src="/Icon/support.svg"
            alt="support Icon"
            width={30}
            height={30}
            className={ImageProp}
          />{" "}
          Support
        </div>
        <div className={MenuLayout}>
          <Image
            src="/Icon/setting.svg"
            alt="setting Icon"
            width={30}
            height={30}
            className={ImageProp}
          />{" "}
          Setting
        </div>
      </div>
      <div className="flex flex-col mt-auto">
        <div className={Line} />
        <div className="flex">
          <Image
            src="/Icon/profile.svg"
            alt="profile Icon"
            width={45}
            height={45}
            className={ImageProp}
          />{" "}
          <div>
            <p className="font-bold">관리자</p>
            <p className="text-gray-400 text-sm">knr0013@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;

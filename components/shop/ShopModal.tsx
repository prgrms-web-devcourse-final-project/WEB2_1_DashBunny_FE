import Image from "next/image";
import { useEffect } from "react";
import ReactKakaoMap from "../nextJsKakaoMap";

const ShopModal = ({ ModalHandler }: { ModalHandler: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 min-w-full items-center bg-black -top-0 -left-0 bg-opacity-[40%] flex justify-center">
      <section className=" bg-white w-[50vw] h-[90vh] shadow-2xl rounded-2xl overflow-y-auto">
        <div className="flex justify-between w-full p-3 border-b-2">
          <p className="text-2xl font-bold">가게 상세 정보</p>
          <button
            onClick={() => ModalHandler()}
            className="text-2xl font-semibold"
          >
            X
          </button>
        </div>
        <div className="relative w-full h-60">
          <Image
            src="https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp"
            alt="Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-center h-20 p-2 border-b-2">
          <p className="text-3xl font-bold text-BunnyOrange mx-2">
            엽기떡볶이 동대문점
          </p>
          <div>
            <p className=" text-gray-500 font-semibold">한승철</p>
            <p className="text-gray-500 font-semibold">010-1234-5687</p>
          </div>
        </div>
        <div className="border-b-2 p-5">
          <p className="text-2xl font-bold mx-2">사장님 말씀</p>
          <p className="p-5 font-semibold text-xl text-gray-500">
            안녕하세요 잘부탁드립니다 맛있게 보내드릴게요! 안녕하세요
            잘부탁드립니다 맛있게 보내드릴게요!
          </p>
        </div>
        <div className="border-b-2">
          <div className="flex items-center p-5">
            <Image
              src="/Icon/location.svg"
              alt="location icon"
              width={20}
              height={20}
              className="mx-1"
            />
            <p className="text-2xl font-bold mx-1 ">위치</p>
            <p className="text-md text-gray-500">
              서울특별시 동대문구 장안제2동 장한로 155
            </p>
          </div>
          <div className="flex items-center justify-center p-2">
            <ReactKakaoMap />
          </div>
        </div>
        <div className="flex items-center justify-center p-5 gap-40">
          <button className="flex items-center border p-5 shadow rounded-2xl font-bold w-60 justify-center">
            <div className="bg-green-500 w-3 h-3 rounded-full mx-1"></div>가게
            등록 승인
          </button>
          <button className="flex items-center border p-5 shadow rounded-2xl font-bold w-60 justify-center">
            <div className="bg-red-500 w-3 h-3 rounded-full mx-1"></div>가게
            등록 거절
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopModal;

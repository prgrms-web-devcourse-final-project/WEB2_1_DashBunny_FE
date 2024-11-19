import Image from "next/image";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopContent from "@/components/shop/ShopContent";

const Shop = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인
  const ButtonProp = "border-2 p-1 w-24 shadow mx-1 rounded-xl"; //버튼 css

  return (
    <div className="flex flex-col w-full p-11">
      <ShopHeader />
      <ShopContent />
    </div>
  );
};

export default Shop;

import ShopHeader from "@/components/shop/ShopHeader";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full p-11">
      <ShopHeader />
      {children}
    </div>
  );
};

export default ShopLayout;

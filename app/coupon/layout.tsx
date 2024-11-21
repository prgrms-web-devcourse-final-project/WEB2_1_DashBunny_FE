import CouponHeader from "@/components/coupon/CouponHeader";

const CouponLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-11">
      <CouponHeader />
      {children}
    </div>
  );
};

export default CouponLayout;

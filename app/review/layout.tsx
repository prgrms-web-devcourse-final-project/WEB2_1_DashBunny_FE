import React from "react";
import ReviewHeader from "@/components/review/ReviewHeader";

const Reviewlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-11">
      <ReviewHeader />
      {children}
    </div>
  );
};

export default Reviewlayout;

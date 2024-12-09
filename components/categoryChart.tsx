"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type CategoryData = {
  [key in
    | "korean"
    | "japanese"
    | "western"
    | "chinese"
    | "asian"
    | "lateNightFood"
    | "koreanSnacks"
    | "chicken"
    | "pizza"
    | "barbecue"
    | "cafeDessert"
    | "fastFood"]: number;
};

const CategoryChart = () => {
  const rawData: CategoryData = {
    korean: 353,
    japanese: 150,
    western: 22,
    chinese: 123,
    asian: 23,
    lateNightFood: 63,
    koreanSnacks: 75,
    chicken: 300,
    pizza: 23,
    barbecue: 35,
    cafeDessert: 63,
    fastFood: 235,
  };

  const formattedData = Object.keys(rawData).map((key) => ({
    category: key,
    value: rawData[key as keyof CategoryData], // 키를 안전하게 타입 캐스팅
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="gray" />
        <XAxis
          dataKey="category"
          tick={{ fontWeight: "bold", fontSize: 12 }}
          tickLine={false}
        />{" "}
        <YAxis />
        <Tooltip
          wrapperStyle={{
            borderColor: "#ff7b1e",
            boxShadow: "0px 0px 10px #f97316",
          }}
        />
        <Bar dataKey="value" fill="#f97316" radius={[20, 20, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategoryChart;

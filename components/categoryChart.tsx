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
    | "한식"
    | "일식"
    | "양식"
    | "중식"
    | "아시안푸드"
    | "야식"
    | "과자"
    | "치킨"
    | "피자"
    | "바베큐"
    | "디저트"
    | "패스트푸드"]: number;
};

const CategoryChart = () => {
  const rawData: CategoryData = {
    한식: 353,
    일식: 150,
    양식: 22,
    중식: 123,
    아시안푸드: 23,
    야식: 63,
    과자: 75,
    치킨: 300,
    피자: 23,
    바베큐: 35,
    디저트: 63,
    패스트푸드: 235,
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

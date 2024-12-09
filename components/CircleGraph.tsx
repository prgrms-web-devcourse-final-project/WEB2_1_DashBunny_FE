"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CircleGraph = () => {
  const rawData: { [key: string]: number } = {
    소비자: 5,
    점주: 2,
  };

  const formattedData = Object.keys(rawData).map((key) => ({
    category: key,
    value: rawData[key],
  }));

  // 색상 조합 개선: BunnyOrange 계열 색상
  const COLORS = ["#FF7B1E", "#FF9E3D"]; // BunnyOrange와 더 밝은 오렌지 색상

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="category"
          cx="50%" // 원의 중심 X 좌표
          cy="50%" // 원의 중심 Y 좌표
          outerRadius={85}
          fill="#FF7B1E" // 기본 색상
          label
          animationDuration={1000} // 애니메이션 시간 설정 (ms)
        >
          {formattedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]} // 각 항목에 색상 적용
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          iconSize={20}
          wrapperStyle={{ paddingTop: "10px" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircleGraph;

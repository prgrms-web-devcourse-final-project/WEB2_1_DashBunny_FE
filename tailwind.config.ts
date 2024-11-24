import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        // 블랙
        black: {
          900: "#111927",
          700: "#384250",
          600: "#4D5761",
          500: "#667085",
          400: "#9DA4AE",
          300: "#EEECEC",
          200: "#F9FAFB",
          100: "#F3F4F6",
        },
        placeholder: "B6B3B3",
        // 브라운
        brown: {
          200: "#B6B3B3",
        },
        // 오렌지
        orange: {
          700: "#FF6200",
          500: "#FF6F1E",
        },
        // 그린
        green: {
          700: "#388058",
          200: "#E6FEF0",
        },
        gray: {
          200: "#F5F5F5",
        },
      },
      fontSize: {
        // Logo
        logo: "60px", // 로고
        coupon: "32px",
        mainLogo: "28px",
        // Heading
        h1: "25px", // 큰 제목
        h2: "20px", // 중간 제목
        h3: "18px", // 작은 제목
        button: "19px",

        // Body
        lg: "17px", // 큰 본문
        md: "16px", // 기본 본문
        sm: "15px", // 작은 본문
        xs: "13px", // 매우 작은 본문
        xxs: "11px",
      },
    },
  },
  plugins: [],
} satisfies Config

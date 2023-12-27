import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      xxl: "1440px"
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        awesome: ["AwesomeSerif", "serif"]
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        "white-300": "#F5F5F5",
        "white-500": "#EDEDED",
        "white-700": "#EBEBEB",
        grey: "#7D7D7D",
        "grey-888": "#888",
        "grey-800": "#292929",
        "grey-900": "#181818",
        "grey-500": "#3E3E3E",
        "grey-300": "#B3B3B3",
        jungleGreen: "#28AE8D",
        deYork: "#86C18B",
        edgewater: "#C2DDD4",
        cornflowerBlue: "#169AFA",
        pictonBlue: "#3EA7DF",
        bostonBlue: "#3887A5",
        red: "#F02525",
        "red-600": "#F02525",
        "stone-200": "#DADDDC",
        "amber-200": "#CAD4CC",
        "teal-400": "#C1DFDD",
        "teal-500": "#C2DDD4",
        "teal-600": "#BED4D5"
      },
      fontSize: {
        xxxl: ["200px", { lineHeight: "208px" }],
        xxl: ["140px", { lineHeight: "146px" }],
        xl: ["128px", { lineHeight: "136px" }],
        l: ["100px", { lineHeight: "108px" }],
        m: ["72px", { lineHeight: "80px" }],
        mxxl: ["60px", { lineHeight: "68px" }],
        mxl: ["56px", { lineHeight: "64px" }],
        s: ["50px", { lineHeight: "58px" }],
        ml: ["48px", { lineHeight: "56px" }],
        mml: ["40px", { lineHeight: "46px" }],
        mm: ["36px", { lineHeight: "44px" }],
        xs: ["32px", { lineHeight: "40px" }],
        mxs: ["26px", { lineHeight: "34px" }],
        bodym: ["24px", { lineHeight: "32px" }],
        sbodym: ["22px", { lineHeight: "30px" }],
        mbodym: ["20px", { lineHeight: "28px" }],
        bodys: ["18px", { lineHeight: "26px" }],
        bodyxs: ["16px", { lineHeight: "24px" }],
        mbodyxs: ["14px", { lineHeight: "22px" }]
      },
      spacing: {
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "24": "6rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "28": "7rem",
        "29": "7.25rem",
        "30": "7.5rem",
        "65": "16.25rem",
        "42%": "42%"
      },
      lineHeight: {
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "18": "4.5rem",
        "20": "5rem",
        "22": "5.5rem",
        "24": "6rem",
        "25": "6.25rem"
      },
      borderRadius: {
        "32": "32px"
      },
      gridTemplateRows: {
        mobile: "repeat(5, minmax(190px, 1fr))",
        desktop: "repeat(2, minmax(220px, 1fr))"
      }
    }
  },
  plugins: []
};

export default config;

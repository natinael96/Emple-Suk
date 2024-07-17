/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        antiquewhite: {
          "100": "#f2ead7",
          "200": "#d9d1bd",
          "300": "rgba(242, 234, 215, 0.98)",
        },
        teal: "#106861",
        gainsboro: "#e5e1e1",
        white: "#fff",
        peachpuff: "#f5d2bb",
        black: "#000",
        darkslategray: {
          "100": "#1f5152",
          "200": "#333",
        },
        gray: "#777",
        lightsalmon: "#f0a778",
        darkcyan: "#368f87",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "work-sans": "'Work Sans'",
        prociono: "Prociono",
        nunito: "Nunito",
      },
      borderRadius: {
        "5xl-6": "24.6px",
        mini: "15px",
        "10xl-5": "29.5px",
        "79xl-4": "98.4px",
      },
    },
    fontSize: {
      "base-2": "16.2px",
      "sm-9": "13.9px",
      "5xl-6": "24.6px",
      xl: "20px",
      "lgi-7": "19.7px",
      "30xl-2": "49.2px",
      "11xl": "30px",
      "20xl": "39px",
      "6xl": "25px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "31xl": "50px",
      "mid-7": "17.7px",
      "4xl-6": "23.6px",
      "2xl-6": "21.6px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

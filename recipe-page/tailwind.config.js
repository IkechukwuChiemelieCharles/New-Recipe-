/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      width: {
        120: "26rem",
        128: "32rem",
        130: "34rem",
        144: "36rem",
        148: "40rem",
      },
      colors: {
        Nutmeg: "hsl(14, 45%, 36%)",
        DarkRaspberry: "hsl(332, 51%, 32%)",
        White: "hsl(0, 0%, 100%)",
        RoseWhite: "hsl(330, 100%, 98%)",
        Eggshell: "hsl(30, 54%, 90%)",
        LightGrey: "hsl(30, 18%, 87%)",
        WengeBrown: "hsl(30, 10%, 34%)",
        DarkCharcoal: "hsl(24, 5%, 18%)",
      },

      fontFamily: {
        young: ["Young Serif"],
        // (https://fonts.google.com/specimen/Young+Serif)

        outfit: ["Outfit"],
        // (https://fonts.google.com/specimen/Outfit)
      },
    },
  },
};

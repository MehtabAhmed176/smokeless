module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        240: "240px",
        350: "350px",
        10: "10px",
        15: "15px",
      },
      variants: {
        margin: ["responsive", "hover"],
      },
      fontSize: {
        heading: "25px",
      },
      colors: {
        pink: "#D463F0",
        cblue: "#49DCFF",
        dblue: "#3bc3e3",
        cindigo: "#D463F0",
      },
      borderRadius: {
        clarge: "30px",
      },
      // backgroundImage: {
      //   'hero-pattern': "url('/images/hero_image@3x.png')",
      // }
    },
  },
  plugins: [],
};

import withMT from "@material-tailwind/react/utils/withMT";
// const require = require("@babel/runtime/regenerator").default;

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#314838",
        third: "#E2EBE5",
        secondary: "#696f42",
        hightlight: "#f79797",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require("tailwindcss-animated"),
    require("tailwindcss-debug-screens"),
  ],
});

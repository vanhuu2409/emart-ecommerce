import withMT from "@material-tailwind/react/utils/withMT";
// const require = require("@babel/runtime/regenerator").default;

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#314838",
        third: "#E2EBE5",
        secondary: "#696f42",
        hightlight: "#f79797",
        bred: "#A94619",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require("tailwindcss-animated"),
    require("tailwindcss-debug-screens"),
    require("flowbite/plugin"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
});

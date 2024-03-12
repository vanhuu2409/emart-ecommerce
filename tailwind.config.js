import withMT from "@material-tailwind/react/utils/withMT";
// const require = require("@babel/runtime/regenerator").default;

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
});

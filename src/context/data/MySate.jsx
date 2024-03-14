import { useState } from "react";
import MyContext from "./MyContext";

const MySate = ({ children }) => {
  const [state, setState] = useState({
    name: "Context API",
    desc: "API description",
  });
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MySate;

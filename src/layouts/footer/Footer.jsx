import { useContext } from "react";
import MyContext from "../../context/data/MyContext";

const Footer = () => {
  const context = useContext(MyContext);
  console.table(context);
  const { state, setState } = context;
  const { name, desc } = state;
  return (
    <div className='text-center mb-5'>
      name: {name} desc: {desc}
      <button
        className='p-2 bg-primary text-white rounded-md'
        onClick={() => setState({ name: 123, desc: 456 })}
      >
        Click
      </button>
    </div>
  );
};

export default Footer;

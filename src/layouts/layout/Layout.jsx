import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

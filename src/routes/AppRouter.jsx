import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NoPage from "../pages/noPage/NoPage";
import Layout from "../layouts/layout/Layout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AllProducts from "../pages/allProducts/AllProducts";
import Cart from "../pages/cart/Cart";
import Order from "../pages/order/Order";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* user page */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/all-products' element={<AllProducts />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/*' element={<NoPage />} />
        </Route>
        {/* admin page */}
        <Route path='/admin/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

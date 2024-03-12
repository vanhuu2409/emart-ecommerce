import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NoPage from "../pages/noPage/NoPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

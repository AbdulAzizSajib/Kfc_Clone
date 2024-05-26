import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const noNavFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register") ||
    location.pathname.includes("404");
  return (
    <div>
      {noNavFooter || <Navbar></Navbar>}

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {noNavFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;

import { Link } from "react-router-dom";
// import "./Navbar.css";

import { GrCart } from "react-icons/gr";
import useAuth from "../../Components/Hook/useAuth";
import { FaUser } from "react-icons/fa";
import useCart from "../../Components/Hook/useCart";

const Navbar = () => {
  const [cart] = useCart();
  const { user, logoutUser } = useAuth();

  const handleLogOut = () => {
    logoutUser();
  };

  const navLinks = (
    <>
      <li>
        <Link className="text-lg font-bold text-white uppercase" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-lg font-bold text-white uppercase" to="/">
          About Us
        </Link>
      </li>
      <li>
        <Link className="text-lg font-bold text-white uppercase" to="/">
          Find Us
        </Link>
      </li>
      <li>
        <Link className="text-lg font-bold text-white uppercase" to="/">
          All Campaigns
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="fixed z-50 w-full shadow-md backdrop-blur-lg xl:pr-20 xl:pl-20 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a
            className="px-5 py-1 text-3xl font-bold text-white rounded-lg lg:text-5xl"
            href="/"
          >
            KFC
          </a>
        </div>

        {/* navbar end side */}
        <div className="flex items-center gap-5 navbar-end">
          <div className="hidden lg:flex">
            <ul className="gap-3 menu menu-horizontal">{navLinks}</ul>
          </div>
          {user ? (
            <>
              <button onClick={handleLogOut} className="Btn">
                <div className="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>

                <div className="text">Logout</div>
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="Btn">
                  <div className="sign">
                    <FaUser />
                  </div>

                  <div className="text">Login</div>
                </button>
              </Link>
            </>
          )}

          <Link to="/dashboard/cart">
            <div className="indicator">
              <span className="font-semibold text-white border-none bg-zinc-900 indicator-item badge">
                {cart.length}
              </span>
              <button className="Btn">
                <div className="sign">
                  <GrCart />
                </div>
                <div className="text">Cart</div>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Link, Outlet } from "react-router-dom";
import useAuth from "./../../Components/Hook/useAuth";
import { MdSpaceDashboard } from "react-icons/md";
import { FaHeart, FaHome, FaSearch } from "react-icons/fa";
import { GrCart, GrUser } from "react-icons/gr";
import { BsChat } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
// import useCart from "../../Components/Hook/useCart";
import { BiSolidFoodMenu } from "react-icons/bi";

const Dashboard = () => {
  const { user, logoutUser } = useAuth();
  console.log(user);
  // const [cart] = useCart();
  //!logout

  const handleLogOut = () => {
    logoutUser();
  };
  const isAdmin = true; // Replace this logic with your actual admin check  [user && user.role === "admin";]
  const navbar = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "Dashboard", icon: <MdSpaceDashboard />, link: "/dashboard" },
    { name: "Cart", icon: <GrCart />, link: "/dashboard/cart" },
    ...(isAdmin
      ? [{ name: "All User", icon: <GrUser />, link: "/dashboard/allusers" }]
      : []),
    { name: "Favourite", icon: <FaHeart />, link: "/favourite" },
    { name: "Search", icon: <FaSearch />, link: "/search" },
    { name: "Chat", icon: <BsChat />, link: "/chat" },
    { name: "Menu", icon: <BiSolidFoodMenu />, link: "/menu" },
  ];

  return (
    <div className="flex">
      <div className="fixed min-h-screen p-6 space-y-2 bg-white w-60">
        <div className="flex items-center p-2 space-x-4">
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                View profile
              </a>
            </span>
          </div>
        </div>
        {isAdmin ? (
          <>
            <div className="divide-y dark:divide-gray-300">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {navbar.map((nav, index) => (
                  <div key={index}>
                    <li>
                      <Link
                        to={nav.link}
                        className="flex items-center p-2 space-x-3 rounded-md hover:underline"
                      >
                        {nav.icon}
                        <span>{nav.name}</span>
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <Link
                    to=""
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <IoSettingsSharp />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={handleLogOut}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <LuLogOut></LuLogOut>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="divide-y dark:divide-gray-300">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {navbar.map((nav, index) => (
                  <div key={index}>
                    <li>
                      <Link
                        to={nav.link}
                        className="flex items-center p-2 space-x-3 rounded-md hover:underline"
                      >
                        {nav.icon}
                        <span>{nav.name}</span>
                      </Link>
                    </li>
                  </div>
                ))}

                {/* ... */}
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <Link
                    to=""
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <IoSettingsSharp />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={handleLogOut}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <LuLogOut></LuLogOut>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        {/* <div className="divide-y dark:divide-gray-300">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {navbar.map((nav, index) => (
              <div key={index}>
                <li>
                  <Link
                    to={nav.link}
                    className="flex items-center p-2 space-x-3 rounded-md hover:underline"
                  >
                    {nav.icon}
                    <span>{nav.name}</span>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li>
              <Link
                to=""
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <IoSettingsSharp />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={handleLogOut}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <LuLogOut></LuLogOut>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="flex-1 min-h-screen space-y-2 overflow-y-auto ml-60 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

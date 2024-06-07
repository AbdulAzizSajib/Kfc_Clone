import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Spiner from "../Spiner/Spiner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  //we'hv to wait here
  if (loading) return <Spiner></Spiner>;
  // console.log(loading);

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

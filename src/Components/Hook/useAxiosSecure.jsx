import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  // retuest interceptor to addd authorixation header for every secure call to the api

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("req stopped bt interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log(29, "Error in the interceptor", status);
      if (status === 401 || status === 403) {
        await logoutUser();
        navigate("/login", { replace: true });
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;

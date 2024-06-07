import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import Spiner from "../Spiner/Spiner";

const SocialLogin = () => {
  const [Loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

  const handleSocialLogin = (media) => {
    // setLoading(true);
    media()
      .then((res) => {
        console.log(res.data);
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
          photoUrl: res.user?.photoURL,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((result) => {
            console.log(result.data);
            toast.success("Login Successfully");
            setTimeout(() => {
              setLoading(false);
              navigate("/");
            }, 4000);
          })
          .catch((err) => {
            const errorMessage = err.message;
            console.log(errorMessage);
            toast.error("Failed to log in");
            setLoading(false);
          });
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
        toast.error("Failed to log in");
      });
  };

  return (
    <div className="flex items-center justify-start w-full mt-3 border">
      <ToastContainer />
      {Loading ? (
        <Spiner></Spiner>
      ) : (
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="w-full text-lg btn btn-outline"
        >
          <FaGoogle />
          Log in with Google
        </button>
      )}
    </div>
  );
};

export default SocialLogin;

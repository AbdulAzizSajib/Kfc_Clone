import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

  const handleSocialLogin = (media) => {
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
            navigate("/");
          })
          .catch((err) => {
            const errorMessage = err.message;
            console.log(errorMessage);
            toast.error("Failed to log in");
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
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="w-full text-lg btn btn-outline"
      >
        <FaGoogle />
        Log in with Google
      </button>
      {/* Ensure ToastContainer is here as well */}
      <ToastContainer />
    </div>
  );
};

export default SocialLogin;

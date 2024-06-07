import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hook/useAuth";
import useAxiosPublic from "../../Components/Hook/useAxiosPublic";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, logoutUser } = useAuth();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log("User Created", res.user);
        //! Axios Public (Post UserInfo to Database)

        const userInfo = {
          email: data.email,
          password: data.password,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("Registration Successfully");
            reset();
            logoutUser().then((res) => {
              console.log(res);
              navigate("/login", { replace: true });
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
            <a
              href="#"
              className="pb-2 text-2xl font-bold text-gray-900 border-b-4 border-b-gray-700"
            >
              KFC .
            </a>
          </div>
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <p className="text-5xl font-bold text-left uppercase">Sign Up</p>
            <p className="mt-2 text-left text-gray-500">
              Please enter your details.
            </p>

            <div>
              <SocialLogin></SocialLogin>
            </div>
            <div className="relative flex h-px mt-8 bg-gray-200 place-items-center">
              <div className="absolute h-6 text-sm text-center text-gray-500 -translate-x-1/2 bg-white left-1/2 w-14">
                or
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden transition border-b-2 focus-within:border-b-gray-500">
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                    id="login-email"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                    placeholder="Add Your Email"
                  />
                  {errors.password && <span>This field is required</span>}
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="relative flex overflow-hidden transition border-b-2 focus-within:border-b-gray-500">
                  <input
                    {...register("password", { required: true })}
                    name="password"
                    type="password"
                    id="login-password"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                    placeholder="Add Your Password"
                  />
                  {errors.password && <span>This field is required</span>}
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition bg-gray-900 rounded-lg shadow-md ring-gray-500 ring-offset-2 focus:ring-2"
              >
                Register
              </button>
            </form>
            <div className="py-12 text-center">
              <p className="text-gray-600 whitespace-nowrap">
                Already have an account?
                <Link
                  className="ml-2 font-semibold text-gray-900 underline underline-offset-4"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden h-screen bg-black pointer-events-none select-none md:block md:w-1/2">
          {/* <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
            <p className="mb-8 text-3xl font-semibold leading-10">
              We work 10x faster than our compeititors and stay consistant.
              While they&apos;re bogged won with techincal debt, we&apos;re
              realeasing new features.
            </p>
            <p className="mb-4 text-3xl font-semibold">John Elmond</p>
            <p className="">Founder, Emogue</p>
            <p className="text-sm mb-7 opacity-70">Web Design Agency</p>
          </div> */}
          <img
            className="absolute top-0 object-cover w-full h-full -z-1 opacity-90"
            src="https://images.unsplash.com/photo-1688264529550-04f8196964b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark"></ToastContainer>
    </div>
  );
};

export default Register;

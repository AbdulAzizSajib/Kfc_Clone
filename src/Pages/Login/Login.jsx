import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div>
      <div className="flex flex-wrap ">
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
            <p className="text-5xl font-bold text-left uppercase">Sign in</p>
            <p className="text-left text-gray-500 capitalize ">
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
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden transition border-b-2 focus-within:border-b-gray-500">
                  <input
                    type="email"
                    id="login-email"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="relative flex overflow-hidden transition border-b-2 focus-within:border-b-gray-500">
                  <input
                    type="password"
                    id="login-password"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition bg-gray-900 rounded-lg shadow-md ring-gray-500 ring-offset-2 focus:ring-2"
              >
                Log in
              </button>
            </form>
            <div className="py-12 text-center ">
              <p className="text-gray-600 whitespace-nowrap">
                Don&apos;t have an account?
                <Link
                  className="ml-1 font-semibold text-gray-900 underline underline-offset-4"
                  to="/404"
                >
                  sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden h-screen bg-black pointer-events-none select-none md:block md:w-1/2">
          <img
            className="absolute top-0 object-cover w-full h-full -z-1 opacity-90"
            src="https://images.unsplash.com/photo-1688264529550-04f8196964b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

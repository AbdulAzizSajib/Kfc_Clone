import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
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
            <p className="text-3xl font-bold text-left">Welcome back</p>
            <p className="mt-2 text-left text-gray-500">
              Please enter your details.
            </p>
            {/* <button className="flex items-center justify-center px-4 py-1 mt-8 transition border rounded-md outline-none -2 ring-gray-400 ring-offset-2 focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <img
                className="h-5 mr-2"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
              />
              Log in with Google
            </button> */}
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
          <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
            <p className="mb-8 text-3xl font-semibold leading-10">
              We work 10x faster than our compeititors and stay consistant.
              While they&apos;re bogged won with techincal debt, we&apos;re
              realeasing new features.
            </p>
            <p className="mb-4 text-3xl font-semibold">John Elmond</p>
            <p className="">Founder, Emogue</p>
            <p className="text-sm mb-7 opacity-70">Web Design Agency</p>
          </div>
          <img
            className="absolute top-0 object-cover w-full h-full -z-1 opacity-90"
            src="https://images.unsplash.com/photo-1688264529550-04f8196964b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

import { BsInstagram, BsTwitterX, BsWhatsapp, BsYoutube } from "react-icons/bs";
import logo from "../../../assets/slider/logo.png";
import { BiStore } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
const AdressTitle = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center bg-[#f02328] p-4">
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:w-1/2 lg:space-y-0 lg:space-x-5">
          <img className="max-w-sm scale-50" src={logo} alt="Logo" />
          <div className="flex items-center gap-2 text-xl font-bold text-white lg:text-3xl">
            <BsWhatsapp />
            <h2>444 555 666</h2>
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-white lg:text-3xl">
            <BiStore />
            <h2>444 555 666</h2>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-3 lg:w-1/2 lg:space-x-5 lg:mt-0">
          <button className="text-white btn btn-circle btn-outline">
            <FaFacebook className="text-xl" />
          </button>
          <button className="text-white btn btn-circle btn-outline">
            <BsTwitterX className="text-xl" />
          </button>
          <button className="text-white btn btn-circle btn-outline">
            <BsInstagram className="text-xl" />
          </button>
          <button className="text-white btn btn-circle btn-outline">
            <BsYoutube className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdressTitle;

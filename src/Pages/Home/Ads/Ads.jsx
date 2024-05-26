import google from "../../../assets/g.png";
import apple from "../../../assets/a.png";
import Slider from "../../../Components/Slider/Slider";
const Ads = () => {
  return (
    <div>
      <div className="bg-[#ffb234] items-center justify-between relative py-28 my-52 flex flex-col lg:flex-row">
        <div className="flex justify-center w-full lg:w-1/2 lg:block">
          <div className="max-w-5xl scale-75 lg:scale-75 lg:absolute lg:left-10 lg:-top-64">
            <Slider />
          </div>
        </div>
        <div className="w-full p-4 space-y-5 lg:w-1/2 lg:space-y-5 lg:p-0">
          <h2 className="text-3xl font-bold text-white lg:text-5xl">
            Now With Your Favorite KFC Mobile Application In Your Pocket
          </h2>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
            <div
              data-aos="zoom-out"
              data-aos-duration={2000}
              data-aos-mirror="false"
            >
              <img
                className="w-40 lg:max-w-80"
                src={google}
                alt="Google Play"
              />
            </div>
            <div
              data-aos="zoom-out"
              data-aos-duration={2000}
              data-aos-mirror="false"
            >
              <img
                className="w-40 rounded-full lg:max-w-80"
                src={apple}
                alt="Apple Store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;

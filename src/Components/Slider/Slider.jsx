import chic from "../../assets/slider/chic.png";
import mama from "../../assets/slider/mama.png";
import logo from "../../assets/slider/logo.png";
import menu1 from "../../assets/menu/combo.png";
import menu2 from "../../assets/menu/combo2.png";
import menu3 from "../../assets/menu/fr.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import { FaUser } from "react-icons/fa";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "450px" }}>
          <div className="flex flex-col border-2 rounded-lg bg-gradient-to-r from-red-700 to-red-800">
            <div className="p-12 ">
              <img src={mama} alt="" />
              <img className="scale-75" src={logo} alt="" />
            </div>
            <button className="mx-14  text-xl bg-[#ffaa17] rounded-full font-bold text-white uppercase btn border-none">
              log in
            </button>
            <img className="my-5 " src={chic} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}>
          <div className="hidden rounded-lg lg:block bg-gradient-to-r from-red-700 to-red-800">
            <div className="flex justify-between p-4 ">
              <img className="w-32" src={logo} alt="" />
              <FaUser className="text-3xl font-bold text-white"></FaUser>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-center text-white border-2">
                menu
              </h2>
            </div>
            <div>
              {[
                {
                  title: "Buddies Flavour",
                  details:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
                  price: "299",
                  image: menu1,
                },
                {
                  title: "Spaciy Chicken",
                  details:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
                  price: "399",
                  image: menu2,
                },
                {
                  title: "Kfc Favourite",
                  details:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
                  price: "499",
                  image: menu3,
                },
                {
                  title: "Kfc Favourite",
                  details:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
                  price: "499",
                  image: menu3,
                },
              ].map((box, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-2 m-4 my-5 space-y-4 text-black bg-white border-2 rounded-2xl"
                >
                  <div className="flex items-center w-1/2 ">
                    <img
                      className="object-cover w-32 h-32 "
                      src={box.image}
                      alt="Menu item"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold ">{box.title}</h2>
                    <p className="text-lg font-light ">{box.details}</p>
                    <p className="text-3xl font-bold text-red-600 ">
                      {box.price} Taka
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 bg-[#FFAA17] ">
              <h2 className="text-3xl font-bold text-center text-white">
                Add To Bucket
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

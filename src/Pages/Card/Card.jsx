import bur from "../../assets/bur.png";
import coki from "../../assets/coki.png";
import wall from "../../assets/wall.jpg";
import map from "../../assets/map.png";
import chef from "../../assets/chef.jpg";
import fresh from "../../assets/fresh.jpg";
import offWhite from "../../assets/of.jpg";
import yellow from "../../assets/y.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const cardInfo = [
  {
    title: "any day offers",
    details: "new phenomenon burger taste",
    price: " 499",
    bg: yellow,
    image: bur,
  },
  {
    title: "Other Flavors",
    details: "save room.we made cookies",
    price: 599,
    bg: wall,
    image: coki,
  },
  {
    title: " find a kfc store near you",
    details: "find your best burger taste",
    bg: offWhite,
    image: map,
  },
  {
    title: "crispy and fresh chicken master chef",
    details: "we made our recipe freshly",
    image: chef,
  },
  {
    title: "Happy Customer",
    details: "We received positive review from our customer",
    image: fresh,
  },
];

const Card = () => {
  return (
    <div className="bg-[#fef8ed]">
      <section className="p-8 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cardInfo.slice(0, 3).map((data, index) => (
            <div
              key={index}
              // data-aos="fade-right"
              // data-aos-duration="2000"
              className="flex flex-col items-center p-4 bg-white shadow-lg lg:flex-row rounded-2xl"
            >
              <div className="w-full space-y-2 lg:w-1/2">
                <h2 className="text-sm font-bold uppercase lg:text-4xl">
                  {data.title}
                </h2>
                <p className="font-bold lg:text-lg">{data.details}</p>
                <h2 className="font-bold lg:text-2xl">
                  <span className="text-[#d31027]">{data.price}</span>
                </h2>
              </div>
              <div className="flex items-center justify-center w-full lg:w-1/2 lg:relative">
                <img
                  className="hidden lg:block lg:max-w-[300px] w-full h-full lg:h-[300px] mask mask-circle object-cover"
                  src={data.bg}
                  alt=""
                />
                <img
                  className={` ${
                    index === 2 && " scale-125 lg:bottom-20 lg:left-0"
                  } ${
                    index === 0 && "scale-95"
                  } lg:absolute  max-w-[250px] lg:right-2 object-cover lg:bottom-16`}
                  src={data.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        {/* .............. */}
        <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
          {cardInfo.slice(3).map((data, index) => (
            <div
              key={index}
              // data-aos="fade-right"
              // data-aos-duration="2000"
              className="flex flex-col items-center p-4 text-black bg-white shadow-lg lg:flex-row rounded-2xl"
            >
              <div className="w-full space-y-2 lg:w-1/2">
                <h2 className="font-bold uppercase lg:text-4xl">
                  {data.title}
                </h2>
                <p className="font-bold lg:text-lg">
                  we made our recipe freshly
                </p>
              </div>
              <div className="flex items-center justify-center w-full lg:w-1/2">
                <img
                  className="lg:max-w-[300px] lg:h-[300px] object-cover mask mask-circle"
                  src={data.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;

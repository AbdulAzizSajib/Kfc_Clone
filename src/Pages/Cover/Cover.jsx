import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

import "./Cover.css"; // Import the CSS file for additional styles

import box from "../../assets/wing.png";
import bur from "../../assets/bur.png";
import drinks from "../../assets/drinks.png";
import round from "../../assets/round.png";
import redorg from "../../assets/redor.png";
import red from "../../assets/red.png";
import { Helmet } from "react-helmet-async";

const Cover = () => {
  return (
    <div className=" kfc">
      <Helmet>
        <title>Home | KFC</title>
      </Helmet>
      <section className="relative">
        <div className="min-h-screen hero">
          <div className="flex flex-col items-center text-white hero-content lg:flex-row-reverse">
            <div
              data-aos="fade-left"
              data-aos-duration={2000}
              data-aos-mirror="true"
              className="relative flex justify-center w-full lg:w-1/2"
            >
              <img src={box} className="z-10 lg:max-w-xl" alt="" />
              <img
                src={drinks}
                className="hidden lg:block absolute bottom-0 right-0 z-20 max-w-[330px] rotate-12 left-[450px]"
                alt=""
              />
              <img
                className="absolute hidden lg:block -left-24 -rotate-12 bottom-52 mix-blend-overlay"
                src={bur}
                alt=""
              />
            </div>
            {/* ........ */}
            <div
              data-aos="fade-right"
              data-aos-duration={2000}
              data-aos-mirror="true"
              className="w-full lg:space-y-6 lg:w-1/2"
            >
              <h1 className="text-3xl font-bold uppercase lg:text-8xl">
                Your Ultimate Burger Destination
              </h1>

              <p className="py-6 font-light lg:text-2xl">
                Welcome to burger bliss! Enjoy juicy patties, fresh toppings,
                and delicious sauces crafted just for you. Dive into flavor with
                every bite!
              </p>
              <button className="lg:px-10 btn-outline hover:border-white border-4 lg:btn-lg text-white lg:-4 bg-[#f63b27] uppercase rounded-full btn">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-0 hidden lg:block mix-blend-color-dodge">
          <img className="max-w-lg" src={round} alt="" />
        </div>
        <div className="absolute hidden mix-blend-color-dodge lg:block -bottom-60 -left-60">
          <img className="max-w-lg" src={redorg} alt="" />
        </div>
        <div className="absolute hidden mix-blend-color-dodge right-5 -top-48 lg:block">
          <img className="max-w-lg" src={red} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Cover;

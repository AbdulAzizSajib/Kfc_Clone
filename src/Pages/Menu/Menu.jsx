import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";
import useAuth from "../../Components/Hook/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import useCart from "../../Components/Hook/useCart";
const Menu = () => {
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [menu, setMenu] = useState([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  //! handle Cart Button
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      //todo: send cart item to the database
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };

      axiosSecure.post("/cart", cartItem).then((res) => {
        console.log(res.data);
        // Swal.fire({
        //   icon: "success",
        //   title: `${item.name} Added to Cart`,
        // });
        toast.success(`${item.name} Added to Cart!`);

        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Can you login now ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div data-aos="zoom-in" className="relative flex justify-center ">
        <h2 className="px-16 py-2 font-bold text-center text-white uppercase bg-yellow-300 rounded-full lg:absolute lg:text-3xl lg:-top-7">
          Menu
        </h2>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {menu.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex flex-col items-center py-8 ">
              <img
                className="object-cover w-[250px] h-[250px] transition-all duration-300  hover:-translate-y-2 hover:scale-110"
                src={item.image}
                alt=""
              />
              <h2 className="text-xl font-bold text-center">{item.name}</h2>
              <h2 className="text-xl font-bold text-center">
                {item.price} Taka
              </h2>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-3 text-lg font-bold text-white border-none bg-gradient-to-r from-[#f94526] to-[#f12928] btn-lg btn hover:from-[#f12928] hover:to-[#f94526]"
              >
                Add To Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer theme="dark" autoClose={3000} position="bottom-right" />
    </div>
  );
};

export default Menu;

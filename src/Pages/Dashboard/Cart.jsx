import { RiDeleteBinFill } from "react-icons/ri";
import useCart from "../../Components/Hook/useCart";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
// import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCartItemDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          console.log(res);
          // toast.success("delete");
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col min-h-screen p-6 space-y-4 border-2 sm:p-10 ">
        <h2 className="text-3xl font-semibold uppercase">
          Total cart Item : {cart.length}
        </h2>
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          {/* .... */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {cart.map((item, index) => (
              <li
                key={item._id}
                className="flex flex-col p-6 border-2 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item.image}
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold leading-snug capitalize sm:pr-8">
                          {index + 1}. {item.name}
                        </h3>
                        <p className="text-sm dark:text-gray-600">Classic</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold c">
                          {item.price} Taka
                        </p>
                        <p className="text-sm line-through dark:text-gray-400">
                          75.50€
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        onClick={() => handleCartItemDelete(item._id)}
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                      >
                        <RiDeleteBinFill />
                        <span>Remove</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <FaHeart></FaHeart>
                        <span>Add to favorites</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
        <div className="space-y-1 text-right">
          <p className="text-xl">
            Total amount:{" "}
            <span className="font-semibold">{totalPrice} Taka</span>
          </p>
          <p className="text-sm dark:text-gray-600">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to="/">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-default-600"
            >
              Back to shop
            </button>
          </Link>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-default-600 dark:text-gray-50 dark:border-default-600"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
};

export default Cart;

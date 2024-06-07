import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data;
    },
  });

  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log(32, res.data);
        if (res.data.deletedCount > 0) {
          toast.success(`${name} Successfully Deleted From Menu`);
          refetch();
        }
      }
    });
    // axiosSecure
    //   .delete(`/menu/${id}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     refetch();
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //   });
  };
  return (
    <div>
      <div className="min-h-screen ">
        <h2 className="my-8 text-3xl font-bold">Manage Item</h2>
        <span className="py-4 text-2xl font-bold rounded-md">
          Total Product : {menu.length}
        </span>
        <div className="overflow-x-auto border">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Items</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2 className="font-bold"> {item.name} </h2>
                  </td>
                  <td className="font-bold">{item.price} Taka</td>
                  <td>
                    <Link to={`/dashboard/updateItems/${item._id}`}>
                      <FaRegEdit className="text-xl"></FaRegEdit>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id, item.name)}
                      className="btn btn-ghost btn-xs"
                    >
                      <MdDelete className="text-xl"></MdDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark"></ToastContainer>
    </div>
  );
};

export default ManageItems;

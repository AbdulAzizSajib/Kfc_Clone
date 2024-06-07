import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Components/Hook/useAxiosPublic";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItems = () => {
  const { name, description, price, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to the server with image url
      const itemData = {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      //now update
      const itemRes = await axiosSecure.patch(`/menu/${_id}`, itemData);
      console.log(itemRes.data);
      if (itemRes.data.modifiedCount > 0) {
        //show success popup
        toast.success(`${data.name} Successfully Updated on Menu`);
        reset();
      }
    }
    console.log("with image url", res.data);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen border-2">
      <h2 className="my-8 text-3xl font-bold">Update Item</h2>
      <div className="w-full max-w-xl bg-yellow-500 shadow-2xl card shrink-0 bg-gradient-to-r from-[#EF3B36] to-[#c0392b] ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-bold text-white">Updated Name</span>
            </label>
            <input
              {...register("name")}
              defaultValue={name}
              placeholder="Enter Item Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-bold text-white">
                Updated Description
              </span>
            </label>
            <textarea
              defaultValue={description}
              {...register("description")}
              placeholder="Enter Item Description"
              className="border-none textarea textarea-lg"
              id=""
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-xl font-bold text-white">
                Updated Price
              </span>
            </label>
            <input
              defaultValue={price}
              {...register("price")}
              type="number"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-bold text-white">
                Updated Image
              </span>
            </label>
            <input
              {...register("image")}
              type="file"
              // placeholder="Enter Item Name"
              className="file-input file-input-md file-input-warning"
              required
            />
          </div>
          <div className="mt-6 form-control">
            <button className="mt-3 text-lg font-bold text-white bg-gradient-to-r from-[#f94526] to-[#f12928] btn hover:from-[#f12928] hover:to-[#f94526]">
              Update Item
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" theme="dark"></ToastContainer>
    </div>
  );
};

export default UpdateItems;

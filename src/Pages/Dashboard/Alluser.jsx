import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";

import { IoPersonRemoveSharp } from "react-icons/io5";

const Alluser = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (id) => {
    console.log(id);
    //delete User
    axiosSecure
      .delete(`/users/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // make admin

  const handleMakeAdmin = (id) => {
    console.log(id);
    axiosSecure
      .patch(`/users/admin/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold">Total Users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src={user.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-outline btn-circle"
                    >
                      User
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-circle btn-outline"
                  >
                    <IoPersonRemoveSharp className="text-lg"></IoPersonRemoveSharp>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Alluser;

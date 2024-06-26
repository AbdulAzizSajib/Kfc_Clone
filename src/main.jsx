import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import NotFound from "./Components/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Cart from "./Pages/Dashboard/Cart";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Alluser from "./Pages/Dashboard/Alluser";
const queryClient = new QueryClient();
import { HelmetProvider } from "react-helmet-async";
import AddItems from "./Pages/Dashboard/AddItems";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import ManageItems from "./Pages/Dashboard/ManageItems";
import UpdateItems from "./Pages/Dashboard/UpdateItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/404",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //Normal User Route
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },

      //admin route

      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <Alluser></Alluser>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItems/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/menu/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

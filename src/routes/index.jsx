import { createBrowserRouter } from "react-router-dom";
import LayoutPrivate from "../layouts/LayoutPrivate";
import LayoutPublic from "../layouts/LayoutPublic";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const root = createBrowserRouter([
  {
    //-----RUTAS PUBLICAS------------
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

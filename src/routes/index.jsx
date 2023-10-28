import { createBrowserRouter } from "react-router-dom";

import LayoutPrivate from "../layouts/LayoutPrivate";
import LayoutPublic from "../layouts/LayoutPublic";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Perfil from "../pages/Perfil";
import NotFound from "../pages/NotFound";

export const root = createBrowserRouter([
  {
    //-----RUTAS PUBLICAS------------
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
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
      //-----RUTAS PRIVADAS------------
      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "/perfil",
        element: <LayoutPrivate />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Perfil />,
          },
        ],
      },
    ],
  },
]);

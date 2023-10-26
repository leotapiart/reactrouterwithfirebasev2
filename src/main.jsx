import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";
import "./index.css";
import { root } from "./routes/index.jsx";
import "flowbite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={root} />
  </UserProvider>,
);

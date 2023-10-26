import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <div className="w-96 mx-auto mt-10">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutPublic;

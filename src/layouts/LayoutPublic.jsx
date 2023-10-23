import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LayoutPublic;

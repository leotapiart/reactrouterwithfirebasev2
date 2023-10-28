import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="container mx-auto w-96">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;

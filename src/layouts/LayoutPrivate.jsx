import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const { user } = useUserContext();
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <main className="container mx-auto w-96">
      <Outlet />
    </main>
  );
};

export default LayoutPrivate;

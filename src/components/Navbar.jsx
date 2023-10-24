import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser, logoutUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav>
      <Link to="/">Inicio - </Link>
      {user ? (
        <>
          <Link to="/dashboard"> Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login - </Link>
          <Link to="/register">Registrarse</Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;

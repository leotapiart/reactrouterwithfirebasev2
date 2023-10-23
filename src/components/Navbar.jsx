import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(false);
    navigate("/");
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
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};
export default Navbar;

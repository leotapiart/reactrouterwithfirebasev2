import { Link, NavLink, useNavigate } from "react-router-dom";
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

  const classButtonBlue =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 my-1";

  const classButtonRed =
    "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-2 my-1";

  return (
    <nav className="bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link className="flex items-center" to="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            URLShort APP
          </span>
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <>
              <NavLink to="/dashboard" className={classButtonBlue}>
                Inicio
              </NavLink>
              <NavLink to="/perfil" className={classButtonBlue}>
                Perfil de Usuario
              </NavLink>
              <button onClick={handleLogout} className={classButtonRed}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={classButtonBlue}>
                Login
              </NavLink>
              <NavLink to="/register" className={classButtonBlue}>
                Registrarse
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

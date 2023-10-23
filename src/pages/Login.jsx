import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser(true);
    navigate("/");
  };
  return (
    <>
      <h1>Login 🔐</h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </>
  );
};

export default Login;

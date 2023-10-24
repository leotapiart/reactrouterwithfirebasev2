import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, loginUser } = useUserContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      if (res) {
        setUser(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login 🔐</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Iniciar Sesión</button>
      </form>
    </>
  );
};

export default Login;

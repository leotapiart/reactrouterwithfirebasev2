import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Registro 🙋‍♂️🔑</h1>
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
        <button>Registrar</button>
      </form>
    </>
  );
};

export default Register;

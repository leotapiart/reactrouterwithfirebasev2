import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const { registerUser } = useUserContext();
  const navigate = useNavigate();
  const patronEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      email: "test@test.com",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      console.log("Usuario Creado 👍");
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        setError("email", { message: "Usuario ya registrado 😢" });
      }
    }
  };

  return (
    <>
      <h1>Registro 🙋‍♂️🔑</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required: { value: true, message: "Campo Obligatorio" },
            pattern: {
              value: patronEmail,
              message: "Formato de email incorrecto",
            },
          })}
        />
        <input
          type="password"
          placeholder="Ingrese Contraseña"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "La contraseña debe tener mínimo 6 caracteres.",
            },
            validate: {
              trim: (v) => {
                if (!v.trim()) {
                  return "No seas 🤡, escribe algo";
                }
                true;
              },
            },
          })}
        />
        <input
          type="password"
          placeholder="Repita su Contraseña"
          {...register("repassword", {
            validate: {
              equals: (v) =>
                v === getValues("password") || "No coinciden las contraseñas", //EQUALS PUEDE TENER CUALQUIER NOMBRE
            },
          })}
        />
        <button type="submit">Registrar</button>
        {errors.email && <p>{errors.email.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}
        {errors.repassword && <p>{errors.repassword.message}</p>}
      </form>
    </>
  );
};

export default Register;

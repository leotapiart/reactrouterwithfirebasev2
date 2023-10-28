import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import { useUserContext } from "../context/UserContext";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";
import { useState } from "react";
import ButtonLoading from "../components/ButtonLoading";

const Login = () => {
  const { loginUser } = useUserContext();
  const navigate = useNavigate();
  const { required, patternEmail, minLength, validateTrim } = formValidate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "test@test.com",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title text={"Login 🔐"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          label="Ingrese su Correo"
          error={errors.email}
          placeholder="Ingrese Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        />
        <FormError error={errors.email} />
        <FormInput
          type="password"
          label="Ingrese su Contraseña"
          placeholder="Ingrese Contraseña"
          error={errors.password}
          {...register("password", {
            required,
            minLength,
            validate: validateTrim,
          })}
        />
        <FormError error={errors.password} />
        {loading ? <ButtonLoading /> : <Button type="submit" text={"Iniciar Sesión"} />}

        <FormError error={errors.firebase} />
      </form>
    </>
  );
};

export default Login;

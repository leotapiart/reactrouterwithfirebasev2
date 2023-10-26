import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { formValidate } from "../utils/formValidate";
import Title from "../components/Title";
import Button from "../components/Button";

const Register = () => {
  const { registerUser } = useUserContext();
  const navigate = useNavigate();
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

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
      navigate("/");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message: message });
    }
  };

  return (
    <>
      <Title text={"Registro 🙋‍♂️🔑"} />
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa tu correo"
        />
        <FormInput
          type="password"
          placeholder="Ingrese Contraseña"
          {...register("password", {
            required,
            minLength,
            validate: validateTrim,
          })}
          label="Ingresa contraseña"
        />
        <FormInput
          type="password"
          placeholder="Repita su Contraseña"
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
          label="Repita su contraseña"
        />
        <Button type="submit" text={"Registrarse"} />
        <FormError error={errors.email} />
        <FormError error={errors.password} />
        <FormError error={errors.repassword} />
      </form>
    </>
  );
};

export default Register;

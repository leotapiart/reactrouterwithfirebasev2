import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { formValidate } from "../utils/formValidate";

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
      setError("firebase", { message: erroresFirebase(error.code) });
    }
  };

  return (
    <>
      <h1>Registro 🙋‍♂️🔑</h1>
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="type"
          placeholder="Ingrese Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        />
        <FormInput
          type="password"
          placeholder="Ingrese Contraseña"
          {...register("password", {
            required,
            minLength,
            validate: validateTrim,
          })}
        />
        <FormInput
          type="password"
          placeholder="Repita su Contraseña"
          {...register("repassword", {
            validate: validateEquals(getValues),
          })}
        />
        <button type="submit">Registrar</button>
        <FormError error={errors.email} />
        <FormError error={errors.password} />
        <FormError error={errors.repassword} />
      </form>
    </>
  );
};

export default Register;

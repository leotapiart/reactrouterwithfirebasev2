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
  const [loading, setLoading] = useState(false);
  const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate();

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
      setLoading(true);
      await registerUser(email, password);
      navigate("/");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title text={"Registro 🙋‍♂️🔑"} />
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          error={errors.email}
          placeholder="Ingrese Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa tu correo"
        />
        <FormError error={errors.email} />
        <FormInput
          type="password"
          placeholder="Ingrese Contraseña"
          error={errors.password}
          {...register("password", {
            required,
            minLength,
            validate: validateTrim,
          })}
          label="Ingresa contraseña"
        />
        <FormError error={errors.password} />
        <FormInput
          type="password"
          error={errors.repassword}
          placeholder="Repita su Contraseña"
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
          label="Repita su contraseña"
        />
        <FormError error={errors.repassword} />

        {loading ? <ButtonLoading /> : <Button type="submit" text={"Registrarse"} />}
      </form>
    </>
  );
};

export default Register;

export const formValidate = () => {
  return {
    required: {
      value: true,
      message: "Campo Obligatorio",
    },
    patternEmail: {
      value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      message: "Formato de email incorrecto",
    },
    minLength: {
      value: 6,
      message: "La contraseña debe tener mínimo 6 caracteres.",
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return "No seas 🤡, escribe algo";
        }
        true;
      },
    },
    validateEquals(value) {
      return {
        equals: (v) => v === value || "No coinciden las contraseñas", //EQUALS PUEDE TENER CUALQUIER NOMBRE
      };
    },
  };
};

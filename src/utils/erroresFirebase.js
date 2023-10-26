export const erroresFirebase = (error) => {
  if (error === "auth/email-already-in-use")
    return { code: "email", message: "Usuario ya registrado." };
  else if (error === "auth/invalid-email")
    return { code: "email", message: "Formato email no válido." };
  else if (error === "auth/invalid-login-credentials")
    return { code: "email", message: "Usuario o contraseña erroneos." };
  return { code: "email", message: "Ocurrió un error en el Servidor." };
};

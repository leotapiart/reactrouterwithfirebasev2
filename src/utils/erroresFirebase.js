export const erroresFirebase = (error) => {
  if (error === "auth/email-already-in-use") return "Usuario ya registrado";
  else if (error === "auth/invalid-email") return "Formato email no válido";
  return "Ocurrió un error en el servidor";
};

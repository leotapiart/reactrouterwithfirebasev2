import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logoutUser = () => signOut(auth);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsuscribe;
  }, []);

  if (user === false) return <p>Cargando app...</p>;

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);

import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { user } = useUserContext();
  console.log(user);

  return (
    <>
      <h1>Hello World 🐸</h1>
    </>
  );
};

export default Home;

import { Link } from "react-router-dom";
import Title from "../components/Title";

const NotFound = () => {
  return (
    <section className="container text-center mx-auto">
      <Title text="404" />
      <h2>Ups! Página no encontrada 🤷‍♂️</h2>
      <div className="text-center">
        <Link to={"/"}>Voler al Home 🏠🏃‍♂️💨</Link>
      </div>
    </section>
  );
};

export default NotFound;

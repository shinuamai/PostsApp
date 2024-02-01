import { useState, useEffect } from "react";
import homeGif from "../assets/home.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [slide, setSlide] = useState(false);
  const navigate = useNavigate();
  const goToPosts = () => {
    setSlide(true);
    setTimeout(() => {
      navigate("/posts");
    }, 1800);
  };

  useEffect(() => {
    const home = document.getElementById("home");
    if (slide) {
      home.classList.add("slide-up");
    } else {
      home.classList.add("slide-down");
    }
  }, [slide]);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-customBlue text-white"
      id="home"
    >
      <img
        src={homeGif}
        alt="Home"
        className="w-[250px] h-[100px] md:w-[700px] md:h-[300px] lg:w-[970px] lg:h-[400px]"
      />
      <div className="sm:px-10 lg:px-36 xl:px-40 mt-3 px-4 text-center">
        <h1 className="text-3xl font-bold">Bienvenido a la página de inicio</h1>
        <p className="mt-4">
          Para visualizar los posts haga click en el Siguiente botón.
        </p>
        <button
          onClick={goToPosts}
          className="bg-white text-customBlue px-6 py-3 mt-8 rounded-full hover:bg-blue-300 transition duration-300"
        >
          Ir a Posts
        </button>
      </div>
    </div>
  );
};

export default Home;

import homeGif from '../assets/home.jpg';
const Home = () => {
    return (
      <div>
        <div className="bg-customBlue flex items-center justify-center w-full">
        <img src={homeGif} alt="Home" className="w-[250px] h-[100px] md:w-[700px] md:h-[300px] lg:w-[970px] lg:h-[400px] "/>  
        </div>  
        <div className="sm:px-10 lg:px-36 xl:px-40 mt-3 px-4">
            <h1 className="text-3xl font-bold">Bienvenido a la página de inicio</h1>
            <p className="mt-4">Para visualizar los posts dirígase a la pestaña de posts.</p>
        </div>
      </div>
    );
  };
  
  export default Home;
  
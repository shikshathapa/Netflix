import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=378ebd2998e8b4163761fafa522db0fa"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Adjust for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-3/4 m-auto">
      <div className="mt-12">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="p-4">
              <div className="bg-white shadow-lg h-[350px] text-black rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="h-48 bg-indigo-600 flex justify-center items-center rounded-t-2xl">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="h-40 w-40 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-bold text-center text-gray-800">
                    {movie.title}
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-5 py-2 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Movie;

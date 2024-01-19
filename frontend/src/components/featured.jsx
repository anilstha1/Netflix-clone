import React, {useEffect, useState} from "react";
import {BsPlayCircle, BsInfoCircle} from "react-icons/bs";
import {getMovies} from "../services/api";

function Featured() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);
  useEffect(() => {
    getMovies("movie/popular").then((movies) => {
      setMovies(movies);
    });
  }, []);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute w-2/3 lg:w-1/2  h-auto top-[200px] p-5 ">
        <h1 className="text-2xl font-bold">{movie?.title}</h1>
        <p className="text-lg mt-3">{movie?.overview}</p>

        <div className="flex flex-row items-center mt-3 gap-2">
          <button className="bg-white text-black bg-opacity-90 rounded-md py-2 px-3 flex flex-row gap-2 items-center hover:bg-opacity-60 transition">
            <BsPlayCircle />
            Play
          </button>
          <button className="bg-white text-white bg-opacity-30 rounded-md py-2 px-3 flex flex-row gap-2 items-center hover:bg-opacity-20 transition">
            <BsInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;

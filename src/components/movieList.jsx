import {useEffect, useRef, useState} from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {getMovies} from "../services/api";
import MovieCard from "./movieCard";

function MovieList({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({left: scrollTo, behaviour: "smooth"});
    }
  };

  useEffect(() => {
    getMovies(fetchUrl).then((movies) => {
      setMovies(movies);
    });
  }, [fetchUrl]);

  return (
    <div className="text-white mt-8 p-4">
      <h1 className="text-white text-2xl font-bold">{title}</h1>
      <div className="flex items-center group">
        <div
          ref={rowRef}
          className="w-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap mt-5"
        >
          {movies?.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
        <div className="absolute left-2 cursor-pointer hidden group-hover:block">
          <BiChevronLeft
            onClick={() => handleClick("left")}
            className="text-2xl hover:scale-125"
          />
        </div>
        <div className="absolute right-2 cursor-pointer hidden group-hover:block">
          <BiChevronRight
            onClick={() => handleClick("right")}
            className="text-2xl hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieList;

import React from "react";
import {Link} from "react-router-dom";

function MovieCard({movie}) {
  return (
    <>
      <Link
        key={movie?.id}
        className="my-5 mx-2 rounded-md inline-block"
        to={`/movie/${movie?.id}`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
          className="w-auto
                 h-[280px]
                 cursor-pointer
                 shadow-xl
                 rounded-md
                 object-cover
                 hover:scale-110
                 transition "
        />
      </Link>
    </>
  );
}

export default MovieCard;

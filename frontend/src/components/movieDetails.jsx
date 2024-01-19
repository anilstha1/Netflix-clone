import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getMovieDetails} from "../services/api";
import {formatDate} from "../utils/formatDate";
import {formatTime} from "../utils/formatTime";
import YouTube from "react-youtube";

function MovieDetails() {
  const {id} = useParams();
  const [movie, setMovie] = useState();

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  useEffect(() => {
    getMovieDetails(id).then((movie) => {
      setMovie(movie);
      console.log(movie);
    });
  }, [id]);

  return (
    <div className="w-full text-white flex justify-center p-5">
      <div className="lg:w-1/2 mt-20">
        <div className="w-full aspect-video">
          <YouTube
            videoId={movie?.videos?.results[0]?.key}
            opts={opts}
            className="w-full h-full"
          />
        </div>

        <div className="h-auto text-white">
          <h1 className="text-2xl font-bold">{movie?.title}</h1>
          <div className="flex gap-2">
            <div>new</div>
            <div>{formatDate(movie?.release_date)}</div>
            <div className="border border-gray-300">18+</div>
            <div>{formatTime(movie?.runtime)}</div>
          </div>
          <p className="text-lg mt-3">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

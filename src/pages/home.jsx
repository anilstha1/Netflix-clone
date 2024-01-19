import React from "react";
import Featured from "../components/featured";
import MovieList from "../components/movieList";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Featured />
      <MovieList title="Now Playing" fetchUrl={"movie/now_playing"} />
      <MovieList title="Popular" fetchUrl={"movie/popular"} />
      <MovieList title="Top Rated" fetchUrl={"movie/top_rated"} />
      <MovieList title="Upcoming" fetchUrl={"movie/upcoming"} />
    </div>
  );
};

export default Home;

import React from "react";
import Featured from "./featured";
import MovieList from "./movieList";
import requests from "../services/api";

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

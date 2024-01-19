import axios from "axios";

const key = "fb2a164a8d1fb5e54e12f987c4d7a283";

const getMovies = async (url) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${url}?api_key=${key}&language=en-US&page=1`
  );
  return res.data.results;
};

const getMovieDetails = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos&language=en-US&page=1`
  );
  return res.data;
};

export {getMovies, getMovieDetails};

import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "00ae972ae60325084fbff5c7b5914e2b";

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const Search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
  return Search.data;
};

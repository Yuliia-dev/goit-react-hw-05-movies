import axios from 'axios';
const API_KEY = 'd16c53a3a4d5eb154f379745597d6181';
const baseURL = 'https://api.themoviedb.org';

export default class ApiService {
  constructor() {
    this.searchValue = '';
    this.page = 1;
    this.movieId = 1;
  }
  async fetchTrendingMovies() {
    const response = await axios.get(
      `${baseURL}/3/trending/movie/day?api_key=${API_KEY}&page=${this.page}`
    );
    return response.data;
  }

  async fetchMovieForQuery(searchValue) {
    const response = await axios.get(
      `${baseURL}/3/search/movie?api_key=${API_KEY}&page=${this.page}&query=${searchValue}&language=en-US&include_adult=false`
    );
    console.log(response.data);
    return response.data;
  }

  async fetchMovieDetails(movieId) {
    const response = await axios.get(
      `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }

  async fetchMovieActors(movieId) {
    const response = await axios.get(
      `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }

  async fetchMovieReviews(movieId) {
    const response = await axios.get(
      `${baseURL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${this.page}`
    );
    return response.data;
  }

  pageAdd() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchValue;
  }

  set query(newValue) {
    this.searchValue = newValue;
  }
}

// import { Outlet } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import ApiService from 'components/service/movies-api';

// const newApi = new ApiService();

export default function MoviesPages() {
  //   const [movieName, setMovieName] = useState('');
  //   const [movie, setMovie] = useState(null);
  //   const [error, setError] = useState(null);

  // useEffect(() => {
  //   newApi.query = movieName;
  //   newApi
  //     .fetchMovieDetails(movieName)
  //     .then(results => setMovie(results))
  //     .catch(error => setError(error));
  // }, [movieName]);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (movieName.trim() === '') {
  //     return alert(
  //       `Sorry,there are no pictures on request ${movieName}. Please try again`
  //     );
  //   }
  //   fetchMovieForValue(movieName);
  //   setMovieName('');
  // };

  // const fetchMovieForValue = movieName => {
  //   setMovieName();
  //   newApi.query = movieName;
  // };

  return (
    <>
      <form>
        <p>Find movie by name</p>
        <input
          autoComplete="off"
          placeholder="Enter a movie name"
          type="text"
          name="filter"
          // onChange={e => {
          //   setMovieName(e.target.value.toLowerCase());
          // }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

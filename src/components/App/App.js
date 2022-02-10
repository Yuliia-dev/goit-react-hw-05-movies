import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import HomePages from 'components/pages/HomePage';
import MoviesPages from 'components/pages/MoviesPage';
import MovieDetailsPages from 'components/pages/MovieDetailsPage';
import Cast from 'components/pages/Cast';
import Reviews from 'components/pages/Reviews';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="movies" element={<MoviesPages />} />
        <Route path="movies/:movieId" element={<MovieDetailsPages />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

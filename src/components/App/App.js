import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from 'components/Navigation/Navigation';

const HomePages = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPages = lazy(() => import('../pages/MoviePage/MoviesPage.js'));
const MovieDetailsPages = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage.js')
);
const Cast = lazy(() => import('../pages/Cast/Cast.js'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews.js'));

export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navigation />
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="movies" element={<MoviesPages />} />
          <Route path="movies/:movieId" element={<MovieDetailsPages />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

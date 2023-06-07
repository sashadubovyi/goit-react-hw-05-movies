import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Body, Loading, Main } from './App.styled';

const Header = lazy(() => import('Header/Header'));
const Home = lazy(() => import('Pages/Home/Home'));
const Cast = lazy(() => import('Pages/Сast/Cast'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('Pages/Reviews/Reviews'));
const Movies = lazy(() => import('Pages/Movies/Movies'));

export const App = () => {
  return (
    <Body>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Main>
      </Suspense>
    </Body>
  );
};

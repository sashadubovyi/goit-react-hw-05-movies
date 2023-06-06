import Header from 'Header/Header';
import Home from 'Pages/Home/Home';
import Cast from 'Pages/Сast/Cast';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Reviews from 'Pages/Reviews/Reviews';
import Movies from 'Pages/Movies/Movies';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Body, Main } from './App.styled';

export const App = () => {
  return (
    <Body>
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
    </Body>
  );
};

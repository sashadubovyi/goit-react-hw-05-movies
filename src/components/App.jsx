import Header from 'Header/Header';
import Home from 'Pages/Home';
import Cast from 'Pages/Cast';
import MovieDetails from 'Pages/MovieDetails';
import Reviews from 'Pages/Reviews';
import Movies from 'Pages/Movies';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route index element={<Outlet />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

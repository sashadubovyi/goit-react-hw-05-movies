import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, Route, Routes } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';
import Cast from './Cast';
import { DetailsBox, ItemCast, Poster } from './MovieDetails.styled';
import Reviews from './Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
        console.log(data.credits);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    if (!movie) {
      fetchMovieDetails();
    }
  }, [movieId, movie]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link to={`/`}>Back to trending list</Link>
      <DetailsBox>
        <ItemCast>
          <div>
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div>
            <h3>
              {movie.title}({movie.release_date.substring(0, 4)})
            </h3>
            <p>Overview:</p>
            <p>{movie.overview}</p>
            <p>Rate:</p>
            <p>{movie.vote_average}</p>
          </div>
        </ItemCast>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>

          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="/" element={<Outlet />} />
          </Routes>
        </li>
      </DetailsBox>
    </>
  );
};

export default MovieDetails;

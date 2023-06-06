import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesAPI';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies('day');
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  console.log(movies);
  return (
    <>
      <h1>Trending movies today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

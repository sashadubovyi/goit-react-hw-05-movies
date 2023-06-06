import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesAPI';
import { SpanTitle, Title } from './Home.styled';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 30px;

  &:hover {
    color: #f44336;
    transition: 0.3s;
  }
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies('day');
        setMovies(data);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Title>
        Trending movies <SpanTitle>today</SpanTitle>
      </Title>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>
              {movie.original_title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

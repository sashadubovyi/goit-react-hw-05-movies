import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesAPI';
import { Box, ListTrending, PrevPoster, SpanTitle, Title } from './Home.styled';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #f44336;
    transition: 0.3s;
  }
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log('location: ', location);

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
      <ListTrending>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink
              to={{ pathname: `/movies/${movie.id}` }}
              state={location}
            >
              <Box>
                <PrevPoster
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.original_title}</p>
              </Box>
            </StyledLink>
          </li>
        ))}
      </ListTrending>
    </>
  );
};

export default HomePage;

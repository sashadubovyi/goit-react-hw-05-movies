import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { searchMovies } from 'services/moviesAPI';
import {
  Button,
  Form,
  Input,
  SearchList,
  SpanTitle,
  Title,
} from './Movies.styled';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;

  &:hover {
    color: #f44336;
    transition: 0.3s;
  }
`;

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const name = new URLSearchParams(location.search).get('name');
    if (name) {
      setQuery(name);
      handleSearch(name);
    }
  }, [location]);

  const handleSearch = async name => {
    try {
      const results = await searchMovies(name);
      setSearchResults(results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/movies?name=${query}`);
  };

  return (
    <>
      <Title>
        Search <SpanTitle>movies</SpanTitle>
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input value={query} onChange={e => setQuery(e.target.value)} />
        <Button type="submit">Search</Button>
      </Form>
      <SearchList>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={location}>
              {movie.original_title}&nbsp;(
              {movie.release_date.substring(0, 4)})
            </StyledLink>
          </li>
        ))}
      </SearchList>
    </>
  );
};

export default Movies;

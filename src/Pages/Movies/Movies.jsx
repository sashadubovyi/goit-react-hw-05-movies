import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { searchMovies } from 'services/moviesAPI';
import {
  Button,
  Form,
  Input,
  NoneText,
  SearchList,
  SpanTitle,
  Title,
} from './Movies.styled';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
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

  const handleSearch = async evt => {
    evt.preventDefault();
    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }
  };

  return (
    <>
      <Title>
        Search <SpanTitle>movies</SpanTitle>
      </Title>
      <Form>
        <Input value={query} onChange={e => setQuery(e.target.value)} />
        <Button type="submit" onClick={handleSearch}>
          &#8672;&nbsp;Search
        </Button>
      </Form>
      <SearchList>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>
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

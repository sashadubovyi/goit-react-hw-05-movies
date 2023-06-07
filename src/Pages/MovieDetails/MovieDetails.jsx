import { useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';
import {
  BoldText,
  BoxInfo,
  DetailsBox,
  GoBackBtn,
  ItemCast,
  Poster,
  SpanTitle,
  Text,
  Title,
} from './MovieDetails.styled';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: white;

  &.active {
    color: #f44336;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = location.state;
  const saveLocation = useRef(prevLocation);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    if (!movie) {
      fetchMovieDetails();
    }
  }, [movieId, movie]);

  const handleGoBack = () => {
    navigate(saveLocation.current);
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <GoBackBtn onClick={handleGoBack}>Go back</GoBackBtn>
      <DetailsBox>
        <ItemCast>
          <div>
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <BoxInfo>
            <Title>
              {movie.title}&nbsp;
              <SpanTitle>({movie.release_date.substring(0, 4)})</SpanTitle>
            </Title>
            <BoldText>Overview:</BoldText>
            <Text>{movie.overview}</Text>
            <BoldText>Rate:</BoldText>
            <Text>{movie.vote_average}</Text>
          </BoxInfo>
        </ItemCast>
        <li>
          <StyledNavLink to={`/movies/${movieId}/cast`} state={prevLocation}>
            Cast
          </StyledNavLink>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <StyledNavLink to={`/movies/${movieId}/reviews`} state={prevLocation}>
            Reviews
          </StyledNavLink>
          <Outlet />
        </li>
      </DetailsBox>
    </>
  );
};

export default MovieDetails;

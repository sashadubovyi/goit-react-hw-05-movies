import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesAPI';
import {
  ActorBox,
  ActorImage,
  ActorList,
  List,
  Loading,
  Name,
  PlaceholderImage,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.log('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (!casts) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>
      <List>
        {casts.map(actor => (
          <ActorList key={actor.id}>
            <ActorBox>
              {actor.profile_path ? (
                <ActorImage
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <PlaceholderImage
                  src="/src/image/placeholderImage.jpg"
                  alt=""
                />
              )}
              <Name>{actor.name}</Name>
            </ActorBox>
          </ActorList>
        ))}
      </List>
    </>
  );
};

export default Cast;

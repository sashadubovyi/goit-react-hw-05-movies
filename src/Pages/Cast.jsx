import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesAPI';
import { ActorBox, ActorImage, ActorList, List, Name } from './Cast.styled';

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>Cast</h3>
      <List>
        {casts.map(actor => (
          <ActorList key={actor.id}>
            <ActorBox>
              <ActorImage
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <Name>{actor.name}</Name>
            </ActorBox>
          </ActorList>
        ))}
      </List>
    </>
  );
};

export default Cast;

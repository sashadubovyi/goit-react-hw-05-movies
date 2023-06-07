import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';
import { BoldAuthor, BoldText, Loading, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>
      {reviews.length === 0 ? (
        <Text>We don't have any reviews</Text>
      ) : (
        <div>
          {reviews.map(result => (
            <div key={result.id}>
              <BoldAuthor>{result.author}</BoldAuthor>
              <Text>{result.content}</Text>
              <BoldText>{result.created_at.substring(0, 10)}</BoldText>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Reviews;

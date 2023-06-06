// https://api.themoviedb.org/3/movie/11?api_key=f73865c93b2adf185bfa72e66b6a561c
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f73865c93b2adf185bfa72e66b6a561c';

export const getTrendingMovies = async timeWindow => {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });

    const trendingMovies = response.data.results;
    return trendingMovies;
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'credits,videos',
      },
    });

    const movieDetails = response.data;
    return movieDetails;
  } catch (error) {
    console.log('Error fetching movie details:', error.message);
    throw error;
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });

    const movieCast = response.data;
    return movieCast;
  } catch (error) {
    console.log('Error fetching movie cast:', error.message);
    throw error;
  }
};

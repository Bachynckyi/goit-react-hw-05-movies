import axios from 'axios';

const KEY = '46907e8d576e3c3202f853040ef73591';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
    return response.data;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
    return response.data;
};


export const getMoviesSearch = async (query) => {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}`);
    return response.data;
};

// export const getMovieCredits = async () => {
//     const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
//     console.log(response.data);
//     return response.data;
// };

// export const getMovieReviews = async () => {
//     const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
//     console.log(response.data);
//     return response.data;
// };
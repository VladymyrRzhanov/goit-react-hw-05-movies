const API_KEY = 'b0b72ab6737091a10a9a2ef1ba934753';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchTrendingMovies = async (page) => {
    return await fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}&page=${page}`)
        .then(response => response.json())
};

const fetchSearchMovie = async (query) => {
    return await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(response => response.json())
};

const fetchDetailsMovie = async (movieId) => {
    return await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
};

const fetchActorsMovie = async (movieId) => {
    return await fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
};

const fetchReviewsMovie = async (movieId) => {
    return await fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
};

export { fetchTrendingMovies, fetchSearchMovie, fetchDetailsMovie, fetchActorsMovie, fetchReviewsMovie };
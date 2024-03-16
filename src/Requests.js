
const API_KEY = "2ee1841ca761edd54f308f08b834c7be";

const requests= {
    fetchTrading: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComidyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export default requests;

//https://api.themoviedb.org/3/discover/movie?api_key=2ee1841ca761edd54f308f08b834c7be&with_genres=28
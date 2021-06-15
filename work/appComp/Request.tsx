export const apiKey = 'a10bba2275d48493fb1ccea0de820ebc';

export const requestMovie = {
  fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar: `https://api.themoviedb.org/3/movie/2/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar2: `https://api.themoviedb.org/3/movie/3/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar3: `https://api.themoviedb.org/3/movie/21/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar4: `https://api.themoviedb.org/3/movie/22/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar5: `https://api.themoviedb.org/3/movie/24/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar6: `https://api.themoviedb.org/3/movie/25/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar7: `https://api.themoviedb.org/3/movie/26/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar8: `https://api.themoviedb.org/3/movie/28/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar9: `https://api.themoviedb.org/3/movie/30/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar10: `https://api.themoviedb.org/3/movie/31/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchBanner: `https://api.themoviedb.org/3/movie/35/similar?api_key=a10bba2275d48493fb1ccea0de820ebc&language=en-US&page=1`,
};

export const requestGenre = {
  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export const requestTv = {
  fetchPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  fetchGetOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
};

export const requestWebSeries = {
  fetchLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`,
  fetchMostWatched: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10770`,
  fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=9648`,
  fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878`,
  fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=37`,
  // fetchSimilar: `
  // https://api.themoviedb.org/3/tv/3?api_key=${apiKey}&language=en-US`,
  // fetchSimilar2: `
  // https://api.themoviedb.org/3/tv/4?api_key=${apiKey}&language=en-US`,
  // fetchSimilar3: `
  // https://api.themoviedb.org/3/tv/5?api_key=${apiKey}&language=en-US`,
  // fetchSimilar4: `
  // https://api.themoviedb.org/3/tv/15?api_key=${apiKey}&language=en-US`,
  // fetchSimilar5: `
  // https://api.themoviedb.org/3/tv/7?api_key=${apiKey}&language=en-US`,
  // fetchSimilar6: `
  // https://api.themoviedb.org/3/tv/8?api_key=${apiKey}&language=en-US`,
  // fetchSimilar7: `
  // https://api.themoviedb.org/3/tv/13?api_key=${apiKey}&language=en-US`,
  // fetchSimilar8: `
  // https://api.themoviedb.org/3/tv/12?api_key=${apiKey}&language=en-US`,
  // fetchSimilar9: `
  // https://api.themoviedb.org/3/tv/17?api_key=${apiKey}&language=en-US`,
  // fetchSimilar10: `
  // https://api.themoviedb.org/3/tv/18?api_key=${apiKey}&language=en-US`,
  // fetchSimilar11: `
  // https://api.themoviedb.org/3/tv/19?api_key=${apiKey}&language=en-US`,
  // fetchSimilar12: `
  // https://api.themoviedb.org/3/tv/20?api_key=${apiKey}&language=en-US`,
  // fetchSimilar13: `
  // https://api.themoviedb.org/3/tv/23?api_key=${apiKey}&language=en-US`,
  // fetchSimilar14: `
  // https://api.themoviedb.org/3/tv/2?api_key=${apiKey}&language=en-US`,
};

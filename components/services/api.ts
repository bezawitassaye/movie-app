export const TMDB_CONFIG = {
    BASE_URL:"https://api.themoviedb.org/3",
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`

    }
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjRhMDdhMjk1YTZkNTA4YzViNDZmZTBjOTIzZGE2MCIsIm5iZiI6MTc2MDE4MTI0NC43NTgwMDAxLCJzdWIiOiI2OGVhM2JmY2RhNTM3ZWVlMDQ3ODY4NzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.doYggYPoeXQPaG75Gu21f9jjkQA3HhIAFyHKoWhoLbo'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
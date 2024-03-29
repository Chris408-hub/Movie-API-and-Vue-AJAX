            // const apiKey = '3b645a01463f92c57feed6f2480a239f';
const app = Vue.createApp({
  data() {
    return {
      movies: [],
      movieDetails: {}
    }
  },
  created() {
    // first ajax call
    this.getMovies();
  },
  methods: {
    getMovies() {
      fetch('http://localhost:8888/movies-backend-api/public/movies')
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          this.movies = data.map(movie => {
            return {
              poster_path: movie.poster_path
            };
          });

          // second ajax call
          if (data.length > 0) {
            const firstMovieId = data[0].id;
            this.getMovieDetails(firstMovieId);
          }
        })
        .catch(error => {
          console.error('Error fetching movie posters:', error);
        });
    },
    getMovieDetails(id) {
      fetch(`http://localhost:8888/movies-backend-api/public/movies?movieId=${id}`)
        .then(response => response.json())
        .then(data => {
          this.movieDetails = data;
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    }
  }
});

app.mount('#app');


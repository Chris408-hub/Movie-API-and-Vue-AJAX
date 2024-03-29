            // const apiKey = '3b645a01463f92c57feed6f2480a239f';
const app = Vue.createApp({
  data() {
    return {
      movies: [],
      selectedMovie: null,
      selectedMovieId: null
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
          this.movies = data;
        
        })
        .catch(error => {
          console.error('Error fetching movie posters:', error);
        });
    },
    // second ajax call
    getMovieDetails(id) {
      this.selectedMovieId = id;
      fetch(`http://localhost:8888/movies-backend-api/public/movies/${id}`)
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          this.selectedMovie = data;
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    },

     closeDetails() {
      this.selectedMovie  = null;
    }
  }
});

app.mount('#app');


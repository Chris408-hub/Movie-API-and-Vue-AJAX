



export function ajaxVue() {

    const app = Vue.createApp({
  data() {
        return {
      isLoading : true,
      movies: [],
      selectedMovie: null,
      selectedMovieId: null,
      error: null
      
    }
  },
      created() {
    this.isLoading = true;
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
          this.isLoading = false;

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
                if (data.errors) {
                        this.error = data.message;
                    } else {
                        this.selectedMovie = data;
                    }
                })
        .catch(error => {
            console.error('Error fetching movie details:', error);
            this.error = 'Error fetching movie details: ' + error.message;
        });
    },

     closeDetails() {
        this.selectedMovie = null;
        this.error = null;
    }
        
      }

});

app.mount('#app');


}
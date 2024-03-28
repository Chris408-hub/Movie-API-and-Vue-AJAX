# Movie API and Vue Frontend

This project utilizes Lumen to create a movie API and Vue.js with AJAX to display and retrieve movie data.

## Technologies Used:
Lumen: A micro-framework based on Laravel, used for creating the movie API.
Vue.js: A progressive JavaScript framework for building user interfaces, used for the frontend.
AJAX: Asynchronous JavaScript and XML, used for making requests to the movie API.

## Project Description:
The project consists of two main parts: the movie API created with Lumen and the Vue.js frontend that interacts with the API using AJAX.

## Movie API (Lumen):
**Endpoints:**
/movies: GET request to fetch all movie posters.
/movies/{id}: GET request to fetch details of a specific movie by its ID.
**Vue Frontend:**
Initial Display:
Upon loading the webpage, AJAX is used to fetch movie posters from the movie API (/movies endpoint) and display them on the page.
View Movie Details:
When a user clicks on a movie poster, AJAX is triggered to fetch the details of that specific movie from the API (/movies/{id} endpoint).
The retrieved movie details are then displayed in a modal or a separate section on the webpage.

## License:
This project is licensed under the MIT License.

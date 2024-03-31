<?php


/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


//matches localhost:8888/lumen/public/
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/movies', 'MoviesController@getAllPosters');
$router->get('/movies/{id}', 'MoviesController@getMovieDetails');
$router->post('/movies/add', 'MoviesController@save');
$router->post('/movies/edit/{id}', 'MoviesController@update');
$router->delete('/movies/delete/{id}', 'MoviesController@delete');










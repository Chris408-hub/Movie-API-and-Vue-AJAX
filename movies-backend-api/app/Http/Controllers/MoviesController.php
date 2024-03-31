<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class MoviesController extends Controller{
    // get posters
    public function getAllPosters()
    {
        $movies = Movie::select('id', 'poster_path')
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($movies);
    }

    // get movie info
    public function getMovieDetails($id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(['message' => 'Movie not found'], 404);
        }

        return response()->json($movie);
    }

    // create
    public function save(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'release_year' => 'required',
            'description' => 'required',
            'poster_path' => 'required'
        ]);

        $movie = Movie::create($request->all());
        return response()->json($movie, 201);
    }

    // update
    public function update(Request $request, $id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(['message' => 'Movie not found'], 404);
        }

        $this->validate($request, [
            'name' => 'required',
            'release_year' => 'required',
            'description' => 'required',
            'poster_path' => 'required'
        ]);

        $movie->update($request->all());
        return response()->json($movie);
    }

    // delete
    public function delete($id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(['message' => 'Movie not found'], 404);
        }

        $movie->delete();
        return response()->json(null, 204);
    }
}

<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    /**
     *
     * @var array
     */
    protected $fillable = ['name', 'release_year', 'description', 'poster_path'];

    /**

     *
     * @var array
     */
    protected $hidden = [];


}

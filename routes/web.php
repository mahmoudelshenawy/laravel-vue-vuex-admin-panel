<?php

use Illuminate\Support\Facades\Route;


Route::get('{path}', function () {
    return view('app');
})->where('path', '(.*)');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

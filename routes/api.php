<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::resource('jelly', 'JellyController');
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
Route::resource('products', 'Api\ProductsController');
Route::get('products/get_sub_categories/{id}', 'Api\ProductsController@getSubCategories');
// if ($validator->fails()) {
//     //     return response()->json(['errors' => $validator->errors()], 401);
//     // }
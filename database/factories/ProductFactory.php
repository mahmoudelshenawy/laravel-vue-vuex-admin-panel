<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'desc' => $faker->sentence,
        'purchase_price' => 100,
        'selling_price' => 150,
        'stock' => 10,
        'image_path' => 'https://via.placeholder.com/300',
        'category_id' => rand(1, 3),
        'sub_category_id' => rand(4, 8),
    ];
});

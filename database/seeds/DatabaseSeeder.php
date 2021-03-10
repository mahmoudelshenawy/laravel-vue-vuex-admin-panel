<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(TagsSeeder::class);
        $products = factory(App\Models\Product::class, 2)->create();
        foreach ($products as $index => $pro) {
            $pro->tags()->attach(['1', '2', '3']);
        }
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use App\Models\Variant; // Asegúrate de importar el modelo Variant
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    const string IMAGE_URL = "https://picsum.photos/200/300";

    public function run()
    {
        $directories = Storage::directories('public');
        foreach ($directories as $directory) {
            Storage::deleteDirectory($directory);
        }

        $categories = Category::factory(2)->create();

        Product::factory(10)->create([
            'category_id' => function () use ($categories) {
                return $categories->random()->id;
            },
        ])->each(function ($product) {
            $variantCount = rand(4, 4);
            Variant::factory($variantCount)->create(['product_id' => $product->id]);
        });

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);
    }
}


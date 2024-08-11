<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
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
        // Clear images
        $directories = Storage::directories('public');

        foreach ($directories as $directory) {
            Storage::deleteDirectory($directory);
        }

        // Crear 2 categorías
        $categories = Category::factory(2)->create();

        // Crear 5 productos y asignarlos aleatoriamente a las categorías creadas
        Product::factory(5)->create([
            'category_id' => $categories->random()->id,
        ]);

        // Crear usuario admin
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);
    }
}

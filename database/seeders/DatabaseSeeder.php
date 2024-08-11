<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Crear 3 categorías
        $categories = Category::factory(2)->create();

        // Crear 10 productos y asignarlos a las categorías creadas
        Product::factory(5)->create([
            'category_id' => fn() => $categories->random()->id,
        ])->each(function ($product) {
            // URL de la imagen aleatoria de Picsum
            $url = 'https://picsum.photos/200/300';

            // Descargar la imagen desde la URL
            $imageContent = file_get_contents($url);

            // Guardar la imagen en un archivo temporal
            $tempImagePath = storage_path('app/public/' . uniqid() . '_image.jpg');
            file_put_contents($tempImagePath, $imageContent);

            // Añadir la imagen al producto utilizando Spatie Media Library
            $product->addMedia($tempImagePath)->toMediaCollection('products');

        });

        // Crear usuario admin
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);
    }
}

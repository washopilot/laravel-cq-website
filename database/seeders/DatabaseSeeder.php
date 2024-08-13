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
        // Limpiar las imágenes existentes en el almacenamiento
        $directories = Storage::directories('public');
        foreach ($directories as $directory) {
            Storage::deleteDirectory($directory);
        }

        // Crear categorías
        $categories = Category::factory(3)->create();

        // Crear productos y variantes
        Product::factory(5)->create([
            'category_id' => function () use ($categories) {
                return $categories->random()->id;
            },
        ])->each(function ($product) {
            // Generar un número aleatorio de variantes entre 1 y 3
            $variantCount = rand(0, 3); // Cambiado para ser aleatorio
            Variant::factory($variantCount)->create(['product_id' => $product->id]);
        });

        // Crear un usuario administrador
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);
    }
}


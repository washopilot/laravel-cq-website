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
        // Crear 5 categorías
        $categories = Category::factory(3)->create();

        // Crear 15 productos y asignarlos a las categorías creadas
        Product::factory(15)->create([
            'category_id' => fn() => $categories->random()->id,
        ]);

        // Crear usuario admin
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);
    }
}

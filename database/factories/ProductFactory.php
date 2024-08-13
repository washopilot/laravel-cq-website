<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Product;
use Database\Seeders\DatabaseSeeder;
use Spatie\MediaLibrary\MediaCollections\Exceptions\UnreachableUrl;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    private static $counter = 1;

    public function definition()
    {
        return [
            'name' => 'Product_' . str_pad(self::$counter++, 3, '0', STR_PAD_LEFT),
            'description' => $this->faker->text,
            'price' => $this->faker->randomFloat(2, 0, 999999.99),
            'is_visible' => $this->faker->boolean,
            'category_id' => Category::factory(),
        ];
    }

    public function configure(): ProductFactory
    {
        return $this->afterCreating(function (Product $product) {
            try {
                $product
                    ->addMediaFromUrl(DatabaseSeeder::IMAGE_URL)
                    ->toMediaCollection('products');
            } catch (UnreachableUrl $exception) {
                return;
            }
        });
    }

}

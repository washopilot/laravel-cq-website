<?php

namespace Database\Factories;

use App\Models\Variant;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use Database\Seeders\DatabaseSeeder;
use Spatie\MediaLibrary\MediaCollections\Exceptions\UnreachableUrl;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Variant>
 */
class VariantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Variant::class;
    private static $counter = 1;

    public function definition()
    {
        return [
            'name' => 'Var_' . str_pad(self::$counter++, 3, '0', STR_PAD_LEFT),
            'price' => $this->faker->randomFloat(2, 0, 999.99),
            'product_id' => Product::factory(),
        ];
    }

    public function configure(): VariantFactory
    {
        return $this->afterCreating(function (Variant $variant) {
            try {
                $variant
                    ->addMediaFromUrl(DatabaseSeeder::IMAGE_URL)
                    ->toMediaCollection('variants');
            } catch (UnreachableUrl $exception) {
                return;
            }
        });
    }
}

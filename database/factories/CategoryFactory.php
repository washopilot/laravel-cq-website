<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;
    private static $counter = 1;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $name = 'Cat_' . str_pad(self::$counter++, 3, '0', STR_PAD_LEFT),
            'slug' => Str::slug($name),
            'description' => $this->faker->text,
        ];
    }
}

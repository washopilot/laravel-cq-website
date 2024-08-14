<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories = Category::all();
        Inertia::setRootView('products.home');

        return Inertia::render('AppProducts', [
            'products' => $products->map(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'order_column' => $product->order_column,
                    'description' => $product->description,
                    'price' => $product->price,
                    'is_visible' => $product->is_visible,
                    'category_id' => $product->category_id,
                    'images' => $product->getMedia('products')->map(function ($media) {
                        return $media->getUrl();
                    }),
                ];
            }),
            'categories' => $categories->map(function ($category) {
                return [
                    'id' => $category->id,
                    'name' => $category->name,
                    'description' => $category->description,
                ];
            }),
        ]);

    }
}

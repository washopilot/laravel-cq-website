<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Variant;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use Barryvdh\Debugbar\Facade as Debugbar;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories = Category::all();
        $variants = Variant::all();
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
                        return $media->getUrl('thumb');
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
            'variants' => $variants->map(function ($variant) {
                return [
                    'id' => $variant->id,
                    'name' => $variant->name,
                    'images' => $variant->getMedia('variants')->map(function ($media) {
                        return $media->getUrl('thumb');
                    }),
                    'price' => $variant->price,
                    'product_id' => $variant->product_id,
                ];
            }),

        ]);

    }
    public function show()
    {

        Inertia::setRootView('products.home');

        return Inertia::render('ShowProducts', [
            'message' => 'HELLO WORD MF'
        ]);

    }
}

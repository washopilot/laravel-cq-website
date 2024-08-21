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

        return Inertia::render('AppProducts', [
            'products' => $products->map(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'slug' => $product->slug,
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
                    'slug' => $category->slug,
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
                    'order_column' => $variant->order_column,
                ];
            }),

        ]);

    }

    public function checkout(Request $request)
    {
        if ($request->isMethod('post')) {
            $cartItems = json_decode($request->input('cartItems'), true);

            $request->session()->put('cartItems', $cartItems);

            return redirect()->route('checkout');
        }

        $cartItems = $request->session()->get('cartItems', []);

        // $request->session()->forget('cartItems');

        // Debugbar::addMessage($cartItems);

        return Inertia::render('Checkout', [
            'cartItems' => $cartItems,
            'message' => 'Your checkout details are displayed here!',
        ]);

    }
}

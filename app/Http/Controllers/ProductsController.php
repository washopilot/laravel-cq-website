<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Variant;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use Barryvdh\Debugbar\Facade as Debugbar;
use Illuminate\Support\Facades\Validator;

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

        // Debugbar::info($request);

        return Inertia::render('Checkout', [
            // 'message' => 'Your checkout details are displayed here!',
        ]);

    }

    public function processOrder(Request $request)
    {
        // Validación de datos
        $validator = Validator::make($request->all(), [
            'fullName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'cartItems' => 'required|string',
            'subtotal' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Mostrar datos en Debugbar
        // Debugbar::info($validator);

        // Lógica para procesar el pedido
        return redirect()->route('index');

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; // Asegúrate de importar el modelo Product
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all(); // Recupera todos los productos
        Inertia::setRootView('products.home');

        return Inertia::render('AppProducts', [
            'products' => $products,
        ]);
    }
}

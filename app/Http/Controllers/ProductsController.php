<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Variant;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Support\Facades\Validator;
use App\Models\Order;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http; // Asegúrate de importar Http
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->input('page', 1);
        $products = Product::orderBy('order_column', 'asc')->paginate(4, ['*'], 'page', $page);

        return Inertia::render('AppProducts', [
            'products' => new ProductCollection($products),
            'currentPage' => $page
        ]);
    }

    public function show(Request $request, Product $product)
    {
        $page = $request->input('page', 1);
        $products = Product::orderBy('order_column', 'asc')->paginate(4, ['*'], 'page', $page);
        // Debugbar::info(new ProductResource($product));

        return Inertia::render('AppProducts', [
            'products' => new ProductCollection($products),
            'product' => new ProductResource($product),
            'currentPage' => $page,
        ]);
    }



    public function checkout()
    {

        // Debugbar::info($request);

        return Inertia::render('Checkout', [
            // 'message' => 'Your checkout details are displayed here!',
        ]);
    }

    public function processOrder(Request $request)
    {
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

        do {
            $trackingId = Str::random(20);
        } while (Order::where('tracking_id', $trackingId)->exists());

        $order = Order::create([
            'tracking_id' => $trackingId,
            'fullName' => $request->input('fullName'),
            'phoneNumber' => $request->input('phoneNumber'),
            'address' => $request->input('address'),
            'cartItems' => $request->input('cartItems'),
            'subtotal' => $request->input('subtotal'),
            'status' => 0,
        ]);

        // Preparar el mensaje
        // $messageText = "Hola, tu pedido ha sido creado. Puedes ver los detalles aquí: " . route('order.show', ['tracking_id' => $order->tracking_id]);
        $messageText = "Hola, tu pedido ha sido creado. Puedes ver los detalles aquí: " . "https://www.tusitio.com/order/pLj9gOZjSrQbQ0UvmDIk";

        // Enviar el mensaje a través de la API de Evolution
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => 'vi478fxrifkqb679z6fa' // Reemplaza con tu API key
        ])->post('http://api:8081/message/sendText/fercho', [
                    'number' => '593967896544@s.whatsapp.net',
                    'options' => [
                        'delay' => 1200,
                        'presence' => 'composing'
                    ],
                    'textMessage' => [
                        'text' => $messageText
                    ]
                ]);

        // Comprobar la respuesta
        if ($response->successful()) {
            return redirect()->route('order.show', ['tracking_id' => $order->tracking_id])->with([
                'send' => 'success'
            ]);
        } else {
            // Manejar el error si la solicitud a la API falla
            return redirect()->route('order.show', ['tracking_id' => $order->tracking_id])->withErrors([
                'send' => 'Error al enviar el mensaje de WhatsApp'
            ]);
        }
    }

    public function showOrder($tracking_id)
    {
        $order = Order::where('tracking_id', $tracking_id)->firstOrFail();
        $send = session('send', null);
        session()->forget('send');

        return Inertia::render('Order', [
            'send' => $send,
            'tracking_id' => $tracking_id,
            'order' => $order, // Pasar los detalles de la orden a la vista
        ]);
    }
}

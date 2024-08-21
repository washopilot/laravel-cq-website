<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;
use App\Http\Livewire\Contact;
use App\Http\Controllers\ProductsController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get(
    '/products',
    [ProductsController::class, 'index']
)->name('index');

Route::inertia(
    '/products/show',
    'ShowProducts',
    ['message' => 'There is again']
);

Route::get('/checkout', [ProductsController::class, 'checkout'])->name('checkout');

// Route::post('send-form', [ContactFormController::class, 'send'])->name('contact.send');











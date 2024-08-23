<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('tracking_id', 20)->unique();
            $table->string('fullName', 255);
            $table->string('phoneNumber', 20);
            $table->string('address', 255);
            $table->text('cartItems');
            $table->decimal('subtotal', 8, 2);
            $table->tinyInteger('status')->default(0); // Status field: 0, 1, or 2
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};

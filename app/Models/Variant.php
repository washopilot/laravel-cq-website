<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Variant extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'product_id',
    ];

    protected $casts = [
        'id' => 'integer',
        'price' => 'decimal:2',
        'category_id' => 'integer',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

}

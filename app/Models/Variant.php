<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\EloquentSortable\SortableTrait;


class Variant extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;
    use SortableTrait;

    public $sortable = [
        'order_column_name' => 'order_column',
        'sort_when_creating' => true,
    ];
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

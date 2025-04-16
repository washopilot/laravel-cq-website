<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'order_column' => $this->order_column,
            'description' => $this->description,
            'price' => $this->price,
            'is_visible' => $this->is_visible,
            'category_id' => $this->category_id,
            'images' => $this->getMedia('products')->map(function ($media) {
                return $media->getUrl('thumb');
            }),
            'variants' => $this->variants->sortBy('order_column')->map(function ($variant) {
                return [
                    'id' => $variant->id,
                    'name' => $variant->name,
                    'price' => $variant->price,
                    'order_column' => $variant->order_column,
                    'is_visible' => $this->is_visible,
                    'images' => $variant->getMedia('variants')->map(function ($media) {
                        return $media->getUrl('thumb');
                    }),
                ];
            })->toArray(),
        ];
    }
}

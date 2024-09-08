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
            'description' => $this->description,
            'price' => $this->price,
            'category_id' => $this->category_id,
            'images' => $this->getMedia('products')->map(function ($media) {
                return $media->getUrl('thumb');
            }),
            'variants' => $this->variants->sortBy('order_column')->map(function ($variant) {
                return [
                    'id' => $variant->id,
                    'name' => $variant->name,
                    'price' => $variant->price,
                    // Añade aquí otros campos que necesites
                    'images' => $variant->getMedia('variants')->map(function ($media) {
                        return $media->getUrl('thumb');
                    }),
                ];
            }),
        ];
    }
}

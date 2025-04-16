<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($product) {
            // Incluye los campos existentes del producto
            $productData = $product->only(
                'id',
                'name',
                'slug',
                'order_column',
                'description',
                'price',
                'is_visible',
                'category_id'
            );

            // Agrega el campo 'images' con las URLs de las imágenes
            $productData['images'] = $product->getMedia('products')->map(function ($media) {
                return $media->getUrl('thumb');
            });

            // Include variants data with images
            $productData['variants'] = $product->variants->map(function ($variant) {
                $variantData = $variant->only([
                    'id',
                    'name',
                    'price',
                    'is_visible',
                    'order_column'
                ]);

                // Add variant images
                $variantData['images'] = $variant->getMedia('variants')->map(function ($media) {
                    return $media->getUrl('thumb');
                });

                return $variantData;
            });

            return $productData;
        })->toArray();
    }
}

import React from 'react'
import CardCustom from './CardCustom'

export interface Product {
    id: number
    name: string
    description: string
    price: string
    is_visible: boolean
    category_id: number
    order_column: number
    images: string[]
}

export interface Category {
    id: number
    name: string
    description: string
}

interface ProductsProps {
    products: Product[]
    categories: Category[]
}

const AppProducts = ({ products, categories }: ProductsProps) => {
    products.sort((a, b) => a.order_column - b.order_column)

    const productsByCategory = categories.map((category) => {
        return {
            ...category,
            products: products.filter((product) => product.category_id === category.id)
        }
    })

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                {productsByCategory.map(({ id, name, products }) => (
                    <div key={id} className='mb-10'>
                        <div className='flex items-center justify-between space-x-4'>
                            <h2 className='text-lg font-medium text-gray-900'>{name}</h2>
                            <a
                                href='#'
                                className='whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                                View all
                                <span aria-hidden='true'> &rarr;</span>
                            </a>
                        </div>
                        <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
                            {products.map((product) => (
                                <CardCustom key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppProducts

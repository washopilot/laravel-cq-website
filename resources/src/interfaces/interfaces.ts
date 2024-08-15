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

export interface Variants {
    id: number
    name: string
    product_id: number
    price: string
    images: string[]
}

export interface Product {
    id: number
    name: string
    slug: string
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
    slug: string
    description: string
}

export interface Variant {
    id: number
    name: string
    product_id: number
    price: string
    images: string[]
    order_column: number
}

export interface CartItem {
    id: number
    quantity: number
    name: string
    color: string
    price: string
    imageSrc: string
}

export type FiltersType = {
    id: string
    name: string
    options: {
        value: string
        label: string
        checked: boolean
    }[]
}[]

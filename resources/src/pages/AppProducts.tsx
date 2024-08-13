import './app.css'
import Card from './Card'

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

interface ProductsProps {
    products: Product[]
}

const AppProducts = ({ products }: ProductsProps) => {
    products.sort((a, b) => a.order_column - b.order_column)

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center'>
            <div className='relative m-3 flex flex-wrap mx-auto justify-center'>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AppProducts

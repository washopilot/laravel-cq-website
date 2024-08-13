import { Inertia } from '@inertiajs/inertia'
import './app.css'

interface Product {
    id: number
    name: string
    description: string
    price: string
    is_visible: boolean
    category_id: number
    order_column: number
}

interface ProductsProps {
    products: Product[]
}

const AppProducts = ({ products }: ProductsProps) => {
    const sortedProducts = products.sort((a, b) => a.order_column - b.order_column)

    return (
        <div>
            <h1 className='text-3xl font-bold underline text-yellow-400'>Hello world!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Visible</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${Number(product.price).toFixed(2)}</td>
                            <td>{product.is_visible ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AppProducts

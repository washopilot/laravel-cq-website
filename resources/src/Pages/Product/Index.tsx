import React from 'react'
import { Inertia } from '@inertiajs/inertia'

interface Product {
    id: number
    name: string
    description: string
    price: number
    is_visible: boolean
    category_id: number
}

interface ProductsProps {
    products: Product[]
}

const Index: React.FC<ProductsProps> = ({ products }) => {
    return (
        <div>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Visible</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            {/* <td>${product.price.toFixed(2)}</td> */}
                            <td>{product.is_visible ? 'Yes' : 'No'}</td>
                            <td>
                                <button onClick={() => Inertia.visit(`/products/${product.id}`)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Index

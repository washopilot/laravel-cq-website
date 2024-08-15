import { useMemo, useState } from 'react'
import { Category, Product, Variant } from '../interfaces/interfaces'
import './app.css'
import CardProduct from './CardProduct'
import ProductModal from './ProductModal'

interface ProductsProps {
    products: Product[]
    categories: Category[]
    variants: Variant[]
}

const AppProducts = ({ products, categories, variants }: ProductsProps) => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(null!)
    const [filteredVariants, setFilteredVariants] = useState<Variant[]>(null!)
    const [openModal, setOpenModal] = useState(false)
    const [selectedVariant, setSelectedVariant] = useState<Variant>(null!)

    const sortedProducts = useMemo(() => {
        return [...products].sort((a, b) => a.order_column - b.order_column)
    }, [products])

    const handleProductClick = (product: Product) => {
        const temp_variants = variants.filter((variant) => variant.product_id === product.id)
        setSelectedProduct(product)
        setFilteredVariants(temp_variants)
        setSelectedVariant(temp_variants[0] || null)
        setOpenModal(true)
    }

    const productsByCategory = useMemo(() => {
        return categories.map((category) => ({
            ...category,
            products: sortedProducts.filter((product) => product.category_id === category.id)
        }))
    }, [categories, sortedProducts])

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 divide-y divide-gray-200'>
                {productsByCategory.map(({ id, name, products }) => (
                    <div key={id} className='mb-10 py-5'>
                        <div className='flex items-center justify-between space-x-4'>
                            <h2 className='text-2xl font-medium text-gray-900'>{name}</h2>
                            <a
                                href='#'
                                className='whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                                View all
                                <span aria-hidden='true'> &rarr;</span>
                            </a>
                        </div>
                        <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
                            {products.map((product) => (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                    onButtonClick={() => handleProductClick(product)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductModal
                    open={openModal}
                    setOpen={setOpenModal}
                    product={selectedProduct}
                    filteredVariants={filteredVariants}
                    setSelectedVariant={setSelectedVariant}
                    selectedVariant={selectedVariant}
                />
            )}
        </div>
    )
}

export default AppProducts

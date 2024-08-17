import { Link } from '@inertiajs/inertia-react'
import { useMemo, useState } from 'react'
import { Category, Product, Variant } from '../interfaces/interfaces'
import './app.css'
import CardProduct from './components/CardProduct'
import Filters from './components/Filters'
import ProductModal from './components/ProductModal'

interface ProductsProps {
    products: Product[]
    categories: Category[]
    variants: Variant[]
}

const AppProducts = ({ products, categories, variants }: ProductsProps) => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(null!)
    const [filteredVariants, setFilteredVariants] = useState<Variant[]>([])
    const [openModal, setOpenModal] = useState(false)
    const [selectedVariant, setSelectedVariant] = useState<Variant>(null!)

    const sortedProducts = useMemo(
        () => products.slice().sort((a, b) => (a.order_column ?? 0) - (b.order_column ?? 0)),
        [products]
    )

    const handleProductClick = (product: Product) => {
        const tempVariants = variants
            .filter((variant) => variant.product_id === product.id)
            .sort((a, b) => (a.order_column ?? 0) - (b.order_column ?? 0))

        setSelectedProduct(product)
        setFilteredVariants(tempVariants)
        setSelectedVariant(tempVariants[0] || null)
        setOpenModal(true)
    }

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                    <Link href='/products/show'>Workspace sale</Link>
                </h1>
                <p className='mt-4 max-w-xl text-sm text-gray-700'>
                    Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity
                    and organization with these sale items before we run out.
                </p>
            </div>

            <Filters categories={categories} />

            <div className='mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8'>
                <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
                    {sortedProducts.map(
                        (product) =>
                            product.is_visible && (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                    onButtonClick={() => handleProductClick(product)}
                                />
                            )
                    )}
                </div>
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

import { Link } from '@inertiajs/inertia-react'
import { motion } from 'framer-motion'
import { useCallback, useMemo, useState } from 'react'
import { Category, Product, Variant } from '../interfaces/interfaces'
import './app.css'
import CardProduct from './components/CardProduct'
import Filters from './components/Filters'
import Layout from './components/Layout'
import ProductModal from './components/ProductModal'

export type FiltersType = {
    id: string
    name: string
    options: {
        value: string
        label: string
        checked: boolean
    }[]
}[]

interface ProductsProps {
    products: Product[]
    categories: Category[]
    variants: Variant[]
}

const INITIAL_SORT_OPTIONS = [
    { name: 'Orden: Ascendente', href: '#', current: false },
    { name: 'Orden: Descendente', href: '#', current: true },
    { name: 'Precio: Menor a Mayor', href: '#', current: false },
    { name: 'Precio: Mayor a Menor', href: '#', current: false }
]

const AppProducts = ({ products, categories, variants }: ProductsProps) => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(null!)
    const [filteredVariants, setFilteredVariants] = useState<Variant[]>([])
    const [openModal, setOpenModal] = useState(false)
    const [selectedVariant, setSelectedVariant] = useState<Variant>(null!)
    const [sortOptions, setSortOptions] = useState(INITIAL_SORT_OPTIONS)
    const initialFilters = useMemo(
        () => [
            {
                id: 'category',
                name: 'Category',
                options: categories.map((category) => ({
                    value: category.slug,
                    label: category.name,
                    checked: true
                }))
            }
        ],
        [categories]
    )
    const [filters, setFilters] = useState<FiltersType>(initialFilters)

    const getCategoryIdBySlug = (slug: string, categories: Category[]): number | undefined => {
        return categories.find((category) => category.slug === slug)?.id
    }

    const filterProductsByCategory = (products: Product[], filters: FiltersType, categories: Category[]): Product[] => {
        const selectedCategoryValues =
            filters
                .find((filter) => filter.id === 'category')
                ?.options.filter((option) => option.checked)
                .map((option) => option.value) || []

        if (selectedCategoryValues.length === 0) {
            return []
        }

        const selectedCategoryIds = selectedCategoryValues.map((slug) => getCategoryIdBySlug(slug, categories))

        return products.filter(
            (product) => selectedCategoryIds.length === 0 || selectedCategoryIds.includes(product.category_id)
        )
    }

    const filteredAndSortedProducts = useMemo(() => {
        const filteredProducts = filterProductsByCategory(products, filters, categories)

        const selectedSortOption = sortOptions.find((option) => option.current)
        if (!selectedSortOption) return filteredProducts

        const sorted = [...filteredProducts]
        switch (selectedSortOption.name) {
            case 'Orden: Ascendente':
                return sorted.sort((a, b) => (b.order_column ?? 0) - (a.order_column ?? 0))
            case 'Orden: Descendente':
                return sorted.sort((a, b) => (a.order_column ?? 0) - (b.order_column ?? 0))
            case 'Precio: Menor a Mayor':
                return sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            case 'Precio: Mayor a Menor':
                return sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            default:
                return sorted
        }
    }, [products, filters, categories, sortOptions])

    const handleProductClick = useCallback(
        (product: Product) => {
            const tempVariants = variants
                .filter((variant) => variant.product_id === product.id)
                .sort((a, b) => (a.order_column ?? 0) - (b.order_column ?? 0))

            setSelectedProduct(product)
            setFilteredVariants(tempVariants)
            setSelectedVariant(tempVariants[0] || null)
            setOpenModal(true)
        },
        [variants]
    )

    return (
        <Layout>
            <div className='bg-white'>
                <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                        <Link href='/products/show'>Workspace sale</Link>
                    </h1>
                    <p className='mt-4 max-w-xl text-sm text-gray-700'>
                        Our thoughtfully designed workspace objects are crafted in limited runs. Improve your
                        productivity and organization with these sale items before we run out.
                    </p>
                </div>

                <Filters
                    sortOptions={sortOptions}
                    setSortOptions={setSortOptions}
                    filters={filters}
                    setFilters={setFilters}
                />

                <div className='mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8'>
                    <motion.div
                        key={JSON.stringify({
                            sortOptions: sortOptions.find((option) => option.current),
                            filters
                        })}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
                        {filteredAndSortedProducts.map(
                            (product, index) =>
                                product.is_visible && (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1
                                        }}>
                                        <CardProduct
                                            product={product}
                                            onButtonClick={() => handleProductClick(product)}
                                        />
                                    </motion.div>
                                )
                        )}
                    </motion.div>
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
        </Layout>
    )
}

export default AppProducts

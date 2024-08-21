import { Link } from '@inertiajs/inertia-react'
import { motion } from 'framer-motion'
import { Category, Product, Variant } from '../types-and-interfaces'
import './app.css'
import CardProduct from './components/CardProduct'
import Cart from './components/Cart'
import Filters from './components/Filters'
import Layout from './components/Layout'
import ProductModal from './components/ProductModal'
import { AppProductsProvider, useAppProductsContext } from './context/AppProductContext'

interface ProductsProps {
    products: Product[]
    categories: Category[]
    variants: Variant[]
}

const AppProducts = ({ products, categories, variants }: ProductsProps) => {
    return (
        <AppProductsProvider products={products} categories={categories} variants={variants}>
            <MainProductsComponent />
        </AppProductsProvider>
    )
}

const MainProductsComponent = () => {
    const {
        cart,
        updateProductQuantity,
        removeProduct,
        selectedProduct,
        handleProductClick,
        filteredVariants,
        openModal,
        setOpenModal,
        selectedVariant,
        setSelectedVariant,
        filters,
        setFilters,
        sortOptions,
        setSortOptions,
        filteredAndSortedProducts,
        openCart,
        setOpenCart,
        handleOnClickCart,
        handleAddToCart
    } = useAppProductsContext()

    return (
        <Layout cart={cart} handleOnClickCart={handleOnClickCart}>
            <div className='bg-white'>
                <div className='mx-auto w-full px-4 pt-48 md:pt-32 pb-16 sm:px-6 md:px-32 lg:px-40 bg-gradient-to-b from-gray-900 via-black to-gray-900'>
                    <h1 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500'>
                        <Link href='/products/show'>Nuestro catálogo</Link>
                    </h1>
                    <p className='mt-4 max-w-xl text-sm text-white'>
                        Eleva tu espacio con nuestros muebles metálicos de edición limitada: perchas, góndolas y más.
                        Diseñados para combinar funcionalidad y estilo en cualquier entorno.
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
                        className='mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
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
                        handleAddToCart={handleAddToCart}
                    />
                )}

                <Cart
                    openCart={openCart}
                    setOpenCart={setOpenCart}
                    cart={cart}
                    updateProductQuantity={updateProductQuantity}
                    removeProduct={removeProduct}
                />
            </div>
        </Layout>
    )
}

export default AppProducts

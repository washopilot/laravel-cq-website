import { PageProps } from '@inertiajs/core'
import { Link, usePage } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { PaginatedData, Product } from '../types-and-interfaces'
import './app.css'
import CardProduct from './components/CardProduct'
import Pagination from './components/Pagination'
import ProductModal from './components/ProductModal'
import useProductModal from './hooks/useProductModal'

interface AppProductsProps extends PageProps {
    products: PaginatedData<Product>
    product: any
    currentPage: number
}

const AppProducts = () => {
    const { products, product, currentPage } = usePage<AppProductsProps>().props

    // console.log(product)

    // const { filters, setFilters, sortOptions, setSortOptions, filteredAndSortedProducts } = useFilters(
    //     categories,
    //     products.data
    // )

    // console.log(products.meta.links)

    const { selectedProduct, handleProductClick, openModal, closeModal } = useProductModal(currentPage)

    // const { cart, updateProductQuantity, removeProduct, openCart, setOpenCart, handleOnClickCart, handleAddToCart } =
    //     useCart(products.data, variants)

    return (
        // <Layout cart={cart} handleOnClickCart={handleOnClickCart}>
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

            {/* <Filters
                    sortOptions={sortOptions}
                    setSortOptions={setSortOptions}
                    filters={filters}
                    setFilters={setFilters}
                /> */}

            <div className='mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8'>
                {/* {products.links.prev && <Link href={products.links.prev}>Previo</Link>}
                    {products.links.next && <Link href={products.links.next}>Siguiente</Link>} */}
                <motion.div
                    key={products.meta.current_page}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className='mt-6 pb-24 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
                    {products.data.map(
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
                                        onButtonClick={() => handleProductClick(product.id)}
                                    />
                                </motion.div>
                            )
                    )}
                </motion.div>
                <Pagination products={products} />
            </div>

            {selectedProduct && product && (
                <ProductModal
                    open={openModal}
                    product={product.data}
                    closeModal={closeModal}
                    // handleAddToCart={handleAddToCart}
                />
            )}

            {/* <Cart
                    openCart={openCart}
                    setOpenCart={setOpenCart}
                    cart={cart}
                    updateProductQuantity={updateProductQuantity}
                    removeProduct={removeProduct}
                /> */}
        </div>
        // </Layout>
    )
}

export default AppProducts

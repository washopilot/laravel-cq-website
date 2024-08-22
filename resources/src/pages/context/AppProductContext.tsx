import React, { createContext, useContext } from 'react'
import { CartItem, Category, FiltersType, Product, Variant } from '../../types-and-interfaces'
import useCart from '../hooks/useCart'
import useFilters from '../hooks/useFilters'
import useProductModal from '../hooks/useProductModal'

type AppProviderProps = {
    products: Product[]
    categories: Category[]
    variants: Variant[]
    children: React.ReactNode
}

interface AppProductsContextType {
    cart: CartItem[]
    updateProductQuantity: (id: number, newQuantity: number) => void
    removeProduct: (id: number) => void
    selectedProduct: Product
    handleProductClick: (product: Product) => void
    filteredVariants: Variant[]
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    selectedVariant: Variant
    setSelectedVariant: React.Dispatch<React.SetStateAction<Variant>>
    filters: FiltersType
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
    sortOptions: typeof INITIAL_SORT_OPTIONS
    setSortOptions: React.Dispatch<React.SetStateAction<typeof INITIAL_SORT_OPTIONS>>
    filteredAndSortedProducts: Product[]
    openCart: boolean
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
    handleOnClickCart: () => void
    handleAddToCart: (variant_id: number) => void
}

const INITIAL_SORT_OPTIONS = [
    { name: 'Orden: Ascendente', href: '#', current: false },
    { name: 'Orden: Descendente', href: '#', current: true },
    { name: 'Precio: Menor a Mayor', href: '#', current: false },
    { name: 'Precio: Mayor a Menor', href: '#', current: false }
]

const AppProductsContext = createContext<AppProductsContextType>(null!)

export const AppProductsProvider = ({ products, categories, variants, children }: AppProviderProps) => {
    const {
        selectedProduct,
        handleProductClick,
        filteredVariants,
        openModal,
        setOpenModal,
        selectedVariant,
        setSelectedVariant
    } = useProductModal(variants)

    const { cart, updateProductQuantity, removeProduct, openCart, setOpenCart, handleOnClickCart, handleAddToCart } =
        useCart(products, variants)

    const { filters, setFilters, sortOptions, setSortOptions, filteredAndSortedProducts } = useFilters(
        categories,
        products,
        INITIAL_SORT_OPTIONS
    )

    return (
        <AppProductsContext.Provider
            value={{
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
            }}>
            {children}
        </AppProductsContext.Provider>
    )
}

export const useAppProductsContext = () => useContext(AppProductsContext)

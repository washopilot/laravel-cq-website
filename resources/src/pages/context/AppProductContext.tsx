import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { CartItem, Category, FiltersType, Product, Variant } from '../../types-and-interfaces'
import getValidatedCart from '../../utils/validate-storage'

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

const saveCart = (cart: CartItem[]) => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
}

const AppProductsContext = createContext<AppProductsContextType>(null!)

export const AppProductsProvider = ({ products, categories, variants, children }: AppProviderProps) => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(null!)
    const [filteredVariants, setFilteredVariants] = useState<Variant[]>([])
    const [openModal, setOpenModal] = useState(false)
    const [selectedVariant, setSelectedVariant] = useState<Variant>(null!)
    const [sortOptions, setSortOptions] = useState(INITIAL_SORT_OPTIONS)
    const initialFilters = useMemo(
        () => [
            {
                id: 'category',
                name: 'POR CATEGORÍA',
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

    const [cart, setCart] = useState<CartItem[]>(getValidatedCart())
    const [openCart, setOpenCart] = useState(false)

    const handleOnClickCart = () => {
        setOpenCart(true)
    }

    useEffect(() => {
        saveCart(cart)
        // console.log(cart)
    }, [cart])

    const addToCart = (variant: Variant, quantity: number = 1) => {
        const product = products.find((p) => p.id === variant.product_id)
        if (!product) return // Si no se encuentra el producto, no hace nada.

        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => item.id === variant.id)
            if (existingItemIndex > -1) {
                return prevCart.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
                )
            }
            return [
                ...prevCart,
                {
                    quantity,
                    id: variant.id,
                    name: variant.name,
                    product: product.name,
                    price: variant.price,
                    imageSrc: variant.images[0]
                }
            ]
        })
    }

    const handleAddToCart = (variant_id: number) => {
        const variant = variants.find((v) => v.id === variant_id)
        if (!variant) return

        addToCart(variant, 1)
    }

    const updateProductQuantity = (id: number, newQuantity: number) => {
        setCart((prevCart) =>
            prevCart.map((product) => (product.id === id ? { ...product, quantity: newQuantity } : product))
        )
    }

    const removeProduct = (id: number) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id))
    }

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

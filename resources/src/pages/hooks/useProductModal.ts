import { useCallback, useState } from 'react'
import { Product, Variant } from '../../types-and-interfaces'

const useProductModal = (variants: Variant[]) => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(null!)
    const [filteredVariants, setFilteredVariants] = useState<Variant[]>([])
    const [selectedVariant, setSelectedVariant] = useState<Variant>(null!)
    const [openModal, setOpenModal] = useState(false)

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

    return {
        selectedProduct,
        handleProductClick,
        filteredVariants,
        openModal,
        setOpenModal,
        selectedVariant,
        setSelectedVariant
    }
}

export default useProductModal

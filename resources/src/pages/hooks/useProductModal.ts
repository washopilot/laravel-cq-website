import { useCallback, useState } from 'react'
import { Product, Variant } from '../../types-and-interfaces'

const useProductModal = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(null!)
    const [filteredVariants, setFilteredVariants] = useState<Variant[]>([])
    const [selectedVariant, setSelectedVariant] = useState<Variant>(null!)
    const [openModal, setOpenModal] = useState(false)

    const handleProductClick = useCallback(
        (product: Product) => {
            setSelectedProduct(product)
            setFilteredVariants(product.variants)
            setSelectedVariant(product.variants[0] || null)
            setOpenModal(true)
        },
        [selectedProduct]
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

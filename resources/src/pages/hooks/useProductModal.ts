import { router } from '@inertiajs/react'
import { useEffect, useState } from 'react'

const useProductModal = (currentPage: number) => {
    const [selectedProduct, setSelectedProduct] = useState<number>(null!)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (selectedProduct) {
            setOpenModal(true)
        }
    }, [selectedProduct])

    const handleProductClick = (productId: number) => {
        setSelectedProduct(productId)
        router.visit(`/products/${productId}/show?page=${currentPage}`, {
            preserveState: true,
            preserveScroll: true,
            replace: false
        })
    }

    const closeModal = () => {
        setOpenModal(false)
        setSelectedProduct(null)
        router.visit(`/products?page=${currentPage}`, {
            preserveState: true,
            preserveScroll: true,
            replace: true
        })
    }

    return {
        selectedProduct,
        handleProductClick,
        openModal,
        setOpenModal,
        closeModal
    }
}

export default useProductModal

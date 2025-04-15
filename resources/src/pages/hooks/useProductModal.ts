import { useEffect, useState } from 'react'

const useProductModal = () => {
    const [selectedProduct, setSelectedProduct] = useState<number>(null!)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        console.log(selectedProduct)

        if (selectedProduct) {
            setOpenModal(true)
        }
    }, [selectedProduct])

    const handleProductClick = (productId: number) => {
        setSelectedProduct(productId)
    }

    const closeModal = () => {
        setOpenModal(false)
        setSelectedProduct(null!)
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

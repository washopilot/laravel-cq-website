import { useEffect, useState } from 'react'
import { CartItem, Product, Variant } from '../../types-and-interfaces'
import getValidatedCart from '../../utils/validate-storage'

const saveCart = (cart: CartItem[]) => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
}

const useCart = (products: Product[], variants: Variant[]) => {
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

    return {
        cart,
        updateProductQuantity,
        removeProduct,
        openCart,
        setOpenCart,
        handleOnClickCart,
        handleAddToCart
    }
}

export default useCart

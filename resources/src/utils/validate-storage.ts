import { CartItem } from '../types-and-interfaces'

// Define the validation function for a single CartItem
const isValidCartItem = (item: CartItem) => {
    return (
        typeof item.id === 'number' &&
        typeof item.quantity === 'number' &&
        typeof item.name === 'string' &&
        typeof item.product === 'string' &&
        typeof item.price === 'string' &&
        typeof item.imageSrc === 'string'
    )
}

// Get and validate the cart items from localStorage
const getValidatedCart = (): CartItem[] => {
    const savedCart = localStorage.getItem('shoppingCart')
    if (!savedCart) return [] // If nothing in localStorage, return an empty array

    try {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart) && parsedCart.every(isValidCartItem)) {
            return parsedCart // If valid, return the parsed cart items
        } else {
            console.warn('Invalid cart data structure in localStorage:', parsedCart)
        }
    } catch (error) {
        console.error('Error parsing cart data from localStorage:', error)
    }

    return [] // If validation or parsing fails, return an empty array
}

export default getValidatedCart

export type FiltersType = {
    id: string
    name: string
    options: {
        value: string
        label: string
        checked: boolean
    }[]
}[]

export type OrderType = {
    tracking_id: string
    fullName: string
    phoneNumber: string
    address: string
    cartItems: string
    subtotal: number
    status: number
}

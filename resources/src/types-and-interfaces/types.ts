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

export type PaginatedData<T> = {
    data: T[]
    links: {
        first: string
        last: string
        prev: string | null
        next: string | null
    }
    meta: {
        current_page: number
        from: number
        last_page: number
        path: string
        per_page: number
        to: number
        total: number

        links: {
            url: null | string
            label: string
            active: boolean
        }[]
    }
}

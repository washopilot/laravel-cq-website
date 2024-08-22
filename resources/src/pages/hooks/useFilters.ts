import { useMemo, useState } from 'react'
import { Category, FiltersType, Product } from '../../types-and-interfaces'

const INITIAL_SORT_OPTIONS = [
    { name: 'Orden: Ascendente', href: '#', current: false },
    { name: 'Orden: Descendente', href: '#', current: true },
    { name: 'Precio: Menor a Mayor', href: '#', current: false },
    { name: 'Precio: Mayor a Menor', href: '#', current: false }
]

const useFilters = (categories: Category[], products: Product[]) => {
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

    return {
        filters,
        setFilters,
        sortOptions,
        setSortOptions,
        filteredAndSortedProducts
    }
}

export default useFilters

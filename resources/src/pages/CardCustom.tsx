import { Product } from './AppProducts'

const CardCustom = ({ product }: { product: Product }) => {
    function formatCurrency(value: string) {
        const numberValue = parseFloat(value)
        if (isNaN(numberValue)) {
            return 'Invalid price'
        }

        return `$${numberValue.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`
    }

    return (
        <div key={product.id} className='group relative'>
            <div className='aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100'>
                <img src={product.images[0]} alt={'imageAlt'} className='object-cover object-center' />
                <div className='flex items-end p-4 opacity-0 group-hover:opacity-100' aria-hidden='true'>
                    <div className='w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter'>
                        View Product
                    </div>
                </div>
            </div>
            <div className='mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900'>
                <h3>
                    <a href='#'>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {product.name}
                    </a>
                </h3>
                <p>{product.price}</p>
            </div>
            <p className='mt-1 text-sm text-gray-500'>{product.description}</p>
        </div>
    )
}

export default CardCustom

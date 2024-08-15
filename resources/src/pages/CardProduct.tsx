import { Product } from '../interfaces/interfaces'
import formatCurrency from '../utils/format-currency'

type CardProductProps = {
    product: Product
    onButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

const CardProduct = ({ product, onButtonClick }: CardProductProps) => {
    return (
        <div key={product.id} className='group relative'>
            <div className='aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-gray-100'>
                <img src={product.images[0]} alt={'imageAlt'} className='object-cover object-center' />
                <div className='flex items-end p-4 opacity-0 group-hover:opacity-100' aria-hidden='true'>
                    <div className='w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter'>
                        View Product
                    </div>
                </div>
            </div>
            <div className='mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900'>
                <h3>
                    <button onClick={onButtonClick}>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {product.name}
                    </button>
                </h3>
                <p>{formatCurrency(product.price)}</p>
            </div>
            <p className='mt-1 text-sm text-gray-500 line-clamp-3'>{product.description}</p>
        </div>
    )
}

export default CardProduct

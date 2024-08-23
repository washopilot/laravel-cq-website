import { CartItem, OrderType } from '../types-and-interfaces'
import formatCurrency from '../utils/format-currency'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const ProcessOrder = ({ send, tracking_id, order }: { send: string; tracking_id: string; order: OrderType }) => {
    if (send == 'success') {
        localStorage.clear()
    }

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
                <div className='max-w-xl'>
                    {send == 'success' ? (
                        <>
                            <h1 className='text-base font-medium text-indigo-600'>Muchas gracias!</h1>
                            <p className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
                                Su pedido ha sido registrado
                            </p>
                            <p className='mt-2 text-base text-gray-500'>
                                La orden ha sido recibida, pronto recibirá un mensaje de confirmación
                            </p>
                        </>
                    ) : null}
                    <dl className='mt-12 text-sm font-medium'>
                        <dt className='text-gray-900'>Código de registro</dt>
                        <dd className='mt-2 text-indigo-600 text-lg'>{tracking_id}</dd>
                    </dl>
                </div>

                <div className='mt-10 border-t border-gray-200'>
                    <h2 className='sr-only'>Your order</h2>

                    <h3 className='sr-only'>Items</h3>
                    {(JSON.parse(order.cartItems) as CartItem[]).map((product) => (
                        <div key={product.id} className='flex space-x-6 border-b border-gray-200 py-10'>
                            <img
                                src={product.imageSrc}
                                alt={'product.imageAlt'}
                                className='h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40'
                            />
                            <div className='flex flex-auto flex-col'>
                                <div>
                                    <h4 className='font-medium text-gray-900'>
                                        <a href={product.imageSrc}>{product.name}</a>
                                    </h4>
                                    <p className='mt-2 text-sm text-gray-600'>{product.product}</p>
                                </div>
                                <div className='mt-6 flex flex-1 items-end'>
                                    <dl className='flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6'>
                                        <div className='flex'>
                                            <dt className='font-medium text-gray-900'>Quantity</dt>
                                            <dd className='ml-2 text-gray-700'>{product.quantity}</dd>
                                        </div>
                                        <div className='flex pl-4 sm:pl-6'>
                                            <dt className='font-medium text-gray-900'>Price</dt>
                                            <dd className='ml-2 text-gray-700'>{product.price}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='sm:ml-40 sm:pl-6'>
                        <h3 className='sr-only'>Your information</h3>

                        <h4 className='sr-only'>Addresses</h4>
                        <dl className='grid grid-cols-2 gap-x-6 py-10 text-sm'>
                            <div>
                                <dt className='font-medium text-gray-900'>Dirección</dt>
                                <dd className='mt-2 text-gray-700'>
                                    <address className='not-italic'>
                                        <span className='block'>{order.address}</span>
                                        {/* <span className='block'>7363 Cynthia Pass</span> */}
                                        {/* <span className='block'>Toronto, ON N3Y 4H8</span> */}
                                    </address>
                                </dd>
                            </div>
                            <div>
                                <dt className='font-medium text-gray-900'>Nombres cliente y teléfono</dt>
                                <dd className='mt-2 text-gray-700'>
                                    <address className='not-italic'>
                                        <span className='block'>{order.fullName}</span>
                                        <span className='block'>{order.phoneNumber}</span>
                                        {/* <span className='block'>Toronto, ON N3Y 4H8</span> */}
                                    </address>
                                </dd>
                            </div>
                        </dl>

                        <h3 className='sr-only'>Summary</h3>
                        <dl className='space-y-6 border-t border-gray-200 py-10 text-sm'>
                            <div className='flex justify-between'>
                                <dt className='font-medium text-gray-900'>Subtotal (sin IVA)</dt>
                                <dd className='text-gray-700'>{formatCurrency(order.subtotal.toFixed(2))}</dd>
                            </div>
                            {/* <div className='flex justify-between'>
                                <dt className='flex font-medium text-gray-900'>
                                    Discount
                                    <span className='ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600'>
                                        STUDENT50
                                    </span>
                                </dt>
                                <dd className='text-gray-700'>-$18.00 (50%)</dd>
                            </div>
                            <div className='flex justify-between'>
                                <dt className='font-medium text-gray-900'>Shipping</dt>
                                <dd className='text-gray-700'>$5.00</dd>
                            </div>
                            <div className='flex justify-between'>
                                <dt className='font-medium text-gray-900'>Total</dt>
                                <dd className='text-gray-900'>$23.00</dd>
                            </div> */}
                        </dl>
                    </div>
                </div>
                <div className='border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8'>
                    <h4 className='sr-only'>Status</h4>
                    <p className='text-sm font-medium text-gray-900'>
                        {/* {products.status.status} on{' '}
                        <time dateTime={products.status.datetime}>{products.status.date}</time> */}
                        {'Estado del pedido'}
                    </p>
                    <div className='mt-6' aria-hidden='true'>
                        <div className='overflow-hidden rounded-full bg-gray-200'>
                            <div
                                className='h-2 rounded-full bg-indigo-600'
                                style={{ width: `calc((${order.status} * 2 + 1) / 5 * 100%)` }}
                            />
                        </div>
                        <div className='mt-6 hidden grid-cols-3 text-sm font-medium text-gray-600 sm:grid'>
                            <div className='text-indigo-600'>Registado</div>
                            <div className={classNames(order.status > 0 ? 'text-indigo-600' : '', 'text-center')}>
                                Procesado
                            </div>
                            <div className={classNames(order.status > 1 ? 'text-indigo-600' : '', 'text-right')}>
                                Entregado
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessOrder

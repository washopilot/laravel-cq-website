import { Link, router } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CartItem } from '../types-and-interfaces'
import formatCurrency from '../utils/format-currency'
import getValidatedCart from '../utils/validate-storage'

export default function Checkout() {
    const [cartItems] = useState<CartItem[]>(getValidatedCart)
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        const calculatedSubtotal = cartItems.reduce((total, item) => {
            const itemTotal = item.quantity * parseFloat(item.price)
            return total + parseFloat(itemTotal.toFixed(2))
        }, 0)
        setSubtotal(parseFloat(calculatedSubtotal.toFixed(2)))
    }, [cartItems])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = {
            fullName: formData.get('full-name') as string,
            phoneNumber: formData.get('phone-number') as string,
            address: formData.get('address') as string,
            cartItems: JSON.stringify(cartItems),
            subtotal
        }

        router.post('/process-order', data)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white'>
            {/* Background color split screen for large screens */}
            <div className='fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block' aria-hidden='true' />
            <div className='fixed right-0 top-0 hidden h-full w-1/2 bg-indigo-900 lg:block' aria-hidden='true' />

            <div className='relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16'>
                <h1 className='sr-only'>Checkout</h1>
                <section
                    aria-labelledby='summary-heading'
                    className='bg-indigo-900 py-12 text-indigo-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pb-24 lg:pt-0'>
                    <div className='mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0'>
                        <h2 id='summary-heading' className='sr-only'>
                            Order summary
                        </h2>

                        <dl>
                            <dt className='text-sm font-medium'>Monto</dt>
                            <dd className='mt-1 text-3xl font-bold tracking-tight text-white'>
                                {formatCurrency((subtotal + subtotal * 0.15).toString())}
                            </dd>
                            <dd className='text-right text-white underline underline-offset-8 pb-6'>
                                <Link href='/products'>&#x2190; Regresar a la tienda</Link>
                            </dd>
                        </dl>

                        <ul role='list' className='divide-y divide-white divide-opacity-10 text-sm font-medium'>
                            {cartItems.map((product) => (
                                <li key={product.id} className='flex items-start space-x-4 py-6'>
                                    <img
                                        src={product.imageSrc}
                                        alt={'product.imageAlt'}
                                        className='h-20 w-20 flex-none rounded-md object-cover object-center'
                                    />
                                    <div className='flex-auto space-y-1'>
                                        <h3 className='text-white'>{product.name}</h3>
                                        <p>{product.product}</p>
                                        {/* <p>{product.size}</p> */}
                                    </div>
                                    <p className='flex-none text-base font-medium text-white'>
                                        {formatCurrency((parseFloat(product.price) * product.quantity).toString())}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <dl className='space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium'>
                            <div className='flex items-center justify-between'>
                                <dt>Subtotal</dt>
                                <dd>{formatCurrency(subtotal.toString())}</dd>
                            </div>

                            {/* <div className='flex items-center justify-between'>
                                <dt>Shipping</dt>
                                <dd>$25.00</dd>
                            </div> */}

                            <div className='flex items-center justify-between'>
                                <dt>{'IVA (15%)'}</dt>
                                <dd>{formatCurrency((subtotal * 0.15).toString())}</dd>
                            </div>

                            <div className='flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white'>
                                <dt className='text-base'>Total</dt>
                                <dd className='text-base'>{formatCurrency((subtotal + subtotal * 0.15).toString())}</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <section
                    aria-labelledby='informacion-contacto-heading'
                    className='py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pb-24 lg:pt-0'>
                    <h2 id='informacion-contacto-heading' className='sr-only'>
                        Información de contacto
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className='mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0'>
                            <div>
                                <h3 className='text-lg font-medium text-gray-900'>Información de contacto</h3>

                                <div className='mt-6'>
                                    <label htmlFor='full-name' className='block text-sm font-medium text-gray-700'>
                                        Nombre completo
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            type='text'
                                            id='full-name'
                                            name='full-name'
                                            placeholder='Ingresa tu nombre completo'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                            required
                                            defaultValue='Juan Pérez' // Datos de prueba
                                        />
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <label htmlFor='phone-number' className='block text-sm font-medium text-gray-700'>
                                        Número de teléfono
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            type='tel'
                                            id='phone-number'
                                            name='phone-number'
                                            placeholder='Ingresa tu número de teléfono'
                                            autoComplete='tel'
                                            pattern='[0-9]{10}'
                                            title='Debe contener 10 dígitos'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                            required
                                            defaultValue='1234567890' // Datos de prueba
                                        />
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <label htmlFor='address' className='block text-sm font-medium text-gray-700'>
                                        Dirección
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            type='text'
                                            id='address'
                                            name='address'
                                            placeholder='Ingresa tu dirección'
                                            autoComplete='street-address'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                            required
                                            defaultValue='Av. Siempre Viva 742' // Datos de prueba
                                        />
                                    </div>
                                </div>

                                {/* Checkbox requerido */}
                                <div className='mt-6 flex items-center'>
                                    <input
                                        type='checkbox'
                                        id='confirm-data'
                                        name='confirm-data'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        required
                                    />
                                    <label htmlFor='confirm-data' className='ml-2 block text-sm text-gray-900'>
                                        Confirmo que estos datos son correctos
                                    </label>
                                </div>
                            </div>

                            <div className='mt-10 flex justify-end border-t border-gray-200 pt-6'>
                                <button
                                    type='submit'
                                    className='rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
                                    Procesar pedido
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </motion.div>
    )
}

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { router } from '@inertiajs/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment } from 'react'
import { CartItem } from '../../types-and-interfaces'
import AnimatedCurrency from './AnimatedCurrency'

type CartProps = {
    openCart: boolean
    setOpenCart: (openCart: boolean) => void
    cart: CartItem[]
    updateProductQuantity: (id: number, newQuantity: number) => void
    removeProduct: (id: number) => void
}

export default function Cart({ openCart, setOpenCart, cart, updateProductQuantity, removeProduct }: CartProps) {
    return (
        <Transition.Root show={openCart} as={Fragment}>
            <Dialog as='div' className='relative z-50' onClose={setOpenCart}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-hidden'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                            <Transition.Child
                                as={Fragment}
                                enter='transform transition ease-in-out duration-500 sm:duration-700'
                                enterFrom='translate-x-full'
                                enterTo='translate-x-0'
                                leave='transform transition ease-in-out duration-500 sm:duration-700'
                                leaveFrom='translate-x-0'
                                leaveTo='translate-x-full'>
                                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                                    <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                                        <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                                            <div className='flex items-start justify-between'>
                                                <Dialog.Title className='text-lg font-medium text-gray-900'>
                                                    Carrito de pedidos
                                                </Dialog.Title>
                                                <div className='ml-3 flex h-7 items-center'>
                                                    <button
                                                        type='button'
                                                        className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                                                        onClick={() => setOpenCart(false)}>
                                                        <span className='sr-only'>Close panel</span>
                                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='mt-8'>
                                                <div className='flow-root'>
                                                    <ul role='list' className='-my-6 divide-y divide-gray-200'>
                                                        <AnimatePresence>
                                                            {cart.map((product) => (
                                                                <motion.li
                                                                    key={product.id}
                                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    className='flex py-6'>
                                                                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                                                        <img
                                                                            src={product.imageSrc}
                                                                            alt={'product.imageAlt'}
                                                                            className='h-full w-full object-cover object-center'
                                                                        />
                                                                    </div>

                                                                    <div className='ml-4 flex flex-1 flex-col'>
                                                                        <div>
                                                                            <div className='flex justify-between text-base font-medium text-gray-900'>
                                                                                <h3>
                                                                                    <a href={'#'}>{product.name}</a>
                                                                                </h3>
                                                                                <p className='ml-4'>
                                                                                    {
                                                                                        <AnimatedCurrency
                                                                                            value={
                                                                                                parseFloat(
                                                                                                    product.price
                                                                                                ) * product.quantity
                                                                                            }
                                                                                        />
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                            <p className='mt-1 text-sm text-gray-500'>
                                                                                {product.product}
                                                                            </p>
                                                                        </div>
                                                                        <div className='flex flex-1 items-end justify-between text-sm'>
                                                                            <div className='flex items-center'>
                                                                                <button
                                                                                    onClick={() =>
                                                                                        updateProductQuantity(
                                                                                            product.id,
                                                                                            Math.max(
                                                                                                product.quantity - 1,
                                                                                                1
                                                                                            )
                                                                                        )
                                                                                    }
                                                                                    className='bg-[#c79c43] text-black hover:bg-[#e9b650] px-3 py-1 rounded-l-md focus:outline-none'>
                                                                                    <MinusIcon className='h-3 w-3' />
                                                                                </button>
                                                                                <input
                                                                                    disabled
                                                                                    type='text'
                                                                                    value={product.quantity}
                                                                                    readOnly
                                                                                    className='text-xs font-bold w-10 text-center bg-white border-y-2 border-[#c79c43] text-gray-900 px-0 py-0'
                                                                                />
                                                                                <button
                                                                                    onClick={() =>
                                                                                        updateProductQuantity(
                                                                                            product.id,
                                                                                            product.quantity + 1
                                                                                        )
                                                                                    }
                                                                                    className='bg-[#c79c43] text-black hover:bg-[#e9b650] px-3 py-1 rounded-r-md focus:outline-none'>
                                                                                    <PlusIcon className='h-3 w-3' />
                                                                                </button>
                                                                            </div>

                                                                            <div className='flex'>
                                                                                <button
                                                                                    onClick={() =>
                                                                                        removeProduct(product.id)
                                                                                    }
                                                                                    type='button'
                                                                                    className='font-medium text-[#d8ac55] hover:text-[#836934]'>
                                                                                    Eliminar
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </motion.li>
                                                            ))}
                                                        </AnimatePresence>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                                            <div className='flex justify-between text-lg font-medium text-gray-900'>
                                                <p>Subtotal</p>
                                                <p>
                                                    {
                                                        <AnimatedCurrency
                                                            value={cart.reduce((total, item) => {
                                                                const itemTotal = item.quantity * parseFloat(item.price)
                                                                return total + parseFloat(itemTotal.toFixed(2))
                                                            }, 0)}
                                                        />
                                                    }
                                                </p>
                                            </div>
                                            <p className='mt-0.5 text-sm text-gray-500'>
                                                Shipping and taxes calculated at checkout.
                                            </p>
                                            <div className='mt-6'>
                                                <button
                                                    onClick={() =>
                                                        router.visit('checkout', {
                                                            method: 'get'
                                                        })
                                                    }
                                                    className={`w-full flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-black shadow-sm ${
                                                        cart.length === 0
                                                            ? 'bg-gray-400 cursor-not-allowed'
                                                            : 'bg-[#c79c43] hover:bg-[#4d3c1a]'
                                                    }`}
                                                    disabled={cart.length === 0}>
                                                    Procesar Pedido
                                                </button>
                                            </div>
                                            <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                                                <p>
                                                    o
                                                    <button
                                                        type='button'
                                                        className='font-medium text-[#c79c43] hover:text-[#4d3c1a]'
                                                        onClick={() => setOpenCart(false)}>
                                                        &nbsp;Continuar Comprando
                                                        <span aria-hidden='true'> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

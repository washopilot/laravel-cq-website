import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { ShieldCheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { Product, Variant } from '../../types-and-interfaces'
import AnimatedCurrency from './AnimatedCurrency'

type ProductModalProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    product: Product
    filteredVariants: Variant[]
    setSelectedVariant: React.Dispatch<React.SetStateAction<Variant>>
    selectedVariant: Variant
    handleAddToCart: (variant_id: number) => void
}

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
}

const ProductModal = ({
    open,
    setOpen,
    product,
    filteredVariants,
    setSelectedVariant,
    selectedVariant,
    handleAddToCart
}: ProductModalProps) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as='div' className='relative z-50' onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='fixed inset-0 hidden bg-gray-500 bg-opacity-50 transition-opacity md:block' />
                </Transition.Child>

                <div className='fixed inset-0 z-10 overflow-y-auto'>
                    <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
                            enterTo='opacity-100 translate-y-0 md:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 md:scale-100'
                            leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'>
                            <Dialog.Panel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
                                <div className='relative flex w-full items-center overflow-hidden bg-gray-200 px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-lg'>
                                    <button
                                        type='button'
                                        className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
                                        onClick={() => setOpen(false)}>
                                        <span className='sr-only'>Close</span>
                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                    </button>

                                    <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
                                        <div className='sm:col-span-4 lg:col-span-5'>
                                            <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100'>
                                                <motion.img
                                                    key={selectedVariant.images[0]} // Cambia la clave para que framer-motion detecte cambios
                                                    src={selectedVariant.images[0]}
                                                    alt={'imageAlt'}
                                                    className='object-cover object-center'
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                />
                                            </div>
                                            {/* <p className='absolute left-4 top-4 text-center sm:static sm:mt-6'>
                                                <a
                                                    href={productData.href}
                                                    className='font-medium text-orange-600 hover:text-orange-500'>
                                                    View full details
                                                </a>
                                            </p> */}
                                        </div>
                                        <div className='sm:col-span-8 lg:col-span-7'>
                                            <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
                                                {product.name}
                                            </h2>

                                            <section aria-labelledby='information-heading' className='mt-4'>
                                                <h3 id='information-heading' className='sr-only'>
                                                    Product information
                                                </h3>

                                                <div className='flex items-center'>
                                                    <p className='text-lg text-gray-900 sm:text-xl'>
                                                        <AnimatedCurrency value={Number(selectedVariant.price)} />
                                                    </p>

                                                    <div className='ml-4 border-l border-gray-300 pl-4'>
                                                        <h4 className='sr-only'>Reviews</h4>
                                                        <div className='flex items-center'>
                                                            {/* <div className='flex items-center'>
                                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                                    <StarIcon
                                                                        key={rating}
                                                                        className={classNames(
                                                                            productData.rating > rating
                                                                                ? 'text-yellow-400'
                                                                                : 'text-gray-300',
                                                                            'h-5 w-5 flex-shrink-0'
                                                                        )}
                                                                        aria-hidden='true'
                                                                    />
                                                                ))}
                                                            </div>
                                                            <p className='sr-only'>
                                                                {productData.rating} out of 5 stars
                                                            </p> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-6 flex items-center'>
                                                    <CheckIcon
                                                        className='h-5 w-5 flex-shrink-0 text-green-500'
                                                        aria-hidden='true'
                                                    />
                                                    <p className='ml-2 font-medium text-gray-500'>
                                                        En stock y listo para entrega
                                                    </p>
                                                </div>
                                            </section>

                                            <section aria-labelledby='options-heading' className='mt-6'>
                                                <h3 id='options-heading' className='sr-only'>
                                                    Product options
                                                </h3>

                                                <form>
                                                    <div className='sm:flex sm:justify-between'>
                                                        {/* Size selector */}
                                                        <RadioGroup
                                                            value={selectedVariant}
                                                            onChange={setSelectedVariant}>
                                                            <RadioGroup.Label className='block text-sm font-medium text-gray-700'>
                                                                Variants
                                                            </RadioGroup.Label>
                                                            <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                                                {filteredVariants.map((size) => (
                                                                    <RadioGroup.Option
                                                                        as='div'
                                                                        key={size.id}
                                                                        value={size}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'ring-2 ring-slate-950' : '',
                                                                                'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                                                                            )
                                                                        }>
                                                                        {({ active, checked }) => (
                                                                            <>
                                                                                <RadioGroup.Label
                                                                                    as='p'
                                                                                    className='text-base font-medium text-gray-900'>
                                                                                    {size.name}
                                                                                </RadioGroup.Label>
                                                                                <RadioGroup.Description
                                                                                    as='p'
                                                                                    className='mt-1 text-sm text-gray-500'>
                                                                                    {'Lorem ipsum dolor sit amet.'}
                                                                                </RadioGroup.Description>
                                                                                <div
                                                                                    className={classNames(
                                                                                        active ? 'border' : 'border-2',
                                                                                        checked
                                                                                            ? 'border-slate-500'
                                                                                            : 'border-transparent',
                                                                                        'pointer-events-none absolute -inset-px rounded-lg'
                                                                                    )}
                                                                                    aria-hidden='true'
                                                                                />
                                                                            </>
                                                                        )}
                                                                    </RadioGroup.Option>
                                                                ))}
                                                            </div>
                                                        </RadioGroup>
                                                    </div>
                                                    {/* <div className='mt-4 flex'>
                                                        <a
                                                            href='#'
                                                            className='group flex text-sm text-gray-500 hover:text-gray-700'>
                                                            <span>What size should I buy?</span>
                                                            <QuestionMarkCircleIcon
                                                                className='ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                                                                aria-hidden='true'
                                                            />
                                                        </a>
                                                    </div> */}
                                                    <div className='mt-6'>
                                                        <button
                                                            type='submit'
                                                            onClick={(event) => {
                                                                event.preventDefault()
                                                                return handleAddToCart(selectedVariant.id)
                                                            }}
                                                            className='flex w-full items-center justify-center rounded-md border border-transparent bg-orange-800 px-8 py-3 text-base font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-gray-50 transform transition-transform duration-200 active:scale-90'>
                                                            Añadir a pedido
                                                        </button>
                                                    </div>
                                                    <div className='mt-6 text-center'>
                                                        <a href='#' className='group inline-flex text-base font-medium'>
                                                            <ShieldCheckIcon
                                                                className='mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                                                                aria-hidden='true'
                                                            />
                                                            <span className='text-gray-500 group-hover:text-gray-700'>
                                                                Producto garantizado
                                                            </span>
                                                        </a>
                                                    </div>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ProductModal

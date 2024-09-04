import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { Link } from '@inertiajs/react'
import { PaginatedData, Product } from '../../types-and-interfaces'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Pagination = ({ products }: { products: PaginatedData<Product> }) => {
    return (
        <nav className='flex items-center justify-between border-t border-gray-200 px-4 sm:px-0'>
            <div className='-mt-px flex w-0 flex-1'>
                {products.links.prev && (
                    <Link
                        href={products.links.prev}
                        className='inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
                        <ArrowLongLeftIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />
                        Previo
                    </Link>
                )}
            </div>
            <div className='hidden md:-mt-px md:flex'>
                {products.meta.links.map((link, index) => {
                    if (link.label == '&laquo; Previous' || link.label == 'Next &raquo;') return null
                    else
                        return (
                            <Link
                                key={index}
                                href={link.url!}
                                className={classNames(
                                    'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium',
                                    link.active
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                )}>
                                {link.label}
                            </Link>
                        )
                })}

                {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
            </div>
            <div className='-mt-px flex w-0 flex-1 justify-end'>
                {products.links.next && (
                    <Link
                        href={products.links.next}
                        className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
                        Siguiente
                        <ArrowLongRightIcon className='ml-3 h-5 w-5 text-gray-400' aria-hidden='true' />
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Pagination

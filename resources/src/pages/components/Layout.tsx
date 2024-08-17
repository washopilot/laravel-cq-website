import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                { name: 'Sleep', href: '#' },
                { name: 'Swimwear', href: '#' },
                { name: 'Underwear', href: '#' }
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' }
            ],
            categories: [
                { name: 'Basic Tees', href: '#' },
                { name: 'Artwork Tees', href: '#' },
                { name: 'Bottoms', href: '#' },
                { name: 'Underwear', href: '#' },
                { name: 'Accessories', href: '#' }
            ],
            brands: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' }
            ]
        },
        {
            name: 'Men',
            featured: [
                { name: 'Casual', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Outdoor', href: '#' }
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' }
            ],
            categories: [
                { name: 'Artwork Tees', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Basic Tees', href: '#' }
            ],
            brands: [
                { name: 'Significant Other', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Full Nelson', href: '#' }
            ]
        }
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' }
    ]
}

const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' }
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' }
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' }
    ]
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='bg-gray-50'>
            <div>
                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as='div' className='relative z-40 lg:hidden' onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter='transition-opacity ease-linear duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition-opacity ease-linear duration-300'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'>
                            <div className='fixed inset-0 bg-black bg-opacity-25' />
                        </Transition.Child>

                        <div className='fixed inset-0 z-40 flex'>
                            <Transition.Child
                                as={Fragment}
                                enter='transition ease-in-out duration-300 transform'
                                enterFrom='-translate-x-full'
                                enterTo='translate-x-0'
                                leave='transition ease-in-out duration-300 transform'
                                leaveFrom='translate-x-0'
                                leaveTo='-translate-x-full'>
                                <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                                    <div className='flex px-4 pb-2 pt-5'>
                                        <button
                                            type='button'
                                            className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                                            onClick={() => setMobileMenuOpen(false)}>
                                            <span className='sr-only'>Close menu</span>
                                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <Tab.Group as='div' className='mt-2'>
                                        <div className='border-b border-gray-200'>
                                            <Tab.List className='-mb-px flex space-x-8 px-4'>
                                                {navigation.categories.map((category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                selected
                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                    : 'border-transparent text-gray-900',
                                                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                            )
                                                        }>
                                                        {category.name}
                                                    </Tab>
                                                ))}
                                            </Tab.List>
                                        </div>
                                        <Tab.Panels as={Fragment}>
                                            {navigation.categories.map((category, categoryIdx) => (
                                                <Tab.Panel key={category.name} className='space-y-12 px-4 pb-6 pt-10'>
                                                    <div className='grid grid-cols-1 items-start gap-x-6 gap-y-10'>
                                                        <div className='grid grid-cols-1 gap-x-6 gap-y-10'>
                                                            <div>
                                                                <p
                                                                    id={`mobile-featured-heading-${categoryIdx}`}
                                                                    className='font-medium text-gray-900'>
                                                                    Featured
                                                                </p>
                                                                <ul
                                                                    role='list'
                                                                    aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                                                    className='mt-6 space-y-6'>
                                                                    {category.featured.map((item) => (
                                                                        <li key={item.name} className='flex'>
                                                                            <a
                                                                                href={item.href}
                                                                                className='text-gray-500'>
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p
                                                                    id='mobile-categories-heading'
                                                                    className='font-medium text-gray-900'>
                                                                    Categories
                                                                </p>
                                                                <ul
                                                                    role='list'
                                                                    aria-labelledby='mobile-categories-heading'
                                                                    className='mt-6 space-y-6'>
                                                                    {category.categories.map((item) => (
                                                                        <li key={item.name} className='flex'>
                                                                            <a
                                                                                href={item.href}
                                                                                className='text-gray-500'>
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='grid grid-cols-1 gap-x-6 gap-y-10'>
                                                            <div>
                                                                <p
                                                                    id='mobile-collection-heading'
                                                                    className='font-medium text-gray-900'>
                                                                    Collection
                                                                </p>
                                                                <ul
                                                                    role='list'
                                                                    aria-labelledby='mobile-collection-heading'
                                                                    className='mt-6 space-y-6'>
                                                                    {category.collection.map((item) => (
                                                                        <li key={item.name} className='flex'>
                                                                            <a
                                                                                href={item.href}
                                                                                className='text-gray-500'>
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <div>
                                                                <p
                                                                    id='mobile-brand-heading'
                                                                    className='font-medium text-gray-900'>
                                                                    Brands
                                                                </p>
                                                                <ul
                                                                    role='list'
                                                                    aria-labelledby='mobile-brand-heading'
                                                                    className='mt-6 space-y-6'>
                                                                    {category.brands.map((item) => (
                                                                        <li key={item.name} className='flex'>
                                                                            <a
                                                                                href={item.href}
                                                                                className='text-gray-500'>
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                            ))}
                                        </Tab.Panels>
                                    </Tab.Group>

                                    <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                                        {navigation.pages.map((page) => (
                                            <div key={page.name} className='flow-root'>
                                                <a
                                                    href={page.href}
                                                    className='-m-2 block p-2 font-medium text-gray-900'>
                                                    {page.name}
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                                        <div className='flow-root'>
                                            <a href='#' className='-m-2 block p-2 font-medium text-gray-900'>
                                                Create an account
                                            </a>
                                        </div>
                                        <div className='flow-root'>
                                            <a href='#' className='-m-2 block p-2 font-medium text-gray-900'>
                                                Sign in
                                            </a>
                                        </div>
                                    </div>

                                    <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                                        {/* Currency selector */}
                                        <form>
                                            <div className='inline-block'>
                                                <label htmlFor='mobile-currency' className='sr-only'>
                                                    Currency
                                                </label>
                                                <div className='group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white'>
                                                    <select
                                                        id='mobile-currency'
                                                        name='currency'
                                                        className='flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800'>
                                                        {currencies.map((currency) => (
                                                            <option key={currency}>{currency}</option>
                                                        ))}
                                                    </select>
                                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center'>
                                                        <ChevronDownIcon
                                                            className='h-5 w-5 text-gray-500'
                                                            aria-hidden='true'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <header className='relative'>
                    <nav aria-label='Top'>
                        {/* Top navigation */}
                        <div className='bg-gray-900'>
                            <div className='mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                                {/* Currency selector */}
                                <form className='hidden lg:block lg:flex-1'>
                                    <div className='flex'>
                                        <label htmlFor='desktop-currency' className='sr-only'>
                                            Currency
                                        </label>
                                        <div className='group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white'>
                                            <select
                                                id='desktop-currency'
                                                name='currency'
                                                className='flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100'>
                                                {currencies.map((currency) => (
                                                    <option key={currency}>{currency}</option>
                                                ))}
                                            </select>
                                            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center'>
                                                <ChevronDownIcon className='h-5 w-5 text-gray-300' aria-hidden='true' />
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <p className='flex-1 text-center text-sm font-medium text-white lg:flex-none'>
                                    Get free delivery on orders over $100
                                </p>

                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    <a href='#' className='text-sm font-medium text-white hover:text-gray-100'>
                                        Create an account
                                    </a>
                                    <span className='h-6 w-px bg-gray-600' aria-hidden='true' />
                                    <a href='#' className='text-sm font-medium text-white hover:text-gray-100'>
                                        Sign in
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Secondary navigation */}
                        <div className='bg-white'>
                            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                                <div className='border-b border-gray-200'>
                                    <div className='flex h-16 items-center justify-between'>
                                        {/* Logo (lg+) */}
                                        <div className='hidden lg:flex lg:items-center'>
                                            <a href='#'>
                                                <span className='sr-only'>Your Company</span>
                                                <img
                                                    className='h-8 w-auto'
                                                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                                                    alt=''
                                                />
                                            </a>
                                        </div>

                                        <div className='hidden h-full lg:flex'>
                                            {/* Mega menus */}
                                            <Popover.Group className='ml-8'>
                                                <div className='flex h-full justify-center space-x-8'>
                                                    {navigation.categories.map((category, categoryIdx) => (
                                                        <Popover key={category.name} className='flex'>
                                                            {({ open }) => (
                                                                <>
                                                                    <div className='relative flex'>
                                                                        <Popover.Button
                                                                            className={classNames(
                                                                                open
                                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                                            )}>
                                                                            {category.name}
                                                                        </Popover.Button>
                                                                    </div>

                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter='transition ease-out duration-200'
                                                                        enterFrom='opacity-0'
                                                                        enterTo='opacity-100'
                                                                        leave='transition ease-in duration-150'
                                                                        leaveFrom='opacity-100'
                                                                        leaveTo='opacity-0'>
                                                                        <Popover.Panel className='absolute inset-x-0 top-full z-20 text-gray-500 sm:text-sm'>
                                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                            <div
                                                                                className='absolute inset-0 top-1/2 bg-white shadow'
                                                                                aria-hidden='true'
                                                                            />

                                                                            <div className='relative bg-white'>
                                                                                <div className='mx-auto max-w-7xl px-8'>
                                                                                    <div className='grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10'>
                                                                                        <div className='grid grid-cols-2 gap-x-8 gap-y-10'>
                                                                                            <div>
                                                                                                <p
                                                                                                    id={`desktop-featured-heading-${categoryIdx}`}
                                                                                                    className='font-medium text-gray-900'>
                                                                                                    Featured
                                                                                                </p>
                                                                                                <ul
                                                                                                    role='list'
                                                                                                    aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                                                                    className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'>
                                                                                                    {category.featured.map(
                                                                                                        (item) => (
                                                                                                            <li
                                                                                                                key={
                                                                                                                    item.name
                                                                                                                }
                                                                                                                className='flex'>
                                                                                                                <a
                                                                                                                    href={
                                                                                                                        item.href
                                                                                                                    }
                                                                                                                    className='hover:text-gray-800'>
                                                                                                                    {
                                                                                                                        item.name
                                                                                                                    }
                                                                                                                </a>
                                                                                                            </li>
                                                                                                        )
                                                                                                    )}
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div>
                                                                                                <p
                                                                                                    id='desktop-categories-heading'
                                                                                                    className='font-medium text-gray-900'>
                                                                                                    Categories
                                                                                                </p>
                                                                                                <ul
                                                                                                    role='list'
                                                                                                    aria-labelledby='desktop-categories-heading'
                                                                                                    className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'>
                                                                                                    {category.categories.map(
                                                                                                        (item) => (
                                                                                                            <li
                                                                                                                key={
                                                                                                                    item.name
                                                                                                                }
                                                                                                                className='flex'>
                                                                                                                <a
                                                                                                                    href={
                                                                                                                        item.href
                                                                                                                    }
                                                                                                                    className='hover:text-gray-800'>
                                                                                                                    {
                                                                                                                        item.name
                                                                                                                    }
                                                                                                                </a>
                                                                                                            </li>
                                                                                                        )
                                                                                                    )}
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='grid grid-cols-2 gap-x-8 gap-y-10'>
                                                                                            <div>
                                                                                                <p
                                                                                                    id='desktop-collection-heading'
                                                                                                    className='font-medium text-gray-900'>
                                                                                                    Collection
                                                                                                </p>
                                                                                                <ul
                                                                                                    role='list'
                                                                                                    aria-labelledby='desktop-collection-heading'
                                                                                                    className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'>
                                                                                                    {category.collection.map(
                                                                                                        (item) => (
                                                                                                            <li
                                                                                                                key={
                                                                                                                    item.name
                                                                                                                }
                                                                                                                className='flex'>
                                                                                                                <a
                                                                                                                    href={
                                                                                                                        item.href
                                                                                                                    }
                                                                                                                    className='hover:text-gray-800'>
                                                                                                                    {
                                                                                                                        item.name
                                                                                                                    }
                                                                                                                </a>
                                                                                                            </li>
                                                                                                        )
                                                                                                    )}
                                                                                                </ul>
                                                                                            </div>

                                                                                            <div>
                                                                                                <p
                                                                                                    id='desktop-brand-heading'
                                                                                                    className='font-medium text-gray-900'>
                                                                                                    Brands
                                                                                                </p>
                                                                                                <ul
                                                                                                    role='list'
                                                                                                    aria-labelledby='desktop-brand-heading'
                                                                                                    className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'>
                                                                                                    {category.brands.map(
                                                                                                        (item) => (
                                                                                                            <li
                                                                                                                key={
                                                                                                                    item.name
                                                                                                                }
                                                                                                                className='flex'>
                                                                                                                <a
                                                                                                                    href={
                                                                                                                        item.href
                                                                                                                    }
                                                                                                                    className='hover:text-gray-800'>
                                                                                                                    {
                                                                                                                        item.name
                                                                                                                    }
                                                                                                                </a>
                                                                                                            </li>
                                                                                                        )
                                                                                                    )}
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Popover.Panel>
                                                                    </Transition>
                                                                </>
                                                            )}
                                                        </Popover>
                                                    ))}

                                                    {navigation.pages.map((page) => (
                                                        <a
                                                            key={page.name}
                                                            href={page.href}
                                                            className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'>
                                                            {page.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </Popover.Group>
                                        </div>

                                        {/* Mobile menu and search (lg-) */}
                                        <div className='flex flex-1 items-center lg:hidden'>
                                            <button
                                                type='button'
                                                className='-ml-2 rounded-md bg-white p-2 text-gray-400'
                                                onClick={() => setMobileMenuOpen(true)}>
                                                <span className='sr-only'>Open menu</span>
                                                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                                            </button>

                                            {/* Search */}
                                            <a href='#' className='ml-2 p-2 text-gray-400 hover:text-gray-500'>
                                                <span className='sr-only'>Search</span>
                                                <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true' />
                                            </a>
                                        </div>

                                        {/* Logo (lg-) */}
                                        <a href='#' className='lg:hidden'>
                                            <span className='sr-only'>Your Company</span>
                                            <img
                                                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                                                alt=''
                                                className='h-8 w-auto'
                                            />
                                        </a>

                                        <div className='flex flex-1 items-center justify-end'>
                                            <div className='flex items-center lg:ml-8'>
                                                <div className='flex space-x-8'>
                                                    <div className='hidden lg:flex'>
                                                        <a
                                                            href='#'
                                                            className='-m-2 p-2 text-gray-400 hover:text-gray-500'>
                                                            <span className='sr-only'>Search</span>
                                                            <MagnifyingGlassIcon
                                                                className='h-6 w-6'
                                                                aria-hidden='true'
                                                            />
                                                        </a>
                                                    </div>

                                                    <div className='flex'>
                                                        <a
                                                            href='#'
                                                            className='-m-2 p-2 text-gray-400 hover:text-gray-500'>
                                                            <span className='sr-only'>Account</span>
                                                            <UserIcon className='h-6 w-6' aria-hidden='true' />
                                                        </a>
                                                    </div>
                                                </div>

                                                <span
                                                    className='mx-4 h-6 w-px bg-gray-200 lg:mx-6'
                                                    aria-hidden='true'
                                                />

                                                <div className='flow-root'>
                                                    <a href='#' className='group -m-2 flex items-center p-2'>
                                                        <ShoppingCartIcon
                                                            className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                                                            aria-hidden='true'
                                                        />
                                                        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                                                            0
                                                        </span>
                                                        <span className='sr-only'>items in cart, view bag</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            <div>
                <main>{children}</main>

                <footer aria-labelledby='footer-heading' className='border-t border-gray-200 bg-white'>
                    <h2 id='footer-heading' className='sr-only'>
                        Footer
                    </h2>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='py-20'>
                            <div className='grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16'>
                                {/* Image section */}
                                <div className='col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1'>
                                    <img
                                        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                                        alt=''
                                        className='h-8 w-auto'
                                    />
                                </div>

                                {/* Sitemap sections */}
                                <div className='col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2'>
                                    <div className='grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8'>
                                        <div>
                                            <h3 className='text-sm font-medium text-gray-900'>Products</h3>
                                            <ul role='list' className='mt-6 space-y-6'>
                                                {footerNavigation.products.map((item) => (
                                                    <li key={item.name} className='text-sm'>
                                                        <a
                                                            href={item.href}
                                                            className='text-gray-500 hover:text-gray-600'>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className='text-sm font-medium text-gray-900'>Company</h3>
                                            <ul role='list' className='mt-6 space-y-6'>
                                                {footerNavigation.company.map((item) => (
                                                    <li key={item.name} className='text-sm'>
                                                        <a
                                                            href={item.href}
                                                            className='text-gray-500 hover:text-gray-600'>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-medium text-gray-900'>Customer Service</h3>
                                        <ul role='list' className='mt-6 space-y-6'>
                                            {footerNavigation.customerService.map((item) => (
                                                <li key={item.name} className='text-sm'>
                                                    <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Newsletter section */}
                                <div className='mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1'>
                                    <h3 className='text-sm font-medium text-gray-900'>Sign up for our newsletter</h3>
                                    <p className='mt-6 text-sm text-gray-500'>
                                        The latest deals and savings, sent to your inbox weekly.
                                    </p>
                                    <form className='mt-2 flex sm:max-w-md'>
                                        <label htmlFor='email-address' className='sr-only'>
                                            Email address
                                        </label>
                                        <input
                                            id='email-address'
                                            type='text'
                                            autoComplete='email'
                                            required
                                            className='w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
                                        />
                                        <div className='ml-4 flex-shrink-0'>
                                            <button
                                                type='submit'
                                                className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                                Sign up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className='border-t border-gray-100 py-10 text-center'>
                            <p className='text-sm text-gray-500'>&copy; 2021 Your Company, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

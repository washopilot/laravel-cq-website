import './app.css'
import { Link } from '@inertiajs/inertia-react'

const AppProducts = ({ message }: { message: string }) => {
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 divide-y divide-gray-200'>
                <Link href='/products'>
                    <h1>{message}</h1>
                </Link>
            </div>
        </div>
    )
}

export default AppProducts

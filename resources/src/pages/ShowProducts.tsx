import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import './app.css'

const ShowProducts = ({ message }: { message: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 divide-y divide-gray-200'>
                <Link href='/checkout'>
                    <h1>{message}</h1>
                </Link>
            </div>
        </motion.div>
    )
}

export default ShowProducts

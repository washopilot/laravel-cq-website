import { useState, useEffect, useRef } from 'react'

const AnimatedCurrency = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(0)
    const previousValueRef = useRef(0)

    useEffect(() => {
        let startTimestamp: number
        const duration = 200 // duración de la animación en ms

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)

            setDisplayValue(previousValueRef.current + progress * (value - previousValueRef.current))

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
                previousValueRef.current = value
            }
        }

        requestAnimationFrame(step)
    }, [value])

    return <span>${displayValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
}
export default AnimatedCurrency

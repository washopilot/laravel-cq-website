const formatCurrency = (value: string) => {
    const numberValue = parseFloat(value)
    if (isNaN(numberValue)) {
        return 'Invalid price'
    }

    return `$${numberValue.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}

export default formatCurrency

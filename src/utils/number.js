export function rounded(value, precision = 1) {
  if (!value) {
    return null
  }

  return Number(value.toFixed(precision))
}

export function currency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

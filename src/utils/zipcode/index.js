export const sanitizeZipCode = zipCode => {
  if (!zipCode) return zipCode
  const sanitizedZipCode = ('00000' + zipCode).slice(-5)
  return sanitizedZipCode
}

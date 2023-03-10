import {sanitizeZipCode} from '.'

describe('sanitizeZipCode', () => {
  it('should return the zipCode unchanged if it is falsy', () => {
    expect(sanitizeZipCode(null)).toBe(null)
    expect(sanitizeZipCode(undefined)).toBe(undefined)
    expect(sanitizeZipCode('')).toBe('')
    expect(sanitizeZipCode(false)).toBe(false)
    expect(sanitizeZipCode(0)).toBe(0)
  })

  it('should add leading zeros to the zipCode if it is less than 5 digits', () => {
    expect(sanitizeZipCode('123')).toBe('00123')
    expect(sanitizeZipCode('1234')).toBe('01234')
  })

  it('should not modify the zipCode if it is already 5 digits or more', () => {
    expect(sanitizeZipCode('12345')).toBe('12345')
    expect(sanitizeZipCode('123456')).toBe('23456')
  })
})

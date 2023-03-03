import {size, device, isMobileOrTablet} from './index'

describe('size', () => {
  it('should have the correct values for each key', () => {
    expect(size.mobile).toBe(414)
    expect(size.tablet).toBe(720)
    expect(size.laptop).toBe(1280)
    expect(size.desktop).toBe(1440)
  })
})

describe('device', () => {
  it('should have the correct media query string for each key', () => {
    expect(device.mobile).toBe('(max-width: 414px)')
    expect(device.tablet).toBe('(max-width: 720px)')
    expect(device.laptop).toBe('(max-width: 1280px)')
    expect(device.desktop).toBe('(max-width: 1440px)')
  })
})

describe('isMobileOrTablet', () => {
  test('should return true when window width is less than 768px', () => {
    // Arrange
    Object.defineProperty(window, 'innerWidth', {
      value: 767,
      writable: true
    })

    // Act
    const result = isMobileOrTablet()

    // Assert
    expect(result).toBe(true)
  })

  test('should return false when window width is greater than or equal to 768px', () => {
    // Arrange
    Object.defineProperty(window, 'innerWidth', {
      value: 768,
      writable: true
    })

    // Act
    const result = isMobileOrTablet()

    // Assert
    expect(result).toBe(false)
  })

  test('should correctly detect a mobile device', () => {
    // Arrange
    const userAgent =
      'Mozilla/5.0 (Linux; Android 11; SM-G991U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Mobile Safari/537.36'
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      writable: true
    })

    // Act
    const result = isMobileOrTablet()

    // Assert
    expect(result).toBe(true)
  })

  test('should correctly detect a tablet device', () => {
    // Arrange
    const userAgent =
      'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1'
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      writable: true
    })

    // Act
    const result = isMobileOrTablet()

    // Assert
    expect(result).toBe(true)
  })

  test('should correctly detect a desktop device', () => {
    // Arrange
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 Edg/88.0.705.63'
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      writable: true
    })

    // Act
    const result = isMobileOrTablet()

    // Assert
    expect(result).toBe(false)
  })
})

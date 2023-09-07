import {
  buildImageUrl,
  fullIconPath,
  fullImagePath,
  removeDoubleSlashes,
  webpSupport
} from '.'

describe('webpSupport', () => {
  const imgMock = {
    width: null,
    height: null,
    onload: jest.fn(),
    onerror: jest.fn()
  }
  let ImageSpy
  beforeEach(() => {
    ImageSpy = jest.spyOn(window, 'Image').mockImplementation(() => imgMock)
  })

  afterEach(() => {
    ImageSpy.mockRestore()
  })

  it('returns true when the browser supports WebP', async () => {
    const resultPromise = webpSupport()
    imgMock.height = 1
    imgMock.width = 1
    imgMock.onload()

    const result = await resultPromise
    expect(result).toBe(true)
  })

  it('returns false when the browser not supports WebP', async () => {
    const resultPromise = webpSupport()
    imgMock.onerror()

    const result = await resultPromise
    expect(result).toBe(false)
  })
})

describe('fullImagePath', () => {
  it('returns the full URL of an image', () => {
    const filename = 'image.jpg'
    const expectedURL =
      'https://static.cookunity.com/cross/front-lib/images/image.jpg'

    const result = fullImagePath(filename)

    expect(result).toEqual(expectedURL)
  })
})

describe('fullIconPath', () => {
  it('returns the full URL of an icon', () => {
    const filename = 'icon.svg'
    const expectedURL = 'https://statics.cookunity.com/icons/icon.svg'

    const result = fullIconPath(filename)

    expect(result).toEqual(expectedURL)
  })
})

describe('removeDoubleSlashes', () => {
  test('removes multiple slashes but leaves https:// intact', () => {
    const input1 = 'https://cookunity.com//path//to///something'
    const expected1 = 'https://cookunity.com/path/to/something'
    expect(removeDoubleSlashes(input1)).toBe(expected1)

    const input2 = 'https://cookunity.com//another//path///'
    const expected2 = 'https://cookunity.com/another/path/'
    expect(removeDoubleSlashes(input2)).toBe(expected2)

    const input3 = 'https://cookunity.com///'
    const expected3 = 'https://cookunity.com/'
    expect(removeDoubleSlashes(input3)).toBe(expected3)

    const input4 = 'cookunity.com//path'
    const expected4 = 'cookunity.com/path'
    expect(removeDoubleSlashes(input4)).toBe(expected4)
  })
})

describe('buildImageUrl function', () => {
  test('Handles aspect ratio without height', () => {
    const path = 'https://cookunity.com/image/path'
    const config = {
      aspectRatio: '16:9'
    }
    const result = buildImageUrl({path, config})
    expect(result).toBe(
      'https://cookunity.com/image/path?ar=16:9&fit=crop&auto=format'
    )
  })

  test('Handles width and height without aspect ratio', () => {
    const path = 'https://cookunity.com/image/path'
    const width = 400
    const height = 300
    const config = {}
    const result = buildImageUrl({path, width, height, config})
    expect(result).toBe(
      'https://cookunity.com/image/path?w=400&h=300&auto=format'
    )
  })

  test('Handles blur', () => {
    const path = 'https://cookunity.com/image/path'
    const config = {
      blur: true
    }
    const result = buildImageUrl({path, config})
    expect(result).toBe(
      'https://cookunity.com/image/path?blur=true&auto=format'
    )
  })

  test('Handles extras', () => {
    const path = 'https://cookunity.com/image/path'
    const config = {
      extras: 'q=80'
    }
    const result = buildImageUrl({path, config})
    expect(result).toBe('https://cookunity.com/image/path?q=80&auto=format')
  })

  test('Handles no config', () => {
    const path = 'https://cookunity.com/image/path'
    const result = buildImageUrl({path})
    expect(result).toBe('https://cookunity.com/image/path?auto=format')
  })

  test('Handles extras and other params', () => {
    const path = 'https://cookunity.com/image/path'
    const width = 400
    const config = {
      extras: 'q=80',
      blur: true
    }
    const result = buildImageUrl({path, width, config})
    expect(result).toBe(
      'https://cookunity.com/image/path?w=400&blur=true&q=80&auto=format'
    )
  })

  test('Handles removing double slashes', () => {
    const path = 'https://cookunity.com//image//path'
    const result = buildImageUrl({path})
    expect(result).toBe('https://cookunity.com/image/path?auto=format')
  })
})

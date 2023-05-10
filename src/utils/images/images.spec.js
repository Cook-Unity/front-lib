import {fullIconPath, fullImagePath, webpSupport} from '.'

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

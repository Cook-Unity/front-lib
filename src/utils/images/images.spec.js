import {webpSupport} from '.'
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

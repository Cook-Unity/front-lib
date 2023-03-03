import {urlParams} from '.'

describe('urlParams', () => {
  it('should return an object with urlSearchParams and params properties', () => {
    // Set up window.location.search with some sample query parameters
    const search = '?utm_source=google&utm_campaign=testing'
    Object.defineProperty(window, 'location', {
      value: {
        search
      }
    })

    // Call urlParams function
    const result = urlParams()

    // Expect result to have urlSearchParams and params properties
    expect(result).toHaveProperty('urlSearchParams')
    expect(result).toHaveProperty('params')

    // Expect urlSearchParams to be an instance of URLSearchParams
    expect(result.urlSearchParams).toBeInstanceOf(URLSearchParams)

    // Expect params to be an object with the expected keys and values
    expect(result.params).toEqual({
      utm_source: 'google',
      utm_campaign: 'testing'
    })
  })
})

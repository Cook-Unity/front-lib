import {stripHtml} from '.'

describe('stripHtml', () => {
  it('should strip HTML tags from the input string', () => {
    const input = '<p>Cook, <em>Unity</em>!</p>'
    const expectedOutput = 'Cook, Unity!'
    expect(stripHtml(input)).toBe(expectedOutput)
  })

  it('should return an empty string when input is null', () => {
    const input = null
    const expectedOutput = ''
    expect(stripHtml(input)).toBe(expectedOutput)
  })

  it('should return an empty string when input is an empty string', () => {
    const input = ''
    const expectedOutput = ''
    expect(stripHtml(input)).toBe(expectedOutput)
  })

  it('should return the input string when it does not contain any HTML tags', () => {
    const input = 'This is a demo text'
    const expectedOutput = 'This is a demo text'
    expect(stripHtml(input)).toBe(expectedOutput)
  })
})

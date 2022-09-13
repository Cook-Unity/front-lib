import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CollectionBanner from './CollectionBanner'

describe('CollectionBanner Component', () => {
  const title = 'This is a test'
  const image =
    'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

  it('Should show a title when the title prop is used', () => {
    render(<CollectionBanner title={title} />)
    expect(screen.queryByText(title)).toBeInTheDocument()
  })

  it('Should show a NEW tag by default', () => {
    render(<CollectionBanner title={title} />)
    expect(screen.queryByText('NEW')).toBeInTheDocument()
  })

  it('Should show a NEW tag when the isNew prop is true', () => {
    render(<CollectionBanner title={title} isNew />)
    expect(screen.queryByText('NEW')).toBeInTheDocument()
  })

  it('Should not show a NEW tag when the isNew prop is false', () => {
    render(<CollectionBanner title={title} isNew={false} />)
    expect(screen.queryByText('NEW')).not.toBeInTheDocument()
  })

  it('Should show an image when the image prop has a url', () => {
    const comp = render(<CollectionBanner title={title} image={image} />)
    expect(comp.container.querySelector('img').src).toContain(image)
  })

  it('Should not show an image when the image prop is not used', () => {
    const comp = render(<CollectionBanner title={title} />)
    expect(comp.container.querySelector('img')).toBeNull()
  })

  it('Should trigger an onClick event when the component is clicked', () => {
    const onClick = jest.fn()
    render(<CollectionBanner title={title} onClick={onClick} />)
    userEvent.click(screen.queryByText(title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

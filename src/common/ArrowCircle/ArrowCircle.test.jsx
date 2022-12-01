import React from 'react'
import {render} from '@testing-library/react'
import ArrowCircle from './'

describe('ArrowCircle Component', () => {
  it('Should ArrowCircle render', () => {
    const comp = render(<ArrowCircle />)
    const element = comp.container.querySelector('svg')
    expect(element).toBeInTheDocument()
  })
})

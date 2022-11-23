import React from 'react'
import {render} from '@testing-library/react'

import CuiButton from './CuiButton'

describe('CuiButton component', () => {
  it('Check component render with default props', () => {
    const renderResult = render(<CuiButton>Button</CuiButton>)
    expect(renderResult.queryByText('Button')).toBeInTheDocument()
    expect(CuiButton).toBeTruthy()
  })
})

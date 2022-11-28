import React from 'react'
import {render} from '@testing-library/react'

import CuiLink from './CuiLink'

describe('CuiLink component', () => {
  it('Check component render with default props', () => {
    const renderResult = render(<CuiLink>Link</CuiLink>)
    expect(renderResult.queryByText('Link')).toBeInTheDocument()
    expect(CuiLink).toBeTruthy()
  })
})

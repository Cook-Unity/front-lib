import * as React from 'react'
import {render} from '@testing-library/react'

import {PROTEIN, getDietaryValue} from '../../modules/Macronutrients/utils'

import Gauge from './Gauge'

const defaultProps = {
  progress: getDietaryValue(37, PROTEIN),
  unit: 'dv'
}

describe('Gauge component', () => {
  describe('Checking value ', () => {
    it(`Check than ${defaultProps.progress}% is contain in the component`, () => {
      const renderResult = render(<Gauge {...defaultProps} />)

      expect(
        renderResult.queryByText(`${defaultProps.progress}%`)
      ).toBeInTheDocument()
    })
  })
})

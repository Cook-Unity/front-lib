import * as React from 'react'
import {render} from '@testing-library/react'

import defaultPropsMock from './__mock__.json'
import ProductDescription from './ProductDescription'

const defaultProps = {
  mealStory: defaultPropsMock.mealDetail.meal_story
}

describe('ProductDescription component', () => {
  describe('Checking texts', () => {
    it(`Check than ${defaultProps.mealStory} is contain in the component`, () => {
      const renderResult = render(<ProductDescription {...defaultProps} />)

      expect(
        renderResult.queryByText(defaultProps.mealStory)
      ).toBeInTheDocument()
    })
  })
})

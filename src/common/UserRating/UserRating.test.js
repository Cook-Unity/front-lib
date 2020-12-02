import * as React from 'react'
import {render} from '@testing-library/react'

import defaultPropsMock from './__mock__.json'
import UserRating from './UserRating'

const defaultProps = {
  userRating: defaultPropsMock.mealDetail.user_rating
}

describe('UserRating component', () => {
  describe('Checking user rating', () => {
    it(`Check than ${defaultProps.userRating} is contain in the component`, () => {
      const renderResult = render(<UserRating {...defaultProps} />)

      expect(renderResult.getByTestId('user-rating').textContent).toBe(
        defaultProps.userRating.toString()
      )
    })
  })
})

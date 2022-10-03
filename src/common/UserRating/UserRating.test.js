import * as React from 'react'
import {render} from '@testing-library/react'

import defaultPropsMock from './__mock__.json'
import UserRating from './UserRating'

const defaultProps = {
  userRating: defaultPropsMock.mealDetail.userRating
}

describe('UserRating component', () => {
  describe('Checking user rating', () => {
    it(`Check than ${defaultProps.userRating} is contain in the component`, () => {
      const renderResult = render(<UserRating {...defaultProps} />)

      expect(renderResult.getByTestId('user-rating')).toHaveTextContent(
        defaultProps.userRating.toString()
      )
      expect(renderResult.getByText('YOUR RATING')).toBeVisible()
    })
  })

  describe('If youRated flag is sent', () => {
    it(`Check than the component includes the "YOU RATED" text`, () => {
      const renderResult = render(<UserRating {...defaultProps} youRated />)

      expect(renderResult.getByTestId('user-rating')).toHaveTextContent(
        defaultProps.userRating.toString()
      )
      expect(renderResult.getByText('YOU RATED')).toBeVisible()
    })
  })
})

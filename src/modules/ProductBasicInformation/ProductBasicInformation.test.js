import * as React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import defaultPropsMock from './__mock__.json'

import ProductBasicInformation from './index'

import {
  parseStartToFloat,
  showTextCountedReviews
} from '../../components/RatingMeal/RatingMeal'

const defaultProps = {
  productData: {
    ...defaultPropsMock.meal,
    chefId: +defaultPropsMock.meal
  },
  isOrdering: true,
  onClickReviewCount: jest.fn()
}

describe('ProductBasicInformation component', () => {
  describe('Checking Product title with correct text', () => {
    it(`Check than ${defaultProps.productData.name} is contain in the component`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)

      expect(
        renderResult.queryByText(defaultProps.productData.name)
      ).toBeInTheDocument()
    })

    it(`Check than ${defaultProps.productData.stars} stars is contain in the component`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)

      const parsedStars = parseStartToFloat(defaultProps.productData.stars)

      expect(renderResult.queryByText(parsedStars)).toBeInTheDocument()
    })

    it(`Check than ${defaultProps.productData.reviews_count} review counts is contain in the component`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)

      const reviewCountText = showTextCountedReviews(
        defaultProps.productData.reviews_count
      )

      expect(renderResult.queryByText(reviewCountText)).toBeInTheDocument()
    })
  })

  describe('Checking ProductBasicInformation click actions', () => {
    it(`Check than ${defaultProps.productData.reviews_count} review counts is clickable`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)
      const reviewCountText = showTextCountedReviews(
        defaultProps.productData.reviews_count
      )
      const optionComponent = renderResult.queryByText(reviewCountText)

      userEvent.click(optionComponent)

      expect(defaultProps.onClickReviewCount).toHaveBeenCalled()
    })
  })
})

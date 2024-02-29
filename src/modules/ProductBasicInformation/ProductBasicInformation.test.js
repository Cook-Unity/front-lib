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
  product: {
    ...defaultPropsMock,
    chefId: +defaultPropsMock.chef?.id
  },
  isOrdering: true,
  onClickReviewCount: jest.fn()
}

describe('ProductBasicInformation component', () => {
  describe('Checking Product title with correct text', () => {
    it(`Check than ${defaultProps.product.name} is contain in the component`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)

      expect(
        renderResult.queryByText(defaultProps.product.name)
      ).toBeInTheDocument()
    })

    it(`Check than ${defaultProps.product.stars} stars is contain in the component`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)

      const parsedStars = parseStartToFloat(defaultProps.product.stars)

      expect(renderResult.queryByText(parsedStars)).toBeInTheDocument()
    })

    it(`Check than ${defaultProps.product.reviewsCount} review counts is contain in the component`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)

      const reviewCountText = showTextCountedReviews(
        defaultProps.product.reviewsCount
      )

      expect(renderResult.queryByText(reviewCountText)).toBeInTheDocument()
    })
  })

  describe('Checking ProductBasicInformation click actions', () => {
    it(`Check than ${defaultProps.product.reviews_count} review counts is clickable`, () => {
      const renderResult = render(<ProductBasicInformation {...defaultProps} />)
      const reviewCountText = showTextCountedReviews(
        defaultProps.product.reviewsCount
      )
      const optionComponent = renderResult.queryByText(reviewCountText)

      userEvent.click(optionComponent)

      expect(defaultProps.onClickReviewCount).toHaveBeenCalled()
    })
  })
})

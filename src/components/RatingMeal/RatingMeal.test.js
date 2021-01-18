import * as React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import RatingMeal from './index'
import {parseStartToFloat, showTextCountedReviews} from './RatingMeal'
import mockData from './__mock__.json'

const defaultProps = {
  stars: mockData.stars,
  userRating: mockData.userRating,
  reviewsCount: mockData.reviewsCount,
  onClickReviewCount: jest.fn()
}

describe('RatingMeal component', () => {
  describe('Checking RatingMeal values', () => {
    it(`Check than ${defaultProps.stars} stars is contain in the component`, () => {
      const renderResult = render(<RatingMeal {...defaultProps} />)

      const parsedStars = parseStartToFloat(defaultProps.stars)

      expect(renderResult.queryByText(parsedStars)).toBeInTheDocument()
    })

    it(`Check than ${defaultProps.reviewsCount} review counts is contain in the component`, () => {
      const renderResult = render(<RatingMeal {...defaultProps} />)

      const reviewCountText = showTextCountedReviews(defaultProps.reviewsCount)

      expect(renderResult.queryByText(reviewCountText)).toBeInTheDocument()
    })
  })

  describe('Checking RatingMeal click actions', () => {
    it(`Check than ${defaultProps.reviewsCount} review counts is clickable`, () => {
      const renderResult = render(<RatingMeal {...defaultProps} />)
      const reviewCountText = showTextCountedReviews(defaultProps.reviewsCount)
      const optionComponent = renderResult.queryByText(reviewCountText)

      userEvent.click(optionComponent)

      expect(defaultProps.onClickReviewCount).toHaveBeenCalled()
    })
  })
})

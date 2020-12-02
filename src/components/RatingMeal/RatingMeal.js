import React from 'react'
import PropTypes from 'prop-types'
import StarReviewComponent from '../../common/StarReviewComponent'
import UserRating from '../../common/UserRating'

import styles from './RatingMeal.module.scss'

export const parseStartToFloat = stars => parseFloat(stars || 0).toFixed(1)

export const showTextCountedReviews = reviewsCount =>
  `${reviewsCount || 0} reviews`

const RatingMeal = ({stars, reviewsCount, userRating, onClickReviewCount}) => {
  return (
    <div className={styles.ratingMeal}>
      <div className={styles.ratings}>
        <span data-testid="stars" className={styles.average}>
          {parseStartToFloat(stars)}
        </span>
        <div className={styles.stars}>
          <StarReviewComponent
            name="rate"
            starCount={5}
            value={+stars || 0}
            onStarClick={() => {}}
            editing={false}
          />
        </div>

        {!!userRating && <UserRating userRating={userRating} />}
      </div>

      <p
        data-testid="count"
        className={
          onClickReviewCount ? styles.reviewsCountClick : styles.reviewsCount
        }
        onClick={() => {
          if (onClickReviewCount) onClickReviewCount()
        }}
      >
        {showTextCountedReviews(reviewsCount)}
      </p>
    </div>
  )
}

RatingMeal.propTypes = {
  stars: PropTypes.number,
  reviewsCount: PropTypes.number,
  userRating: PropTypes.number,
  onClickReviewCount: PropTypes.func
}

RatingMeal.defaultProps = {
  stars: 0,
  reviewsCount: 0,
  userRating: 0,
  onClickReviewCount: null
}

export default RatingMeal

import React from 'react'
import StarReviewComponent from '../../common/StarReviewComponent'
import UserRating from '../../common/UserRating'

import styles from './RatingMeal.module.scss'

export const parseStartToFloat = stars => parseFloat(stars || 0).toFixed(1)

const RatingMeal = ({stars, reviewsCount, userRating}) => {
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

      <p data-testid="count" className={styles.reviewsCount} onClick={() => {}}>
        {reviewsCount || 0} reviews{' '}
      </p>
    </div>
  )
}
export default RatingMeal

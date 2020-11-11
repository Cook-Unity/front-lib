import React from 'react'
import moment from 'moment'
import StarReviewComponent from '../../../../common/StarReviewComponent'

import styles from './ReviewsList.module.scss'

const ReviewsList = ({
  reviews,
  onLoadMore,
  loadMoreLabel = 'View all reviews',
  max
}) => {
  return (
    <section className={styles.productReviews}>
      {reviews.slice(0, max).map(review => (
        <div className={styles.review} key={review.review_id}>
          <div className={styles.info}>
            <div className={styles.stars}>
              <StarReviewComponent
                name="rate"
                starCount={5}
                value={review.stars}
                onStarClick={() => {}}
              />
            </div>
            <p className={styles.detail}>{review.detail}</p>
            <p className={styles.signature}>
              {review.customer_name ? review.customer_name : review.nickname} ·{' '}
              {moment(review.created_at, 'YYYY-MM-DD hh:m:s').format(
                'MM/DD/YY'
              )}
            </p>
          </div>
        </div>
      ))}

      {reviews && reviews.length > max && (
        <p className={styles.viewAll} onClick={onLoadMore}>
          {loadMoreLabel}
        </p>
      )}
    </section>
  )
}

export default ReviewsList

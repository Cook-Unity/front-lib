import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import StarReview from '../../../../common/StarReview'
import MealImg from '../../../../common/MealImage'

import styles from './ReviewsList.module.scss'

const SHOW = 5

const ReviewsList = ({reviews, onLoadMore, max, loadMoreLabel}) => {
  return (
    <section className={styles.productReviews}>
      {reviews.slice(0, max).map((review, index) => (
        <div className={styles.review} key={`reviewId-${index}`}>
          <div className={styles.info}>
            <div className={styles.stars}>
              <StarReview name="rate" starCount={5} value={review.stars} />
            </div>
            {review.product_image && (
              <div className={styles.dish}>
                <MealImg imageUrl={review.product_image} withoutText />
                <p>{review.product_name}</p>
              </div>
            )}
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

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadMore: PropTypes.func,
  max: PropTypes.number,
  loadMoreLabel: PropTypes.string
}

ReviewsList.defaultProps = {
  reviews: [],
  onLoadMore: () => {},
  max: SHOW,
  loadMoreLabel: 'View all reviews'
}
export default ReviewsList

import React from 'react'
import PropTypes from 'prop-types'
import StarReview from '../../../../common/StarReview'
import MealImg from '../../../../common/MealImage'

import styles from './ReviewsList.module.scss'

const SHOW = 5

const ReviewsList = ({reviews, onLoadMore, max, loadMoreLabel}) => {
  const formatTime = value => {
    const date = value.replace(/ /g, 'T')

    return new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }).format(new Date(date))
  }
  return (
    <section className={styles.productReviews}>
      {reviews.slice(0, max).map((review, index) => {
        const reviewFormatted = {
          stars: review.stars,
          productImage: review.product_image,
          productName: review.product_name,
          detail: review.detail || review.feedback,
          customerName: review.customer_name || review.customerFirstName,
          nickname:
            review.nickname ||
            review.customerFirstName + review.customerLastName,
          createdAt: review.created_at || review.createdAt
        }

        return (
          <div className={styles.review} key={`reviewId-${index}`}>
            <div className={styles.info}>
              <div className={styles.stars}>
                <StarReview
                  name="rate"
                  starCount={5}
                  value={reviewFormatted.stars}
                />
              </div>
              {reviewFormatted.productImage && (
                <div className={styles.dish}>
                  <MealImg
                    imageUrl={reviewFormatted.productImage}
                    withoutText
                  />
                  <p>{reviewFormatted.productName}</p>
                </div>
              )}
              <p className={styles.detail}>{reviewFormatted.detail}</p>
              <p className={styles.signature}>
                {reviewFormatted.customerName
                  ? reviewFormatted.customerName
                  : reviewFormatted.nickname}{' '}
                · {formatTime(reviewFormatted.createdAt)}
              </p>
            </div>
          </div>
        )
      })}

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

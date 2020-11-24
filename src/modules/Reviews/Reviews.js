import React, {Fragment} from 'react'
import {sortReviews, formatReviews} from './utils'
import ReviewsModal from './components/ReviewsModal'
import ReviewsList from './components/ReviewsList'
import ReviewsSummary from './components/ReviewsSummary'

import styles from './Reviews.module.scss'

const Reviews = props => {
  const {
    product,
    reviews,
    quantity,
    isChef,
    showReviewsModal,
    toggleReviewsModal
  } = props

  if (!reviews || !product) return null

  const _reviews = sortReviews(formatReviews(reviews))

  return (
    <Fragment>
      <ReviewsModal
        product={product}
        quantity={quantity}
        reviews={_reviews}
        isOpen={showReviewsModal}
        onRequestClose={toggleReviewsModal}
      />

      <div className={styles.productReviews} id="product-reviews-container">
        <h2>Customer Reviews</h2>

        {_reviews.length ? (
          <Fragment>
            <ReviewsSummary
              quantity={quantity}
              product={product}
              toggleReviewsModal={toggleReviewsModal}
            />

            <ReviewsList
              reviews={_reviews}
              max={4}
              onLoadMore={toggleReviewsModal}
            />
          </Fragment>
        ) : isChef ? (
          <p className={styles.noReviews}>No reviews</p>
        ) : (
          <p className={styles.noReviews}>
            Be the first to review the {product.name}. Chefs read each review!
          </p>
        )}
      </div>
    </Fragment>
  )
}

export default Reviews

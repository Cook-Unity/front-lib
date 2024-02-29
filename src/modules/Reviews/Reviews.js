import React, {Fragment} from 'react'
import {sortReviews, formatReviews} from './utils'
import ReviewsModal from './components/ReviewsModal'
import ReviewsList from './components/ReviewsList'
import ReviewsSummary from './components/ReviewsSummary'

import styles from './Reviews.module.scss'

const PREVIEW_MAX = 4

const Reviews = props => {
  const {
    product,
    reviews,
    quantity,
    isChef,
    showReviewsModal,
    toggleReviewsModal,
    reviewModalContainerId = 'reviews-container'
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
        reviewModalContainerId={reviewModalContainerId}
      />

      <div className={styles.productReviews} id="reviews-container">
        <h2>{isChef ? 'Meal Reviews' : 'Customer Reviews'}</h2>

        {_reviews.length ? (
          <Fragment>
            <ReviewsSummary
              quantity={quantity}
              product={product}
              toggleReviewsModal={toggleReviewsModal}
            />

            <ReviewsList
              product={product}
              reviews={_reviews}
              max={PREVIEW_MAX}
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

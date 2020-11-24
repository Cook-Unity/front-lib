import React from 'react'
import StarReviewComponent from '../../../../common/StarReviewComponent'

import styles from './ReviewsSummary.module.scss'

const ReviewsSummary = ({product, quantity}) => {
  return (
    <div className={styles.revieCountContainer}>
      <p>{parseFloat(product.stars || 0).toFixed(1)}</p>
      <div className={styles.columnContainer}>
        <div className={styles.stars}>
          <StarReviewComponent
            name="rate"
            starCount={5}
            value={product.stars || 0}
            onStarClick={() => {}}
            editing={false}
          />
        </div>
        <p className={styles.totalReviews}>Based on {quantity} reviews</p>
      </div>
    </div>
  )
}

export default ReviewsSummary

import React from 'react';
import StarReviewComponent from '../../common/StarReviewComponent'
import UserRating from '../../common/UserRating'

import styles from './RatingMeal.module.scss';


const RatingMeal = ({stars, mealDetail, reviews_count }) => {
  return (
  <div className={styles.ratingMeal}>
    <div className={styles.ratings}>
      <span data-testid="stars" className={styles.average}>
        {parseFloat(+stars || 0).toFixed(1)}
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
      
      {!!mealDetail.user_rating && (
        <UserRating mealDetail={mealDetail} />
        )}
      </div>

        <p
          data-testid="count"
          className={styles.reviewsCount}
          onClick={() => {}}>
          {reviews_count || 0} reviews{' '}
        </p>
  </div>
  )
};
export default RatingMeal;

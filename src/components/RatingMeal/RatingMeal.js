import React from 'react';
import StarReviewComponent from '../../common/StarReviewComponent'
import UserRating from '../../common/UserRating'

import styles from './RatingMeal.module.scss';


const RatingMeal = ({mealDetail}) => {
  return (
  <div className={styles.ratingMeal}>
    <div className={styles.ratings}>
      <span className={styles.average}>
        {parseFloat(+mealDetail.stars || 0).toFixed(1)}
      </span>
      <div className={styles.stars}>
        <StarReviewComponent
          name="rate"
          starCount={5}
          value={+mealDetail.stars || 0}
          onStarClick={() => {}}
          editing={false}
        />
      </div>
      
      {!!mealDetail.user_rating && (
        <UserRating mealDetail={mealDetail} />
        )}
      </div>

        <p
          className={styles.reviewsCount}
          onClick={() => {}}>
          {mealDetail.reviews_count || 0} reviews{' '}
        </p>
  </div>
  )
};

export default RatingMeal;

import React from 'react';
import BlackStar from '../../assets/black-star.png'

import styles from './UserRating.module.scss';

const UserRating = ({mealDetail}) => {
  const user_rating = mealDetail.user_rating
  return (
    <span className={styles.userRating}>
      <img src={BlackStar} alt="star" />
      <span>{parseFloat(+user_rating || 0).toFixed(0)}</span>
      <span className={styles.separator}>|</span>
      <span>YOUR RATING</span>
    </span>
  )
};

export default UserRating;

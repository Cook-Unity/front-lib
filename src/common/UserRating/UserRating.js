import React from 'react';
import PropTypes from 'prop-types';

import BlackStar from '../../assets/black-star.png'
import styles from './UserRating.module.scss';

const UserRating = ({user_rating}) => {
  return (
    <span className={styles.userRating}>
      <img src={BlackStar} alt="star" />
      <span>{parseFloat(+user_rating || 0).toFixed(0)}</span>
      <span className={styles.separator}>|</span>
      <span>YOUR RATING</span>
    </span>
  )
};


UserRating.propTypes = {
  user_rating: PropTypes.number.isRequired,
 };
 
 UserRating.defaultProps = {
   user_rating: ''
 };

export default UserRating;

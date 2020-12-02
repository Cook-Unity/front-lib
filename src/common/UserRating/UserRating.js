import React from 'react'
import PropTypes from 'prop-types'

import images from '../../assets/images'
import styles from './UserRating.module.scss'

const UserRating = ({userRating}) => {
  return (
    <span className={styles.userRating}>
      <img src={images.blackStarImage} alt="star" />
      <span data-testid="user-rating">
        {parseFloat(+userRating || 0).toFixed(0)}
      </span>
      <span className={styles.separator}>|</span>
      <span>YOUR RATING</span>
    </span>
  )
}

UserRating.propTypes = {
  user_rating: PropTypes.string
}

UserRating.defaultProps = {
  user_rating: ''
}

export default UserRating

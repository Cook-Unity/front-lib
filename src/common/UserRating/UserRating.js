import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import images from '../../assets/images'
import styles from './UserRating.module.scss'

const UserRating = ({userRating, text, alternativeText, youRated}) => {
  return (
    <span
      data-testid="rating"
      className={classnames(styles.userRating, {
        [styles.userRatingMinimal]: youRated
      })}
    >
      <img src={images.blackStarImage} alt="star" />
      <span data-testid="user-rating" className={styles.rating}>
        {parseFloat(+userRating).toFixed(0)}
      </span>
      <span className={styles.separator} hidden={youRated}>
        |
      </span>
      <span className={styles.text}>{youRated ? alternativeText : text}</span>
    </span>
  )
}

UserRating.propTypes = {
  userRating: PropTypes.number,
  text: PropTypes.string,
  alternativeText: PropTypes.string,
  youRated: PropTypes.boolean
}

UserRating.defaultProps = {
  userRating: 0,
  text: 'YOUR RATING',
  alternativeText: 'YOU RATED',
  youRated: false
}

export default UserRating

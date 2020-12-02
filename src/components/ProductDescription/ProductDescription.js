import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductDescription.module.scss'

const ProductDescription = ({mealStory}) => {
  return (
    <div className={styles.productStory}>
      <p className={styles.quote_mark}>“</p>
      <p className={styles.story}>{mealStory}</p>
    </div>
  )
}

ProductDescription.propTypes = {
  meal_story: PropTypes.string.isRequired
}

ProductDescription.defaultProps = {
  meal_story: ''
}

export default ProductDescription

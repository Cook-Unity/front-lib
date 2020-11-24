import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductDescription.module.scss'

const ProductDescription = ({meal_story}) => {
  return (
    <div className={styles.productStory}>
      <p className="quote_mark">“</p>
      <p className="story">{meal_story}</p>
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

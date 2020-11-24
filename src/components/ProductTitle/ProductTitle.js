import React from 'react'
import PropTypes from 'prop-types'

import styles from './ProductTitle.module.scss'

const ProductTitle = ({name}) => {
  return <div className={styles.productTitle}>{name}</div>
}

ProductTitle.propTypes = {
  name: PropTypes.string.isRequired
}

ProductTitle.defaultProps = {
  name: ''
}

export default ProductTitle

import React from 'react'
import PropTypes from 'prop-types'

import styles from './Specifications.module.scss'

export const replaceLessThanText = label =>
  label && label.replace('Less Than', '<')

const Specifications = ({specificationsDetails}) => {
  return (
    specificationsDetails && (
      <div className={styles.specificationDetailsContainer}>
        {specificationsDetails.map((detail, i) => {
          return (
            <div className={styles.specificationDetail} key={`sDetail-${i}`}>
              <div className={styles.imageContainer}>
                <img alt={detail.label} src={detail.image} />
              </div>
              <span>{replaceLessThanText(detail.label)}</span>
            </div>
          )
        })}
      </div>
    )
  )
}

Specifications.propTypes = {
  specificationsDetails: PropTypes.array
}

Specifications.defaultProps = {
  specificationsDetails: []
}

export default Specifications

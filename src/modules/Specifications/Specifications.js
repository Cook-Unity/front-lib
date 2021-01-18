import React from 'react'
import PropTypes from 'prop-types'

import styles from './Specifications.module.scss'

export const replaceLessThanText = label =>
  label && label.replace('Less Than', '<')

const Specifications = ({specificationsDetail}) => {
  return (
    specificationsDetail && (
      <div className={styles.specificationDetailsContainer}>
        {specificationsDetail.map((detail, i) => {
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
  specificationsDetail: PropTypes.array
}

Specifications.defaultProps = {
  specificationsDetail: []
}

export default Specifications

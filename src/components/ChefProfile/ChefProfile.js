import React from 'react'
import PropTypes from 'prop-types'

import images from '../../assets/images'
import styles from './ChefProfile.module.scss'

const ChefProfile = ({chefId, firstname, lastname, img, onClick}) => {
  return (
    <div className={styles.chefProfile}>
      <img src={img} alt="chef" />
      <div className={styles.chefProfileDataContainer}>
        <p data-testid="chef-name">
          {firstname} {lastname}
        </p>
        {onClick && (
          <a
            onClick={() => {
              if (onClick) {
                onClick(chefId)
              }
            }}
            className={`${!onClick && styles.aWithoutTextDecoration}`}
          >
            {' '}
            View Profile <img src={images.chevronIcon} alt="arrow" />{' '}
          </a>
        )}
      </div>
    </div>
  )
}

ChefProfile.propTypes = {
  chefId: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

ChefProfile.defaultProps = {
  chefId: 0,
  firstname: '',
  lastname: '',
  img: '',
  onClick: null
}

export default ChefProfile

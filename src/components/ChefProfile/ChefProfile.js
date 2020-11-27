import React from 'react'
import PropTypes from 'prop-types'

import styles from './ChefProfile.module.scss'
import Chevron from '../../assets/chevron.png'

const ChefProfile = ({chefId, firstname, lastname, img, onClick}) => {
  return (
    <div className={styles.chefProfile}>
      <img src={img} alt="chef" />
      <div>
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
            className={`${!onClick && 'aWithoutTextDecoration'}`}
          >
            {' '}
            View Profile <img src={Chevron} alt="arrow" />{' '}
          </a>
        )}
      </div>
    </div>
  )
}

ChefProfile.propTypes = {
  chefId: PropTypes.number,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  img: PropTypes.string,
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

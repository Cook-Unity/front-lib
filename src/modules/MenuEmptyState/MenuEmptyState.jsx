import React from 'react'
import PropTypes from 'prop-types'

import CUButton from '../../common/CUButton'
import images from '../../assets/images'
import styles from './MenuEmptyState.module.scss'

const MenuEmptyState = ({
  title,
  subtitle,
  image,
  buttonText,
  handleButtonClick,
  isFavorite,
  isTopRated
}) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.imageEmpty} alt="Image" />
        <img
          src={images.favorites}
          alt="frown"
          className={isFavorite ? `${styles.isFavorite}` : `${styles.hide}`}
        />
      </div>
      <h2 data-testid="title">{title}</h2>
      <h4 data-testid="subtitle">{subtitle}</h4>

      {buttonText && (
        <div className={styles.buttonContainer}>
          <CUButton
            onClick={handleButtonClick}
            label={buttonText}
            size="large"
            data-testid="cu-button"
          >
            {buttonText}
          </CUButton>
        </div>
      )}
    </div>
  )
}

MenuEmptyState.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  buttonText: PropTypes.string,
  handleButtonClick: PropTypes.function,
  isFavorite: PropTypes.bool,
  isTopRated: PropTypes.bool
}

MenuEmptyState.defaultProps = {
  title: 'Nothing here yet...',
  subtitle:
    'After you receive your first order, we will show you here all the meals you’ve tried.',
  image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/c/o/corn-nut-shrimp-jgv.jpeg',
  buttonText: 'View all meals',
  handleButtonClick: () => {},
  isFavorite: false,
  isTopRated: false
}

export default MenuEmptyState

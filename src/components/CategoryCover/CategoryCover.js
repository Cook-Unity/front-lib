import React, {useState} from 'react'
import {bool, string} from 'prop-types'

import {getLoadingContainer} from './utils'

import styles from './CategoryCover.module.scss'
import images from '../../assets/images'

const CategoryCover = ({title, subtitle, coverImagePath, isLoading}) => {
  const [errorImage, setErrorImage] = useState(false)

  if (isLoading) {
    return getLoadingContainer()
  }

  const handleOnErrorImage = () => {
    setErrorImage(true)
  }

  return (
    <div className={styles.category_cover}>
      <div className={styles.category_cover__top}>
        <img
          className={styles.cover_image}
          data-testid="category-image"
          src={`${errorImage ? images.noMealImage : coverImagePath}`}
          onError={handleOnErrorImage}
        />
      </div>

      <div className={styles.category_cover__text}>
        <div className={styles.category_cover__text_title}>{title}</div>
        <div className={styles.category_cover__text_subtitle}>{subtitle}</div>
      </div>
    </div>
  )
}

CategoryCover.propTypes = {
  title: string,
  subtitle: string,
  coverImagePath: string,
  isLoading: bool
}

CategoryCover.defaultProps = {
  title: '',
  subtitle: '',
  coverImagePath: '',
  isLoading: false
}

export default CategoryCover

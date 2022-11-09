import React, {useState} from 'react'
import {bool, string} from 'prop-types'

import {getLoadingContainer} from './utils'

import styles from './CategoryCover.module.scss'
import images from '../../assets/images'

const CategoryCover = ({
  title,
  titleEnd,
  subtitle,
  coverImagePath,
  isLoading,
  textOverlapped
}) => {
  const [errorImage, setErrorImage] = useState(false)

  if (isLoading) {
    return getLoadingContainer()
  }

  const handleOnErrorImage = () => {
    setErrorImage(true)
  }

  if (textOverlapped)
    return (
      <div className={styles.category_cover_overlapped}>
        <div
          className={styles.category_cover_overlapped__img_container}
          style={{
            backgroundImage: `url("${coverImagePath}")`
          }}
        >
          <div className={styles.category_cover_overlapped__text}>
            <div className={styles.category_cover_overlapped__text_title}>
              <span>{title}</span>
            </div>
            <div className={styles.category_cover_overlapped__text_subtitle}>
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    )
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
        <div className={styles.category_cover__text_title}>
          <span>{title}</span>
          <span className={styles.category_cover__text_title_end}>
            {titleEnd}
          </span>
        </div>
        <div className={styles.category_cover__text_subtitle}>{subtitle}</div>
      </div>
    </div>
  )
}

CategoryCover.propTypes = {
  title: string,
  titleEnd: string,
  subtitle: string,
  coverImagePath: string,
  isLoading: bool,
  textOverlapped: bool
}

CategoryCover.defaultProps = {
  title: '',
  titleEnd: '',
  subtitle: '',
  coverImagePath: '',
  isLoading: false,
  textOverlapped: false
}

export default CategoryCover

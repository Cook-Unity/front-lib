import React, {useState, useEffect} from 'react'
import {string, func} from 'prop-types'
import classnames from 'classnames'

import images from '../../assets/images'

import styles from './MealImage.module.scss'

const MealImage = ({
  imageUrl,
  onMealClick,
  classNameImage,
  classNameNoImgContainer,
  withoutText
}) => {
  const [errorImage, setErrorImage] = useState(false)

  useEffect(() => {
    setErrorImage(imageUrl && imageUrl.includes('/no-image'))
  }, [imageUrl])

  const handleOnError = () => {
    setErrorImage(true)
  }

  const image = errorImage ? images.noMealImg : imageUrl

  return errorImage ? (
    <div className={styles['no-img-container']}>
      <img
        src={image}
        className={classNameImage}
        alt="meal"
        onClick={onMealClick}
        onError={handleOnError}
      />
      {errorImage && !withoutText && (
        <p className={classnames(styles['txt-noimage'])}>Image coming soon</p>
      )}
    </div>
  ) : (
    <img
      src={image}
      className={classNameImage}
      alt="meal"
      onClick={onMealClick}
      onError={handleOnError}
    />
  )
}

MealImage.defaultProps = {
  imageUrl: '',
  onMealClick: () => {},
  classNameImage: '',
  withoutText: false
}

MealImage.propTypes = {
  imageUrl: string,
  onMealClick: func,
  classNameImage: string
}

export default MealImage

import React, {useState, useEffect} from 'react'
import {string, func} from 'prop-types'

import images from '../../assets/images'

import './MealImage.css'

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
    <div className={classNameNoImgContainer}>
      <img
        src={image}
        className={classNameImage}
        alt="meal"
        onClick={onMealClick}
        onError={handleOnError}
      />
      {errorImage && !withoutText && (
        <p className="txt-noimage heading-3">Image coming soon</p>
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
  classNameNoImgContainer: 'no-img-container',
  withoutText: false
}

MealImage.propTypes = {
  imageUrl: string,
  onMealClick: func,
  classNameImage: string,
  classNameNoImgContainer: string
}

export default MealImage

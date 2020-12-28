import React, {useState, useEffect} from 'react'
import {string, func} from 'prop-types'

import images from '../../assets/images'

import './MealImage.css'

const MealImage = ({
  mealDetail,
  onMealClick,
  classNameImage,
  classNameNoImgContainer,
  withoutText,
  mealImage
}) => {
  const [errorImage, setErrorImage] = useState(false)

  useEffect(() => {
    setErrorImage(mealImage && mealImage.includes('/no-image'))
  }, [mealImage])

  const handleOnError = () => {
    setErrorImage(true)
  }

  const image = errorImage ? images.noMealImg : mealDetail.imageFullUrl

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
  mealImage: string,
  onMealClick: func,
  classNameImage: string,
  classNameNoImgContainer: string
}

export default MealImage

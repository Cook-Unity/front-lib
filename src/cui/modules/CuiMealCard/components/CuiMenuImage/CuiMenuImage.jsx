import classnames from 'classnames'
import React, {useState, useEffect} from 'react'
import './CuiMenuImage.scss'
import images from '../../../../assets/images/images'

const TEXT_COMING_SOON = 'Image coming soon'

const CuiMenuImage = ({
  className,
  children,
  text,
  secondary_image,
  primary_image,
  primary_image_srcset,
  secondary_image_srcset,
  ...props
}) => {
  const [primaryImage, setPrimaryImage] = useState()
  const [secondaryImage, setSecondaryImage] = useState()
  const [displayImage, setDisplayImage] = useState()
  const [displaySrcSet, setDisplaySrcSet] = useState(primary_image_srcset)
  const [errorImage, setErrorImage] = useState(false)

  const imageComingSoon = /no_selection|no-image|null|undefined/.test(
    primary_image
  )

  useEffect(() => {
    if (imageComingSoon || errorImage) {
      setPrimaryImage(images.noMealImageRebranding)
      setDisplayImage(images.noMealImageRebranding)
    } else {
      setPrimaryImage(primary_image)
      setDisplayImage(primary_image)
    }
    if (secondary_image) setSecondaryImage(secondary_image)
  }, [
    errorImage,
    imageComingSoon,
    primaryImage,
    secondaryImage,
    secondary_image,
    primary_image
  ])

  const handleImageMouseEnter = () => {
    setDisplayImage(secondaryImage)
    setDisplaySrcSet(secondary_image_srcset)
  }

  const handleImageMouseLeave = () => {
    setDisplayImage(primaryImage)
    setDisplaySrcSet(primary_image_srcset)
  }

  const handleOnErrorImage = () => {
    setErrorImage(true)
  }

  return (
    <div className={classnames('cui-menu-image', className)} {...props}>
      {text && <div className="cui-menu-image__text">{text}</div>}
      {!text && (errorImage || imageComingSoon) && (
        <div className="cui-menu-image__text">{TEXT_COMING_SOON}</div>
      )}
      <img
        src={displayImage}
        srcSet={displaySrcSet}
        alt="Meal"
        loading="lazy"
        className={classnames('cui-menu-image__img', {
          'cui-menu-image__img-withText': !!text
        })}
        onMouseEnter={() => secondaryImage && handleImageMouseEnter()}
        onMouseLeave={() => secondaryImage && handleImageMouseLeave()}
        onError={handleOnErrorImage}
      />
    </div>
  )
}

export default CuiMenuImage

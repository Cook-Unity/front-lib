import classNames from 'classnames'
import React, {useEffect, useRef, useState} from 'react'
import './CuiImage.scss'
import {buildImageUrl} from '../../../utils/images'

const CuiImage = ({
  className,
  src,
  basePath,
  relativePath,
  noImageSrc,
  title,
  lazyLoading = 'lazy',
  srcSetSizes = [],
  config = {
    aspectRatio: null,
    fit: null,
    blur: false,
    extras: '',
    height: null,
    width: null
  },
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(null)
  const [errorImage, setErrorImage] = useState(false)
  const imageRef = useRef()

  useEffect(() => {
    if (basePath && relativePath) {
      setImageSrc(
        buildImageUrl({
          config,
          path: basePath + relativePath
        })
      )
    } else {
      setImageSrc(src)
    }

    if (srcSetSizes && srcSetSizes.length > 0) {
      const sizes = []

      srcSetSizes.forEach(srcSize => {
        sizes.push(
          `${buildImageUrl({
            config,
            path: basePath + relativePath,
            width: srcSize.width
          })} ${srcSize.size}`
        )
      })

      if (sizes.length > 0) {
        imageRef.current.srcset = sizes.join(',')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (imageSrc && errorImage === false && noImageSrc) {
      if (noImageSrc.startsWith('/')) {
        setImageSrc(
          buildImageUrl({
            config,
            path: basePath + noImageSrc
          })
        )
      } else {
        setImageSrc(noImageSrc)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorImage])

  useEffect(() => {
    imageRef.current.src = imageSrc
  }, [imageSrc])

  const handleErrorImage = () => {
    setErrorImage(true)
  }

  return (
    <img
      ref={imageRef}
      className={classNames('cui-image', className)}
      src={imageSrc}
      alt={title}
      onError={handleErrorImage}
      loading={lazyLoading}
      {...props}
    />
  )
}

export default CuiImage

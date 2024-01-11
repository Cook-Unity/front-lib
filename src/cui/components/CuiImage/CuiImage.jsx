import classNames from 'classnames'
import React, {useState} from 'react'
import './CuiImage.scss'
import {buildImageUrl} from '../../../utils/images'

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR'
}

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
  onError,
  onLoad,
  loading,
  ...props
}) => {
  const [status, setStatus] = useState(STATUS.LOADING)

  let imageSrc
  let imageErrorSrc
  let imageSrcSet

  if (basePath && relativePath) {
    imageSrc = buildImageUrl({
      config: {
        ...config,
        width: props?.width
      },
      path: basePath + relativePath
    })
  } else {
    imageSrc = src
  }

  if (noImageSrc) {
    if (noImageSrc.startsWith('/')) {
      imageErrorSrc = buildImageUrl({
        config: {
          ...config,
          width: props?.width
        },
        path: basePath + noImageSrc
      })
    } else {
      imageErrorSrc = noImageSrc
    }
  }

  if (srcSetSizes && srcSetSizes.length > 0) {
    const sizes = []

    srcSetSizes.forEach(srcSize => {
      sizes.push(
        `${buildImageUrl({
          config: {
            ...config,
            width: srcSize.width
          },
          path: basePath + relativePath
        })} ${srcSize.size}`
      )
    })

    if (sizes.length > 0) {
      imageSrcSet = sizes.join(',')
    }
  }

  const handleLoad = () => {
    if (status !== STATUS.ERROR) {
      setStatus(STATUS.LOADED)

      if (onLoad) {
        onLoad()
      }
    }
  }

  const handleError = () => {
    setStatus(STATUS.ERROR)

    if (onError) {
      onError({
        src,
        basePath,
        relativePath,
        imageSrc,
        imageErrorSrc
      })
    }
  }

  if (!imageSrc && status !== STATUS.ERROR) {
    handleError()
  }

  return (
    <img
      loading={loading || lazyLoading}
      className={classNames('cui-image', className, {
        'image-loading': status === STATUS.LOADING,
        'image-error': status === STATUS.ERROR,
        'image-loaded': status === STATUS.LOADED
      })}
      src={status === STATUS.ERROR ? imageErrorSrc : imageSrc}
      alt={title}
      onError={handleError}
      onLoad={handleLoad}
      srcSet={imageSrcSet}
      {...props}
    />
  )
}

export default CuiImage

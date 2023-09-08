import classNames from 'classnames'
import React, {useEffect, useRef, useState} from 'react'
import './CuiImage.scss'
import {buildImageUrl} from '../../../utils/images'

const STATUS = {
  IDLE: 'IDLE',
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
  ...props
}) => {
  const [classStatus, setClassStatus] = useState('')
  const [status, setStatus] = useState(STATUS.IDLE)
  const [imageSrc, setImageSrc] = useState(null)
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
    setStatus(STATUS.LOADING)
    setClassStatus('image-loading')
    imageRef.current.src = imageSrc
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLoad = () => {
    if (status === STATUS.IDLE) {
      setStatus(STATUS.LOADED)
      setClassStatus('image-loaded')
    }

    if (onLoad) {
      onLoad()
    }
  }

  const handleError = () => {
    if (status === STATUS.LOADING && noImageSrc) {
      setClassStatus('image-error')
      setStatus(STATUS.ERROR)

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

      imageRef.current.src = imageSrc
    }

    if (onError) {
      onError()
    }
  }

  return (
    <>
      {imageSrc && (
        <img
          ref={imageRef}
          className={classNames('cui-image', className, classStatus)}
          src={imageSrc}
          alt={title}
          onError={handleError}
          onLoad={handleLoad}
          loading={lazyLoading}
          {...props}
        />
      )}
    </>
  )
}

export default CuiImage

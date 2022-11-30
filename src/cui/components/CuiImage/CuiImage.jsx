import classNames from 'classnames'
import React from 'react'
import './CuiImage.scss'

const CuiImage = ({className, src, title, ...props}) => {
  return (
    <img
      className={classNames('cui-image', className)}
      {...props}
      src={src}
      alt={title}
    />
  )
}

export default CuiImage

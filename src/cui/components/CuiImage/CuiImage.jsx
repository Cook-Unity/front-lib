import classNames from 'classnames'
import React from 'react'
import './CuiImage.scss'

const CuiImage = ({className, src, title, ...props}) => {
  return (
    <img
      className={classNames('cui-image', className)}
      src={src}
      alt={title}
      {...props}
    />
  )
}

export default CuiImage

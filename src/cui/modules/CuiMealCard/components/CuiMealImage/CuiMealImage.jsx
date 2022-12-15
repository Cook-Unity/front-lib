import classNames from 'classnames'
import React from 'react'
import './CuiMealImage.scss'

const CuiMealImage = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-meal-image', className)} {...props}>
      {children}
    </div>
  )
}

export default CuiMealImage

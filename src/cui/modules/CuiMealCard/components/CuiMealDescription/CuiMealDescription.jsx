import classNames from 'classnames'
import React from 'react'
import './CuiMealDescription.scss'

const CuiMealDescription = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-meal-description', className)} {...props}>
      {children}
    </div>
  )
}

export default CuiMealDescription

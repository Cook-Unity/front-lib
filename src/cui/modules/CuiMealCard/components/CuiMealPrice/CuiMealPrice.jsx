import classNames from 'classnames'
import React from 'react'

import './CuiMealPrice.scss'

const CuiMealPrice = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-meal-price', className)} {...props}>
      {children}
    </div>
  )
}

export default CuiMealPrice

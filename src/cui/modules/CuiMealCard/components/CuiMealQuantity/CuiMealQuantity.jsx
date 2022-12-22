import classNames from 'classnames'
import React from 'react'

import './CuiMealQuantity.scss'

const CuiMealQuantity = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-meal-quantity', className)} {...props}>
      {children}
    </div>
  )
}

export default CuiMealQuantity

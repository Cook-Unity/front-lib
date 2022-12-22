import classNames from 'classnames'
import React from 'react'

import CuiMealPrice from '../CuiMealPrice/CuiMealPrice'
import CuiMealQuantity from '../CuiMealQuantity/CuiMealQuantity.jsx'
import './CuiMealSummary.scss'

const CuiMealSummary = ({price, quantity, className, ...props}) => {
  return (
    <div className={classNames('cui-meal-summary', className)} {...props}>
      <CuiMealPrice>{price}</CuiMealPrice>
      <CuiMealQuantity>{quantity}</CuiMealQuantity>
    </div>
  )
}

export default CuiMealSummary

import React from 'react'
import './CuiMealPremiumTag.scss'

const CuiMealPremiumTag = ({title, ...props}) => {
  return (
    <div className="cui-meal-premium-tag" {...props}>
      <img
        src="https://static.cookunity.com/cross/front-lib/images/diamond.png"
        alt="premium"
      />
      {title}
    </div>
  )
}

export default CuiMealPremiumTag

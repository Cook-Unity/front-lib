import React from 'react'
import './CuiRegularMealCardTitle.scss'

const CuiRegularMealCardTitle = ({
  title,
  subtitle,
  onClick,
  size = 'medium'
}) => {
  return (
    <div onClick={onClick}>
      <p className={`card-title card-title--${size}`}>{title}</p>
      <p className={`card-subtitle card-subtitle--${size}`}>{subtitle}</p>
    </div>
  )
}

export default CuiRegularMealCardTitle

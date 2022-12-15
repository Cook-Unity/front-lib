import classNames from 'classnames'
import React from 'react'
import CuiCard from '../../components/CuiCard/CuiCard'
import './CuiMealCard.scss'

const CuiMealCard = ({
  className,
  children,
  color = 'dark',
  direction = 'column',
  fabPosition = 'none',
  tagLabel,
  price,
  ...props
}) => (
  <CuiCard
    className={classNames(
      'cui-meal-card',
      `cui-meal-card-${direction}`,
      `cui-color-${color}`,
      className
    )}
    {...props}
  >
    {children}
  </CuiCard>
)

export default CuiMealCard

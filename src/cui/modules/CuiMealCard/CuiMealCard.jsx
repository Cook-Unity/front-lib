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
  selected = false,
  ...props
}) => (
  <CuiCard
    className={classNames(
      'cui-meal-card',
      `cui-meal-card-${direction}`,
      `cui-color-${color}`,
      {'cui-meal-card-selected': selected},
      className
    )}
    {...props}
  >
    {children}
  </CuiCard>
)

export default CuiMealCard

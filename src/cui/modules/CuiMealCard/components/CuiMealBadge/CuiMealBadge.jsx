import classNames from 'classnames'
import React from 'react'
import CuiIcon from '../../../../components/CuiIcon/CuiIcon'
import './CuiMealBadge.scss'

const CuiMealBadge = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-meal-badge', className)} {...props}>
      <span className="cui-color-light">{children}</span>
      <CuiIcon path="https://static.cookunity.com/cross/front-lib/images/meal-tag.svg" />
    </div>
  )
}

export default CuiMealBadge

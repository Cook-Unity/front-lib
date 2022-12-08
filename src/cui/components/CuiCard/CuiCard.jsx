import classNames from 'classnames'
import React from 'react'
import './CuiCard.scss'

const CuiCard = ({
  className,
  children,
  color = 'dark',
  direction = 'column',
  ...props
}) => {
  return (
    <div
      className={classNames(
        'cui-card',
        direction === 'row' && 'cui-card-row',
        `cui-color-${color}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default CuiCard

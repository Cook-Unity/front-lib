import classNames from 'classnames'
import React from 'react'
import './CuiCard.scss'

const CuiCard = ({className, children, color = 'dark', ...props}) => {
  return (
    <div
      className={classNames('cui-card', `cui-color-${color}`, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default CuiCard

import classNames from 'classnames'
import React from 'react'
import './CuiSegment.scss'

const CuiSegment = ({className, children, color = 'dark', ...props}) => {
  return (
    <div
      className={classNames('cui-segment', `cui-color-${color}`, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default CuiSegment

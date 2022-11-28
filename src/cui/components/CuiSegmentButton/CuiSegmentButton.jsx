import classNames from 'classnames'
import React from 'react'
import './CuiSegmentButton.scss'

const CuiSegmentButton = ({className, children, active = false, ...props}) => {
  return (
    <div
      className={classNames(
        'cui-segment-button',
        active && 'cui-segment-button-active',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default CuiSegmentButton

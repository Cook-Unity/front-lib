import classNames from 'classnames'
import React from 'react'
import './CuiFabButton.scss'

const CuiFabButton = ({className, color = 'light', children, ...props}) => {
  return (
    <button
      className={classNames(
        'cui-fab-button',
        `cui-fab-button-${color}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default CuiFabButton

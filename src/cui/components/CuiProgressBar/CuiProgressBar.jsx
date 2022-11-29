import classNames from 'classnames'
import React from 'react'
import './CuiProgressBar.scss'

const CuiProgressBar = ({
  className,
  value,
  steps,
  color = 'primary',
  ...props
}) => {
  return (
    <div
      className={classNames(
        'cui-progress-bar',
        `cui-progress-bar-color-${color}`,
        className
      )}
      {...props}
    >
      {steps.map(item => (
        <div
          className={classNames(
            'cui-progress-bar-item',
            value >= item && 'active'
          )}
          key={item}
        />
      ))}
    </div>
  )
}

export default CuiProgressBar

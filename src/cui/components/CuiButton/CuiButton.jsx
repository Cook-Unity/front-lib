import classNames from 'classnames'
import React from 'react'
import './CuiButton.scss'

const CuiButton = ({
  type = 'button',
  fill = 'solid',
  size = 'medium',
  color = 'primary',
  disabled = false,
  loading = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        'cui-button',
        `cui-button-${color}`,
        `cui-button-${color}-${fill}`,
        `cui-button-${size}`,
        disabled && `cui-button-${color}-disabled`,
        loading && `cui-button-${color}-${fill}-loading`
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default CuiButton

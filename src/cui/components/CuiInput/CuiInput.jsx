import classNames from 'classnames'
import React from 'react'

import './CuiInput.scss'

const CuiInput = ({
  fill = 'solid',
  loading = false,
  size = 'small',
  children,
  className,
  color,
  ...props
}) => {
  return (
    <input
      type="text"
      className={classNames(
        'cui-input',
        `cui-input-${color}`,
        `cui-input-${size}`,
        `cui-input-${color}-${fill}`,
        loading && `cui-input-${color}-${fill}-loading`,
        className
      )}
      {...props}
    />
  )
}

export default CuiInput

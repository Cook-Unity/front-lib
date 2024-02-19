import React from 'react'
import classNames from 'classnames'

import './CuiCheckbox.scss'

const CuiCheckbox = ({
  id,
  name,
  checked,
  value,
  onChange,
  className,
  disabled = false,
  children
}) => {
  return (
    <div
      className={classNames(
        'cui-checkbox',
        {'cui-checkbox-disabled': disabled},
        className
      )}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="cui-checkbox-label">{children}</span>
    </div>
  )
}

export default CuiCheckbox

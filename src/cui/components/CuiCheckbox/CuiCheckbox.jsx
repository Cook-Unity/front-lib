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
  children
}) => {
  return (
    <div className={classNames('cui-checkbox', className)}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="cui-checkbox-label">{children}</span>
    </div>
  )
}

export default CuiCheckbox

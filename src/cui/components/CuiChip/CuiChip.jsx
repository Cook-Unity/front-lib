import classNames from 'classnames'
import React from 'react'

import './CuiChip.scss'

const CuiChip = ({
  disabled = false,
  selected = false,
  onClick = () => {},
  className,
  children,
  props
}) => {
  return (
    <button
      className={classNames(
        'cui-chip',
        disabled && 'cui-chip-disabled',
        selected && 'cui-chip-selected',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default CuiChip

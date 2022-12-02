import classNames from 'classnames'
import React from 'react'
import './CuiChip.scss'

const CuiChip = ({
  disabled = false,
  selected = false,
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
      {...props}
    >
      {children}
    </button>
  )
}

export default CuiChip

import classNames from 'classnames'
import React from 'react'
import './CuiTextHeader.scss'

const CuiTextHeader = ({
  className,
  children,
  position = 'center',
  ...props
}) => {
  return (
    <div
      className={classNames(
        'cui-text-header',
        `cui-text-header-${position}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default CuiTextHeader

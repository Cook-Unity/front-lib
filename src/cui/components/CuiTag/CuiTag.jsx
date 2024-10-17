import classNames from 'classnames'
import React from 'react'
import './CuiTag.scss'

const CuiTag = ({
  type = 'tag',
  fill = 'solid',
  size = 'small',
  color = 'primary',
  weight = 'bold',
  children,
  className,
  ...props
}) => {
  return (
    <div
      type={type}
      className={classNames(
        'cui-tag',
        `cui-tag-${color}`,
        `cui-tag-${color}-${fill}`,
        `cui-tag-${size}`,
        `cui-tag-${weight}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default CuiTag

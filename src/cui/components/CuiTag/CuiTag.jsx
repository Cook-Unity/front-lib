import classNames from 'classnames'
import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiTag.scss'

const CuiTag = ({
  type = 'tag',
  fill = 'solid',
  size = 'small',
  color = 'primary',
  icon = '',
  loading = false,
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
        loading && `cui-tag-${color}-${fill}-loading`,
        className
      )}
      {...props}
    >
      {icon && <CuiIcon name={icon}>Link</CuiIcon>}
      {children && <div>{children}</div>}
    </div>
  )
}

export default CuiTag

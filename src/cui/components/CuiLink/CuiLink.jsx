import classNames from 'classnames'
import React from 'react'
import './CuiLink.scss'

const CuiLink = ({
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
    <a
      className={classNames(
        'cui-link',
        `cui-link-${color}`,
        `cui-link-${color}-${fill}`,
        `cui-link-${size}`,
        disabled && `cui-link-${color}-disabled`,
        loading && `cui-link-${color}-${fill}-loading`
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default CuiLink

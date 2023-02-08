import classNames from 'classnames'
import React from 'react'
import './CuiLink.scss'

const CuiLink = ({
  fill = 'solid',
  size = 'medium',
  color = 'primary',
  showUnderline = false,
  disabled = false,
  loading = false,
  children,
  className,
  ...props
}) => {
  const onClickHandle = event => {
    event.currentTarget.blur()
  }

  return (
    <a
      className={classNames(
        'cui-link',
        `cui-link-${color}`,
        `cui-link-${color}-${fill}`,
        `cui-link-${size}`,
        showUnderline && 'cui-link-underline',
        disabled && `cui-link-${color}-disabled`,
        loading && `cui-link-${color}-${fill}-loading`,
        className
      )}
      onClick={onClickHandle}
      {...props}
    >
      {children}
    </a>
  )
}

export default CuiLink

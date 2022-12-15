import classNames from 'classnames'
import React from 'react'
import './CuiAvatar.scss'

const CuiAvatar = ({className, border, src, title, ...props}) => {
  return (
    <img
      className={classNames('cui-avatar', `cui-avatar-${border}`, className)}
      src={src}
      alt={title}
      {...props}
    />
  )
}

export default CuiAvatar

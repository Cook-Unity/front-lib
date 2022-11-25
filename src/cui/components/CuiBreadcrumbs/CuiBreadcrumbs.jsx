import classNames from 'classnames'
import React from 'react'
import './CuiBreadcrumbs.scss'

const CuiBreadcrumbs = ({className, children, color = 'dark', ...props}) => {
  return (
    <div
      className={classNames('cui-breadcrumbs', `cui-color-${color}`, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default CuiBreadcrumbs

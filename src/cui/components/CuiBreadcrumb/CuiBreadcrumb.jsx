import classNames from 'classnames'
import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiBreadcrumb.scss'

const CuiBreadcrumb = ({
  className,
  children,
  icon = 'chevronRight',
  ...props
}) => {
  return (
    <div className={classNames('cui-breadcrumb', className)} {...props}>
      <span>{children}</span>
      <CuiIcon name={icon} />
    </div>
  )
}

export default CuiBreadcrumb

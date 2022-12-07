import classNames from 'classnames'
import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiBreadcrumb.scss'

const CuiBreadcrumb = ({
  active = false,
  isLast,
  className,
  children,
  icon = 'chevronRight',
  ...props
}) => {
  return (
    <div
      className={classNames(
        'cui-breadcrumb',
        `cui-breadcrumb-${active ? 'active' : 'inactive'}`,
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {!isLast && <CuiIcon name={icon} />}
    </div>
  )
}

export default CuiBreadcrumb

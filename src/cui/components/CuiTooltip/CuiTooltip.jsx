import classNames from 'classnames'
import React from 'react'
import './CuiTooltip.scss'

const CuiTooltip = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-tooltip', className)} {...props}>
      {children}
    </div>
  )
}

export default CuiTooltip

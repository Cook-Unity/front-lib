import classNames from 'classnames'
import React from 'react'
import './CuiCardContent.scss'

const CuiCardContent = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-card-content', className)} {...props}>
      {children}
    </div>
  )
}

export default CuiCardContent

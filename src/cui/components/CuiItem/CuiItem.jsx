import classNames from 'classnames'
import React from 'react'
import './CuiItem.scss'

const CuiItem = ({className, children, ...props}) => {
  return (
    <div className={classNames('cui-item', className)} {...props}>
      {children}
    </div>
  )
}

export default CuiItem

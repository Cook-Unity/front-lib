import classNames from 'classnames'
import React from 'react'
import './CuiAllyButton.scss'

const CuiAllyButton = ({className, ...props}) => {
  return (
    <div className={classNames('cui-ally-button', className)} {...props}>
      AllyButton
    </div>
  )
}

export default CuiAllyButton

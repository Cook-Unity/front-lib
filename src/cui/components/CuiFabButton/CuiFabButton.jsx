import classNames from 'classnames'
import React from 'react'
import './CuiFabButton.scss'

const CuiFabButton = ({className, color = 'light', children, ...props}) => {
  const onClickHandle = event => {
    event.currentTarget.blur()
  }

  return (
    <button
      className={classNames(
        'cui-fab-button',
        `cui-fab-button-${color}`,
        className
      )}
      onClick={onClickHandle}
      {...props}
    >
      {children}
    </button>
  )
}

export default CuiFabButton

import classNames from 'classnames'
import React from 'react'
import './CuiFabButton.scss'

const CuiFabButton = ({
  className,
  color = 'light',
  showBorder = false,
  size = 'medium',
  fixed,
  children,
  ...props
}) => {
  const onClickHandle = event => {
    event.currentTarget.blur()
  }

  return (
    <button
      className={classNames(
        'cui-fab-button',
        `cui-fab-button-${color}`,
        `cui-fab-button-${size}`,
        showBorder && `cui-fab-button-${color}-border`,
        fixed && 'cui-fab-button-fixed',
        className
      )}
      style={{
        bottom: fixed && props.bottom + 'px',
        top: fixed && props.top + 'px',
        right: fixed && props.right + 'px',
        left: fixed && props.left + 'px'
      }}
      onClick={onClickHandle}
      {...props}
    >
      {children}
    </button>
  )
}

export default CuiFabButton

import React, {useState} from 'react'
import classnames from 'classnames'
import './CuiTooltip.scss'

const CuiTooltip = ({
  children,
  tip,
  small,
  startOpened = false,
  right = false,
  top = false
}) => {
  const [isOpen, setIsOpen] = useState(startOpened)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={classnames('cui-tooltip', {
        right,
        top
      })}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      {children}
      <span
        className={classnames('tip', {
          open: isOpen,
          close: !isOpen,
          small
        })}
      >
        {tip}
      </span>
    </div>
  )
}

export default CuiTooltip

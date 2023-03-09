import {useState} from 'react'
import classnames from 'classnames'
import './CuiTooltip.scss'

export const CuiTooltip = ({children, tip}) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <div className="cui-tooltip" onMouseEnter={open} onMouseLeave={close}>
      {children}
      <span
        className={classnames('tip', {
          open: isOpen,
          close: !isOpen
        })}
      >
        {tip}
      </span>
    </div>
  )
}

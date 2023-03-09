import {useState} from 'react'
import classnames from 'classnames'
import './CuiTooltip.scss'

export const CuiTooltip = ({children, tip}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="cui-tooltip" onMouseEnter={toggle} onMouseLeave={toggle}>
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

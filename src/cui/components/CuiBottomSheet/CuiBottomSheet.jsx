import React, {useLayoutEffect, useState} from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiBottomSheet.scss'
import {createPortal} from 'react-dom'
import classnames from 'classnames'

const Header = ({onRequestClose, children, className}) => {
  return (
    <div className={classnames('cui-bottom-sheet__header', className)}>
      <div className="cui-bottom-sheet__header__title">{children}</div>
      <button
        className="cui-bottom-sheet__header__close-button"
        onClick={onRequestClose}
      >
        <CuiIcon
          name="close"
          className="cui-bottom-sheet__header__close-button__close-icon"
          role="icon"
        />
      </button>
    </div>
  )
}

const Body = ({children}) => {
  return <div className="cui-bottom-sheet__sheet__body">{children}</div>
}

// Click outside if required https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
const BottomSheet = ({children, className = ''}) => {
  return (
    <div className={classnames('cui-bottom-sheet', className)}>
      <div className="cui-bottom-sheet__overlay" />
      <div className="cui-bottom-sheet__sheet">{children}</div>
    </div>
  )
}

const CuiBottomSheet = ({isOpen, ...props}) => {
  const [delayedIsOpen, setIsOpen] = useState(isOpen)

  useLayoutEffect(() => {
    let timeout
    if (isOpen) {
      setIsOpen(isOpen)
      timeout = setTimeout(() => {
        document.body.classList.add('cui-bottom-sheet--open')
      }, 0)
    } else {
      document.body.classList.remove('cui-bottom-sheet--open')
      timeout = setTimeout(() => {
        setIsOpen(isOpen)
      }, 500)
    }
    return () => {
      document.body.classList.remove('cui-bottom-sheet--open')
      clearTimeout(timeout)
    }
  }, [isOpen])

  return (
    delayedIsOpen && createPortal(<BottomSheet {...props} />, document.body)
  )
}

CuiBottomSheet.Header = Header
CuiBottomSheet.Body = Body

export default CuiBottomSheet

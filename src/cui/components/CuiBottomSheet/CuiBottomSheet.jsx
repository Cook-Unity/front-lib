import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiBottomSheet.scss'
import classnames from 'classnames'
import ReactModal from 'react-modal'

const Header = ({onRequestClose, children, className = ''}) => {
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

const Body = ({children, className = ''}) => {
  return (
    <div className={classnames('cui-bottom-sheet__sheet__body', className)}>
      {children}
    </div>
  )
}

const CuiBottomSheet = ({isOpen, children, className = ''}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="cui-bottom-sheet__sheet"
      overlayClassName="cui-bottom-sheet__overlay"
      bodyOpenClassName="cui-bottom-sheet--open"
      portalClassName={classnames('cui-bottom-sheet', className)}
      closeTimeoutMS={500}
    >
      {children}
    </ReactModal>
  )
}

CuiBottomSheet.Header = Header
CuiBottomSheet.Body = Body

export default CuiBottomSheet

import React from 'react'
import classnames from 'classnames'

import CuiModal from '../../components/CuiModal/CuiModal'
import CuiButton from '../../components/CuiButton/CuiButton'

import './CuiPopUp.scss'

const CuiPopUp = ({
  isOpen,
  handleClose,
  handleCancel = null,
  handleConfirm,
  modalContainerId = 'root',
  image,
  title,
  description,
  btnConfirmText,
  btnCancelText = null,
  titleClassName,
  overlayClassName,
  className
}) => {
  const customStyles = {
    content: {
      padding: '0px'
    }
  }

  return (
    <CuiModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      modalContainerId={modalContainerId}
      closeIconRight
      style={customStyles}
      mediumSize
      iconClassName="cui-pop-up-icon"
      overlayClassName={overlayClassName}
      className={className}
    >
      <div
        className={classnames(
          'cui-pop-up-modal',
          !image && 'cui-pop-up-modal--no-image'
        )}
      >
        {image && (
          <div
            className="cui-pop-up-image"
            style={{
              backgroundImage: `url("${image}")`
            }}
          />
        )}
        <div
          className={classnames(
            'cui-pop-up-content',
            !image && 'cui-pop-up-content--no-image'
          )}
        >
          <h3 className={classnames('cui-pop-up-title', titleClassName)}>
            {title}
          </h3>
          <div className="cui-pop-up-description">{description}</div>
          <div className="cui-pop-up-action">
            {btnCancelText && (
              <CuiButton fill="outline" onClick={handleCancel}>
                {btnCancelText}
              </CuiButton>
            )}
            <CuiButton onClick={handleConfirm}>{btnConfirmText}</CuiButton>
          </div>
        </div>
      </div>
    </CuiModal>
  )
}

export default CuiPopUp

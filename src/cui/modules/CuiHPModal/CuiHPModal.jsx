import React from 'react'
import classnames from 'classnames'

import CuiModal from '../../components/CuiModal/CuiModal'
import CuiButton from '../../components/CuiButton/CuiButton'

import './CuiHPModal.scss'

const CuiHPModal = ({
  isOpen,
  handleClose,
  handleCancel = null,
  handleConfirm,
  hpModalContainerId = 'root',
  image,
  title,
  description,
  btnConfirmText,
  btnCancelText = null,
  titleClassName
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
      modalContainerId={hpModalContainerId}
      closeIconRight
      style={customStyles}
      mediumSize
      iconClassName="cui-hp-icon"
    >
      <div className="cui-hp-modal">
        {image && (
          <div
            className="cui-hp-image"
            style={{
              backgroundImage: `url("${image}")`
            }}
          />
        )}
        <div className="cui-hp-content">
          <h3 className={classnames('cui-hp-title', titleClassName)}>
            {title}
          </h3>
          <div className="cui-hp-description">{description}</div>
          <div className="cui-hp-action">
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

export default CuiHPModal

import React from 'react'

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
  btnCancelText = null
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
          <h3 className="cui-hp-title">{title}</h3>
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

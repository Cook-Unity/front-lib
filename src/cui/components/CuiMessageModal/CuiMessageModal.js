import React from 'react'
import Modal from '../../../common/Modal'
import CuiButton from '../CuiButton/CuiButton'
import './CuiMessageModal.scss'

const CuiMessageModal = ({
  isOpen,
  title,
  subtitle = null,
  text,
  withCloseIcon,
  buttonText,
  handleButtonClick,
  image,
  modalContainerId = 'root'
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleButtonClick}
      modalContainerId={modalContainerId}
      withCloseIcon={!!withCloseIcon}
      overlayClassName="cui-message-modal"
      className="cui-message-modal-inner"
      mediumSize
    >
      <div className="cui-message-container">
        <h2 data-testid="title">{title}</h2>
        {subtitle && <h3 data-testid="subtitle">{subtitle}</h3>}
        <p data-testid="text">{text}</p>

        <img src={image} alt="Image" />

        {buttonText && (
          <div className="cui-message-container__button">
            <CuiButton
              onClick={handleButtonClick}
              size="large"
              fill="solid"
              color="primary"
              data-testid="cu-button"
            >
              {buttonText}
            </CuiButton>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default CuiMessageModal

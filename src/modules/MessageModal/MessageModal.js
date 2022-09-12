import React from 'react'
import CUButton from '../../common/CUButton'
import Modal from '../../common/Modal'
import styles from './MessageModal.module.scss'

const MessageModal = ({
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
      overlayClassName={styles.messageModal}
      className={styles.messageModalInner}
      mediumSize
    >
      <div className={styles.messageContainer}>
        <h2 data-testid="title">{title}</h2>
        {subtitle && <h3 data-testid="subtitle">{subtitle}</h3>}
        <p data-testid="text">{text}</p>

        <img src={image} alt="Image" />

        {buttonText && (
          <div className={styles.buttonContainer}>
            <CUButton
              onClick={handleButtonClick}
              label={buttonText}
              size="large"
              primary
              data-testid="cu-button"
            >
              {buttonText}
            </CUButton>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default MessageModal

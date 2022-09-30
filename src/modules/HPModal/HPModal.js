import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './HPModal.module.scss'
import Modal from '../../common/Modal'
import Button from '../../common/Buttons'

const HPModal = ({
  isOpen,
  handleClose,
  handleCancel,
  handleConfirm,
  hpModalContainerId,
  image,
  title,
  description,
  btnConfirmText,
  btnCancelText,
  btnSize
}) => {
  const customStyles = {
    content: {
      padding: '0px'
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      modalContainerId={hpModalContainerId}
      closeIconRight
      style={customStyles}
      mediumSize
    >
      <div className={classnames(styles.hp_modal)}>
        {image && (
          <div
            className={classnames(styles.hp_image)}
            style={{
              backgroundImage: `url("${image}")`
            }}
          />
        )}
        <div className={classnames(styles.hp_content)}>
          <h3 className={classnames(styles.hp_title)}>{title}</h3>
          <div className={classnames(styles.hp_description)}>{description}</div>
          <div className={classnames(styles.hp_action)}>
            <Button link onClick={handleCancel}>
              {btnCancelText}
            </Button>
            <Button dark onClick={handleConfirm}>
              {btnConfirmText}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

HPModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  hpModalContainerId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnConfirmText: PropTypes.string.isRequired,
  btnCancelText: PropTypes.string.isRequired,
  btnSize: PropTypes.oneOf(['small', 'medium', 'large']).isRequired
}

export default HPModal

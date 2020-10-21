import React from 'react';
import Modal from 'react-modal'

import Close from '../../assets/xclose.png'

import styles from './Modal.module.scss';

const CUModal = ({ onRequestClose, withCloseIcon, children }) => {

  return (
    <Modal
    className={styles.newModalOverlay}>
    {withCloseIcon && (
      <button
        className={styles.cookunity__new_modal__close}
        onClick={onRequestClose}>
        <img src={Close} alt="close" />
      </button>
    )}
    {children}
  </Modal>
  )
}

export default CUModal


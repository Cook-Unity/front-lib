import React from 'react'
import Modal from 'react-modal'
import classnames from 'classnames'

import images from '../../assets/images'

import styles from './Modal.module.scss'

const getParent = (id = 'root') => document.querySelector(`#${id}`)

const CUModal = props => {
  const {
    overlayClassName,
    className,
    children,
    style = {},
    mediumSize,
    plusSize,
    mediumPlusSize,
    smallSize,
    withCloseIcon = true,
    notification,
    ...rest
  } = props

  const contentStyle = style.content || {}
  const overlayStyle = style.overlay || {}

  return (
    <Modal
      parentSelector={() => getParent(props.modalContainerId)}
      ariaHideApp={false}
      overlayClassName={classnames(styles.overlay, overlayClassName, {
        [styles.plus_size]: plusSize,
        [styles.large_size]: !mediumSize && !plusSize && !smallSize,
        [styles.medium_size]: mediumSize,
        [styles.small_size]: smallSize,
        [styles.notificationOverlay]: notification
      })}
      className={classnames(styles.content, className, {
        [styles.plus_size]: plusSize,
        [styles.large_size]: !mediumSize && !plusSize && !smallSize,
        [styles.medium_size]: mediumSize,
        [styles.small_size]: smallSize,
        [styles.notificationContent]: notification
      })}
      style={{
        content: contentStyle,
        overlay: overlayStyle
      }}
      {...rest}
    >
      {withCloseIcon && (
        <button className={styles.close} onClick={props.onRequestClose}>
          <img src={images.xclose} alt="close" />
        </button>
      )}
      {children}
    </Modal>
  )
}

export default CUModal

import React from 'react'
import Modal from 'react-modal'

import classnames from 'classnames'

import images from '../../assets/images'

import styles from './Modal.module.scss'

// Modal.setAppElement('#root')
const getParent = (id = 'root') => document.querySelector(`#${id}`)

const CUModal = props => {
  const {
    overlayClassName,
    className,
    children,
    fullBackground,
    lightBackground,
    style = {},
    mediumSize,
    plusSize,
    mediumPlusSize,
    smallSize,
    withCloseIcon = true,
    ...rest
  } = props

  const contentStyle = style.content || {}
  const overlayStyle = style.overlay || {}

  return (
    <Modal
      parentSelector={() => getParent(props.modalContainerId)}
      ariaHideApp={false}
      overlayClassName={classnames(
        styles.cookunity__new_modal__overlay,
        overlayClassName,
        {
          medium_size: mediumSize ? styles.medium_size : null,
          large_size: mediumSize ? styles.large_size : null
        }
      )}
      className={classnames(styles.cookunity__new_modal__content, className, {
        [styles.medium_size]: mediumSize ? styles.medium_size : null,
        [styles.large_size]:
          !mediumSize && !plusSize ? styles.large_size : null,
        [styles.plus_size]: !mediumSize && plusSize ? styles.plus_size : null,
        [styles.medium_plus_size]:
          !mediumSize && !plusSize && mediumPlusSize
            ? styles.medium_plus_size
            : null,
        [styles.small_size]:
          !mediumSize && !plusSize && !mediumPlusSize && smallSize
            ? styles.small_size
            : null
      })}
      style={{
        content: contentStyle,
        overlay: overlayStyle
      }}
      {...rest}
    >
      {withCloseIcon && (
        <button
          className={styles.cookunity__new_modal__close}
          onClick={props.onRequestClose}
        >
          <img src={images.xclose} alt="close" />
        </button>
      )}
      {children}
    </Modal>
  )
}

export default CUModal

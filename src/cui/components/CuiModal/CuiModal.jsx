import React from 'react'
import Modal from 'react-modal'
import classnames from 'classnames'

import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiModal.scss'

const getParent = (id = 'root') => document.querySelector(`#${id}`)

const CuiModal = props => {
  const {
    overlayClassName,
    className,
    iconClassName,
    children,
    style = {},
    mediumSize,
    plusSize,
    mediumPlusSize,
    smallSize,
    withCloseIcon = true,
    closeIconRight = false,
    notification,
    ...rest
  } = props

  const contentStyle = style.content || {}
  const overlayStyle = style.overlay || {}

  return (
    <Modal
      parentSelector={() => getParent(props.modalContainerId)}
      ariaHideApp={false}
      overlayClassName={classnames('overlay', overlayClassName, {
        plus_size: plusSize,
        large_size: !mediumSize && !plusSize && !smallSize,
        medium_size: mediumSize,
        small_size: smallSize,
        notificationOverlay: notification
      })}
      className={classnames('content', className, {
        plus_size: plusSize,
        large_size: !mediumSize && !plusSize && !smallSize,
        medium_size: mediumSize,
        small_size: smallSize,
        notificationContent: notification
      })}
      style={{
        content: contentStyle,
        overlay: overlayStyle
      }}
      {...rest}
    >
      {withCloseIcon && (
        <button
          className={classnames('close', {
            close_right: !!closeIconRight
          })}
          onClick={props.onRequestClose}
        >
          <CuiIcon className={iconClassName} name="close" />
        </button>
      )}
      {children}
    </Modal>
  )
}

export default CuiModal

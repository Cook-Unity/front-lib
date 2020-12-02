import React from 'react'
import Modal from 'react-modal'

import classnames from 'classnames'

import images from '../../assets/images'

import './Modal.css'

// Modal.setAppElement('#root')
const getParent = () => document.querySelector('#root')

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
      parentSelector={getParent}
      ariaHideApp={false}
      overlayClassName={classnames(
        'cookunity__new_modal__overlay',
        overlayClassName,
        {
          medium_size: mediumSize,
          large_size: !mediumSize
        }
      )}
      className={classnames('cookunity__new_modal__content', className, {
        medium_size: mediumSize,
        large_size: !mediumSize && !plusSize,
        plus_size: !mediumSize && plusSize,
        medium_plus_size: !mediumSize && !plusSize && mediumPlusSize,
        small_size: !mediumSize && !plusSize && !mediumPlusSize && smallSize
      })}
      style={{
        content: contentStyle,
        overlay: overlayStyle
      }}
      {...rest}
    >
      {withCloseIcon && (
        <button
          className="cookunity__new_modal__close"
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

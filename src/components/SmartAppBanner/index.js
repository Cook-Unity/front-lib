import React, {useState} from 'react'
import {string, func} from 'prop-types'
import images from '../../assets/images'

import styles from './SmartAppBanner.module.scss'

const SmartAppBanner = ({
  icon,
  title,
  subTitle,
  handleOnClick,
  textButton,
  className,
  handleOnClickClose
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const onClickClose = () => {
    setIsOpen(!isOpen)
    handleOnClickClose && handleOnClickClose()
  }

  const onClik = () => {
    setIsOpen(!isOpen)
    handleOnClick && handleOnClick()
  }

  return isOpen ? (
    <div
      className={`${styles.container} ${className}`}
      data-testid="smart-app-banner"
    >
      <img
        onClick={onClickClose}
        src={images.xcloseWhite}
        className={styles.icon_close}
        alt="icon close"
        data-testid="button-close"
      />
      <div className={styles.container_icon_text}>
        <img src={icon || images.logoCu} alt="icon" />
        <div className={styles.container_text}>
          <span className={styles.title}>{title}</span>
          <span className={styles.sub_title}>{subTitle}</span>
        </div>
      </div>
      <button className={styles.btn_action} onClick={onClik}>
        {textButton}
      </button>
    </div>
  ) : null
}

SmartAppBanner.propTypes = {
  icon: string,
  title: string.isRequired,
  subTitle: string,
  handleOnClick: func.isRequired,
  textButton: string.isRequired,
  className: string,
  handleOnClickClose: func
}

SmartAppBanner.defaultProps = {
  icon: null,
  subTitle: null,
  className: '',
  handleOnClickClose: null
}

export default SmartAppBanner

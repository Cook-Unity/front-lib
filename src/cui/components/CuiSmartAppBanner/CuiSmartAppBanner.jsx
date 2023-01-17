import React, {useState} from 'react'
import {string, func} from 'prop-types'
import images from '../../../assets/images'

import './CuiSmartAppBanner.scss'
import CuiButton from '../CuiButton/CuiButton'
import { isMobileOrTabletDevice } from '../../../utils/mediaQueries'

const CuiSmartAppBanner = ({
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
      className={`cui-smart-app-banner cui-container ${className}`}
      data-testid="smart-app-banner"
    >
      <img
        onClick={onClickClose}
        src={images.xcloseWhite}
        className="cui-icon-close"
        alt="icon close"
        data-testid="button-close"
      />
      <div className="cui-container-icon-text">
        <img src={icon || images.cuShortLogo} alt="icon" />
        <div className="cui-container-text">
          <span className="cui-title">{title}</span>
          <span className="cui-subtitle">{subTitle}</span>
        </div>
      </div>
      <CuiButton color="light" fill="clear" size={ isMobileOrTabletDevice() ? 'small' : 'medium' } onClick={onClik}>
        {textButton}
      </CuiButton>
    </div>
  ) : null
}

CuiSmartAppBanner.propTypes = {
  icon: string,
  title: string.isRequired,
  subTitle: string,
  handleOnClick: func.isRequired,
  textButton: string.isRequired,
  className: string,
  handleOnClickClose: func
}

CuiSmartAppBanner.defaultProps = {
  icon: null,
  subTitle: null,
  className: '',
  handleOnClickClose: null
}

export default CuiSmartAppBanner

import classNames from 'classnames'
import React from 'react'
import CuiLogo from '../CuiLogo/CuiLogo'
import './CuiGiftCard.scss'

const CuiGiftCard = ({
  className,
  backgroundImage,
  min = 5,
  max = 500,
  children,
  ...props
}) => {
  return (
    <div className={classNames('cui-gift-card', className)} {...props}>
      <div
        className="inner"
        style={{backgroundImage: backgroundImage && `url(${backgroundImage})`}}
      >
        <div className="brand">
          <CuiLogo />
          {children}
        </div>
        <div className="price-input">
          <span>$</span>
          <input type="number" min={min} max={max} />
        </div>
      </div>
    </div>
  )
}

export default CuiGiftCard

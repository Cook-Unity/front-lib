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
  value,
  onChange,
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
          <input
            type="number"
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            className="cui-gift-card--input"
          />
        </div>
      </div>
    </div>
  )
}

export default CuiGiftCard

import React from 'react'
import classnames from 'classnames'
import CuiLogo from '../CuiLogo/CuiLogo'
import './CuiCategoryCover.scss'

const CuiCategoryCover = ({
  titleFirstLine,
  titleSecondLine,
  subtitle,
  isNew = false,
  firstImage,
  secondImage,
  mobileImage,
  className
}) => {
  return (
    <div className={classnames('cui-category', className)}>
      <div className="cui-category__mobile-image">
        <img src={mobileImage} alt="category cover" />
      </div>
      <div className="cui-category__first-image">
        <img src={firstImage} alt="category cover" />
      </div>
      <div className="cui-category__title">
        <div>
          <div className="cui-category__title-start">{titleFirstLine}</div>
          <div className="cui-category__title-end">{titleSecondLine}</div>
        </div>
        <div className="cui-category__title-description">{subtitle}</div>
        <div>
          {isNew && <div className="cui-category__title-new">New Line</div>}
          <CuiLogo className="cui-category__title-logo" color="light" />
        </div>
      </div>
      <div className="cui-category__second-image">
        <img src={secondImage} alt="category cover" />
      </div>
    </div>
  )
}

export default CuiCategoryCover

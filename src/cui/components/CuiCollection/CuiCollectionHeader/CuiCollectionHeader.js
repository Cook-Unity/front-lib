import React from 'react'
import classnames from 'classnames'
import CuiLogo from '../../CuiLogo/CuiLogo'
import {getFirstAndSecondPhraseTitle} from './utils'

import './CuiCollectionHeader.scss'

const CuiCollectionHeader = ({
  title,
  description,
  image,
  coverImage,
  countMeals,
  // backgroundColor,
  updatedWeekly,
  imgAuthor,
  className
}) => {
  const {firstPhrase, secondPhrase} =
    title && getFirstAndSecondPhraseTitle(title)
  return (
    <div className={classnames('cui-collection-header', className)}>
      {coverImage && (
        <img src={coverImage} className="cui-collection-header__cover-img" />
      )}
      <div
        className={classnames('cui-collection-header__content', {
          withMargin: !coverImage
        })}
      >
        <div className="cui-collection-header__title-mobile">
          {firstPhrase}
          <br />
          {secondPhrase}
        </div>
        {image && (
          <div className="cui-collection-header__img-container">
            <img
              className="cui-collection-header__img"
              src={image}
              alt="collection"
            />

            {updatedWeekly && (
              <div className="cui-collection-header__title-tag">
                Updated Weekly
              </div>
            )}
          </div>
        )}
        <div className="cui-collection-header__title">
          <h1>
            {firstPhrase}
            <br />
            {secondPhrase}
          </h1>
          <p>{description}</p>
        </div>
        <div className="cui-collection-header__cu">
          <span className="cui-collection-header__cu-curated">CURATED BY</span>
          <div className="cui-collection-header__cu-logo">
            {imgAuthor ? (
              <img src={imgAuthor} className="cui-collection-header__cu-logo" />
            ) : (
              <CuiLogo color="light" />
            )}
          </div>
          <span className="cui-collection-header__cu-meals">
            {countMeals} Meals
          </span>
        </div>
      </div>
    </div>
  )
}

export default CuiCollectionHeader

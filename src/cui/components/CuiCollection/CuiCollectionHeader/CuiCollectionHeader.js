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
          {imgAuthor ? (
            <img src={imgAuthor} className="cui-collection-header__cu-logo" />
          ) : (
            <CuiLogo className="cui-collection-header__cu-logo" />
          )}
          <span className="cui-collection-header__cu-meals">
            {countMeals} meals
          </span>
        </div>
      </div>
    </div>
  )
}

export default CuiCollectionHeader

import classnames from 'classnames'
import React, {useEffect, useState} from 'react'
import images from '../../../../assets/images'
import {rounded} from '../../../../utils/number'
import './CuiMealCarrouselCard.scss'

export const formatMealRating = stars => stars && rounded(stars, 1)

const CuiMealCarrouselCard = ({
  onAddTracking,
  onAddItem,
  meal,
  moduleName,
  onRemoveItem,
  onClickTracking,
  onMealClick
}) => {
  const [showActions, setShowActions] = useState(false)
  const [showWarnings, setShowWarnings] = useState(false)

  const ADDONS_CATEGORIES = [6, 11, 13]

  const isAddOn = category => ADDONS_CATEGORIES.includes(category)

  const handleAddItem = () => {
    onAddTracking(meal, meal.quantity, moduleName)
    onAddItem(meal, false)
  }

  const handleRemoveItem = () => {
    if (meal.quantity === 1) {
      setShowActions(false)
    }
    onRemoveItem(meal)
  }

  const handleShowActions = () => {
    if (meal.quantity === 0) {
      onAddItem(meal, false)
      onAddTracking(meal, meal.quantity, moduleName)
    }
    setShowActions(true)
  }

  const handleClickItem = meal => {
    onClickTracking(meal, moduleName)
    onMealClick(meal, false)
  }

  const handleShowWarningMessage = () => {
    setShowWarnings(true)
  }

  useEffect(() => {
    const showWarningTimer = setTimeout(() => {
      setShowWarnings(false)
    }, 2500)
    return () => {
      clearTimeout(showWarningTimer)
    }
  }, [meal.warning, showWarnings])

  useEffect(() => {
    const cartTimer = setTimeout(() => {
      setShowActions(false)
    }, 2500)
    return () => {
      clearTimeout(cartTimer)
    }
  }, [meal.quantity, showActions])

  return (
    <div
      className={classnames('cui-carrousel-card', {
        'cui-carrousel-card-in-cart': meal.quantity > 0
      })}
    >
      <div className="cui-carrousel-card__top">
        <img
          className="cui-carrousel-card__chef"
          src={meal.cheffImageFullPath}
        />
        {meal.warning && (
          <button
            className="cui-carrousel-card__warning"
            onClick={() => handleShowWarningMessage()}
          >
            <img src="https://cu-product-media.s3.amazonaws.com/media/icons/info_white.png" />
          </button>
        )}
        {showWarnings && (
          <div className="cui-carrousel-card__warning-text">
            <span>{meal.warning}</span>
          </div>
        )}
        <img
          className="cui-carrousel-card__image"
          src={meal.imageUrl}
          onClick={() => {
            handleClickItem(meal)
          }}
        />
      </div>

      <div className="cui-carrousel-card__footer">
        <div className="cui-carrousel-card__action-wrapper">
          {meal.stars && (
            <div className="cui-carrousel-card__star-wrapper">
              <img src={images.star} alt="★" />
              <span>{formatMealRating(meal.stars)}</span>
            </div>
          )}
          <div
            className={classnames('cui-carrousel-card__price-wrapper', {
              large: !meal.stars
            })}
          >
            {meal.premium_fee > 0 && (
              <span className="price"> + ${meal.premium_fee}</span>
            )}
            {isAddOn(meal.category_id) && (
              <span className="price"> ${meal.price}</span>
            )}
            {showActions && (
              <div
                className={classnames(
                  'cui-carrousel-card__cart-actions',
                  'swiper-no-swiping'
                )}
              >
                <button
                  className="cui-carrousel-card__cart-actions-remove"
                  onClick={() => handleRemoveItem()}
                >
                  <img src={images.btnBlackMinus} />
                </button>
                <span className="cui-carrousel-card__cart-actions-quantity">
                  {meal.quantity}
                </span>
                <button
                  className="cui-carrousel-card__cart-actions-add"
                  onClick={() => handleAddItem()}
                >
                  <img src={images.btnBlackPlus} />
                </button>
              </div>
            )}
            {!showActions && meal.quantity === 0 && (
              <button
                className={classnames(
                  'cui-carrousel-card__cart-button',
                  'swiper-no-swiping'
                )}
                onClick={() => handleShowActions()}
              >
                <img src="https://static.cookunity.com/cross/front-lib/images/btn-white-plus.png" />
              </button>
            )}
            {!showActions && meal.quantity > 0 && (
              <button
                className={classnames(
                  'cui-carrousel-card__cart-button-quantity',
                  'swiper-no-swiping'
                )}
                onClick={() => handleShowActions()}
              >
                {meal.quantity}
              </button>
            )}
          </div>
        </div>
        <div className="cui-carrousel-card__details">
          <div
            className="cui-carrousel-card__details-title"
            onClick={() => {
              handleClickItem(meal)
            }}
          >
            {meal.name} {meal.short_description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CuiMealCarrouselCard

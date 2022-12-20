import classNames from 'classnames'
import React, {useState, useEffect} from 'react'
import CuiIcon from '../../../../components/CuiIcon/CuiIcon'
import {CONTROLLERS_OPENED_MS} from './constants'
import images from '../../../../../assets/images'
import CuiButton from '../../../../components/CuiButton/CuiButton'
import './CuiMealActions.scss'

const CuiMealActions = ({
  priceText,
  tooltipText,
  quantity = 0,
  add,
  remove,
  isEditable,
  meal,
  index,
  ...props
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [showCartControllers, setShowCartControllers] = useState(false)
  const showAddButton = isEditable && quantity < meal.stock
  const selected = quantity > 0

  const handleAddItem = () => {
    if (!isEditable) return
    setShowCartControllers(true)
    if (showAddButton) add(meal, index)
  }
  const handleRemoveItem = () => {
    if (!isEditable) return
    setShowCartControllers(true)
    remove(meal, index)
  }

  useEffect(() => {
    const cartTimer = setTimeout(() => {
      setShowCartControllers(false)
    }, CONTROLLERS_OPENED_MS)
    return () => {
      clearTimeout(cartTimer)
    }
  }, [quantity, showCartControllers])

  const cartControllers = () => {
    return (
      <CuiButton
        fill="outline"
        color="dark"
        className="cui-meal-actions__button-add"
      >
        <div
          className={classNames(
            'cui-meal-actions__control',
            'cui-meal-actions__control-remove'
          )}
          onClick={() => quantity && handleRemoveItem()}
        >
          <img src={images.btnBlackMinus} alt="-" />
        </div>
        <span className="cui-meal-actions__control-qty">{quantity}</span>
        <div
          className={classNames(
            'cui-meal-actions__control',
            'cui-meal-actions__control-add'
          )}
          onClick={() => showAddButton && handleAddItem()}
        >
          <img src={images.btnBlackPlus} alt="+" />
        </div>
      </CuiButton>
    )
  }

  const cartAddButton = () => {
    return (
      <CuiButton
        fill="outline"
        color="dark"
        className="cui-meal-actions__button-add"
        onClick={() => {
          !selected ? handleAddItem() : setShowCartControllers(true)
        }}
      >
        {priceText}
        {quantity > 0 && (
          <span className="cui-meal-actions__control-qty">{quantity}</span>
        )}
      </CuiButton>
    )
  }

  return (
    <div className="cui-meal-actions" {...props}>
      {showCartControllers ? cartControllers() : cartAddButton()}
      {tooltipText && (
        <div
          className="cui-meal-actions__tooltip"
          onClick={() => setShowTooltip(showTooltip => !showTooltip)}
        >
          <img
            src={images.infoBlack}
            className="cui-meal-actions__tooltip-info"
            alt="info"
          />
          {showTooltip && <div className="content">{tooltipText}</div>}
        </div>
      )}
    </div>
  )
}

export default CuiMealActions

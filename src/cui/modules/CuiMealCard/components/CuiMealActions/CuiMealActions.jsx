import classNames from 'classnames'
import React, {useState, useEffect} from 'react'
import {CONTROLLERS_OPENED_MS} from './constants'
import CuiButton from '../../../../components/CuiButton/CuiButton'
import CuiMealInfoTooltip from '../CuiMealInfoTooltip/CuiMealInfoTooltip'

import './CuiMealActions.scss'

const CuiMealActions = ({
  priceText,
  tooltipText,
  strikethroughPrice,
  quantity = 0,
  add,
  remove,
  isEditable,
  meal,
  index,
  reachedPlanSize = false,
  color = 'dark',
  fill = 'outline',
  disableAllButtons = false,
  ...props
}) => {
  const [showCartControllers, setShowCartControllers] = useState(false)
  const addButtonEnabled =
    isEditable && quantity < meal.stock && !reachedPlanSize
  const removeButtonEnabled = isEditable && quantity > 0
  const selected = quantity > 0

  const handleAddItem = () => {
    if (!addButtonEnabled) return
    setShowCartControllers(true)
    add(meal, index)
  }
  const handleRemoveItem = () => {
    if (!removeButtonEnabled) return
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
        fill={fill}
        color={color}
        className="cui-meal-actions__button-add"
        disabled={disableAllButtons}
      >
        <button
          className={classNames(
            'cui-meal-actions__control',
            `cui-meal-actions__control-${color}`,
            'cui-meal-actions__control-remove',
            {'cui-meal-actions__control-disabled': !removeButtonEnabled}
          )}
          disabled={!removeButtonEnabled}
          onClick={() => handleRemoveItem()}
        >
          <span>-</span>
        </button>
        <span className="cui-meal-actions__control-qty">{quantity}</span>
        <button
          className={classNames(
            'cui-meal-actions__control',
            `cui-meal-actions__control-${color}`,
            'cui-meal-actions__control-add',
            {'cui-meal-actions__control-disabled': !addButtonEnabled}
          )}
          disabled={!addButtonEnabled}
          onClick={() => handleAddItem()}
        >
          <span>+</span>
        </button>
      </CuiButton>
    )
  }

  const cartAddButton = () => {
    return (
      <CuiButton
        fill={fill}
        color={color}
        className="cui-meal-actions__button-add"
        onClick={() => {
          !selected ? handleAddItem() : setShowCartControllers(true)
        }}
        disabled={disableAllButtons}
      >
        {priceText}
        {strikethroughPrice && (
          <span className="cui-meal-actions__button___strikethrough__price__text">
            {strikethroughPrice}
          </span>
        )}
        {quantity > 0 && (
          <span className="cui-meal-actions__control-qty">{quantity}</span>
        )}
      </CuiButton>
    )
  }

  return (
    <div className="cui-meal-actions" {...props}>
      {showCartControllers ? cartControllers() : cartAddButton()}
      {tooltipText && <CuiMealInfoTooltip tooltipText={tooltipText} />}
    </div>
  )
}

export default CuiMealActions

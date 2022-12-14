import React from 'react'
import CuiButton from '../CuiButton/CuiButton'
import Modal from '../../../common/Modal'
import './CuiMealCardsModal.scss'

import MealCard from '../../../components/MealCard/MealCard'
import MealCardExperiment from '../../../components/MealCardExperiment/MealCardExperiment'

const MealCardsModal = ({
  isOpen,
  title,
  subtitle = null,
  meals = [],
  withCloseIcon,
  primaryButtonText = null,
  primaryButtonClick,
  secondaryButtonText = null,
  secondaryButtonClick,
  handleClose,
  onAddItem,
  onRemoveItem,
  onClickMeal,
  mealCardPriceExperimentEnabled = false,
  modalContainerId = 'root'
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      modalContainerId={modalContainerId}
      withCloseIcon={!!withCloseIcon}
      closeIconRight
      overlayClassName="cui-mealCardsModal"
      className="cui-mealCardsModalInner"
      mediumSize
    >
      <div className="cui-mealCardsModal__titles">
        <h3 data-testid="title">{title}</h3>
        {subtitle && <h2 data-testid="subtitle">{subtitle}</h2>}
      </div>
      <div className="cui-mealCardsModal__content">
        <div className="cardsContainerOuter">
          <div className="cardsContainer">
            {meals.map((meal, index) => {
              return mealCardPriceExperimentEnabled ? (
                <MealCardExperiment
                  key={meal.id}
                  index={index}
                  meal={meal}
                  quantity={meal.quantity || 0}
                  onAddItem={onAddItem}
                  onRemoveItem={onRemoveItem}
                  onMealClick={onClickMeal}
                  isExtra
                />
              ) : (
                <MealCard
                  key={meal.id}
                  index={index}
                  meal={meal}
                  quantity={meal.quantity || 0}
                  onAddItem={onAddItem}
                  onRemoveItem={onRemoveItem}
                  onMealClick={onClickMeal}
                  showPrice
                />
              )
            })}
          </div>
        </div>
      </div>

      <div className="cui-mealCardsModal__buttons">
        {!!primaryButtonText && (
          <CuiButton
            onClick={primaryButtonClick}
            label={primaryButtonText}
            fill="solid"
            color="dark"
            size="large"
            data-testid="cu-primary-button"
          >
            {primaryButtonText}
          </CuiButton>
        )}

        {!!secondaryButtonText && (
          <CuiButton
            onClick={secondaryButtonClick}
            label={secondaryButtonText}
            size="large"
            fill="outline"
            color="dark"
            data-testid="cu-secondary-button"
          >
            {secondaryButtonText}
          </CuiButton>
        )}
      </div>
    </Modal>
  )
}

export default MealCardsModal

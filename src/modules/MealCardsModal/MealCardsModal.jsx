import React from 'react'
import CUButton from '../../common/CUButton'
import Modal from '../../common/Modal'
import styles from './MealCardsModal.module.scss'

import MealCard from '../../components/MealCard/MealCard'
import MealCardExperiment from '../../components/MealCardExperiment/MealCardExperiment'

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
      overlayClassName={styles.mealCardsModal}
      className={styles.mealCardsModalInner}
      mediumSize
    >
      <div className={styles.titlesContainer}>
        <h3 data-testid="title">{title}</h3>
        {subtitle && <h2 data-testid="subtitle">{subtitle}</h2>}
      </div>

      <div className={styles.cardsContainerOuter}>
        <div className={styles.cardsContainer}>
          {meals.map(meal => {
            return mealCardPriceExperimentEnabled ? (
              <MealCardExperiment
                key={meal.id}
                meal={meal}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
                onClick={onClickMeal}
              />
            ) : (
              <MealCard
                key={meal.id}
                meal={meal}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
                onClick={onClickMeal}
              />
            )
          })}
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        {!!primaryButtonText && (
          <div className={styles.primaryButton}>
            <CUButton
              onClick={primaryButtonClick}
              label={primaryButtonText}
              size="large"
              primary
              data-testid="cu-primary-button"
            >
              {primaryButtonText}
            </CUButton>
          </div>
        )}

        {!!secondaryButtonText && (
          <CUButton
            onClick={secondaryButtonClick}
            label={secondaryButtonText}
            size="large"
            data-testid="cu-secondary-button"
          >
            {secondaryButtonText}
          </CUButton>
        )}
      </div>
    </Modal>
  )
}

export default MealCardsModal

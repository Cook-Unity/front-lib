import React from 'react'
import CuiButton from '../CuiButton/CuiButton'
// import Modal from '../../../common/Modal'
import CuiModal from '../CuiModal/CuiModal'
import './CuiMealCardsModal.scss'

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
  modalContainerId = 'root',
  children
}) => (
  <CuiModal
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
      <h2 data-testid="title">{title}</h2>
      {subtitle && <h2 data-testid="subtitle">{subtitle}</h2>}
    </div>
    <div className="cui-mealCardsModal__content">
      <div className="cardsContainerOuter">
        <div className="cardsContainer">{children}</div>
      </div>
    </div>

    <div className="cui-mealCardsModal__buttons">
      {!!primaryButtonText && (
        <CuiButton
          onClick={primaryButtonClick}
          label={primaryButtonText}
          fill="solid"
          size="large"
          color="dark"
          data-testid="cu-primary-button"
        >
          {primaryButtonText}
        </CuiButton>
      )}

      {!!secondaryButtonText && (
        <CuiButton
          onClick={secondaryButtonClick}
          label={secondaryButtonText}
          fill="outline"
          size="large"
          color="dark"
          data-testid="cu-secondary-button"
        >
          {secondaryButtonText}
        </CuiButton>
      )}
    </div>
  </CuiModal>
)

export default MealCardsModal

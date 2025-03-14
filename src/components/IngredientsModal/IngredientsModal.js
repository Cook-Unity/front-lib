import React from 'react'
import Modal from '../../common/Modal'
import styles from './IngredientsModal.module.scss'

const IngredientModal = ({
  isOpen,
  selectedIngredient,
  onRequestClose,
  modalContainerId = 'root'
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      modalContainerId={modalContainerId}
    >
      {selectedIngredient ? (
        <div className={styles.productIngredientInfo}>
          <h2>{selectedIngredient.name}</h2>

          <img
            src={selectedIngredient.image}
            alt={selectedIngredient.componentCode}
          />
          <p>{selectedIngredient.description}</p>
        </div>
      ) : null}
    </Modal>
  )
}

export default IngredientModal

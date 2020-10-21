import React from 'react';
import Modal from '../../common/Modal'
import styles from './IngredientsModal.module.scss';

const IngredientModal = ({ isOpen, name, image, component_code, description, onRequestClose }) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div className={styles.productIngredientInfo}>
          <h2>{name}</h2>

          <img
            src={image}
            alt={component_code}
          />
          <p>{description}</p>
        </div>
    </Modal>
  )
}

export default IngredientModal


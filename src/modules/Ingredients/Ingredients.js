import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Ingredients.module.scss';
import IngredientModal from '../../components/IngredientsModal'


const Ingredients = ({ mealDetail, isLoading }) => {

  const [ingredientsModalIsOpen, setIngredientsModalIsOpen] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState(null)

  const toggleIngredientsModal = (selectedIngredient = null) => {
      // trackEvent('View all ingredients', {
      //   action: 'Click in View all ingredients'
      // })
      
      setIngredientsModalIsOpen (!ingredientsModalIsOpen)
      setSelectedIngredient(selectedIngredient)
    }

  return (
    <Fragment>
    <IngredientModal
      isOpen={ingredientsModalIsOpen}
      onRequestClose={() => toggleIngredientsModal()}
      selectedIngredient={selectedIngredient}
    />
    <div
      className={`${styles.ingredients} ${ isLoading ? 'loading' : null}`}>
      <h2>Ingredients</h2>

      <div className={styles.ingredientsContainer}>
        {mealDetail.ingredients.map((ingredient, i) => {
          return (
            <div
              className={`${styles.ingredient} ${isLoading ? 'loading' : null}`}
              key={`${i}-${ingredient.componentCode}-${ingredient.id}`}
              onClick={() => {
                if (!isLoading) {
                  toggleIngredientsModal(ingredient)
                }
              }}>
              <p>
                {ingredient.name
                  ? ingredient.name
                  : ingredient.componentCode
                  ? ingredient.componentCode
                  : ingredient.value}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  </Fragment>
  ) 
};



Ingredients.propTypes = {
 ingredients: PropTypes.array.isRequired,
};

Ingredients.defaultProps = {
  ingredients: ''
};

export default Ingredients


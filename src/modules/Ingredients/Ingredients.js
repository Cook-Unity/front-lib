import React, {Fragment, useState} from 'react';
import styles from './Ingredients.module.scss';
import IngredientModal from '../../components/IngredientsModal'



export default function Ingredients ({ mealDetail, isLoading }) {

  const [ingredientsModalIsOpen, setIngredientsModalIsOpen] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState(null)

 const toggleIngredientsModal = (selectedIngredient = null) => {
    // trackEvent('View all ingredients', {
    //   action: 'Click in View all ingredients'
    // })

    setIngredientsModalIsOpen = !ingredientsModalIsOpen,
    setSelectedIngredient = selectedIngredient
  }

 const ingredients = mealDetail.ingredients || []

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
        {ingredients.map((ingredient, i) => {
          return (
            <div
              className={`${styles.ingredient} ${isLoading ? 'loading' : null}`}
              key={`${i}-${ingredient.componentCode}-${ingredient.id}`}
              onClick={() => {
                if (!isLoading) {
                  this.toggleIngredientsModal(ingredient)
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


import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

import styles from './Ingredients.module.scss'
import IngredientModal from '../../components/IngredientsModal'

export const getIngredientNameValue = ingredient =>
  ingredient.name
    ? ingredient.name
    : ingredient.componentCode
    ? ingredient.componentCode
    : ingredient.value

const Ingredients = ({ingredients, isLoading, withDetails}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState(null)

  const toggleModal = (selectedIngredient = null) => {
    setIsModalOpen(!isModalOpen)
    setSelectedIngredient(selectedIngredient)
  }

  return (
    <Fragment>
      <IngredientModal
        isOpen={isModalOpen}
        onRequestClose={() => toggleModal()}
        selectedIngredient={selectedIngredient}
        modalContainerId="ingredients"
      />
      <div
        id="ingredients"
        className={`${styles.ingredients} ${isLoading ? styles.loading : ''}`}
      >
        <h2>Ingredients</h2>

        <div className={styles.ingredientsContainer}>
          {ingredients.map((ingredient, i) => {
            return (
              <div
                className={`${styles.ingredient}
                  ${withDetails ? styles.withDetails : ''}
                `}
                key={`${i}-${ingredient.componentCode}-${ingredient.id}`}
                onClick={() => {
                  if (!isLoading && withDetails) {
                    toggleModal(ingredient)
                  }
                }}
              >
                <p>{getIngredientNameValue(ingredient)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

Ingredients.propTypes = {
  ingredients: PropTypes.array,
  isLoading: PropTypes.bool,
  withDetails: PropTypes.bool
}

Ingredients.defaultProps = {
  ingredients: [],
  isLoading: false,
  withDetails: true
}

export default Ingredients

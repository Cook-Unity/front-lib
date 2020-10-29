import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Ingredients.module.scss';
import IngredientModal from '../../components/IngredientsModal';
import { IgnorePlugin } from 'webpack';

const Ingredients = ({ ingredients, isLoading }) => {

  const [ingredientsModalIsOpen, setIngredientsModalIsOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const toggleIngredientsModal = (selectedIngredient = null) => {
    // trackEvent('View all ingredients', {
    //   action: 'Click in View all ingredients'
    // })

    setIngredientsModalIsOpen(!ingredientsModalIsOpen);
    setSelectedIngredient(selectedIngredient);
  };

  return (
    <Fragment>
      <IngredientModal
        isOpen={ingredientsModalIsOpen}
        onRequestClose={() => toggleIngredientsModal()}
        selectedIngredient={selectedIngredient}
      />
      <div className={`${styles.ingredients} ${isLoading ? 'loading' : null}`}>
        <h2>Ingredients</h2>

        <div data-testid='ingredient' className={styles.ingredientsContainer}>
          {ingredients.map((ingredient, i) => {
            return (
              <div
                className={`${styles.ingredient} ${
                  isLoading ? 'loading' : null
                }`}
                key={`${i}-${ingredient.componentCode}-${ingredient.id}`}
                onClick={() => {
                  if (!isLoading) {
                    toggleIngredientsModal(ingredient);
                  }
                }}
              >
                <p>
                  {ingredient.name
                    ? ingredient.name
                    : ingredient.componentCode
                    ? ingredient.componentCode
                    : ingredient.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Ingredients;

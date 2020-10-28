import React from 'react'

import Plus from '../../assets/plus-white.png'
import Button from '../../common/CUButton'
import MealImage from '../../common/MealImage'
import RatingMeal from '../../components/RatingMeal'
import ProductTitle from '../../components/ProductTitle'
import UserRating from '../../common/UserRating'
import ProductDescription from '../../components/ProductDescription'
import ChefProfile from '../../components/ChefProfile'

import styles from  './MealCard.module.scss'

const MealCard = ({ mealDetail, isLoading, isOrdering, addProduct }) => {
  
  return (
    <div
      className={`${styles.productDetails} ${isLoading && styles.loading}`}>
      <div className={styles.productDescription}>
        <ProductTitle mealDetail={mealDetail}/>
        <RatingMeal  mealDetail={mealDetail}/>
      </div>

      <div className={styles.productImage}>
        <MealImage mealDetail={mealDetail} />
      </div>

      <ProductDescription  mealDetail={mealDetail} />
      <ChefProfile mealDetail={mealDetail}  />

      <div className={styles.addProduct}>
        {isOrdering && !isLoading && (
          <Button dark large onClick={addProduct}>
            <img src={Plus} alt="plus sign" />
            <span>Add meal</span>
          </Button>
        )}
      </div>
    </div>
  )
}

export default MealCard

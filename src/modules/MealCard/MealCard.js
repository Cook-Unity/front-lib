import React from 'react'
import PropTypes from 'prop-types'

import Plus from '../../assets/plus-white.png'
import Button from '../../common/Buttons'
import MealImage from '../../common/MealImage'
import RatingMeal from '../../components/RatingMeal'
import ProductTitle from '../../components/ProductTitle'
import ProductDescription from '../../components/ProductDescription'
import ChefProfile from '../../components/ChefProfile'

import styles from './MealCard.module.scss'

const MealCard = ({
  mealDetail,
  isLoading,
  isOrdering,
  addProduct,
  onChefClick
}) => {
  return (
    <div className={`${styles.productDetails} ${isLoading && styles.loading}`}>
      <div className={styles.productDescription}>
        <ProductTitle name={mealDetail.name} />
        <RatingMeal
          mealDetail={mealDetail}
          stars={mealDetail.stars}
          reviewsCount={mealDetail.reviews_count}
          userRating={mealDetail.user_rating}
        />
      </div>

      <div className={styles.productImage}>
        <MealImage mealDetail={mealDetail} />
      </div>

      <ProductDescription mealStory={mealDetail.meal_story} />

      <ChefProfile
        img={mealDetail.chef_img}
        firstname={mealDetail.chef_firstname}
        lastname={mealDetail.chef_lastname}
        chefId={mealDetail.chef_id}
        onClick={onChefClick}
      />

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

MealCard.propTypes = {
  onChefClick: PropTypes.func
}

MealCard.defaultProps = {
  onChefClick: null
}

export default MealCard

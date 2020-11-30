import React from 'react'
import PropTypes from 'prop-types'

import Plus from '../../assets/plus-white.png'
import Button from '../../common/Buttons'
import MealImage from '../../common/MealImage'
import RatingMeal from '../../components/RatingMeal'
import ProductTitle from '../../components/ProductTitle'
import ProductDescription from '../../components/ProductDescription'
import ChefProfile from '../../components/ChefProfile'

import styles from './ProductBasicInformation.module.scss'

const ProductBasicInformation = ({
  mealDetail,
  isLoading,
  isOrdering,
  addProduct,
  onChefClick,
  onClickReviewCount
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
          onClickReviewCount={onClickReviewCount}
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
        chefId={+mealDetail.chef_id}
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

ProductBasicInformation.propTypes = {
  onChefClick: PropTypes.func,
  addProduct: PropTypes.func,
  onClickReviewCount: PropTypes.func,
  mealDetail: PropTypes.object,
  isLoading: PropTypes.bool,
  isOrdering: PropTypes.bool
}

ProductBasicInformation.defaultProps = {
  onChefClick: null,
  addProduct: null,
  onClickReviewCount: null,
  mealDetail: null,
  isLoading: false,
  isOrdering: false
}

export default ProductBasicInformation

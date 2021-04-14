import React from 'react'
import PropTypes from 'prop-types'

import MealImage from '../../common/MealImage'
import RatingMeal from '../../components/RatingMeal'
import ProductTitle from '../../components/ProductTitle'
import ProductDescription from '../../components/ProductDescription'
import ChefProfile from '../../components/ChefProfile'
import OrderButtons from '../../components/OrderButtons'

import styles from './ProductBasicInformation.module.scss'

const ProductBasicInformation = ({
  productData,
  isLoading,
  addProduct,
  onChefClick,
  onClickReviewCount,
  hideStars
}) => {
  return (
    <div className={`${styles.productDetails} ${isLoading && styles.loading}`}>
      <div className={styles.productDescription}>
        <ProductTitle name={productData.name} />
        <RatingMeal
          hideStars={hideStars}
          stars={productData.stars}
          reviewsCount={productData.reviews_count}
          userRating={productData.user_rating}
          onClickReviewCount={onClickReviewCount}
        />
      </div>

      <div className={styles.productImage}>
        <MealImage imageUrl={productData.image_full_url} />
      </div>

      <ProductDescription mealStory={productData.meal_story} />

      <ChefProfile
        img={productData.chef_image_url}
        firstname={productData.chef_firstname}
        lastname={productData.chef_lastname}
        chefId={+productData.chef_id}
        onClick={onChefClick}
      />

      {!isLoading && (
        <OrderButtons
          total={2}
          onAdd={addProduct}
          className={styles.addProduct}
        />
      )}
    </div>
  )
}

ProductBasicInformation.propTypes = {
  onChefClick: PropTypes.func,
  addProduct: PropTypes.func,
  onClickReviewCount: PropTypes.func,
  productData: PropTypes.object,
  isLoading: PropTypes.bool
}

ProductBasicInformation.defaultProps = {
  onChefClick: null,
  addProduct: null,
  onClickReviewCount: null,
  productData: null,
  isLoading: false
}

export default ProductBasicInformation

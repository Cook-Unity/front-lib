import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../common/Buttons'
import MealImage from '../../common/MealImage'
import RatingMeal from '../../components/RatingMeal'
import ProductTitle from '../../components/ProductTitle'
import ProductDescription from '../../components/ProductDescription'
import ChefProfile from '../../components/ChefProfile'

import images from '../../assets/images'

import styles from './ProductBasicInformation.module.scss'

const ProductBasicInformation = ({
  productData,
  isLoading,
  isOrdering,
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

      <div className={styles.addProduct}>
        {isOrdering && !isLoading && (
          <Button dark large onClick={addProduct}>
            <img src={images.plusImage} alt="plus sign" />
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
  productData: PropTypes.object,
  isLoading: PropTypes.bool,
  isOrdering: PropTypes.bool
}

ProductBasicInformation.defaultProps = {
  onChefClick: null,
  addProduct: null,
  onClickReviewCount: null,
  productData: null,
  isLoading: false,
  isOrdering: false
}

export default ProductBasicInformation

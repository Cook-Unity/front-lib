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
  product,
  isLoading,
  onChefClick,
  onClickReviewCount,
  hideStars,
  isOrdering
}) => {
  const {name, stars, reviewsCount, userRating, imageFullUrl, mealStory, chef} =
    product || {}

  return (
    <div className={`${styles.productDetails} ${isLoading && styles.loading}`}>
      <div className={styles.productDescription}>
        <ProductTitle name={name} />
        <RatingMeal
          hideStars={hideStars}
          stars={stars}
          reviewsCount={reviewsCount}
          userRating={userRating}
          onClickReviewCount={onClickReviewCount}
        />
      </div>

      <div className={styles.productImage}>
        <MealImage imageUrl={imageFullUrl} />
      </div>

      <ProductDescription mealStory={mealStory} />

      <ChefProfile
        img={chef?.labelImageUrl}
        firstname={chef?.firstName}
        lastname={chef?.lastName}
        chefId={+chef?.id}
        onClick={onChefClick}
      />

      {isOrdering && (
        <OrderButtons {...isOrdering} className={styles.addProduct} />
      )}
    </div>
  )
}

ProductBasicInformation.propTypes = {
  onChefClick: PropTypes.func,
  onClickReviewCount: PropTypes.func,
  product: PropTypes.object,
  isLoading: PropTypes.bool,
  isOrdering: PropTypes.object
}

ProductBasicInformation.defaultProps = {
  onChefClick: null,
  onClickReviewCount: null,
  product: null,
  isLoading: false,
  isOrdering: null
}

export default ProductBasicInformation

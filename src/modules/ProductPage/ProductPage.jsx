import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {pathOr} from 'ramda'

import Skeleton from './skeleton'
import MetaTags from '../../components/MetaTags'
import Social from '../../components/SocialShareButton'

import ProductBasicInformation from '../ProductBasicInformation'
import Ingredients from '../Ingredients'
import FinalSteps from '../FinalSteps'
import NutritionalFacts from '../NutritionalFacts'
import Macronutrients from '../Macronutrients'
import Reviews from '../Reviews'
import Specifications from '../Specifications'

import images from '../../assets/images'

import styles from './ProductPage.module.scss'

const getFinalSteps = productData => {
  const fastInstructions = pathOr(
    null,
    ['cookingSteps', 'microwave_steps'],
    productData
  )

  const chefInstructions = pathOr(
    null,
    ['cookingSteps', 'oven_steps'],
    productData
  )

  return (
    <FinalSteps
      chefInstructions={chefInstructions}
      fastInstructions={fastInstructions}
    />
  )
}

const ProductPage = ({
  productData,
  isLoading,
  goBack,
  goBackText,
  openChefProfileHandler,
  addProductHandler,
  isOrdering
}) => {
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const [showSocialInfo, setShowSocialInfo] = useState(false)

  const mealUrl =
    isLoading && `https://www.cookunity.com/${productData.urlPath}`

  const ingredients = <Ingredients ingredients={productData.ingredients} />
  const finalSteps = getFinalSteps(productData)
  const nutrition = <NutritionalFacts mealDetail={productData} />
  const macronutrients = (
    <Macronutrients
      nutritionInfo={productData.nutritionInfo}
      calories={productData.calories}
    />
  )

  const handleReviews = () => setShowReviewsModal(!showReviewsModal)

  return (
    <Fragment>
      <div className={styles.cookunity__product_detail_container}>
        <div className={styles.cookunity__product_detail}>
          <div className={styles.header}>
            <div className={styles.back_button} onClick={goBack}>
              <img src={images.close} alt="close" />
              <p>{goBackText}</p>
            </div>

            <div
              className={[styles.back_button, styles.mobile]}
              onClick={goBack}
            >
              <img src={images.closeMobile} alt="close" />
            </div>

            {!isLoading && (
              <div className={[styles.share_container]}>
                <div
                  className={[styles.share_button]}
                  onClick={() => setShowSocialInfo(!showSocialInfo)}
                >
                  <img src={images.share} alt="share" />
                  <p>Share</p>
                </div>

                {showSocialInfo && (
                  <Social url={mealUrl} title={productData.name} />
                )}
              </div>
            )}
          </div>

          {isLoading ? (
            <Skeleton />
          ) : (
            <Fragment>
              <MetaTags
                title={productData.name + ' ' + productData.short_description}
                description={productData.meal_story}
              />

              <ProductBasicInformation
                isOrdering={isOrdering}
                mealDetail={productData}
                addProduct={addProductHandler}
                onClickReviewCount={handleReviews}
                onChefClick={openChefProfileHandler}
              />

              <Specifications
                specificationsDetails={productData.specificationsDetails}
              />

              <div className={[styles.board]}>
                <div className={[styles.column]}>
                  {ingredients}
                  {finalSteps}
                </div>

                <div className={[styles.column]}>
                  {nutrition}
                  {macronutrients}
                </div>

                <div className={[styles.block]}>
                  {ingredients}
                  {nutrition}
                  {finalSteps}
                  {macronutrients}
                </div>
              </div>

              <Reviews
                product={productData}
                reviews={productData.reviews}
                quantity={productData.reviews_count}
                title="Community Reviews"
                showReviewsModal={showReviewsModal}
                toggleReviewsModal={handleReviews}
              />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  )
}

ProductPage.propTypes = {
  productData: PropTypes.object.isRequired,
  HeaderComponent: PropTypes.element,
  goBack: PropTypes.func,
  openChefProfileHandler: PropTypes.func,
  toggleReviewsModalHandler: PropTypes.func,
  addProductHandler: PropTypes.func,
  goBackText: PropTypes.string,
  isLoading: PropTypes.bool,
  isOrdering: PropTypes.bool
}

ProductPage.defaultProps = {
  productData: {},
  HeaderComponent: null,
  goBack: () => {},
  openChefProfileHandler: null,
  toggleReviewsModalHandler: () => {},
  addProductHandler: () => {},
  goBackText: 'Back',
  isLoading: false,
  isOrdering: false
}

export default ProductPage

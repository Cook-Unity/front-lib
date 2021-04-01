import React, {Fragment, useState} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {pathOr} from 'ramda'

import Skeleton from './skeleton'
import MetaTags from '../../components/MetaTags'
import Share from '../../components/Share'

import ProductBasicInformation from '../ProductBasicInformation'
import Ingredients from '../Ingredients'
import FinalSteps from '../FinalSteps'
import NutritionalFacts from '../NutritionalFacts'
import Macronutrients from '../Macronutrients'
import MealDisclaimer from '../../components/MealDisclaimer'
import Reviews from '../Reviews'
import Specifications from '../Specifications'

import images from '../../assets/images'

import styles from './ProductPage.module.scss'

const getFinalSteps = productData => {
  const fastInstructions = pathOr(
    null,
    ['cooking_steps', 'microwave_steps'],
    productData
  )

  const chefInstructions = pathOr(
    null,
    ['cooking_steps', 'oven_steps'],
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
  isOrdering,
  reviewModalContainerId
}) => {
  const [showReviewsModal, setShowReviewsModal] = useState(false)

  const ingredients = <Ingredients ingredients={productData.ingredients_data} />
  const finalSteps = getFinalSteps(productData)
  const nutrition = (
    <NutritionalFacts nutritionalFacts={productData.nutritional_facts} />
  )
  const macronutrients = (
    <Macronutrients
      nutritionalFacts={productData.nutritional_facts}
      calories={productData.calories}
    />
  )
  const mealDisclaimer = <MealDisclaimer />

  const handleReviews = () => setShowReviewsModal(!showReviewsModal)
  return (
    <Fragment>
      <div className={styles.cookunity__product_detail_container}>
        <div className={styles.cookunity__product_detail}>
          <div className={styles.header}>
            <div className={styles.back_button} onClick={goBack}>
              {goBack && (
                <Fragment>
                  <img src={images.close} alt="close" />
                  <p>{goBackText}</p>
                </Fragment>
              )}
            </div>

            <div
              className={classnames(styles.back_button, {
                [styles.mobile]: styles.mobile
              })}
              onClick={goBack}
            >
              {goBack && <img src={images.closeMobile} alt="close" />}
            </div>

            {!isLoading && (
              <div className={styles.share_container}>
                <Share
                  url={productData.url_path}
                  title={`Enjoy ${productData.name}`}
                  customStyles={{
                    socialLinks: styles.socialLinks
                  }}
                />
              </div>
            )}
          </div>

          {isLoading ? (
            <Skeleton hideStars />
          ) : (
            <Fragment>
              <MetaTags
                title={productData.name + ' ' + productData.short_description}
                description={productData.meal_story}
              />

              <ProductBasicInformation
                isOrdering={isOrdering}
                productData={productData}
                addProduct={addProductHandler}
                onClickReviewCount={handleReviews}
                onChefClick={openChefProfileHandler}
              />

              <Specifications
                specificationsDetail={productData.specifications_detail}
              />

              <div className={styles.board}>
                <div className={styles.column}>
                  {ingredients}
                  {finalSteps}
                </div>

                <div className={styles.column}>
                  {nutrition}
                  {macronutrients}
                </div>

                <div className={styles.block}>
                  {ingredients}
                  {nutrition}
                  {finalSteps}
                  {macronutrients}
                </div>

                <div
                  className={`${styles.blockAlways} ${styles.mealDisclaimer}`}
                >
                  {mealDisclaimer}
                </div>
              </div>

              <Reviews
                product={productData}
                reviews={productData.reviews_data}
                quantity={productData.reviews_count}
                title="Community Reviews"
                showReviewsModal={showReviewsModal}
                toggleReviewsModal={handleReviews}
                reviewModalContainerId={reviewModalContainerId}
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
  isOrdering: PropTypes.bool,
  reviewModalContainerId: PropTypes.string
}

ProductPage.defaultProps = {
  productData: {},
  HeaderComponent: null,
  goBack: null,
  openChefProfileHandler: null,
  toggleReviewsModalHandler: () => {},
  addProductHandler: () => {},
  goBackText: 'Back',
  isLoading: false,
  isOrdering: false,
  reviewModalContainerId: null
}

export default ProductPage

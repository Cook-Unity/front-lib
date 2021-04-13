import React, {Fragment, useState} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {pathOr} from 'ramda'
import Modal from 'react-modal'

import Skeleton from './skeleton'
import ProductBasicInformation from '../ProductBasicInformation'
import Reviews from '../Reviews'

import Share from '../../components/Share'
import Ingredients from '../../components/Ingredients'
import NutritionalFacts from '../../components/NutritionalFacts'
import FinalSteps from '../../components/FinalSteps'
import Macronutrients from '../../components/Macronutrients'
import MealDisclaimer from '../../components/MealDisclaimer'
import Specifications from '../../components/Specifications'

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
  closeModalHandler,
  openChefProfileHandler,
  addProductHandler,
  openInModal,
  isOrdering,
  reviewModalContainerId
}) => {
  const [showReviewsModal, setShowReviewsModal] = useState(false)

  const handleReviews = () => setShowReviewsModal(!showReviewsModal)

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

  const header = (
    <div className={styles.header}>
      <div className={styles.back_button} onClick={closeModalHandler}>
        {openInModal && (
          <Fragment>
            <img src={images.close} alt="close" />
            <p>Back</p>
          </Fragment>
        )}
      </div>

      <div
        className={classnames(styles.back_button, {
          [styles.mobile]: styles.mobile
        })}
        onClick={closeModalHandler}
      >
        {openInModal && <img src={images.closeMobile} alt="close" />}
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
  )

  const body = (
    <Fragment>
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
          className={`${styles.block} ${styles.fix} ${styles.mealDisclaimer}`}
        >
          {mealDisclaimer}
        </div>
      </div>

      <Reviews
        product={productData}
        reviews={productData.reviews_data}
        quantity={productData.reviews_count}
        showReviewsModal={showReviewsModal}
        toggleReviewsModal={handleReviews}
        reviewModalContainerId={reviewModalContainerId}
      />
    </Fragment>
  )

  const content = (
    <div className={styles.cookunity__product_detail_container}>
      <div className={styles.cookunity__product_detail}>
        {header}
        {isLoading ? <Skeleton hideStars /> : body}
      </div>
    </div>
  )

  return (
    (openInModal && (
      <Modal
        isOpen={openInModal}
        onRequestClose={closeModalHandler}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        {content}
      </Modal>
    )) ||
    content
  )
}

ProductPage.propTypes = {
  productData: PropTypes.object.isRequired,
  closeModalHandler: PropTypes.func,
  openChefProfileHandler: PropTypes.func,
  toggleReviewsModalHandler: PropTypes.func,
  addProductHandler: PropTypes.func,
  goBackText: PropTypes.string,
  isLoading: PropTypes.bool,
  openInModal: PropTypes.bool,
  isOrdering: PropTypes.bool,
  reviewModalContainerId: PropTypes.string
}

ProductPage.defaultProps = {
  productData: {},
  openChefProfileHandler: () => {},
  toggleReviewsModalHandler: () => {},
  addProductHandler: () => {},
  closeModalHandler: () => {},
  isLoading: false,
  openInModal: false,
  isOrdering: false,
  reviewModalContainerId: null
}

export default ProductPage

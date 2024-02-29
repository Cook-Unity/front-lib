import React, {Fragment, useState, useEffect} from 'react'
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

const ProductPage = ({
  productData,
  isLoading,
  onClose,
  onChefClick,
  openInModal,
  modalContainer,
  isOrdering
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(openInModal)
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const handleReviews = () => setShowReviewsModal(!showReviewsModal)

  const close = () => {
    setModalIsOpen(false)
    onClose()
  }

  const closeModal = () => {
    window.history.back()
    close()
  }

  useEffect(() => {
    if (openInModal) {
      window.history.pushState(null, document.title, window.location.href)
      window.addEventListener('popstate', close)

      return () => window.removeEventListener('popstate', close)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const product = {
    name: productData.name,
    imageFullUrl:
      productData.image_full_url ||
      productData.image ||
      productData.primaryImageUrl,
    url: productData.url_path || productData.url,
    stars: productData.stars,
    userRating: productData.user_rating || productData.userRating,
    mealStory: productData.meal_story || productData.mealStory,
    nutritionalFacts: productData.nutritional_facts,
    specificationsDetails:
      productData.specifications_details || productData.specificationsDetail,
    ingredientsData: productData.ingredients_data || productData.ingredients,
    cookingSteps: {
      microwaveSteps:
        productData.cooking_steps?.microwave_steps ||
        productData.cookingSteps?.microwaveSteps,
      ovenSteps:
        productData.cooking_steps?.oven_steps ||
        productData.cookingSteps?.ovenSteps
    },
    chef: {
      labelImageUrl:
        productData.chef_image_url || productData.chef?.labelImageUrl,
      firstName: productData.chef_firstname || productData.chef?.firstName,
      lastName: productData.chef_lastname || productData.chef?.lastName,
      id: productData.chef_id || productData.chef?.id
    },
    reviewsCount: productData.reviews_count || productData.reviews,
    reviewsData: productData.reviews_data || productData.userReviews,
    ...productData
  }

  console.log('product', product)

  const header = () => (
    <div className={styles.header}>
      {modalIsOpen && (
        <Fragment>
          <div className={styles.back_button} onClick={closeModal}>
            <img src={images.close} alt="close" />
            <p>Back</p>
          </div>
          <div
            className={classnames(styles.back_button, {
              [styles.mobile]: styles.mobile
            })}
            onClick={closeModal}
          >
            <img src={images.closeMobile} alt="close" />
          </div>
        </Fragment>
      )}

      {!isLoading && !isOrdering && (
        <div className={styles.share_container}>
          <Share
            url={product.url}
            title={`Enjoy ${product.name}`}
            customStyles={{
              socialLinks: styles.socialLinks
            }}
          />
        </div>
      )}
    </div>
  )

  const body = () => {
    const ingredients = (
      <Ingredients ingredients={product.ingredientsData} withDetails={false} />
    )
    const finalSteps = (() => {
      const fastInstructions = pathOr(
        null,
        ['cookingSteps', 'microwaveSteps'],
        product
      )

      const chefInstructions = pathOr(
        null,
        ['cookingSteps', 'ovenSteps'],
        product
      )

      return (
        <FinalSteps
          chefInstructions={chefInstructions}
          fastInstructions={fastInstructions}
        />
      )
    })()

    const nutrition = (
      <NutritionalFacts nutritionalFacts={product.nutritionalFacts} />
    )

    const macronutrients = (
      <Macronutrients
        nutritionalFacts={product.nutritionalFacts}
        calories={product.nutritionalFacts.calories}
      />
    )

    const mealDisclaimer = <MealDisclaimer />

    return (
      <Fragment>
        <ProductBasicInformation
          product={product}
          onClickReviewCount={handleReviews}
          onChefClick={onChefClick}
          isOrdering={isOrdering}
        />

        <Specifications specificationsDetail={product.specificationsDetails} />

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
          product={product}
          reviews={product.reviewsData}
          quantity={product.reviewsCount}
          showReviewsModal={showReviewsModal}
          toggleReviewsModal={handleReviews}
          reviewModalContainerId={modalContainer}
        />
      </Fragment>
    )
  }

  const content = (
    <div className={styles.cookunity__product_detail_container}>
      <div className={styles.cookunity__product_detail}>
        {header()}
        {isLoading ? <Skeleton /> : body()}
      </div>
    </div>
  )

  return (
    (modalIsOpen && (
      <Modal
        isOpen={modalIsOpen}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        ariaHideApp={false}
        parentSelector={() => document.querySelector(`#${modalContainer}`)}
      >
        {content}
      </Modal>
    )) ||
    content
  )
}

ProductPage.propTypes = {
  productData: PropTypes.object,
  onCloseModal: PropTypes.func,
  onChefClick: PropTypes.func,
  goBackText: PropTypes.string,
  isLoading: PropTypes.bool,
  openInModal: PropTypes.bool,
  modalContainer: PropTypes.string,
  isOrdering: PropTypes.object
}

ProductPage.defaultProps = {
  productData: {},
  isLoading: false,
  openInModal: false,
  onCloseModal: () => {},
  onChefClick: null,
  modalContainer: 'root',
  isOrdering: null
}

export default ProductPage

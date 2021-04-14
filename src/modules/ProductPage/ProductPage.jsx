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

const ProductPage = ({
  productData,
  isLoading,
  onCloseModal,
  onChefClick,
  onAddProduct,
  openInModal,
  reviewModalContainerId,
  isOrdering
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(openInModal)
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const handleReviews = () => setShowReviewsModal(!showReviewsModal)

  const closeModal = () => {
    onCloseModal()
    setModalIsOpen(false)
  }

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

      <div className={styles.share_container}>
        <Share
          url={productData.url_path}
          title={`Enjoy ${productData.name}`}
          customStyles={{
            socialLinks: styles.socialLinks
          }}
        />
      </div>
    </div>
  )

  const ingredients = () => (
    <Ingredients ingredients={productData.ingredients_data} />
  )
  const finalSteps = () => () => {
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

  const nutrition = () => (
    <NutritionalFacts nutritionalFacts={productData.nutritional_facts} />
  )
  const macronutrients = () => (
    <Macronutrients
      nutritionalFacts={productData.nutritional_facts}
      calories={productData.calories}
    />
  )
  const mealDisclaimer = () => <MealDisclaimer />

  const body = () => (
    <Fragment>
      <ProductBasicInformation
        productData={productData}
        addProduct={onAddProduct}
        onClickReviewCount={handleReviews}
        onChefClick={onChefClick}
        isOrdering={isOrdering}
      />

      <Specifications
        specificationsDetail={productData.specifications_detail}
      />

      <div className={styles.board}>
        <div className={styles.column}>
          {ingredients()}
          {finalSteps()}
        </div>

        <div className={styles.column}>
          {nutrition()}
          {macronutrients()}
        </div>

        <div className={styles.block}>
          {ingredients()}
          {nutrition()}
          {finalSteps()}
          {macronutrients()}
        </div>

        <div
          className={`${styles.block} ${styles.fix} ${styles.mealDisclaimer}`}
        >
          {mealDisclaimer()}
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
        {isLoading ? (
          <Skeleton hideStars />
        ) : (
          <Fragment>
            {header()} {body()}
          </Fragment>
        )}
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
      >
        {content}
      </Modal>
    )) ||
    content
  )
}

ProductPage.propTypes = {
  productData: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func,
  onChefClick: PropTypes.func,
  onAddProduct: PropTypes.func,
  goBackText: PropTypes.string,
  isLoading: PropTypes.bool,
  openInModal: PropTypes.bool,
  reviewModalContainerId: PropTypes.string,
  isOrdering: PropTypes.object
}

ProductPage.defaultProps = {
  productData: {},
  isLoading: false,
  openInModal: false,
  onCloseModal: () => {},
  onAddProduct: () => {},
  onChefClick: null,
  reviewModalContainerId: null,
  isOrdering: null
}

export default ProductPage

import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

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

import Close from '../../assets/images/back_arrow.png'
import CloseMobile from '../../assets/images/back_arrow_mobile.png'
import Share from '../../assets/images/share.png'

import './ProductPage.scss'

const ProductPage = ({
  productData,
  isLoading,
  goBack,
  goBackText,
  openChefProfileHandler,
  toggleReviewsModalHandler,
  addProductHandler,
  isOrdering
}) => {
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const [showSocialInfo, setShowSocialInfo] = useState(false)

  const mealUrl =
    isLoading && `https://www.cookunity.com/${productData.urlPath}`

  const ingredients = <Ingredients ingredients={productData.ingredients} />
  const finalSteps = <FinalSteps mealDetail={productData} />
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
      <div className="cookunity__product_detail_container">
        <div className="cookunity__product_detail">
          <div className="header">
            <div className="back_button" onClick={goBack}>
              <img src={Close} alt="close" />
              <p>{goBackText}</p>
            </div>

            <div className="back_button mobile" onClick={goBack}>
              <img src={CloseMobile} alt="close" />
            </div>

            {!isLoading && (
              <div className="share_container">
                <div
                  className="share_button"
                  onClick={() => setShowSocialInfo(!showSocialInfo)}
                >
                  <img src={Share} alt="share" />
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

              <div className="board">
                <div className="column">
                  {ingredients}
                  {finalSteps}
                </div>

                <div className="column">
                  {nutrition}
                  {macronutrients}
                </div>

                <div className="block">
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

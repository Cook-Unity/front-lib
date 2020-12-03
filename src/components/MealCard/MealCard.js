import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Numeral from 'numeral'
import './MealCard.scss'

import images from '../../assets/images'

const CONTROLLERS_OPENED_MS = 2500

const defaultCallback = () => {}

const formatFee = (premium_fee, fixed_price) =>
  `${!fixed_price ? '+' : ''} ${Numeral(premium_fee).format('$0,0.00')}`

const formatChefName = (firstName, lastName) => `${firstName} ${lastName}`

const formatMealRating = stars => stars && +stars.toFixed(1)

const formatMealReviews = reviews =>
  reviews && (reviews > 999 ? '999+' : `${reviews}`)

const formatFeature = feature => {
  if (feature.name) feature.name = feature.name.toUpperCase()
  return feature
}

const findSpecificationDetail = (details, tag) => 
  details.find(d => d && d.label === tag)

const MealCard = ({
  meal,
  quantity,
  noExtraFee,
  onAddItem,
  onRemoveItem,
  onClick,
  isEditable,
  disableAddItem
}) => {
  const [showCartControllers, setShowCartControllers] = useState(false)

  const {
    name = '',
    short_description = '',
    calories = '',
    meat_type = '',
    reviews = null,
    stars = null,
    chef_firstname = '',
    chef_lastname = '',
    full_path_meal_image = null,
    full_path_chef_image = null,
    is_celebrity_chef = false,
    premium_fee = null,
    fixed_price = false,
    feature = {},
    stock = 0,
    specifications_detail,
  } = meal

  const chefFullName = formatChefName(chef_firstname, chef_lastname)
  const mealRating = formatMealRating(stars)
  const mealReviews = formatMealReviews(reviews)
  const premiumFeeString = formatFee(premium_fee, fixed_price)
  const featureSpecs = formatFeature(feature)
  const selected = quantity > 0

  const isSpicy = findSpecificationDetail(specifications_detail, 'Spicy');

  const disableAddItemBtn = disableAddItem || !isEditable || quantity >= stock

  const handleAddItem = () => {
    setShowCartControllers(true)
    if (isEditable || !disableAddItemBtn) onAddItem()
  }
  const handleRemoveItem = () => {
    setShowCartControllers(true)
    onRemoveItem()
  }

  useEffect(() => {
    const cartTimer = setTimeout(() => {
      setShowCartControllers(false)
    }, CONTROLLERS_OPENED_MS)
    return () => {
      clearTimeout(cartTimer)
    }
  }, [quantity, showCartControllers])

  return (
    <div className={`meal_card ${selected ? 'in_cart' : ''}`}>
      <div
        className="meal_card__top"
        onClick={() => onClick()}
        data-testid="meal-image"
        style={{backgroundImage: `url(${full_path_meal_image})`}}
      >
        {featureSpecs.name && (
          <div
            className="meal_card__tag featured"
            style={{
              backgroundColor: featureSpecs.background,
              color: featureSpecs.color
            }}
          >
            {featureSpecs.name}
          </div>
        )}

        <div className="meal_card__top_tags">
          {mealReviews && mealRating && (
            <div className="meal_card__tag" data-testid="rating">
              <span className="star">★ </span>
              {`${mealRating}`}
              <span className="reviews">{` (${mealReviews})`}</span>
            </div>
          )}

          {calories && (
            <div className="meal_card__tag">{`${calories} cal`}</div>
          )}

          {meat_type && <div className="meal_card__tag">{`${meat_type}`}</div>}

          {isSpicy && 
            <div className="meal_card__tag only_icon">
              <img src={images.spicyIcon}
                alt = {isSpicy.label}
                className="icon_tag"
                data-testid="spicy-img"
              />
            </div>
          }

        </div>
      </div>
      <div
        className="meal_card__title"
        onClick={() => {
          onClick()
        }}
      >
        <div className="meal_card__title_name">{name}</div>
        <div className="meal_card__title_description">{short_description}</div>
      </div>
      <div className="meal_card__footer">
        <div className="meal_card__chef_container">
          {is_celebrity_chef && full_path_chef_image && (
            <img
              src={images.allStarChefBudge}
              className="all_star_budge"
              data-testid="celeb-chef-img"
            />
          )}
          {full_path_chef_image ? (
            <div className="chef_avatar">
              <img
                src={full_path_chef_image}
                data-testid="chef-image"
                alt={chefFullName}
              />
            </div>
          ) : (
            ''
          )}
          <div className="chef_name">{chefFullName}</div>
        </div>

        <div className="meal_card__add_to_cart_container">
          <div className="add_to_cart">
            {!showCartControllers || !selected ? (
              <div className="hiden_cart_controllers">
                {premium_fee && (
                  <div className="premium_fee">
                    {noExtraFee && (
                      <div className="no_extra_fee_text">
                        No extra fee today
                      </div>
                    )}
                    <div className={`fee ${noExtraFee ? 'no_extra_fee' : ''}`}>
                      {premiumFeeString}
                    </div>
                  </div>
                )}
                {isEditable || quantity ? (
                  <button
                    className={`${selected ? 'selected' : 'unselected'}`}
                    disabled={!isEditable}
                    onClick={() =>
                      !selected ? handleAddItem() : setShowCartControllers(true)
                    }
                    data-testid="quantityBtn"
                  >
                    {`${quantity || '+'}`}
                  </button>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <div className="cart_controllers" data-testid="cart-controllers">
                <button onClick={() => quantity && handleRemoveItem()}>
                  -
                </button>
                <span data-testid="quantity">{quantity}</span>
                <button
                  disabled={disableAddItemBtn}
                  onClick={() => handleAddItem()}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    calories: PropTypes.number,
    meat_type: PropTypes.string,
    reviews: PropTypes.number,
    stars: PropTypes.number,
    chef_firstname: PropTypes.string.isRequired,
    chef_lastname: PropTypes.string.isRequired,
    full_path_meal_image: PropTypes.string.isRequired,
    full_path_chef_image: PropTypes.string.isRequired,
    is_celebrity_chef: PropTypes.bool,
    premium_fee: PropTypes.number,
    fixed_price: PropTypes.bool,
    feature: PropTypes.shape({
      name: PropTypes.string,
      background: PropTypes.string,
      color: PropTypes.string
    }),
    stock: PropTypes.number,
    specifications_detail: PropTypes.array
  }),

  isEditable: PropTypes.bool,
  disableAddItem: PropTypes.bool,
  quantity: PropTypes.number,
  noExtraFee: PropTypes.bool,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onClick: PropTypes.func
}

MealCard.defaultProps = {
  meal: {},
  quantity: 0,
  noExtraFee: false,
  isEditable: true,
  disableAddItem: false,
  onAddItem: defaultCallback,
  onRemoveItem: defaultCallback,
  onClick: defaultCallback
}

export default MealCard

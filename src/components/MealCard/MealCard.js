import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import {getProteinTag} from '../../utils/meals'

import {
  formatFee,
  formatChefName,
  formatMealRating,
  formatMealReviews,
  formatFeature,
  findSpecificationDetail
} from './utils'

import styles from './MealCard.module.scss'
import images from '../../assets/images'

const CONTROLLERS_OPENED_MS = 2500
const defaultCallback = () => {}

/**
 * Case to consider: stock = 0
 *
 */
const MealCard = ({
  meal,
  quantity,
  noExtraFee,
  onAddItem,
  onRemoveItem,
  onClick,
  isEditable,
  disableAddItem,
  onLikeMeal,
  onWarnings
}) => {
  const [showCartControllers, setShowCartControllers] = useState(false)
  const [likeMeal, setLikeMeal] = useState(false)
  const [showWarnings, setShowWarning] = useState(false)

  const {
    name = '',
    short_description = '',
    calories = '',
    protein_type = '',
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
    specifications_detail = [],
    user_rating = 0,
    warning = '',
    allergens = []
  } = meal

  const chefFullName = formatChefName(chef_firstname, chef_lastname)
  const mealRating = formatMealRating(stars)
  const mealReviews = formatMealReviews(reviews)
  const premiumFeeString = formatFee(premium_fee, fixed_price)
  const featureSpecs = formatFeature(feature)
  const proteinTag = getProteinTag(protein_type)
  const isSpicy = findSpecificationDetail(specifications_detail, 'spicy')
  const selected = quantity > 0
  const disableAddItemBtn = disableAddItem || !isEditable || quantity >= stock
  const imageComingSoon = /no_selection|no-image|null|undefined/.test(
    full_path_meal_image
  )

  const handleAddItem = () => {
    setShowCartControllers(true)
    if (!disableAddItemBtn) onAddItem()
  }
  const handleRemoveItem = () => {
    setShowCartControllers(true)
    onRemoveItem()
  }

  const toggleWishList = () => {
    setLikeMeal(!likeMeal)
  }

  const openWarning = () => {
    setShowWarning(true)
    setTimeout(() => {
      setShowWarning(false)
    }, CONTROLLERS_OPENED_MS)
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
    <div className={`${styles.meal_card} ${selected ? styles.in_cart : ''}`}>
      <div
        className={`${styles.meal_card__top} ${
          imageComingSoon ? styles.no_image : ''
        }`}
        onClick={() => onClick()}
        data-testid="meal-image"
        style={{
          backgroundImage: `url(${
            imageComingSoon ? images.noMealImage : full_path_meal_image
          })`
        }}
      >
        {user_rating === 5 ? (
          <div className={`${styles.user_stars_container}`}>
            <span className={`${styles.user_rating}`}>you rated 5</span>
            <img
              className={`${styles.user_star}`}
              src={images.blackStar}
              alt="star"
            />
          </div>
        ) : (
          !warning &&
          featureSpecs.description && (
            <div
              className={`${styles.meal_card__tag} ${styles.featured}`}
              style={{
                backgroundColor: featureSpecs.background,
                color: featureSpecs.color
              }}
            >
              {featureSpecs.description}
            </div>
          )
        )}

        {onWarnings && warning && (
          <>
            <div
              className={`${styles.meal_card__warning_container}`}
              onClick={() => openWarning()}
            >
              <img src={images.iconAlert} alt="alert" />
              <div className={`${styles.separator}`} />
              <p>{allergens.length} allergens</p>
            </div>
            {showWarnings ? (
              <div
                className={`${styles.fade_out} ${styles.warning__tooltip_container}`}
              >
                <span>{warning}</span>
              </div>
            ) : null}
          </>
        )}

        {onLikeMeal ? (
          <div
            className={`${styles.button__like}`}
            onClick={() => toggleWishList()}
          >
            <img
              className={`${styles.meal_image_heart}`}
              src={likeMeal ? images.blackHeart : images.emptyHeart}
              alt="heart"
            />
          </div>
        ) : null}

        {imageComingSoon && (
          <div className={styles.no_image_text}>Image coming soon</div>
        )}

        <div className={styles.meal_card__top_tags}>
          {mealReviews && mealRating && (
            <div className={styles.meal_card__tag} data-testid="rating">
              <span className={styles.star}>
                <img src={images.star} alt="★" />
              </span>
              <span>{`${mealRating}`}</span>
              <span className={styles.reviews}>{` (${mealReviews})`}</span>
            </div>
          )}

          {calories && (
            <div className={styles.meal_card__tag}>{`${calories} cal`}</div>
          )}

          {proteinTag && (
            <div className={styles.meal_card__tag}>{`${proteinTag.label}`}</div>
          )}

          {isSpicy && (
            <div
              className={`${styles.meal_card__tag} ${styles.only_icon} ${styles.spicy}`}
            >
              <img
                src={images.spicyIcon}
                alt={isSpicy.label}
                className={styles.icon_tag}
              />
              <div className={styles.tooltip}>Spicy</div>
            </div>
          )}
        </div>
      </div>
      <div
        className={styles.meal_card__title}
        onClick={() => {
          onClick()
        }}
      >
        <div className={styles.meal_card__title_name}>{name}</div>
        <div className={styles.meal_card__title_description}>
          {short_description}
        </div>
      </div>
      <div className={styles.meal_card__footer}>
        <div className={styles.meal_card__chef_container}>
          {is_celebrity_chef && full_path_chef_image && (
            <img
              src={images.allStarChefBudge}
              className={styles.all_star_budge}
              data-testid="celeb-chef-img"
            />
          )}
          {full_path_chef_image ? (
            <div className={styles.chef_avatar}>
              <img
                src={full_path_chef_image}
                data-testid="chef-image"
                alt={chefFullName}
              />
            </div>
          ) : (
            ''
          )}
          <div className={styles.chef_name}>{chefFullName}</div>
        </div>

        <div className={styles.meal_card__add_to_cart_container}>
          <div className={styles.add_to_cart}>
            {!showCartControllers || !selected ? (
              <div className={styles.hiden_cart_controllers}>
                {premium_fee ? (
                  <div className={styles.premium_fee}>
                    {noExtraFee && (
                      <div className={styles.no_extra_fee_text}>
                        No extra fee today
                      </div>
                    )}
                    <div
                      className={`${styles.fee} ${
                        noExtraFee ? styles.no_extra_fee : ''
                      }`}
                    >
                      {premiumFeeString}
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {isEditable || quantity ? (
                  <button
                    className={`${
                      selected ? styles.selected : styles.unselected
                    }`}
                    disabled={disableAddItemBtn && quantity < 1}
                    onClick={() =>
                      !selected ? handleAddItem() : setShowCartControllers(true)
                    }
                    data-testid="quantity-btn"
                  >
                    {quantity || (
                      <img
                        src={images.btnWhitePlus}
                        alt="+"
                        data-testid="plus-img"
                      />
                    )}
                  </button>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <div
                className={styles.cart_controllers}
                data-testid="cart-controllers"
              >
                <button
                  onClick={() => quantity && handleRemoveItem()}
                  data-testid="remove-btn"
                >
                  <img src={images.btnBlackMinus} alt="-" />
                </button>
                <span data-testid="quantity">{quantity}</span>
                <button
                  disabled={disableAddItemBtn}
                  onClick={() => handleAddItem()}
                  data-testid="add-btn"
                >
                  <img src={images.btnBlackPlus} alt="+" />
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
    protein_type: PropTypes.string,
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
      description: PropTypes.string,
      background: PropTypes.string,
      color: PropTypes.string
    }),
    stock: PropTypes.number,
    specifications_detail: PropTypes.array,
    warning: PropTypes.string,
    allergens: PropTypes.array,
    user_rating: PropTypes.array
  }),
  isEditable: PropTypes.bool,
  disableAddItem: PropTypes.bool,
  quantity: PropTypes.number,
  noExtraFee: PropTypes.bool,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onClick: PropTypes.func,
  onLikeMeal: PropTypes.bool,
  onWarnings: PropTypes.bool
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

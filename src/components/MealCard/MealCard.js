import React, { useState, useEffect, Fragment } from 'react'
import { bool, string, func, number, array, shape } from 'prop-types'
import classnames from 'classnames'

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
  buttonLike,
  onWarnings,
  isLikeMarked,
  onLikeMeal
}) => {
  const [showCartControllers, setShowCartControllers] = useState(false)
  const [showWarnings, setShowWarning] = useState(false)
  const [disabledLikeMeal, setDisabledLikeMeal ] = useState(false)

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
    allergens = [],
    magentoId = null
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

  const openWarning = () => {
    setShowWarning(true)
    setTimeout(() => {
      setShowWarning(false)
    }, CONTROLLERS_OPENED_MS)
  }

  const handleOnLikeMeal = (magentoId) => {
    onLikeMeal(magentoId)
    setDisabledLikeMeal(true)
    setTimeout(() => {
      setDisabledLikeMeal(false)
    }, 2500)
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
    <div
      className={classnames(styles.meal_card, { [styles.in_cart]: selected })}
    >
      <div
        className={classnames(styles.meal_card__top, { [styles.no_image]: imageComingSoon })}
        onClick={() => onClick()}
        data-testid="meal-image"
        style={{
          backgroundImage: `url(${
            imageComingSoon ? images.noMealImage : full_path_meal_image
          })`
        }}
      >
        {user_rating === 5 ? (
          <div className={styles.user_stars_container}>
            <span className={styles.user_rating}>you rated 5</span>
            <img
              className={styles.user_star}
              src={images.blackStar}
              alt="star"
            />
          </div>
        ) : (
          !warning &&
          featureSpecs.description && (
            <div
              className={classnames(styles.meal_card__tag, styles.featured)}
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
          <Fragment>
            <div
              className={styles.meal_card__warning_container}
              onClick={() => openWarning()}
            >
              <img src={images.iconAlert} alt="alert" />
              <div className={styles.separator} />
              <p>{allergens.length} allergens</p>
            </div>
            {showWarnings ? (
              <div
                className={classnames(
                  styles.fade_out,
                  styles.warning__tooltip_container
                )}
              >
                <span>{warning}</span>
              </div>
            ) : null}
          </Fragment>
        )}

        {buttonLike && (
          <div
            className={classnames(styles.button__like, {
              [styles.disabled]: disabledLikeMeal
            })}
            onClick={() => handleOnLikeMeal(magentoId)}
          >
            <img
              className={styles.meal_image_heart}
              src={isLikeMarked ? images.blackHeart : images.emptyHeart}
              alt="heart"
            />
          </div>
        )}

        {imageComingSoon && (
          <div className={styles.no_image_text}>Image coming soon</div>
        )}

        <div className={styles.meal_card__top_tags}>
          {mealReviews && mealRating && (
            <div className={styles.meal_card__tag} data-testid="rating">
              <span className={styles.star}>
                <img src={images.star} alt="★" />
              </span>
              <span>{mealRating}</span>
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
              className={classnames([
                styles.meal_card__tag,
                styles.only_icon,
                styles.spicy
              ])}
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
                      className={classnames(styles.fee, {
                        [styles.no_extra_fee]: noExtraFee
                      })}
                    >
                      {premiumFeeString}
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {isEditable || quantity ? (
                  <button
                    className={classnames(
                      selected ? styles.selected : styles.unselected
                    )}
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
  meal: shape({
    name: string.isRequired,
    short_description: string.isRequired,
    calories: number,
    protein_type: string,
    reviews: number,
    stars: number,
    chef_firstname: string.isRequired,
    chef_lastname: string.isRequired,
    full_path_meal_image: string.isRequired,
    full_path_chef_image: string.isRequired,
    is_celebrity_chef: bool,
    premium_fee: number,
    fixed_price: bool,
    feature: shape({
      name: string,
      description: string,
      background: string,
      color: string
    }),
    stock: number,
    specifications_detail: array,
    warning: string,
    allergens: array,
    user_rating: number
  }),
  isEditable: bool,
  disableAddItem: bool,
  quantity: number,
  noExtraFee: bool,
  onAddItem: func,
  onRemoveItem: func,
  onClick: func,
  buttonLike: bool,
  onWarnings: bool,
  isLikeMarked: bool,
  onLikeMeal: func
}

MealCard.defaultProps = {
  meal: {},
  quantity: 0,
  noExtraFee: false,
  isEditable: true,
  disableAddItem: false,
  buttonLike: false,
  onWarnings: false,
  onAddItem: defaultCallback,
  onRemoveItem: defaultCallback,
  onClick: defaultCallback
}

export default MealCard

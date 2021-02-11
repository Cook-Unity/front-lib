import React, {useState, useEffect, Fragment} from 'react'
import {bool, string, func, number, array, shape} from 'prop-types'
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
  included,
  includedDay,
  isEditable,
  disableAddItem,
  buttonLike,
  onWarnings,
  isLikeMarked,
  onLikeMeal,
  onMealClick,
  onChefClick,
  noSelected,
  pastOrder,
  isLoading,
  showPrice,
  compact,
  extra
}) => {
  const [showCartControllers, setShowCartControllers] = useState(false)
  const [showWarnings, setShowWarning] = useState(false)
  const [disabledLikeMeal, setDisabledLikeMeal] = useState(false)

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
    magentoId = null,
    warnings = {},
    price_plan = '',
    price = ''
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

  const noStock = stock === 0 && !selected
  const allergens = warnings && warnings.restrictions_applied

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

  const handleOnLikeMeal = magentoId => {
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

  if (isLoading) {
    return (
      <div className={classnames(`${styles.meal_card} ${styles.loading}`)}>
        <div
          className={classnames(
            `${styles.meal_image_container} ${styles.loading}`
          )}
        >
          <div
            className={classnames(`${styles.meal_image} ${styles.loading}`)}
          />
        </div>

        <div className={styles.bottom_info}>
          <div className={styles.meal_name}>
            <div className={classnames(`${styles.title} ${styles.loading}`)} />
            <div
              className={classnames(`${styles.subtitle} ${styles.loading}`)}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={classnames(
        styles.meal_card,
        selected && !noSelected ? styles.in_cart : '',
        pastOrder ? styles.in_past_order : ' '
      )}
    >
      <div className={styles.meal_card__top}>
        <img
          className={`${styles.main_meal_image} 
          ${
            noStock ? styles.no__stock : imageComingSoon ? styles.no_image : ''
          }`}
          onClick={() => onMealClick()}
          data-testid="meal-image"
          src={`${imageComingSoon ? images.noMealImage : full_path_meal_image}`}
        />
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
              className={styles.meal_card__featured}
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
            <button
              type="button"
              className={styles.meal_card__warning_container}
              onClick={() => openWarning()}
            >
              <img src={images.iconAlert} alt="alert" />
              <div className={styles.separator} />
              <p>{allergens.length} allergens</p>
            </button>
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

        {!quantity && noStock && (
          <div className={styles.no_stock_text}>Out of stock</div>
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

          {proteinTag && proteinTag.icon && (
            <div
              className={classnames(
                styles.meal_card__tag,
                styles.meal_card__icon_tag,
                styles.only_icon
              )}
            >
              <img
                src={proteinTag.icon}
                alt={`${proteinTag.label}`}
                className={styles.icon_tag}
              />
              <div className={styles.tooltip}>{`${proteinTag.label}`}</div>
            </div>
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
          onMealClick()
        }}
      >
        <div className={styles.meal_card__title_name}>{name}</div>
        <div className={styles.meal_card__title_description}>
          {short_description}
        </div>
      </div>
      <div className={styles.meal_card__footer}>
        <div
          className={styles.meal_card__chef_container}
          onClick={() => onChefClick()}
        >
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

                {(compact && included) ||
                  (extra && (
                    <div className={styles.checkout_info}>
                      {included &&
                        includedDay &&
                        (extra ? (
                          <span>
                            <span className={styles.included}>Included</span>
                            <span className={styles.price}> {price}</span>
                          </span>
                        ) : (
                          <span className={styles.included}>Included</span>
                        ))}
                      {!includedDay && (
                        <span className={styles.price}> {price}</span>
                      )}
                      {extra && !included && (
                        <span className={styles.price}> {price_plan}</span>
                      )}
                    </div>
                  ))}
                {isEditable || quantity ? (
                  <Fragment>
                    {showPrice && !premium_fee && (
                      <span className={styles.price}> + $ {price}</span>
                    )}
                    <button
                      className={classnames(
                        selected ? styles.selected : styles.unselected
                      )}
                      disabled={disableAddItemBtn && quantity < 1}
                      onClick={() =>
                        !selected
                          ? handleAddItem()
                          : setShowCartControllers(true)
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
                  </Fragment>
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
  onMealClick: func,
  onChefClick: func,
  buttonLike: bool,
  onWarnings: bool,
  isLikeMarked: bool,
  onLikeMeal: func,
  compact: bool
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
  onClick: defaultCallback,
  onMealClick: defaultCallback,
  onChefClick: defaultCallback
}

export default MealCard

import React, {useState, useEffect, Fragment} from 'react'
import {bool, string, func, number, array, shape} from 'prop-types'
import classnames from 'classnames'

import UserRating from '../../common/UserRating'
import {getProteinTag} from '../../utils/meals'

import {
  formatFee,
  formatChefName,
  formatMealRating,
  formatMealReviews,
  formatFeature,
  findSpecificationDetail,
  getLoadingContainer
} from './utils'

import styles from './MealCard.module.scss'
import images from '../../assets/images'

const CONTROLLERS_OPENED_MS = 2500
const defaultCallback = () => {}
const TEXT_OUT_OF_STOCK = 'Sold out'
const TEXT_COMING_SOON = 'Image coming soon'

const MealCard = ({
  meal,
  index,
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
  extra,
  enableCelebrityFeatures,
  hideCartControllers,
  debugging,
  showShareButton,
  onShareClick,
  showAddMealToCart,
  handleAddMealToCart
}) => {
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
    premium_special = null,
    fixed_price = false,
    feature = {},
    stock = 0,
    specifications_detail = [],
    user_rating = 0,
    warning = '',
    magentoId = null,
    price_plan = '',
    price = '',
    weight = '',
    secondary_image = null
  } = meal

  const [showCartControllers, setShowCartControllers] = useState(false)
  const [showWarningDescription, setShowWarningDescription] = useState(false)
  const [disabledLikeMeal, setDisabledLikeMeal] = useState(false)
  const [errorImage, setErrorImage] = useState(false)
  const [primaryImage, setPrimaryImage] = useState()
  const [secondaryImage, setSecondaryImage] = useState()
  const [displayImage, setDisplayImage] = useState()

  const chefFullName = formatChefName(chef_firstname, chef_lastname)
  const mealRating = formatMealRating(stars)
  const mealReviews = formatMealReviews(reviews)
  const premiumFeeString = formatFee(premium_fee, fixed_price)
  const featureSpecs = formatFeature(feature)
  const proteinTag = getProteinTag(protein_type)
  const isSpicy = findSpecificationDetail(specifications_detail, 'spicy')
  const selected = quantity > 0
  const noStock = isEditable && !selected && stock <= 0
  const disableAddItemBtn = disableAddItem || !isEditable || quantity >= stock
  const imageComingSoon = /no_selection|no-image|null|undefined/.test(
    full_path_meal_image
  )
  const isNew = featureSpecs.name === 'NEW_RECIPE'
  const isNewChef = featureSpecs.name === 'NEW_AUTHOR'
  const showWarning = onWarnings && warning
  const showFeature =
    !isNew && !isNewChef && !showWarning && featureSpecs.description
  const showUserRating = user_rating === 5

  const handleAddItem = () => {
    if (hideCartControllers) return
    setShowCartControllers(true)
    if (!disableAddItemBtn) onAddItem(meal, index)
  }
  const handleRemoveItem = () => {
    if (hideCartControllers) return
    setShowCartControllers(true)
    onRemoveItem(meal, index)
  }

  const openWarning = () => {
    setShowWarningDescription(true)
    setTimeout(() => {
      setShowWarningDescription(false)
    }, CONTROLLERS_OPENED_MS)
  }

  const handleOnLikeMeal = magentoId => {
    onLikeMeal(magentoId)
    setDisabledLikeMeal(true)
    setTimeout(() => {
      setDisabledLikeMeal(false)
    }, 2500)
  }

  const handleOnErrorImage = () => {
    setErrorImage(true)
  }

  useEffect(() => {
    if (imageComingSoon || errorImage) {
      setPrimaryImage(images.noMealImage)
      setDisplayImage(images.noMealImage)
    } else {
      setPrimaryImage(full_path_meal_image)
      setDisplayImage(full_path_meal_image)
    }
    if (secondary_image) setSecondaryImage(secondary_image)
  }, [imageComingSoon, errorImage, full_path_meal_image, secondary_image])

  const handleImageMouseEnter = () => {
    setDisplayImage(secondaryImage)
  }

  const handleImageMouseLeave = () => {
    setDisplayImage(primaryImage)
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
    return getLoadingContainer()
  }

  const chefProps = {
    className: styles.meal_card__chef_container
  }

  if (typeof onChefClick === 'function') {
    chefProps.onClick = () => onChefClick()
    chefProps.className = classnames(styles.meal_card__chef_container, {
      [styles.linkable]: !!onChefClick
    })
  }

  return (
    <div
      className={classnames(styles.meal_card, {
        [styles.in_cart]: selected && !noSelected,
        [styles.in_past_order]: pastOrder
      })}
    >
      <div
        className={classnames(styles.meal_card__top, {
          [styles.meal_card__top_special]: premium_special
        })}
      >
        <img
          className={`${styles.main_meal_image}
          ${
            noStock ? styles.no__stock : imageComingSoon ? styles.no_image : ''
          }`}
          onClick={() => onMealClick(meal, index)}
          data-testid="meal-image"
          src={displayImage}
          onMouseEnter={() => secondaryImage && handleImageMouseEnter()}
          onMouseLeave={() => secondaryImage && handleImageMouseLeave()}
          onError={handleOnErrorImage}
        />

        {showWarning && (
          <Fragment>
            <button
              type="button"
              className={styles.meal_card__warning_container}
              onClick={() => openWarning()}
            >
              <img src={images.warningRedIcon} alt="alert" />
            </button>
            {showWarningDescription ? (
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

        {!showWarning && showUserRating ? (
          <div className={styles.user_stars_container}>
            <UserRating userRating={5} youRated />
          </div>
        ) : (
          showFeature && (
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

        {buttonLike && (
          <div
            className={classnames(styles.button__like, {
              [styles.disabled]: disabledLikeMeal
            })}
            onClick={() => handleOnLikeMeal(magentoId)}
            data-testid="button-like"
          >
            <img
              className={styles.meal_image_heart}
              src={isLikeMarked ? images.blackHeart : images.emptyHeart}
              alt="heart"
            />
          </div>
        )}

        {noStock && (
          <div className={styles.no_stock_text}>{TEXT_OUT_OF_STOCK}</div>
        )}

        {!noStock && (imageComingSoon || errorImage) && (
          <div className={styles.no_image_text}>{TEXT_COMING_SOON}</div>
        )}

        <div className={styles.meal_card__top_tags}>
          {!isNew && parseInt(mealReviews) > 0 && parseInt(mealRating) > 0 && (
            <div className={styles.meal_card__tag} data-testid="rating">
              <span className={styles.star}>
                <img src={images.star} alt="★" />
              </span>
              <span>{mealRating}</span>
              <span className={styles.reviews}>{` (${mealReviews})`}</span>
            </div>
          )}

          {isNew && (
            <div
              className={classnames(styles.meal_card__tag, styles.highlight)}
            >
              NEW
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
      {premium_special && (
        <div className={styles.premium_special}>
          <img src={images.diamond} alt="" />
          <span>
            {premium_special === 'vegetarian_special'
              ? 'Vegetarian Special'
              : 'Chef Special'}
          </span>
        </div>
      )}
      <div
        className={styles.meal_card__title}
        onClick={() => {
          onMealClick(meal, index)
        }}
      >
        <div className={styles.meal_card__title_name}>{name}</div>
        <div className={styles.meal_card__title_description}>
          {short_description}
        </div>
      </div>
      <div className={styles.meal_card__footer}>
        <div data-testid="container-chef-image" {...chefProps}>
          {enableCelebrityFeatures &&
            is_celebrity_chef &&
            full_path_chef_image && (
              <img
                src={images.allStarChefBudge}
                className={styles.all_star_budge}
                data-testid="celeb-chef-img"
              />
            )}
          {full_path_chef_image && (
            <div className={styles.chef_avatar}>
              <img
                src={full_path_chef_image}
                data-testid="chef-image"
                alt={chefFullName}
              />
            </div>
          )}
          <div className={styles.chef_name}>{chefFullName}</div>
        </div>
        {debugging && debugging.showSortingWeight && (
          <div className={styles.chef_name}>Menu sorting weight: {weight}</div>
        )}
        <div className={styles.meal_card__add_to_cart_container}>
          <div className={styles.add_to_cart}>
            {!showCartControllers || !selected ? (
              <div className={styles.hiden_cart_controllers}>
                {isEditable && premium_fee > 0 && !premium_special ? (
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

                {showShareButton && (
                  <button
                    onClick={() => {
                      onShareClick(meal)
                    }}
                    className={styles.share_button}
                  >
                    <img src={images.share} alt="share" />
                  </button>
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
                {showAddMealToCart && (
                  <button
                    className={styles.unselected}
                    onClick={handleAddMealToCart}
                  >
                    <img
                      src={images.btnWhitePlus}
                      alt="+"
                      data-testid="plus-img"
                    />
                  </button>
                )}
                {premium_special && premium_fee > 0 && (
                  <span className={styles.price}>{premiumFeeString} </span>
                )}
                {!isEditable &&
                  showPrice &&
                  !premium_special &&
                  premium_fee > 0 && (
                    <span className={styles.price}>{premiumFeeString} </span>
                  )}
                {isEditable || quantity ? (
                  <Fragment>
                    {showPrice && !premium_fee && (
                      <span className={styles.price}> $ {price} </span>
                    )}
                    <button
                      className={classnames(
                        selected ? styles.selected : styles.unselected,
                        !isEditable && styles.isnoteditable
                      )}
                      disabled={disableAddItemBtn && quantity < 1}
                      onClick={() => {
                        if (!hideCartControllers) {
                          !selected
                            ? handleAddItem()
                            : setShowCartControllers(true)
                        }
                      }}
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
    short_description: string,
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
    user_rating: number,
    premium_special: string
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
  compact: bool,
  enableCelebrityFeatures: bool,
  hideCartControllers: bool,
  debugging: shape({
    showSortingWeight: bool
  }),
  onShareClick: func,
  showShareButton: bool,
  showAddMealToCart: bool.isRequired,
  handleAddMealToCart: func.isRequired
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
  onChefClick: null,
  onLikeMeal: defaultCallback,
  enableCelebrityFeatures: false,
  hideCartControllers: false,
  debugging: {
    showSortingWeight: false
  },
  showShareButton: false,
  showAddMealToCart: false,
  handleAddMealToCart: defaultCallback
}

export default MealCard

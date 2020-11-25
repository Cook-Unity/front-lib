import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Numeral from 'numeral'
import './MealCard.scss'

const allStarChefBudge =
  'data:image/png;base64,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'

const MealCard = ({
  meal = {},
  addItem = () => console.log('addItem'),
  removeItem = () => console.log('removeItem'),
  handleOnClick = () => console.log('handleOnClick'),
  quantity = 0,
  noExtraFee = false
}) => {
  const [showCartControllers, setShowCartControllers] = useState(false)

  const {
    name,
    short_description = '',
    calories = '',
    meat_type = '',
    reviews = null,
    stars = null,
    chef_firstname = '',
    chef_lastname = '',
    full_path_meal_image = null, // set default food image
    full_path_chef_image = null, // set default chef image
    feature = {},
    is_celebrity_chef = false,
    premium_fee = null
  } = meal

  const chefFullName = `${chef_firstname} ${chef_lastname}`
  const mealRating = stars && +stars.toFixed(1)
  const premiumFeeString = `+ ${Numeral(premium_fee).format('$0,0.00')}`

  const selected = quantity > 0

  const handleAddItem = () => {
    setShowCartControllers(true)
    addItem()
  }

  const handleRemoveItem = () => {
    setShowCartControllers(true)
    removeItem()
  }

  useEffect(() => {
    const cartTimer = setTimeout(() => {
      setShowCartControllers(false)
    }, 2500)
    return () => {
      clearTimeout(cartTimer)
    }
  }, [quantity, showCartControllers])

  return (
    <div className={`meal_card ${selected ? 'in_cart' : ''}`}>
      <div
        className="meal_card__top"
        onClick={() => handleOnClick()}
        style={{backgroundImage: `url(${full_path_meal_image})`}}
      >
        {feature.name && (
          <div
            className="meal_card__tag featured"
            style={{
              backgroundColor: feature.background,
              color: feature.color
            }}
          >
            {feature.name}
          </div>
        )}

        <div className="meal_card__top_tags">
          {reviews && mealRating && (
            <div className="meal_card__tag">
              <span className="star">★ </span>
              {`${mealRating}`}
              <span className="reviews">{` (${reviews})`}</span>
            </div>
          )}

          {calories && (
            <div className="meal_card__tag">{`${calories} cals`}</div>
          )}

          {meat_type && <div className="meal_card__tag">{`${meat_type}`}</div>}
        </div>
      </div>
      <div
        className="meal_card__title"
        onClick={() => {
          handleOnClick()
        }}
      >
        <div className="meal_card__title_name">{name}</div>
        <div className="meal_card__title_description">{short_description}</div>
      </div>
      <div className="meal_card__footer">
        <div className="meal_card__chef_container">
          {is_celebrity_chef && full_path_chef_image && (
            <img src={allStarChefBudge} className="all_star_budge" />
          )}
          {full_path_chef_image ? (
            <div className="chef_avatar">
              <img src={full_path_chef_image} alt={chefFullName} />
            </div>
          ) : (
            ''
          )}
          <div className="chef_name">{chefFullName}</div>
        </div>

        <div className="meal_card__add_to_cart_container">
          <div className="add_to_cart">
            {showCartControllers && selected ? (
              <div className="cart_controllers">
                <button onClick={() => quantity && handleRemoveItem()}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleAddItem()}>+</button>
              </div>
            ) : (
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

                <button
                  className={`${selected ? 'selected' : 'unselected'}`}
                  onClick={() =>
                    selected ? setShowCartControllers(true) : handleAddItem()
                  }
                >
                  {`${quantity || '+'}`}
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
  /**
   * Meal data
   */
  meal: PropTypes.object,

  /**
   * Add item callback
   */
  addItem: PropTypes.func
}

export default MealCard

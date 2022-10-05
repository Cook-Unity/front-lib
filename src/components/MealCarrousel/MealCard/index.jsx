import React, {useState, useEffect} from 'react'
import images from '../../../assets/images'
import Numeral from 'numeral'
import {
  Wrapper,
  WrapperTop,
  WrapperFooter,
  WrapperContent,
  WrapperAction,
  MealPicture,
  WarningMessage,
  WarningImage,
  MealTitle,
  ChefImage,
  ExtraPrice,
  Button,
  ImagenCTA,
  StarWrapper,
  StarImg,
  RatingText,
  MealCartActionsWrapper,
  MealCartActionRemove,
  MealCartActionQuantity,
  MealCartActionAdd,
  ImgMinus,
  ImgMore,
  PriceActionsWrapper,
  ButtonQuantity,
  WarningTextWrapper,
  WarningText
} from './styled'

export const formatMealRating = stars => stars && Numeral(stars).format('0.0')

const MealCard = props => {
  const [showActions, setShowActions] = useState(false)
  const [showWarnings, setShowWarnings] = useState(false)

  const MEAL_PLAN_CATEGORY_ID = 3

  const handleAddItem = () => {
    props.onAddTracking(props.meal, props.meal.quantity, props.moduleName)
    props.onAddItem(props.meal, false)
  }

  const handleRemoveItem = () => {
    if (props.meal.quantity === 1) {
      setShowActions(false)
    }
    props.onRemoveItem(props.meal)
  }

  const handleShowActions = () => {
    if (props.meal.quantity === 0) {
      props.onAddItem(props.meal, false)
      props.onAddTracking(props.meal, props.meal.quantity, props.moduleName)
    }
    setShowActions(true)
  }

  const handleClickItem = meal => {
    props.onClickTracking(meal, props.moduleName)
    props.onMealClick(meal, false)
  }

  const handleShowWarningMessage = () => {
    setShowWarnings(true)
  }

  useEffect(() => {
    const showWarningTimer = setTimeout(() => {
      setShowWarnings(false)
    }, 2500)
    return () => {
      clearTimeout(showWarningTimer)
    }
  }, [props.meal.warning, showWarnings])

  useEffect(() => {
    const cartTimer = setTimeout(() => {
      setShowActions(false)
    }, 2500)
    return () => {
      clearTimeout(cartTimer)
    }
  }, [props.meal.quantity, showActions])
  return (
    <Wrapper className={props.meal.quantity > 0 ? 'in-cart' : ''}>
      <WrapperTop>
        <ChefImage src={props.meal.cheffImageFullPath} type={props.type} />
        {props.meal.warning && (
          <WarningMessage onClick={() => handleShowWarningMessage()}>
            <WarningImage src="https://cu-product-media.s3.amazonaws.com/media/icons/info_white.png" />
          </WarningMessage>
        )}
        {showWarnings && (
          <WarningTextWrapper>
            <WarningText>{props.meal.warning}</WarningText>
          </WarningTextWrapper>
        )}
        <MealPicture
          src={props.meal.imageUrl}
          onClick={() => {
            handleClickItem(props.meal)
          }}
        />
      </WrapperTop>

      <WrapperFooter>
        <WrapperAction>
          {props.meal.stars && (
            <StarWrapper>
              <StarImg src={images.star} alt="★" />
              <RatingText>{formatMealRating(props.meal.stars)}</RatingText>
            </StarWrapper>
          )}
          <PriceActionsWrapper className={!props.meal.stars ? 'large' : ''}>
            {props.meal.premium_fee > 0 && (
              <ExtraPrice> + ${props.meal.premium_fee}</ExtraPrice>
            )}
            {props.meal.category_id !== MEAL_PLAN_CATEGORY_ID && (
              <ExtraPrice> ${props.meal.price}</ExtraPrice>
            )}
            {showActions && (
              <MealCartActionsWrapper className="swiper-no-swiping">
                <MealCartActionRemove onClick={() => handleRemoveItem()}>
                  <ImgMinus src={images.btnBlackMinus} />
                </MealCartActionRemove>
                <MealCartActionQuantity>
                  {props.meal.quantity}
                </MealCartActionQuantity>
                <MealCartActionAdd onClick={() => handleAddItem()}>
                  <ImgMore src={images.btnBlackPlus} />
                </MealCartActionAdd>
              </MealCartActionsWrapper>
            )}
            {!showActions && props.meal.quantity === 0 && (
              <Button
                onClick={() => handleShowActions()}
                className="swiper-no-swiping"
              >
                <ImagenCTA src="https://static.cookunity.com/cross/front-lib/images/btn-white-plus.png" />
              </Button>
            )}
            {!showActions && props.meal.quantity > 0 && (
              <ButtonQuantity
                onClick={() => handleShowActions()}
                className="swiper-no-swiping"
              >
                {props.meal.quantity}
              </ButtonQuantity>
            )}
          </PriceActionsWrapper>
        </WrapperAction>
        <WrapperContent>
          <MealTitle
            onClick={() => {
              handleClickItem(props.meal)
            }}
          >
            {props.meal.name} {props.meal.short_description}
          </MealTitle>
        </WrapperContent>
      </WrapperFooter>
    </Wrapper>
  )
}
MealCard.defaultProps = {
  meal: {},
  showActions: false,
  onMealClick: {}
}

export default MealCard

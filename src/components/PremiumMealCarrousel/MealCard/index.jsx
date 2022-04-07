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
  ButtonQuantity
} from './styled'

export const formatMealRating = stars => stars && Numeral(stars).format('0.0')
const MODULE_NAME = 'premium-row'
const MealCard = props => {
  const [showActions, setShowActions] = useState(false)

  const handleAddItem = () => {
    props.onAddTracking(props.meal, props.meal.quantiy, MODULE_NAME)
    props.onAddItem(props.meal)
  }

  const handleRemoveItem = () => {
    if (props.meal.quantity === 1) {
      setShowActions(false)
    }
    props.onRemoveItem(props.meal)
  }

  const handleShowActions = () => {
    if (props.meal.quantity === 0) {
      props.onAddItem(props.meal)
    }
    setShowActions(true)
  }

  const handleClickItem = meal => {
    props.onClickTracking(meal, MODULE_NAME)
    props.onMealClick(meal)
  }

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
        <ChefImage src={props.meal.cheffImageFullPath} />
        <WarningMessage text={props.meal.warning}>
          <WarningImage src="https://cu-product-media.s3.amazonaws.com/media/icons/info_white.png" />
        </WarningMessage>
        <MealPicture
          src={props.meal.imageUrl}
          onClick={() => {
            handleClickItem(props.meal)
          }}
        />
      </WrapperTop>

      <WrapperFooter>
        <WrapperAction>
          <StarWrapper>
            <StarImg src={images.star} alt="★" />
            <RatingText>{formatMealRating(props.meal.stars)}</RatingText>
          </StarWrapper>
          <PriceActionsWrapper>
            <ExtraPrice>+ {props.meal.premium_fee}</ExtraPrice>
            {showActions && (
              <MealCartActionsWrapper>
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
              <Button onClick={() => handleShowActions()}>
                <ImagenCTA src="https://static.cookunity.com/cross/front-lib/images/btn-white-plus.png" />
              </Button>
            )}
            {!showActions && props.meal.quantity > 0 && (
              <ButtonQuantity onClick={() => handleShowActions()}>
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

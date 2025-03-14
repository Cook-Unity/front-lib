import React, {useEffect, useState} from 'react'
import images from '../../../assets/images'
import {rounded} from '../../../utils/number'
import {
  Button,
  ButtonQuantity,
  ChefImage,
  ExtraPrice,
  ImagenCTA,
  ImgMinus,
  ImgMore,
  MealCartActionAdd,
  MealCartActionQuantity,
  MealCartActionRemove,
  MealCartActionsWrapper,
  MealPicture,
  MealTitle,
  PriceActionsWrapper,
  RatingText,
  StarImg,
  StarWrapper,
  WarningImage,
  WarningMessage,
  WarningText,
  WarningTextWrapper,
  Wrapper,
  WrapperAction,
  WrapperContent,
  WrapperFooter,
  WrapperTop
} from './styled'

export const formatMealRating = stars => stars && rounded(stars, 1)
const MODULE_NAME = 'premium-row'

const MealCard = props => {
  const [showActions, setShowActions] = useState(false)
  const [showWarnings, setShowWarnings] = useState(false)

  const handleAddItem = () => {
    props.onAddTracking(props.meal, props.meal.quantity, MODULE_NAME)
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
      props.onAddTracking(props.meal, props.meal.quantity, MODULE_NAME)
    }
    setShowActions(true)
  }

  const handleClickItem = meal => {
    props.onClickTracking(meal, MODULE_NAME)
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
        <ChefImage src={props.meal.cheffImageFullPath} />
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
            <ExtraPrice>+ ${props.meal.premium_fee}</ExtraPrice>
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

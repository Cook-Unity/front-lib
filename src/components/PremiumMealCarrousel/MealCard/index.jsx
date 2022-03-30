import React from 'react'
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
  ImgMore
} from './styled'

export const formatMealRating = stars => stars && Numeral(stars).format('0.0')

const MealCard = meal => {
  return (
    <Wrapper>
      <WrapperTop>
        <ChefImage src={meal.cheffImageFullPath} />
        <WarningMessage text={meal.warning}>
          <WarningImage src="https://cu-product-media.s3.amazonaws.com/media/icons/info_white.png" />
        </WarningMessage>
        {/* <MealPicture src={meal.bannerpic} /> */}
        {
          <MealPicture src="https://cu-product-media.s3.amazonaws.com/media/catalog/product/b/a/Bay+Scallops-Fennel-Citrus1219+1.jpeg" />
        }
      </WrapperTop>

      <WrapperFooter>
        <WrapperAction>
          <StarWrapper>
            <StarImg src={images.star} alt="★" />
            <RatingText>{formatMealRating(meal.stars)}</RatingText>
          </StarWrapper>
          <ExtraPrice>+ {meal.premium_fee}</ExtraPrice>

          <MealCartActionsWrapper>
            <MealCartActionRemove>
              <ImgMinus src={images.btnBlackMinus} />
            </MealCartActionRemove>
            <MealCartActionQuantity>1</MealCartActionQuantity>
            <MealCartActionAdd>
              <ImgMore src={images.btnBlackPlus} />
            </MealCartActionAdd>
          </MealCartActionsWrapper>
          {/*<Button>
            <ImagenCTA src="https://static.cookunity.com/cross/front-lib/images/btn-white-plus.png" />
      </Button */}
        </WrapperAction>
        <WrapperContent>
          <MealTitle>
            {meal.name} {meal.short_description}
          </MealTitle>
        </WrapperContent>
      </WrapperFooter>
    </Wrapper>
  )
}

export default MealCard

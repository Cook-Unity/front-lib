import React from 'react'
import images from '../../../assets/images'

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
  RatingText
} from './styled'

const MealCard = meal => {
  return (
    <Wrapper>
      <WrapperTop>
        <ChefImage src={meal.logopic} />
        <WarningMessage text={meal.warning}>
          <WarningImage src="https://cu-product-media.s3.amazonaws.com/media/icons/info_white.png" />
        </WarningMessage>
        <MealPicture src={meal.bannerpic} />
      </WrapperTop>

      <WrapperFooter>
        <WrapperAction>
          <StarWrapper>
            <StarImg src={images.star} alt="★" />
            <RatingText>{meal.rating}</RatingText>
          </StarWrapper>
          <ExtraPrice>+ {meal.premium_fee}</ExtraPrice>
          <Button>
            <ImagenCTA src="https://static.cookunity.com/cross/front-lib/images/btn-white-plus.png" />
          </Button>
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

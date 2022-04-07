import React from 'react'

import {Wrapper, WrapperContent, Title, SeeAll} from './styled'
import Slider from './Slider'

const PremiumMealCarrouselMobile = props => {
  const MODULE_NAME = 'premium-row'

  const handleOnSeeAll = () => {
    props.onSeeAllTracking(1, MODULE_NAME)
    props.onSeeAllClick()
  }

  return (
    <Wrapper>
      <WrapperContent>
        <Title>Lot of special ingredients you will love</Title>
        <SeeAll onClick={() => handleOnSeeAll()}>See them all </SeeAll>
      </WrapperContent>
      <Slider
        meals={props.meals}
        onAddItem={props.onAddItem}
        onRemoveItem={props.onRemoveItem}
        onMealClick={props.onMealClick}
        onClickTracking={props.onClickTracking}
        onShowTracking={props.onShowTracking}
        onAddTracking={props.onAddTracking}
        onSwipeTracking={props.onSwipeTracking}
        onSeeAllTracking={props.onSeeAllTracking}
      />
    </Wrapper>
  )
}

export default PremiumMealCarrouselMobile

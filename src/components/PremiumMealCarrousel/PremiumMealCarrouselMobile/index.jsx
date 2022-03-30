import React from 'react'

import {Wrapper, WrapperContent, Title, SeeAll} from './styled'
import Slider from './Slider'

const PremiumMealCarrouselMobile = props => {
  return (
    <Wrapper>
      <WrapperContent>
        <Title>Lot of special ingredients you will love</Title>
        <SeeAll>See them all </SeeAll>
      </WrapperContent>
      <Slider meals={props.meals} />
    </Wrapper>
  )
}

export default PremiumMealCarrouselMobile

import React from 'react'

import {Wrapper} from './styled'
import PremiumMealCarrouselMobile from './PremiumMealCarrouselMobile'
import PremiumMealCarrouselDesktop from './PremiumMealCarrouselDesktop'

const PremiumMealCarrousel = props => {
  return (
    <Wrapper>
      {props.isMobile ? (
        <PremiumMealCarrouselMobile meals={props.meals} />
      ) : (
        <PremiumMealCarrouselDesktop meals={props.meals} />
      )}
    </Wrapper>
  )
}

export default PremiumMealCarrousel

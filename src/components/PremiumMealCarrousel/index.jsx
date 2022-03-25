import React from 'react'

import {Wrapper} from './styled'
import PremiumMealCarrouselMobile from './PremiumMealCarrouselMobile'
import PremiumMealCarrouselDesktop from './PremiumMealCarrouselDesktop'

const PremiumMealCarrousel = () => {
  const isMobileDevice = () => {
    return false
  }

  return (
    <Wrapper>
      {isMobileDevice() ? (
        <PremiumMealCarrouselMobile />
      ) : (
        <PremiumMealCarrouselDesktop />
      )}
    </Wrapper>
  )
}

export default PremiumMealCarrousel

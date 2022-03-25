import React from 'react'

import {
  Wrapper,
  WrapperContent,
  WrapperNavigation,
  ArrowRight,
  ArrowLeft,
  Title,
  SeeAll
} from './styled'
import Slider from './Slider'

const PremiumMealCarrouselDesktop = () => {
  const imageBaseUrl = 'https://cu-product-media.s3.amazonaws.com/media'

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <Wrapper>
      <WrapperContent>
        <Title>Lot of special ingredients you will love</Title>
        <WrapperNavigation>
          <ArrowLeft
            ref={navigationPrevRef}
            src={imageBaseUrl + '/icons/arrow-circle-left.png'}
          />
          <ArrowRight
            ref={navigationNextRef}
            src={imageBaseUrl + '/icons/arrow-circle-right.png'}
          />
        </WrapperNavigation>
        <SeeAll>See them all </SeeAll>
      </WrapperContent>
      <Slider
        pre={navigationPrevRef}
        next={navigationNextRef}
      />
    </Wrapper>
  )
}

export default PremiumMealCarrouselDesktop

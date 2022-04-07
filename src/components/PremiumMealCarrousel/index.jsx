import React from 'react'

import {Wrapper} from './styled'
import PremiumMealCarrouselMobile from './PremiumMealCarrouselMobile'
import PremiumMealCarrouselDesktop from './PremiumMealCarrouselDesktop'

const PremiumMealCarrousel = props => {
  return (
    <Wrapper>
      {props.isMobile ? (
        <PremiumMealCarrouselMobile
          meals={props.meals}
          onAddItem={props.onAddItem}
          onRemoveItem={props.onRemoveItem}
          onMealClick={props.onMealClick}
          onSeeAllClick={props.onSeeAllClick}
          onShowTracking={props.onShowTracking}
          onClickTracking={props.onClickTracking}
          onAddTracking={props.onAddTracking}
          onSwipeTracking={props.onSwipeTracking}
          onSeeAllTracking={props.onSeeAllTracking}
        />
      ) : (
        <PremiumMealCarrouselDesktop
          meals={props.meals}
          onAddItem={props.onAddItem}
          onRemoveItem={props.onRemoveItem}
          onMealClick={props.onMealClick}
          onSeeAllClick={props.onSeeAllClick}
          onShowTracking={props.onShowTracking}
          onClickTracking={props.onClickTracking}
          onAddTracking={props.onAddTracking}
          onClickArrowTracking={props.onClickArrowTracking}
          onSeeAllTracking={props.onSeeAllTracking}
        />
      )}
    </Wrapper>
  )
}

export default PremiumMealCarrousel

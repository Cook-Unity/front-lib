import React from 'react'

import {Wrapper} from './styled'
import MealCarrouselMobile from './MealCarrouselMobile'
import MealCarrouselDesktop from './MealCarrouselDesktop'

const MealCarrousel = props => {
  return (
    <Wrapper>
      {props.isMobile ? (
        <MealCarrouselMobile
          meals={props.meals}
          collections={props.collections}
          onAddItem={props.onAddItem}
          onRemoveItem={props.onRemoveItem}
          onMealClick={props.onMealClick}
          onSeeAllClick={props.onSeeAllClick}
          onShowTracking={props.onShowTracking}
          onClickTracking={props.onClickTracking}
          onAddTracking={props.onAddTracking}
          onSwipeTracking={props.onSwipeTracking}
          onSeeAllTracking={props.onSeeAllTracking}
          collectionName={props.collectionName}
          collectionId={props.collectionId}
          title={props.title}
          type={props.type}
          theme={props.type === 'premium' ? 'dark' : 'light'}
          moduleName={props.moduleName}
          moduleId={props.moduleId}
        />
      ) : (
        <MealCarrouselDesktop
          meals={props.meals}
          collections={props.collections}
          onAddItem={props.onAddItem}
          onRemoveItem={props.onRemoveItem}
          onMealClick={props.onMealClick}
          onSeeAllClick={props.onSeeAllClick}
          onShowTracking={props.onShowTracking}
          onClickTracking={props.onClickTracking}
          onAddTracking={props.onAddTracking}
          onClickArrowTracking={props.onClickArrowTracking}
          onSeeAllTracking={props.onSeeAllTracking}
          collectionName={props.collectionName}
          collectionId={props.collectionId}
          title={props.title}
          type={props.type}
          theme={props.type === 'premium' ? 'dark' : 'light'}
          moduleName={props.moduleName}
          moduleId={props.moduleId}
        />
      )}
    </Wrapper>
  )
}

export default MealCarrousel

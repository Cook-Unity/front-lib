import React from 'react'

import {Wrapper, WrapperContent, Title, SeeAll, Subtitle} from './styled'
import Slider from './Slider'

const MealCarrouselMobile = props => {

  const validateSeeAllLink = () => {
    if (!props.collections || props.collections.length === 0) return false
    return (
      props.collections.findIndex(
        collection => collection.id === props.collectionId
      ) !== -1
    )
  }

  const handleSeeAllClick = () => {
    props.onSeeAllTracking(props.moduleId, props.moduleName)
    props.onSeeAllClick(props.collectionId)
  }

  return (
    <Wrapper type={props.type} theme={props.theme}>
      <WrapperContent>
        {props.collectionName && validateSeeAllLink() && (
          <Subtitle onClick={() => handleSeeAllClick()}>
            {props.collectionName}
          </Subtitle>
        )}
        <Title>{props.title}</Title>
        {validateSeeAllLink() && (
          <SeeAll onClick={() => handleSeeAllClick()}>See them all </SeeAll>
        )}
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
        type={props.type}
        moduleName={props.moduleName}
        moduleId={props.moduleId}
      />
    </Wrapper>
  )
}

export default MealCarrouselMobile

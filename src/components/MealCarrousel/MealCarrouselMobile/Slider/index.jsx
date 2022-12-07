import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import {Wrapper} from './styled'
import MealCard from '../../MealCard'

const Slider = props => {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={18}
        slidesPerView="auto"
        slidesPerColumn={1}
        centeredSlides
        centeredSlidesBounds
        onSlideChange={() =>
          props.onSwipeTracking && props.onSwipeTracking(props.moduleId, props.moduleName)
        }
        onSwiper={() => {
          props.onShowTracking && props.onShowTracking(props.moduleId, props.moduleName)
        }}
      >
        {props.meals.map(meal => (
          <SwiperSlide key={meal.entity_id}>
            <MealCard
              meal={meal}
              onAddItem={props.onAddItem}
              onRemoveItem={props.onRemoveItem}
              onMealClick={props.onMealClick}
              onClickTracking={props.onClickTracking}
              onAddTracking={props.onAddTracking}
              type={props.type}
              moduleName={props.moduleName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}

Slider.defaultProps = {
  meals: []
}

export default Slider

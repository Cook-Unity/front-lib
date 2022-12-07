import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import {Wrapper} from './styled'
import MealCard from '../../MealCard'

const Slider = props => {
  const MODULE_NAME = 'premium-row'
  return (
    <Wrapper>
      <Swiper
        spaceBetween={18}
        slidesPerView="auto"
        slidesPerColumn={1}
        centeredSlides
        centeredSlidesBounds
        onSlideChange={() => props.onSwipeTracking(1, MODULE_NAME)}
        onSwiper={() => {
          props.onShowTracking(1, 'premium-line')
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

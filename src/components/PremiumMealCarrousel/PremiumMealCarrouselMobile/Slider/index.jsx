import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {Wrapper} from './styled'
import MealCard from '../../MealCard'

const Slider = props => {
  console.log(props)
  return (
    <Wrapper>
      <Swiper
        spaceBetween={18}
        slidesPerView="auto"
        slidesPerColumn={1}
        centeredSlides
        centeredSlidesBounds
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {props.meals &&
          props.meals.length > 0 &&
          props.meals.map(meal => (
            <SwiperSlide key={meal.entity_id}>
              <MealCard {...meal} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  )
}

export default Slider

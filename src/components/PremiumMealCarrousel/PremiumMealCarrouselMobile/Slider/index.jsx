import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {Wrapper} from './styled'
import MealCard from '../../MealCard'

import {meals} from '../../__mock__'

const Slider = () => {
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
        {meals.map(meal => (
          <SwiperSlide key={meal.entity_id}>
            <MealCard {...meal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}

export default Slider

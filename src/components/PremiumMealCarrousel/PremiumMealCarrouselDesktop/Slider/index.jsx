import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './slider.css'

import {Wrapper, Gradient} from './styled'
import MealCard from '../../MealCard'

import {meals} from '../../__mock__'

const Slider = props => {
  console.log(props.next)
  const [showEndGradient, setShowEndGradient] = useState(false)

  const checkGradientStatus = swiper => {
    if (swiper.isEnd) {
      setShowEndGradient(false)
    } else {
      setShowEndGradient(true)
    }
  }

  return (
    <Wrapper>
      <Swiper
        spaceBetween={17}
        slidesPerView="auto"
        centeredSlides
        centeredSlidesBounds
        navigation={{
          nextEl: props.next.current,
          prevEl: props.pre.current
        }}
        slidesPerColumn={1}
        onSlideChange={swiper => checkGradientStatus(swiper)}
        onSwiper={swiper => {
          setTimeout(() => {
            if (swiper.navigation) {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = props.next.current
              swiper.params.navigation.nextEl = props.pre.current

              console.log(swiper.navigation)
              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            }
          })

          setShowEndGradient(true)
        }}
      >
        {meals.map(meal => (
          <SwiperSlide key={meal.entity_id}>
            <MealCard {...meal} />
          </SwiperSlide>
        ))}
        {showEndGradient && <Gradient />}
      </Swiper>
    </Wrapper>
  )
}

export default Slider

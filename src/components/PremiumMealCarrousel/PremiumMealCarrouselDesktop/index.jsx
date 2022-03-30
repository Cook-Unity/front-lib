import React, {useState} from 'react'
import './slider.css'
import {
  Wrapper,
  WrapperContent,
  WrapperNavigation,
  ArrowRight,
  ArrowLeft,
  Title,
  SeeAll,
  WrapperSlide,
  GradientEnd,
  GradientStart
} from './styled'

import MealCard from '../MealCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const PremiumMealCarrouselDesktop = props => {
  const [showEndGradient, setShowEndGradient] = useState(false)
  const [showStartGradient, setShowStartGradient] = useState(false)
  const imageBaseUrl = 'https://cu-product-media.s3.amazonaws.com/media'

  const checkGradientStatus = swiper => {
    if (swiper.isEnd) {
      setShowEndGradient(false)
    } else {
      setShowEndGradient(true)
    }

    if (swiper.isBeginning) {
      setShowStartGradient(false)
    } else {
      setShowStartGradient(true)
    }
  }

  const swiperRef = React.useRef(null)

  return (
    <Wrapper>
      <WrapperContent>
        <Title>Lot of special ingredients you will love</Title>
        <WrapperNavigation>
          <ArrowLeft
            src={imageBaseUrl + '/icons/arrow-circle-left.png'}
            onClick={() => swiperRef.current.swiper.slidePrev()}
          />
          <ArrowRight
            src={imageBaseUrl + '/icons/arrow-circle-right.png'}
            onClick={() => swiperRef.current.swiper.slideNext()}
          />
        </WrapperNavigation>
        <SeeAll>See them all </SeeAll>
      </WrapperContent>
      <WrapperSlide>
        <Swiper
          ref={swiperRef}
          spaceBetween={17}
          slidesPerView="auto"
          centeredSlides
          centeredSlidesBounds
          slidesPerColumn={1}
          onSlideChange={swiper => checkGradientStatus(swiper)}
          onSwiper={swiper => {
            setShowEndGradient(true)
            setShowStartGradient(false)
          }}
        >
          {showStartGradient && <GradientStart />}
          {props.meals &&
            props.meals.length > 0 &&
            props.meals.map(meal => (
              <SwiperSlide key={meal.entity_id}>
                <MealCard {...meal} />
              </SwiperSlide>
            ))}
          {showEndGradient && <GradientEnd />}
        </Swiper>
      </WrapperSlide>
    </Wrapper>
  )
}

export default PremiumMealCarrouselDesktop

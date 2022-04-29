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
  const MODULE_NAME = 'premium-row'
  const [showEndGradient, setShowEndGradient] = useState(true)
  const [showStartGradient, setShowStartGradient] = useState(false)
  const PREMIUM_LINE_COLLECTION_ID = 17
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

  const handleSeeAllClick = () => {
    props.onSeeAllTracking(1, MODULE_NAME)
    props.onSeeAllClick()
  }

  const swiperRef = React.useRef(null)

  const validateSeeAllLink = () => {
    if (!props.collections || props.collections.length === 0) return false
    return (
      props.collections.findIndex(
        collection => collection.id === PREMIUM_LINE_COLLECTION_ID
      ) !== -1
    )
  }

  return (
    <Wrapper>
      <WrapperContent>
        <Title>Dine fine with Chef Specials</Title>
        <WrapperNavigation>
          <ArrowLeft
            className={!showStartGradient ? 'disabled' : ''}
            src={imageBaseUrl + '/icons/arrow-circle-left.png'}
            onClick={() => swiperRef.current.swiper.slidePrev()}
          />
          <ArrowRight
            className={!showEndGradient ? 'disabled' : ''}
            src={imageBaseUrl + '/icons/arrow-circle-right.png'}
            onClick={() => swiperRef.current.swiper.slideNext()}
          />
        </WrapperNavigation>
        {validateSeeAllLink() && (
          <SeeAll onClick={() => handleSeeAllClick()}>See them all </SeeAll>
        )}
      </WrapperContent>
      <WrapperSlide>
        <Swiper
          ref={swiperRef}
          spaceBetween={17}
          slidesPerView="auto"
          centeredSlides
          centeredSlidesBounds
          slidesPerColumn={1}
          onSlideChange={swiper => {
            checkGradientStatus(swiper)
            if (swiper.activeIndex !== 1)
              props.onClickArrowTracking(1, MODULE_NAME)
          }}
          onSwiper={() => {
            props.onShowTracking(1, MODULE_NAME)
          }}
        >
          {showStartGradient && <GradientStart />}
          {props.meals &&
            props.meals.length > 0 &&
            props.meals.map(meal => (
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
          {showEndGradient && <GradientEnd />}
        </Swiper>
      </WrapperSlide>
    </Wrapper>
  )
}

export default PremiumMealCarrouselDesktop

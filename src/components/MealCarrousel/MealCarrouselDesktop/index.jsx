import React, {useState} from 'react'
import './slider.css'
import {
  Wrapper,
  WrapperContent,
  WrapperNavigation,
  ArrowRight,
  ArrowLeft,
  Title,
  Subtitle,
  SeeAll,
  WrapperSlide,
  GradientEnd,
  GradientStart
} from './styled'

import images from '../../../assets/images'

import MealCard from '../MealCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const MealCarrouselDesktop = props => {
  const [showEndGradient, setShowEndGradient] = useState(true)
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

  const handleSeeAllClick = () => {
    props.onSeeAllTracking(props.moduleId, props.moduleName)
    props.onSeeAllClick(props.collectionId)
  }

  const swiperRef = React.useRef(null)

  const validateSeeAllLink = () => {
    if (!props.collections || props.collections.length === 0) return false
    return (
      props.collections.findIndex(
        collection => collection.id === props.collectionId
      ) !== -1
    )
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
        <WrapperNavigation>
          <ArrowLeft
            className={!showStartGradient ? 'disabled' : ''}
            src={
              props.theme === 'dark'
                ? imageBaseUrl + '/icons/arrow-circle-left.png'
                : images.arrowLeftBlack
            }
            onClick={() => {
              swiperRef.current.swiper.slidePrev()
              showStartGradient &&
                props.onClickArrowTracking(props.moduleId, props.moduleName)
            }}
          />
          <ArrowRight
            className={!showEndGradient ? 'disabled' : ''}
            src={
              props.theme === 'dark'
                ? imageBaseUrl + '/icons/arrow-circle-right.png'
                : images.arrowRightBlack
            }
            onClick={() => {
              swiperRef.current.swiper.slideNext()
              showEndGradient &&
                props.onClickArrowTracking(props.moduleId, props.moduleName)
            }}
          />
        </WrapperNavigation>
        {validateSeeAllLink() && (
          <SeeAll onClick={() => handleSeeAllClick()}>See them all </SeeAll>
        )}
      </WrapperContent>
      <WrapperSlide>
        <Swiper
          ref={swiperRef}
          spaceBetween={24}
          slidesPerView="auto"
          centeredSlidesBounds
          slidesPerColumn={1}
          onSlideChange={swiper => {
            checkGradientStatus(swiper)
          }}
          onSwiper={() => {
            props.onShowTracking &&
              props.onShowTracking(props.moduleId, props.moduleName)
          }}
        >
          {showStartGradient && <GradientStart theme={props.theme} />}
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
                  type={props.type}
                  moduleName={props.moduleName}
                />
              </SwiperSlide>
            ))}
          {showEndGradient && <GradientEnd theme={props.theme} />}
        </Swiper>
      </WrapperSlide>
    </Wrapper>
  )
}

export default MealCarrouselDesktop

import React, {useState} from 'react'
import classnames from 'classnames'
import CuiMealCarrouselCard from './CuiMealCarrouselCard/CuiMealCarrouselCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import './CuiMealCarrousel.scss'

const CuiMealCarrousel = ({
  moduleId,
  moduleName,
  collectionId,
  collections,
  collectionName,
  type,
  titleStart,
  titleEnd,
  meals,
  className,
  onSeeAllTracking,
  onSeeAllClick,
  onClickArrowTracking,
  onShowTracking,
  onAddItem,
  onRemoveItem,
  onMealClick,
  onClickTracking,
  onAddTracking,
  ...props
}) => {
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
    onSeeAllTracking(moduleId, moduleName)
    onSeeAllClick(collectionId)
  }

  const swiperRef = React.useRef(null)

  const validateSeeAllLink = () => {
    if (!collections || collections.length === 0) return false
    return (
      collections.findIndex(collection => collection.id === collectionId) !== -1
    )
  }

  return (
    <div
      className={classnames('cui-meal-carrousel', `cui-meal-carrousel-${type}`)}
    >
      <div className="cui-meal-carrousel__content">
        {collectionName && validateSeeAllLink() && (
          <div
            className="cui-meal-carrousel__collection-name"
            onClick={() => handleSeeAllClick()}
          >
            {collectionName}
          </div>
        )}
        <div className="cui-meal-carrousel__title">
          <span>{titleStart}</span>
          <br />
          <span className="cui-meal-carrousel__title-end"> {titleEnd}</span>
        </div>
        <div className="cui-meal-carrousel__navigation">
          <img
            className={classnames('arrow', 'arrow-left', {
              disabled: !showStartGradient
            })}
            alt="arrow left"
            src={imageBaseUrl + '/icons/arrow-circle-left.png'}
            onClick={() => {
              swiperRef.current.swiper.slidePrev()
              showStartGradient && onClickArrowTracking(moduleId, moduleName)
            }}
          />
          <img
            className={classnames('arrow', 'arrow-left', {
              disabled: !showEndGradient
            })}
            alt="arrow right"
            src={imageBaseUrl + '/icons/arrow-circle-right.png'}
            onClick={() => {
              swiperRef.current.swiper.slideNext()
              showEndGradient && onClickArrowTracking(moduleId, moduleName)
            }}
          />
        </div>
        {validateSeeAllLink() && (
          <div
            className="cui-meal-carrousel__link"
            onClick={() => handleSeeAllClick()}
          >
            See them all
          </div>
        )}
      </div>
      <div className="cui-meal-carrousel__slide">
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
            onShowTracking && onShowTracking(moduleId, moduleName)
          }}
        >
          {showStartGradient && (
            <div
              className={classnames(
                'cui-meal-carrousel__gradient',
                'cui-meal-carrousel__gradient-start'
              )}
            />
          )}
          {meals &&
            meals.length > 0 &&
            meals.map(meal => (
              <SwiperSlide key={meal.entity_id}>
                <CuiMealCarrouselCard
                  meal={meal}
                  onAddItem={onAddItem}
                  onRemoveItem={onRemoveItem}
                  onMealClick={onMealClick}
                  onClickTracking={onClickTracking}
                  onAddTracking={onAddTracking}
                  type={type}
                  moduleName={moduleName}
                />
              </SwiperSlide>
            ))}
          {showEndGradient && (
            <div
              className={classnames(
                'cui-meal-carrousel__gradient',
                'cui-meal-carrousel__gradient-end',
                `cui-meal-carrousel__gradient-${type}`
              )}
            />
          )}
        </Swiper>
      </div>
    </div>
  )
}

export default CuiMealCarrousel

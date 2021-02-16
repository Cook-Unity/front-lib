import React from 'react'
import Numeral from 'numeral'
import classnames from 'classnames'

import styles from './MealCard.module.scss'

export const formatFee = (premium_fee, fixed_price) =>
  `${!fixed_price ? '+' : ''} ${Numeral(premium_fee).format('$0,0.00')}`

export const formatChefName = (firstName, lastName) =>
  `${firstName} ${lastName}`

export const formatMealRating = stars => stars && Numeral(stars).format('0.0')

export const formatMealReviews = reviews =>
  reviews && (reviews > 999 ? '999+' : `${reviews}`)

export const formatFeature = feature => {
  if (feature && feature.description)
    feature.description = feature.description.toUpperCase()
  return feature || {}
}

export const findSpecificationDetail = (details, tag) =>
  details.find(
    d =>
      d &&
      typeof d.label === 'string' &&
      d.label.toLowerCase() === tag.toLowerCase()
  )

export const getLoadingContainer = () => (
  <div
    className={classnames(styles.meal_card, styles.loading)}
    data-testid="loading-container"
  >
    <div className={classnames(styles.meal_image_container, styles.loading)}>
      <div className={classnames(styles.meal_image, styles.loading)} />
    </div>
    <div className={styles.bottom_info}>
      <div className={styles.meal_name}>
        <div className={classnames(styles.title, styles.loading)} />
        <div className={classnames(styles.subtitle, styles.loading)} />
      </div>
    </div>
  </div>
)

import React from 'react'
import classnames from 'classnames'
import {currency, rounded} from '../../utils/number'
import styles from './MealCard.module.scss'

export const formatFee = (premium_fee, fixed_price) =>
  `${!fixed_price ? '+' : ''} ${currency(premium_fee)}`

export const formatChefName = (firstName, lastName) =>
  `${firstName} ${lastName}`

export const formatMealRating = stars => stars && rounded(stars, 1)

export const formatMealReviews = reviews =>
  reviews && (reviews > 999 ? '999+' : `${reviews}`)

export const formatFeature = (feature = null) => {
  if (feature && feature.description)
    feature.description = feature.description.toUpperCase()
  return feature || {}
}

export const findSpecificationDetail = (details, tag) =>
  Array.isArray(details) &&
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

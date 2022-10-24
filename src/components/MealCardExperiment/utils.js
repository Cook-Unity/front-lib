import React from 'react'
import Numeral from 'numeral'
import classnames from 'classnames'

import styles from './MealCardExperiment.module.scss'

export const formatChefName = (firstName, lastName) =>
  `${firstName} ${lastName}`

export const formatMealRating = stars => stars && Numeral(stars).format('0.0')

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

export const formatPrice = price => `${Numeral(price).format('$0,0.00')}`

export const getAddButtonText = (meal, planIsCompleted, isExtra) => {
  if (isExtra) {
    return `Add extra for ${formatPrice(meal.price)}`
  }
  if (planIsCompleted) {
    return `Add meal for ${formatPrice(meal.price + (meal.premium_fee || 0))}`
  }
  if (meal.premium_fee > 0) {
    return `Add meal for ${formatPrice(meal.premium_fee)}`
  }
  return 'Add meal'
}

export const getAddButtonTooltip = (meal, planIsCompleted, isExtra) => {
  if (isExtra) {
    return `This product is not part of your plan.`
  }
  if (planIsCompleted) {
    return `You completed your plan, you can keep adding more dishes.`
  }
  if (meal.premium_fee > 0) {
    return `This product is part of your plan but has an additional cost due to its special ingredients, craft or serving sizes.`
  }
  return 'This meal is part of your plan.'
}

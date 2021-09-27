import React from 'react'
import {string, func, bool } from 'prop-types'

import { getFirstAndSecondPhraseTitle } from './utils'
import styles from './CollectionMealsCard.module.scss'

const CollectionMealsCard = ({
  image,
  title,
  size,
  handleOnClick,
  backgroundColor,
  updatedWeekly
}) => {
  const { firstPhrase, secondPhrase } = title && getFirstAndSecondPhraseTitle(title) 
  return (
    <div
      className={`${styles.container_collection_card} ${styles[`container_${size}`]}`}
      data-testid="collection-meals-card"
      onClick={handleOnClick}
    >
      <img className={styles.image_collection} data-testid="image-meal-card" src={image} alt="icon" />
      {updatedWeekly && <span className={styles.tag_collection}>UPDATED WEEKLY</span>}
      <div className={styles.container_title} style={{ backgroundColor: backgroundColor }}>
        <h1 className={styles.title}>{firstPhrase}</h1>
        <h1 className={styles.title}>{secondPhrase}</h1>
      </div>
    </div>
  )
}

CollectionMealsCard.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  size: string,
  handleOnClick: func,
  backgroundColor: string,
  updatedWeekly: bool
}

CollectionMealsCard.defaultProps = {
  size: 'large',
  handleOnClick: null,
  backgroundColor: '#FFF'
}

export default CollectionMealsCard

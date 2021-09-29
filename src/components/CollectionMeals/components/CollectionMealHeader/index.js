import React from 'react'
import {string, func, bool} from 'prop-types'

import {getFirstAndSecondPhraseTitle} from '../../utils'
import styles from '../../CollectionMeals.module.scss'

const CollectionMealHeader = ({
  image,
  title,
  handleOnClick,
  backgroundColor,
  updatedWeekly,
  description,
  countMeals,
  author,
  imgAuthor
}) => {
  const {firstPhrase, secondPhrase} =
    title && getFirstAndSecondPhraseTitle(title)
  return (
    <div className={styles.container_collection_header}>
      <img
        className={styles.image_header}
        data-testid="image-meal-header"
        src={image}
        alt="icon"
      />
      {updatedWeekly && (
        <span className={styles.tag_collection}>UPDATED WEEKLY</span>
      )}
      <div className={styles.container_title_header}>
        <div className={styles.container_title}>
          <h1 className={styles.title}>{firstPhrase}</h1>
          <h1 className={styles.title}>{secondPhrase}</h1>
          <span className={styles.description_header}>{description}</span>
        </div>
        <div className={styles.container_author}>
          <h1>CURATED BY</h1>
          <img src={imgAuthor} />
          <hr className={styles.separator} />
          <span>{countMeals} Meals</span>
        </div>
      </div>
    </div>
  )
}

CollectionMealHeader.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  handleOnClick: func,
  backgroundColor: string,
  updatedWeekly: bool
}

CollectionMealHeader.defaultProps = {
  handleOnClick: null,
  backgroundColor: '#FFF'
}

export default CollectionMealHeader

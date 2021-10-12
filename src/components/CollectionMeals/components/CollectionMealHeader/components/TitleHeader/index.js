import React from 'react'
import {number, string} from 'prop-types'

import images from '../../../../../../assets/images'
import {getFirstAndSecondPhraseTitle} from '../../../../utils'
import styles from '../../CollectionMealHeader.module.scss'

const TitleHeader = ({
  title,
  description,
  countMeals,
  backgroundColor,
  imgAuthor
}) => {
  const {firstPhrase, secondPhrase} =
    title && getFirstAndSecondPhraseTitle(title)
  return (
    <div
      className={styles.container_title_header}
      style={{backgroundColor: backgroundColor}}
    >
      <div className={styles.container_count_meals}>
        <span className={styles.count_meals}>{countMeals} meals</span>
      </div>
      <div className={styles.container_title}>
        <div className={styles.title_desktop}>
          <h1 className={styles.title}>{firstPhrase}</h1>
          <span className={styles.title}>{secondPhrase}</span>
        </div>
        <div className={styles.title_mobile}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <span className={styles.description_header}>{description}</span>
      </div>
      <div className={styles.container_author_desktop}>
        <span className={styles.title_curated}>CURATED BY</span>
        <img src={imgAuthor || images.iconLogoCu} />
        <hr className={styles.separator} />
        <span>{countMeals} Meals</span>
      </div>
    </div>
  )
}

TitleHeader.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  countMeals: number.isRequired,
  backgroundColor: string.isRequired,
  imgAuthor: string
}

TitleHeader.defaultProps = {
  backgroundColor: '#D9EDFE'
}

export default TitleHeader

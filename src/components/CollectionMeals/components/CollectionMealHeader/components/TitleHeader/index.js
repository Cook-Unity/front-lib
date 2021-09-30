import React from 'react'
import {string} from 'prop-types'

import images from '../../../../../../assets/images'
import {getFirstAndSecondPhraseTitle} from '../../../../utils'
import styles from '../../CollectionMealHeader.module.scss'

const TitleHeader = ({title, description, countMeals, imgAuthor}) => {
  const {firstPhrase, secondPhrase} =
    title && getFirstAndSecondPhraseTitle(title)
  return (
    <div className={styles.container_title_header}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>{firstPhrase}</h1>
        <h1 className={styles.title}>{secondPhrase}</h1>
        <span className={styles.description_header}>{description}</span>
      </div>
      <div className={styles.container_author}>
        <h1 className={styles.title_curated}>CURATED BY</h1>
        <img src={imgAuthor || images.iconLogoCu} />
        <hr className={styles.separator} />
        <span>{countMeals} Meals</span>
      </div>
    </div>
  )
}

TitleHeader.propTypes = {
  title: string.isRequired,
  description: string,
  countMeals: string,
  imgAuthor: string
}

export default TitleHeader

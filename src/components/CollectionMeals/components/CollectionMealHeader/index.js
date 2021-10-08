import React from 'react'
import {string, bool, number} from 'prop-types'
import classnames from 'classnames'

import TitleHeader from './components/TitleHeader'

import styles from './CollectionMealHeader.module.scss'
import stylesCommon from '../../CollectionMeals.module.scss'

const CollectionMealHeader = ({
  title,
  description,
  image,
  countMeals,
  backgroundColor,
  updatedWeekly,
  imgAuthor,
  className
}) => {
  return (
    <div
      className={classnames(styles.container_collection_header, className)}
      style={{backgroundColor: backgroundColor}}
    >
      <img
        className={styles.image_header}
        data-testid="image-meal-header"
        src={image}
        alt="icon"
      />
      {updatedWeekly && (
        <span
          className={classnames(
            stylesCommon.tag_collection,
            styles.tag_collection
          )}
        >
          UPDATED WEEKLY
        </span>
      )}
      <TitleHeader
        title={title}
        description={description}
        countMeals={countMeals}
        imgAuthor={imgAuthor}
      />
    </div>
  )
}

CollectionMealHeader.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  countMeals: number.isRequired,
  imgAuthor: string,
  backgroundColor: string,
  updatedWeekly: bool,
  className: string
}

CollectionMealHeader.defaultProps = {
  backgroundColor: '#D9EDFE',
  updatedWeekly: false
}

export default CollectionMealHeader

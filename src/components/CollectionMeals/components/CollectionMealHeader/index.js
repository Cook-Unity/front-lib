import React from 'react'
import {string, bool} from 'prop-types'
import classnames from 'classnames'

import TitleHeader from './components/TitleHeader'

import styles from './CollectionMealHeader.module.scss'
import stylesCommon from '../../CollectionMeals.module.scss'

const CollectionMealHeader = ({
  image,
  title,
  backgroundColor,
  updatedWeekly,
  description,
  countMeals,
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
  image: string.isRequired,
  imgAuthor: string,
  title: string.isRequired,
  backgroundColor: string,
  updatedWeekly: bool,
  className: string
}

CollectionMealHeader.defaultProps = {
  backgroundColor: '#D9EDFE'
}

export default CollectionMealHeader

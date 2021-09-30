import React from 'react'
import {string, func, bool, oneOf} from 'prop-types'
import classnames from 'classnames'

import {getFirstAndSecondPhraseTitle} from '../../utils'
import styles from '../../CollectionMeals.module.scss'

const CollectionMealIcon = ({
  image,
  title,
  size,
  handleOnClick,
  backgroundColor,
  updatedWeekly,
  className
}) => {
  const isSmallVersion = size === 'small'
  const {firstPhrase, secondPhrase} =
    title && getFirstAndSecondPhraseTitle(title)
  return (
    <div className={classnames(styles.container_collection_icon, className)}>
      <div
        className={styles.container_collection_icon_title}
        data-testid="collection-meals-icon"
        onClick={handleOnClick}
      >
        <img
          className={classnames(styles.image_collection, {
            [styles.image_collection_border]: isSmallVersion
          })}
          style={{borderBottomColor: backgroundColor}}
          data-testid="image-meal-icon"
          src={image}
          alt="icon"
        />
        <div className={styles.container_title}>
          <h1
            className={classnames(styles.title, {
              [styles.title_small]: isSmallVersion
            })}
          >
            {firstPhrase}
          </h1>
          <h1
            className={classnames(styles.title, {
              [styles.title_small]: isSmallVersion
            })}
          >
            {secondPhrase}
          </h1>
        </div>
        {updatedWeekly && (
          <span
            className={classnames(styles.tag_collection, {
              [styles.tag_collection_small]: isSmallVersion
            })}
          >
            UPDATED WEEKLY
          </span>
        )}
      </div>
      {!isSmallVersion && (
        <span
          className={styles.view_all}
          onClick={handleOnClick}
          data-testid="view-all"
        >
          View all
        </span>
      )}
    </div>
  )
}

CollectionMealIcon.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  size: oneOf(['small', 'large']),
  handleOnClick: func,
  backgroundColor: string,
  updatedWeekly: bool,
  className: string
}

CollectionMealIcon.defaultProps = {
  size: 'large',
  handleOnClick: null,
  backgroundColor: '#FFF'
}

export default CollectionMealIcon

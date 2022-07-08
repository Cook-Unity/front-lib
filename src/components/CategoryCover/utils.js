import React from 'react'
import classnames from 'classnames'

import styles from './CategoryCover.module.scss'

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

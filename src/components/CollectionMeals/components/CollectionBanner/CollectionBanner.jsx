import React from 'react'
import {string, func, bool} from 'prop-types'
import styles from './CollectionBanner.module.scss'

const CollectionBanner = ({title, image, isNew, onClick}) => (
  <div className={styles.collection_banner_container} onClick={onClick}>
    {image ? (
      <img className={styles.image} src={image} alt="collection_banner" />
    ) : null}
    <div className={styles.text_container}>
      {isNew ? <span className={styles.is_new}>NEW</span> : null}
      <span className={styles.title}>{title}</span>
    </div>
  </div>
)

CollectionBanner.propTypes = {
  title: string.isRequired,
  image: string,
  isNew: bool,
  onClick: func
}

CollectionBanner.defaultProps = {
  isNew: true,
  onClick: () => null
}

export default CollectionBanner

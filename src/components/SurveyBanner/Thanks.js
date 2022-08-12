import React from 'react'
import CUButton from '../../common/CUButton'
import styles from './SurveyBanner.module.scss'

const Thanks = ({showThanks, title, subtitle, handleClose}) => {
  if (!showThanks) return null

  return (
    <div className={styles.thanksContainer}>
      <h4>{title}</h4>
      <div className={styles.subtitleContainer}>
        <b className={styles.subtitle}>{subtitle}</b>
      </div>
      <div className={styles.center}>
        <CUButton onClick={handleClose} label="Close">
          Close
        </CUButton>
      </div>
    </div>
  )
}

export default Thanks

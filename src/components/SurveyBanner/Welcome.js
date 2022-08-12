import React from 'react'
import images from '../../assets/images'
import styles from './SurveyBanner.module.scss'

const Welcome = ({showWelcome, title, subtitle, setShowScore}) => {
  if (!showWelcome) return null

  return (
    <div className={styles.welcomeContainer}>
      <h4>{title}</h4>
      <div className={styles.subtitleContainer}>
        <b className={styles.subtitle} onClick={() => setShowScore(true)}>
          {subtitle} <img src={images.arrowRight} alt="arrow" />
        </b>
      </div>
    </div>
  )
}

export default Welcome

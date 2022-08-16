import React from 'react'
import images from '../../assets/images'
import styles from './SurveyBanner.module.scss'

const Welcome = ({showWelcome, isMobile, title, subtitle, setShowScore}) => {
  if (!showWelcome) return null

  return (
    <div className={styles.welcomeContainer}>
      <h4
        className={styles.title}
        onClick={() => isMobile && setShowScore(true)}
      >
        {title}
      </h4>
      <div className={styles.subtitleContainer}>
        <b className={styles.subtitle} onClick={() => setShowScore(true)}>
          {subtitle} <img src={images.arrowRight} alt="arrow" />
        </b>
      </div>
    </div>
  )
}

export default Welcome

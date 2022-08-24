import React from 'react'
import images from '../../assets/images'
import styles from './SurveyBanner.module.scss'

const Welcome = ({showWelcome, isMobile, title, subtitle, setShowScore}) => {
  if (!showWelcome) return null

  return (
    <div className={styles.welcomeContainer}>
      <h4
        className={styles.title}
        data-testid="welcome-title"
        onClick={() => isMobile && setShowScore()}
      >
        {title}
      </h4>
      <div className={styles.subtitleContainer} data-testid="welcome-subtitle">
        <b
          className={styles.subtitle}
          onClick={setShowScore}
          data-testid="show-score-link"
        >
          {subtitle} <img src={images.arrowRight} alt="arrow" />
        </b>
      </div>
    </div>
  )
}

export default Welcome
